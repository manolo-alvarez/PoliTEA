/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/06/2020
 * @summary: Javascript file that pulls politicians ProPublica API
 */

const app = document.getElementById('root')
const container = document.createElement('div')
const cards = document.createElement('div')
container.setAttribute('class', 'container')
cards.setAttribute('class', 'card-deck mb-3 text-center')
app.appendChild(container)
container.appendChild(cards)

// Constant URL value for ProPublica API. This pulls all members in the current (116) house
const HOUSE_MEMBERS_URL = 'https://api.propublica.org/congress/v1/116/house/members.json';
// Constant URL value for ProPublica API. This pulls all members in the current (116) senate
const SENATE_MEMBERS_URL = 'https://api.propublica.org/congress/v1/116/senate/members.json';

var request = new XMLHttpRequest()
request.open('GET', SENATE_MEMBERS_URL, true)

// Must send request with API key as a header. Key can be used at most 1000 times/day
request.setRequestHeader('X-API-Key', 'P3QUvk64v2F2XNUHwHPyhhfqs22CVRE2NVlUvELJ')
request.onload = function() {

  // Parse JSON and create JSON Object
  var data = JSON.parse(this.response)

  // Succesful request?
  if (request.status >= 200 && request.status < 400) {

    data.results[0].members.forEach(member => {

      localStorage.setItem("politician_id", member.id);

      const politician = document.createElement('div')
      const name = document.createElement('h4')
      const attributes = document.createElement('ol')
      const linkBio = document.createElement('li')
      const linkVotingHistory = document.createElement('li')
      const bioPage = document.createElement('a')
      const votingHistPage = document.createElement('a')

      politician.setAttribute('class', 'p-4')
      name.setAttribute('class', 'font-italic')
      attributes.setAttribute('class', 'list-unstyled mb-0')
      bioPage.setAttribute('href', 'politicianBio.html')
      votingHistPage.setAttribute('href', 'politicianVotingHistory.html')

      name.textContent = member.first_name + " " + member.last_name
      bioPage.textContent = "Bio"
      votingHistPage.textContent = "Voting History"

      cards.appendChild(politician)
      politician.appendChild(name)
      politician.appendChild(attributes)
      attributes.appendChild(linkBio)
      linkBio.appendChild(bioPage)
      attributes.appendChild(linkVotingHistory)
      linkVotingHistory.appendChild(votingHistPage)

    });

    // for debugging... check the data received from the API call
    console.log(data)

  } else {
    alert("Bad request!")
  }
}

request.send()
