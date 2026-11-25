# Code Citations

## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/Brandon-Bennington/capstoneProject/blob/62437502081647c2e526278a5f8c63df3eab4b47/pages/login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/Brandon-Bennington/capstoneProject/blob/62437502081647c2e526278a5f8c63df3eab4b47/pages/login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/Brandon-Bennington/capstoneProject/blob/62437502081647c2e526278a5f8c63df3eab4b47/pages/login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/Brandon-Bennington/capstoneProject/blob/62437502081647c2e526278a5f8c63df3eab4b47/pages/login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/Brandon-Bennington/capstoneProject/blob/62437502081647c2e526278a5f8c63df3eab4b47/pages/login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/Brandon-Bennington/capstoneProject/blob/62437502081647c2e526278a5f8c63df3eab4b47/pages/login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/Brandon-Bennington/capstoneProject/blob/62437502081647c2e526278a5f8c63df3eab4b47/pages/login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // 
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/Brandon-Bennington/capstoneProject/blob/62437502081647c2e526278a5f8c63df3eab4b47/pages/login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the
```


## License: unknown
https://github.com/maurya1212212/entertainmenthub/blob/486bb3d97bf4eaa098379275e3fb5d6179a8c6f0/login.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
```


## License: unknown
https://github.com/JatinSutrave/Real-time-task-management/blob/28a44aea60ddce7a294771fba855cb8c9c076579/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
```


## License: unknown
https://github.com/maurya1212212/entertainmenthub/blob/486bb3d97bf4eaa098379275e3fb5d6179a8c6f0/login.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
```


## License: unknown
https://github.com/JatinSutrave/Real-time-task-management/blob/28a44aea60ddce7a294771fba855cb8c9c076579/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
```


## License: unknown
https://github.com/crewnew/cloud-services-backend/blob/68b047055a15782f9f469dc7318cc156a3dc3586/hasura/jwt-auth/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container"
```


## License: unknown
https://github.com/maurya1212212/entertainmenthub/blob/486bb3d97bf4eaa098379275e3fb5d6179a8c6f0/login.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
```


## License: unknown
https://github.com/JatinSutrave/Real-time-task-management/blob/28a44aea60ddce7a294771fba855cb8c9c076579/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
```


## License: unknown
https://github.com/crewnew/cloud-services-backend/blob/68b047055a15782f9f469dc7318cc156a3dc3586/hasura/jwt-auth/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container"
```


## License: unknown
https://github.com/Sotravil/CryptoGame/blob/fd8a013554d45fd6d3a20cd27c924034b3e8a86c/cryptoGamev.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>
```


## License: unknown
https://github.com/maurya1212212/entertainmenthub/blob/486bb3d97bf4eaa098379275e3fb5d6179a8c6f0/login.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
```


## License: unknown
https://github.com/JatinSutrave/Real-time-task-management/blob/28a44aea60ddce7a294771fba855cb8c9c076579/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
```


## License: unknown
https://github.com/crewnew/cloud-services-backend/blob/68b047055a15782f9f469dc7318cc156a3dc3586/hasura/jwt-auth/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container"
```


## License: unknown
https://github.com/Sotravil/CryptoGame/blob/fd8a013554d45fd6d3a20cd27c924034b3e8a86c/cryptoGamev.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>
```


## License: unknown
https://github.com/maurya1212212/entertainmenthub/blob/486bb3d97bf4eaa098379275e3fb5d6179a8c6f0/login.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
```


## License: unknown
https://github.com/JatinSutrave/Real-time-task-management/blob/28a44aea60ddce7a294771fba855cb8c9c076579/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
```


## License: unknown
https://github.com/crewnew/cloud-services-backend/blob/68b047055a15782f9f469dc7318cc156a3dc3586/hasura/jwt-auth/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container"
```


## License: unknown
https://github.com/Sotravil/CryptoGame/blob/fd8a013554d45fd6d3a20cd27c924034b3e8a86c/cryptoGamev.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>
```


