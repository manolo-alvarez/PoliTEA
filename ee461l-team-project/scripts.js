//const app = document.getElementById('root')
//const container = document.createElement('div')
//container.setAttribute('class', 'container')
//app.appendChild(container)

// Constant URL value for JAAS API
const RAPIDAPI_API_URL = 'https://api.propublica.org/congress/v1/116/house/members.json';

var request = new XMLHttpRequest()
request.open('GET', RAPIDAPI_API_URL, true)
request.setRequestHeader('X-API-Key', 'P3QUvk64v2F2XNUHwHPyhhfqs22CVRE2NVlUvELJ')
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    alert("Succesful Request!")
  } else {
    alert("Bad request!")
  }
}

request.send()
