# /users/register Endpoint Documentation

## Description

The `/users/register` endpoint allows new users to create an account. It validates the input data, checks for duplicate users, hashes the password, creates the user, and returns an authentication token along with the user details.

## HTTP Method

POST

## Required Request Data

- **fullname**: An object containing:
  - **firstname**: (String) Required. Minimum 3 characters.
  - **lastname**: (String) Optional. Minimum 3 characters if provided.
- **email**: (String) Required. Must be a valid email format with a minimum length of 5 characters.
- **password**: (String) Required. Minimum 6 characters.

### Example Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}

### Example Response

-user (object):
  - fullname` (object).
    - 'firstname` (string): User's first name (minimum 3 characters).
    -'lastname (string): User's last name (minimum 3 characters).
  -`email (string): User's email address (must be a valid email).
  -`password' (string): User's password (minimum 6 characters).
-`token (String): JWT Token
```
