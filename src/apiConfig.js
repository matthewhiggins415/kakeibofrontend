let apiUrl

const apiUrls = {
  production: 'database',
  development: 'http://localhost:2020'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl