# 🔐 Refresh Token Authentication Setup Guide

## Overview

The authentication system now uses **two-token approach**:
- **Access Token**: Short-lived (15 minutes), used for API requests
- **Refresh Token**: Long-lived (7 days), used to get new access tokens

This improves security by limiting the damage if an access token is compromised.

---

## Phase 1: Database Setup

### Step 1: Run Migration

**Option A: PostgreSQL CLI**
```bash
psql -U your_user -d blejemalire -f run_migration.sql
```

**Option B: Copy-paste in pgAdmin**
```sql
CREATE TABLE IF NOT EXISTS refresh_tokens (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_refresh_tokens_user_id ON refresh_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_token ON refresh_tokens(token);
```

**Verify:**
```sql
\d refresh_tokens
```

---

## Phase 2: Backend Ready ✅

All backend code is already updated:
- ✅ AuthService generates access + refresh tokens
- ✅ New endpoints: `/api/auth/refresh`, `/api/auth/logout`, `/api/auth/logout-all`
- ✅ Login returns both tokens
- ✅ Middleware validates access tokens

### New Endpoints

```
POST /api/auth/login
├─ Request: { email, password }
└─ Response: { accessToken, refreshToken, user }

POST /api/auth/refresh
├─ Request: { refreshToken }
└─ Response: { accessToken }

POST /api/auth/logout
├─ Request: { refreshToken }
└─ Response: {}

POST /api/auth/logout-all (protected)
├─ Request: Authorization header with access token
└─ Response: {}
```

---

## Phase 3: Frontend Implementation

### Update AuthService

```javascript
export class AuthService {
  static saveTokens(accessToken, refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }

  static getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  static getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  static isLoggedIn() {
    return !!this.getAccessToken();
  }

  static getHeaders() {
    const token = this.getAccessToken();
    return {
      "Content-Type": "application/json",
      ...(token && { "Authorization": `Bearer ${token}` })
    };
  }

  static async refreshAccessToken() {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) throw new Error("No refresh token");

    const response = await fetch("http://localhost:5000/api/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    this.saveAccessToken(data.data.accessToken);
    return data.data.accessToken;
  }

  static saveAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  static logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}
```

### Update Login Handler

```javascript
const handleLogin = async (email, password) => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    // Save BOTH tokens
    AuthService.saveTokens(
      data.data.accessToken,
      data.data.refreshToken
    );

    setUser(data.data.user);
    navigate("/products");
  } catch (error) {
    setError(error.message);
  }
};
```

### Update API Helper with Auto-Refresh

```javascript
const makeRequest = async (endpoint, options = {}) => {
  let headers = {
    ...AuthService.getHeaders(),
    ...options.headers,
  };

  try {
    let response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    // If 401 (unauthorized), try refreshing token
    if (response.status === 401 && AuthService.getRefreshToken()) {
      try {
        const newAccessToken = await AuthService.refreshAccessToken();
        headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry the request with new token
        response = await fetch(`${API_BASE_URL}${endpoint}`, {
          ...options,
          headers,
        });

        return await response.json();
      } catch (refreshError) {
        // Refresh failed, redirect to login
        AuthService.logout();
        window.location.href = "/login";
        throw new Error("Session expired");
      }
    }

    if (!response.ok) {
      throw new Error(data.message || "API request failed");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
```

### Update Logout Handler

```javascript
const handleLogout = async () => {
  try {
    const refreshToken = AuthService.getRefreshToken();
    if (refreshToken) {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken })
      });
    }
  } catch (error) {
    console.warn("Logout error:", error);
  } finally {
    AuthService.logout();
    setUser(null);
    navigate("/login");
  }
};
```

---

## Phase 4: Testing

### Test Flow

1. **Login**
   ```bash
   curl -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email": "test@example.com", "password": "password123"}'
   ```

   Response:
   ```json
   {
     "accessToken": "eyJhbGc...",
     "refreshToken": "eyJhbGc..."
   }
   ```

2. **Use Cart API** (with access token)
   ```bash
   curl -X GET http://localhost:5000/api/cart \
     -H "Authorization: Bearer <accessToken>"
   ```

3. **Refresh Access Token**
   ```bash
   curl -X POST http://localhost:5000/api/auth/refresh \
     -H "Content-Type: application/json" \
     -d '{"refreshToken": "<refreshToken>"}'
   ```

4. **Logout**
   ```bash
   curl -X POST http://localhost:5000/api/auth/logout \
     -H "Content-Type: application/json" \
     -d '{"refreshToken": "<refreshToken>"}'
   ```

---

## Key Changes Summary

| Aspect | Before | After |
|--------|--------|-------|
| Token Type | Single JWT (7 days) | Access (15 min) + Refresh (7 days) |
| Security | Long expiry risk | Short-lived access |
| Session Tracking | No | Yes (refresh_tokens table) |
| Multiple Devices | No tracking | Can logout all devices |
| Token Refresh | Manual | Automatic in API |

---

## Security Benefits

✅ **Limited Exposure**: Access token only valid for 15 minutes  
✅ **Session Control**: Server can revoke tokens via database  
✅ **Device Tracking**: See all active sessions  
✅ **Multiple Devices**: Logout from specific device or all devices  
✅ **Token Rotation**: New access tokens issued frequently  

---

## Troubleshooting

### "Invalid or expired refresh token"
- Refresh token expired (> 7 days old) or deleted
- Solution: User must login again

### "Unauthorized access" on API calls
- Access token expired or invalid
- Solution: Frontend should auto-refresh or redirect to login

### "Refresh token not found"
- Not stored in database
- Solution: Ensure migrations ran, check db logs

---

## Next Steps

After frontend implementation:
1. Test full login → use API → refresh → logout flow
2. Verify tokens stored in localStorage
3. Verify database has refresh_tokens table
4. Ready for MongoDB integration!