## License: unknown
https://github.com/maurya1212212/entertainmenthub/blob/486bb3d97bf4eaa098379275e3fb5d6179a8c6f0/login.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
```


## License: unknown
https://github.com/JatinSutrave/Real-time-task-management/blob/28a44aea60ddce7a294771fba855cb8c9c076579/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
```


## License: unknown
https://github.com/crewnew/cloud-services-backend/blob/68b047055a15782f9f469dc7318cc156a3dc3586/hasura/jwt-auth/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container"
```


## License: unknown
https://github.com/Sotravil/CryptoGame/blob/fd8a013554d45fd6d3a20cd27c924034b3e8a86c/cryptoGamev.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>
```


## License: unknown
https://github.com/crewnew/cloud-services-backend/blob/68b047055a15782f9f469dc7318cc156a3dc3586/hasura/jwt-auth/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>
```


## License: unknown
https://github.com/maurya1212212/entertainmenthub/blob/486bb3d97bf4eaa098379275e3fb5d6179a8c6f0/login.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>
```


## License: unknown
https://github.com/JatinSutrave/Real-time-task-management/blob/28a44aea60ddce7a294771fba855cb8c9c076579/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>
```


## License: unknown
https://github.com/Sotravil/CryptoGame/blob/fd8a013554d45fd6d3a20cd27c924034b3e8a86c/cryptoGamev.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>
```


## License: unknown
https://github.com/crewnew/cloud-services-backend/blob/68b047055a15782f9f469dc7318cc156a3dc3586/hasura/jwt-auth/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>
```


## License: unknown
https://github.com/maurya1212212/entertainmenthub/blob/486bb3d97bf4eaa098379275e3fb5d6179a8c6f0/login.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>
```


## License: unknown
https://github.com/JatinSutrave/Real-time-task-management/blob/28a44aea60ddce7a294771fba855cb8c9c076579/index.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>
```


## License: unknown
https://github.com/Sotravil/CryptoGame/blob/fd8a013554d45fd6d3a20cd27c924034b3e8a86c/cryptoGamev.html

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/Soroushazizi/gym-management/blob/8f47825592b19e7261806f69cdc8dbbed9d507ea/assets/pages/LogIn/js/main.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/Soroushazizi/gym-management/blob/8f47825592b19e7261806f69cdc8dbbed9d507ea/assets/pages/LogIn/js/main.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/Soroushazizi/gym-management/blob/8f47825592b19e7261806f69cdc8dbbed9d507ea/assets/pages/LogIn/js/main.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/Soroushazizi/gym-management/blob/8f47825592b19e7261806f69cdc8dbbed9d507ea/assets/pages/LogIn/js/main.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/Soroushazizi/gym-management/blob/8f47825592b19e7261806f69cdc8dbbed9d507ea/assets/pages/LogIn/js/main.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/Soroushazizi/gym-management/blob/8f47825592b19e7261806f69cdc8dbbed9d507ea/assets/pages/LogIn/js/main.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/mkdagakr/inotebook/blob/6a1981859e6f3e5cd63db5d79879f687842db32d/src/components/LogIn.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/Aryamann27/Food_Delivery_App_React/blob/4601115b74e4c54c63f3e648cd62be06cb5c93b1/food-app/src/hooks/useLogin.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/Soroushazizi/gym-management/blob/8f47825592b19e7261806f69cdc8dbbed9d507ea/assets/pages/LogIn/js/main.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/NeyuD96155/Mint-Movie/blob/19003dc51759dd6c05b2e12ad2c4b45d23c6ba7f/client/src/auth/Login.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
```


## License: unknown
https://github.com/RamcharanMarco/Apps-Portfolio/blob/1cf177226311560f053d4ee67dd05fd6ebaa77a7/src/hooks/useSignup.tsx

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
```


## License: unknown
https://github.com/gergusber/nextJsUdemy/blob/1988ae93d4737f2db47e94b7fa0ed89b43bb5228/seccion13/components/auth/auth-form.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created!
```


## License: unknown
https://github.com/RamcharanMarco/Apps-Portfolio/blob/1cf177226311560f053d4ee67dd05fd6ebaa77a7/src/hooks/useSignup.tsx

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
```


## License: unknown
https://github.com/gergusber/nextJsUdemy/blob/1988ae93d4737f2db47e94b7fa0ed89b43bb5228/seccion13/components/auth/auth-form.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created!
```


## License: unknown
https://github.com/VladVoV/VladVoV.github.io/blob/c2fa7429c8a91aada36dbb9d26386d72a0a13d2a/src/script/spa.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created! Now log
```


## License: unknown
https://github.com/RamcharanMarco/Apps-Portfolio/blob/1cf177226311560f053d4ee67dd05fd6ebaa77a7/src/hooks/useSignup.tsx

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
```


## License: unknown
https://github.com/gergusber/nextJsUdemy/blob/1988ae93d4737f2db47e94b7fa0ed89b43bb5228/seccion13/components/auth/auth-form.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created!
```


## License: unknown
https://github.com/VladVoV/VladVoV.github.io/blob/c2fa7429c8a91aada36dbb9d26386d72a0a13d2a/src/script/spa.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created! Now log
```


## License: unknown
https://github.com/RamcharanMarco/Apps-Portfolio/blob/1cf177226311560f053d4ee67dd05fd6ebaa77a7/src/hooks/useSignup.tsx

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
```


## License: unknown
https://github.com/gergusber/nextJsUdemy/blob/1988ae93d4737f2db47e94b7fa0ed89b43bb5228/seccion13/components/auth/auth-form.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created!
```


## License: unknown
https://github.com/VladVoV/VladVoV.github.io/blob/c2fa7429c8a91aada36dbb9d26386d72a0a13d2a/src/script/spa.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created! Now log
```


## License: unknown
https://github.com/RamcharanMarco/Apps-Portfolio/blob/1cf177226311560f053d4ee67dd05fd6ebaa77a7/src/hooks/useSignup.tsx

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
```


## License: unknown
https://github.com/gergusber/nextJsUdemy/blob/1988ae93d4737f2db47e94b7fa0ed89b43bb5228/seccion13/components/auth/auth-form.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created!
```


## License: unknown
https://github.com/VladVoV/VladVoV.github.io/blob/c2fa7429c8a91aada36dbb9d26386d72a0a13d2a/src/script/spa.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created! Now log
```


## License: unknown
https://github.com/RamcharanMarco/Apps-Portfolio/blob/1cf177226311560f053d4ee67dd05fd6ebaa77a7/src/hooks/useSignup.tsx

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
```


## License: unknown
https://github.com/gergusber/nextJsUdemy/blob/1988ae93d4737f2db47e94b7fa0ed89b43bb5228/seccion13/components/auth/auth-form.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created!
```


## License: unknown
https://github.com/VladVoV/VladVoV.github.io/blob/c2fa7429c8a91aada36dbb9d26386d72a0a13d2a/src/script/spa.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created! Now log
```


## License: unknown
https://github.com/RamcharanMarco/Apps-Portfolio/blob/1cf177226311560f053d4ee67dd05fd6ebaa77a7/src/hooks/useSignup.tsx

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
```


## License: unknown
https://github.com/gergusber/nextJsUdemy/blob/1988ae93d4737f2db47e94b7fa0ed89b43bb5228/seccion13/components/auth/auth-form.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created!
```


## License: unknown
https://github.com/VladVoV/VladVoV.github.io/blob/c2fa7429c8a91aada36dbb9d26386d72a0a13d2a/src/script/spa.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created! Now log
```


## License: unknown
https://github.com/RamcharanMarco/Apps-Portfolio/blob/1cf177226311560f053d4ee67dd05fd6ebaa77a7/src/hooks/useSignup.tsx

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
```


## License: unknown
https://github.com/gergusber/nextJsUdemy/blob/1988ae93d4737f2db47e94b7fa0ed89b43bb5228/seccion13/components/auth/auth-form.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created!
```


