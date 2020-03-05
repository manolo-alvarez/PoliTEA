const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

// Constant URL value for JAAS API
const RAPIDAPI_API_URL = 'https://api.propublica.org/congress/v1/116/house/members.json';

var request = new XMLHttpRequest()
request.open('GET', RAPIDAPI_API_URL, true)
request.setRequestHeader('X-API-Key', 'P3QUvk64v2F2XNUHwHPyhhfqs22CVRE2NVlUvELJ')
request.onload = function() {

  // Parse JSON and create JSON Object
  var data = JSON.parse(this.response)

  // Succesful request?
  if (request.status >= 200 && request.status < 400) {

    // Creates an HTML element and appends it to index.html
    var member = data.results[0].members[0]

    for (var element in member) {

      const h1 = document.createElement('h1')
      const p = document.createElement('p')
      const card = document.createElement('div')
      
      card.setAttribute('class', 'card')
      h1.textContent = element
      p.textContent = member[element]

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    }

    console.log(data)

  } else {
    alert("Bad request!")
  }
}

request.send()
