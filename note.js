// auth server (FB) will return JWT with 'x-hasura-XXXX' values (this will be used by hasura when auth is passed.)

// JWT authentication is enforced when the X-Hasura-Admin-Secret header is not found in the request.

// JWT authentication is skipped when the X-Hasura-Admin-Secret header is found in the request and admin access is granted.

// When your auth server generates the JWT, the custom claims in the JWT must contain the following.

// 1. 'x-hasura-default-role': the role that will be used in case 'x-hasura-role' header is not passed.
// 2. 'x-hasura-allowed-roles': a list of allowed roles .ex: ['author','editor']
// 3. 'x-hasura-XXXXX': custom STRING values used for hasura.
// EX:
const payload = {
  sub: '1234567890',
  name: 'John Doe',
  admin: true,
  iat: 1516239022,
  // a hasura custom namespace
  'https://hasura.io/jwt/claims': {
    'x-hasura-allowed-roles': ['editor', 'user', 'mod'],
    'x-hasura-default-role': 'user',
    'x-hasura-user-id': '1234567890',
    'x-hasura-org-id': '123',
    'x-hasura-custom': 'custom-value'
  }
}
