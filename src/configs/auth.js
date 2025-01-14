export default {
  meEndpoint: '/auth/me',
  loginEndpoint: '/jwt/login',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}


// export default {
//   loginEndpoint: 'http://localhost:8000/login/',
//   storageTokenKeyName: 'access',
//   onTokenExpiration: 'refresh' ,

//   meEndpoint: 'http://localhost:8000/auth/me/',
//   registerEndpoint: '/jwt/register'

// }
