/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/05/2020
 * @summary: Javascript file that pulls politician information/bio from ProPublic API
 */
 
const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

// Constant URL value for ProPublica API. This pulls all members in the current (116) house
const RAPIDAPI_API_URL = 'https://api.propublica.org/congress/v1/116/house/members.json';

var request = new XMLHttpRequest()
request.open('GET', RAPIDAPI_API_URL, true)

// Must send request with API key as a header. Key can be used at most 1000 times/day
request.setRequestHeader('X-API-Key', 'P3QUvk64v2F2XNUHwHPyhhfqs22CVRE2NVlUvELJ')
request.onload = function() {

  // Parse JSON and create JSON Object
  var data = JSON.parse(this.response)

  // Succesful request?
  if (request.status >= 200 && request.status < 400) {

    // Creates an HTML element and appends it to index.html
    var member = data.results[0].members[0]

    for (var element in member) {

      // card is a wrapper for each element and title
      const card = document.createElement('div')
      // h1 is the header of each card (title of element for that politician),
      const h1 = document.createElement('h1')
      // p is the text under each header of card (elenet name for that politician)
      const p = document.createElement('p')

      card.setAttribute('class', 'card')
      h1.textContent = element
      p.textContent = member[element]

      // Append or add document element to HTML doc
      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    }

    // for debugging... check the data received from the API call
    console.log(data)

  } else {
    alert("Bad request!")
  }
}

request.send()
