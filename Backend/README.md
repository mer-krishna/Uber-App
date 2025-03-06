# User API Documentation

## Authentication Endpoints

### 1. Register User
**Endpoint:** `/users/register`
**Method:** POST
**Description:** Register a new user account.

#### Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Validation Rules
- Email must be valid
- First name must be at least 3 characters
- Password must be at least 6 characters

#### Success Response
**Status:** 201 Created
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60ad1234567890abc1234567",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error Responses
**Status:** 400 Bad Request
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email"
    }
  ]
}
```
or
```json
{
  "message": "User already exists"
}
```

### 2. Login User
**Endpoint:** `/users/login`
**Method:** POST
**Description:** Authenticate existing user and get token.

#### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Success Response
**Status:** 200 OK
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60ad1234567890abc1234567",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error Response
**Status:** 401 Unauthorized
```json
{
  "message": "Invalid email or password"
}
```

### 3. Get User Profile
**Endpoint:** `/users/profile`
**Method:** GET
**Description:** Get authenticated user's profile information.
**Authentication:** Required (JWT Token)

#### Headers
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Success Response
**Status:** 200 OK
```json
{
  "_id": "60ad1234567890abc1234567",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

### 4. Logout User
**Endpoint:** `/users/logout`
**Method:** GET
**Description:** Logout user and invalidate token
**Authentication:** Required (JWT Token)

#### Headers
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Success Response
**Status:** 200 OK
```json
{
  "message": "Logged out successfully"
}
```

## Error Responses for All Endpoints

### Unauthorized Access
**Status:** 401 Unauthorized
```json
{
  "message": "Unauthorized access"
}
```

### Invalid Token
**Status:** 401 Unauthorized
```json
{
  "message": "Invalid token"
}
```

### Server Error
**Status:** 500 Internal Server Error
```json
{
  "message": "Internal server error"
}
```