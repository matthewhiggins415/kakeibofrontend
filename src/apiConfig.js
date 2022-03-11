let apiUrl

const apiUrls = {
  production: 'https://arcane-garden-92456.herokuapp.com/kakeibofrontend',
  development: 'http://localhost:2020'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl