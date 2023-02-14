const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ1ZWUxY2NiLTMwMWYtNDQxMy1iNzJhLWUwMDdlM2M2YTY5Zi0xNjc2MzM1MzIzMTI5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNGNjNjE2OWEtNTI4Ni00NDY0LWEyZDEtZjk2NDkzODBhMzkzIiwidHlwZSI6InQifQ.SGBONYpwjGu7b4faaQTskSemNHqrt49QiUYgfQv5tE4'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