## License: unknown
https://github.com/VladVoV/VladVoV.github.io/blob/c2fa7429c8a91aada36dbb9d26386d72a0a13d2a/src/script/spa.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created! Now log
```


## License: unknown
https://github.com/VladVoV/VladVoV.github.io/blob/c2fa7429c8a91aada36dbb9d26386d72a0a13d2a/src/script/spa.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created! Now log
```


## License: unknown
https://github.com/gergusber/nextJsUdemy/blob/1988ae93d4737f2db47e94b7fa0ed89b43bb5228/seccion13/components/auth/auth-form.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created! Now log
```


## License: unknown
https://github.com/RamcharanMarco/Apps-Portfolio/blob/1cf177226311560f053d4ee67dd05fd6ebaa77a7/src/hooks/useSignup.tsx

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created! Now log
```


## License: unknown
https://github.com/VladVoV/VladVoV.github.io/blob/c2fa7429c8a91aada36dbb9d26386d72a0a13d2a/src/script/spa.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created! Now log
```


## License: unknown
https://github.com/gergusber/nextJsUdemy/blob/1988ae93d4737f2db47e94b7fa0ed89b43bb5228/seccion13/components/auth/auth-form.js

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created! Now log
```


## License: unknown
https://github.com/RamcharanMarco/Apps-Portfolio/blob/1cf177226311560f053d4ee67dd05fd6ebaa77a7/src/hooks/useSignup.tsx

```
The issue is that your **frontend isn't saving and sending the JWT token**. The backend now requires authentication for cart routes, but your client code isn't handling it.

Here's a complete solution:

## 🔧 Frontend Authentication Helper

Create a new file in your frontend project:

```javascript
// auth.js - Authentication helper
export class AuthService {
  // Save token after login
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Get token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  static isLoggedIn() {
    return !!this.getToken();
  }

  // Clear token (logout)
  static logout() {
    localStorage.removeItem('authToken');
  }

  // Get headers with token
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}
```

---

## 🔐 Login Example

```javascript
// In your login component/page
async function handleLogin(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ IMPORTANT: Save the token
      AuthService.saveToken(data.data.token);
      
      console.log('Login successful!');
      // Redirect to home or cart page
      window.location.href = '/cart';
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

---

## 🛒 Cart Operations (WITH Authentication)

```javascript
// Get cart items
async function getCart() {
  if (!AuthService.isLoggedIn()) {
    console.error('You must log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Cart items:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: AuthService.getHeaders(),  // ← Includes token
      body: JSON.stringify({ productId, quantity })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Added to cart');
      return data.data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

// Remove item from cart
async function removeFromCart(productId) {
  if (!AuthService.isLoggedIn()) {
    alert('Please log in first');
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: 'DELETE',
      headers: AuthService.getHeaders()  // ← Includes token
    });

    const data = await response.json();

    if (data.success) {
      console.log('Removed from cart');
      return data.data;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
}
```

---

## 📋 Full Frontend Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blejemalire</title>
</head>
<body>

<div id="auth-container">
  <h2>Login</h2>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="login()">Login</button>
  <button onclick="signup()">Sign Up</button>
</div>

<div id="cart-container" style="display:none;">
  <h2>Your Cart</h2>
  <button onclick="loadCart()">Load Cart</button>
  <button onclick="logout()">Logout</button>
  <div id="cart-items"></div>
</div>

<script>
// Auth Helper (from above)
class AuthService {
  static saveToken(token) {
    localStorage.setItem('authToken', token);
  }
  
  static getToken() {
    return localStorage.getItem('authToken');
  }
  
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  static logout() {
    localStorage.removeItem('authToken');
  }
  
  static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
}

// Check if already logged in
window.addEventListener('load', () => {
  if (AuthService.isLoggedIn()) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  }
});

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    AuthService.saveToken(data.data.token);  // ✅ Save token
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    loadCart();
  } else {
    alert('Login failed: ' + data.message);
  }
}

// Sign Up
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
    alert('Account created! Now log
```

