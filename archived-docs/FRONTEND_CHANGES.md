🔐 FRONTEND CHANGES REQUIRED - Refresh Token Authentication

Hi Frontend Claude! The backend now uses Refresh + Access tokens. Please update the frontend with these changes:

---

## WHAT CHANGED IN BACKEND

Login endpoint now returns:
```json
{
  "accessToken": "eyJhbGc...",     // Use for API requests (15 min expiry)
  "refreshToken": "eyJhbGc...",    // Use to get new access token (7 days)
  "user": { "id": 1, "email": "..." }
}
```

New endpoints:
- POST /api/auth/refresh { refreshToken } → { accessToken }
- POST /api/auth/logout { refreshToken } → {}
- POST /api/auth/logout-all (protected) → {}

---

## REQUIRED CHANGES IN FRONTEND

### 1. UPDATE authService.js

Replace your AuthService with this:

```javascript
export class AuthService {
  // Save both tokens
  static saveTokens(accessToken, refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }

  // Get access token for API calls
  static getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  // Get refresh token for refresh endpoint
  static getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  // Check if user logged in
  static isLoggedIn() {
    return !!this.getAccessToken();
  }

  // Get headers with access token
  static getHeaders() {
    const token = this.getAccessToken();
    return {
      "Content-Type": "application/json",
      ...(token && { "Authorization": `Bearer ${token}` })
    };
  }

  // Auto-refresh access token when expired
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

  // Save new access token
  static saveAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  // Logout and clear both tokens
  static logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}
```

---

### 2. UPDATE LOGIN HANDLER

Change from:
```javascript
// OLD
AuthService.saveToken(data.data.token);
```

To:
```javascript
// NEW - Save both tokens!
AuthService.saveTokens(data.data.accessToken, data.data.refreshToken);
```

Full example:
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

    // NEW: Save BOTH tokens
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

---

### 3. UPDATE API HELPER (api.js) - AUTO-REFRESH

Add auto-refresh logic to handle expired access tokens:

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

    let data = await response.json();

    // If 401 (unauthorized) and we have a refresh token, try refreshing
    if (response.status === 401 && AuthService.getRefreshToken()) {
      try {
        console.log("🔄 Access token expired, refreshing...");
        const newAccessToken = await AuthService.refreshAccessToken();
        
        // Update headers with new token
        headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry the request with new token
        response = await fetch(`${API_BASE_URL}${endpoint}`, {
          ...options,
          headers,
        });

        data = await response.json();
      } catch (refreshError) {
        // Refresh failed, redirect to login
        console.error("❌ Session expired, please login again");
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

---

### 4. UPDATE LOGOUT HANDLER

Add cleanup for refresh token:

```javascript
const handleLogout = async () => {
  try {
    const refreshToken = AuthService.getRefreshToken();
    
    // Tell backend to invalidate the refresh token
    if (refreshToken) {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken })
      });
    }
  } catch (error) {
    console.warn("Logout error (non-critical):", error);
  } finally {
    // Always clear local tokens
    AuthService.logout();
    setUser(null);
    navigate("/login");
  }
};
```

---

## TESTING CHECKLIST

After making changes:

1. ✅ Login → Check localStorage has "accessToken" and "refreshToken"
2. ✅ Add item to cart → Should work
3. ✅ Wait 15+ mins (or mock expired token) → Should auto-refresh
4. ✅ Logout → Should clear both tokens
5. ✅ Try accessing cart without token → Should redirect to login

---

## FILES TO UPDATE

- [ ] authService.js - Add new methods
- [ ] Login page/component - Update saveToken call
- [ ] api.js (or requests.js) - Add auto-refresh logic
- [ ] Logout button/handler - Add refresh token cleanup

---

## BACKEND READY? ✅

Backend has:
✅ generateAccessToken() - 15 min expiry
✅ generateRefreshToken() - 7 days expiry
✅ /api/auth/refresh endpoint
✅ /api/auth/logout endpoint
✅ refresh_tokens table (need to run migration first!)

Frontend is the only thing left to update!
