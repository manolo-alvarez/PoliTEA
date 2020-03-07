/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/06/2020
 * @summary: Javascript file that pulls politicians ProPublica API
 */

const app = document.getElementById('billsRoot')
const container = document.createElement('div')
const cards = document.createElement('div')
container.setAttribute('class', 'container')
cards.setAttribute('class', 'card-body')
app.appendChild(container)
container.appendChild(cards)


// Constant URL value for ProPublica API. This pulls all members in the current (116) senate
const BILL_SUBJECT_URL = 'https://api.propublica.org/congress/v1/bills/subjects/commerce.json';

var request = new XMLHttpRequest()
request.open('GET', BILL_SUBJECT_URL, true)

// Must send request with API key as a header. Key can be used at most 1000 times/day
request.setRequestHeader('X-API-Key', 'P3QUvk64v2F2XNUHwHPyhhfqs22CVRE2NVlUvELJ')
request.onload = function() {

  // Parse JSON and create JSON Object
  var data = JSON.parse(this.response)

  // Succesful request?
  if (request.status >= 200 && request.status < 400) {

    data.results.forEach(result => {

      localStorage.setItem("bill_id", result.bill_id);

      const bill = document.createElement('div')
      const title = document.createElement('h4')
      const attributes = document.createElement('ol')
      const number = document.createElement('li')
      const sponsor = document.createElement('li')
      const date = document.createElement('li')
      const summary = document.createElement('li')
      const gov_site = document.createElement('li')
      const link_site = document.createElement('a')


      bill.setAttribute('class', 'p-4')
      title.setAttribute('class', 'font-italic')
      attributes.setAttribute('class', 'list-unstyled mb-0')
      link_site.setAttribute('href', result.congressdotgov_url)

      title.textContent = result.short_title
      number.textContent = result.number
      sponsor.textContent = result.sponsor_title + " " + result.sponsor_name + " (" + result.sponsor_party + ") " + result.sponsor_state + " -- (Link to Politicians Model coming soon)"
      date.textContent = "Introduced on: " + result.introduced_date
      summary.textContent = result.summary
      link_site.textContent = "Congress.gov Link"


      cards.appendChild(bill)
      bill.appendChild(title)
      bill.appendChild(number)
      bill.appendChild(sponsor)
      bill.appendChild(date)
      if (result.summary != null) {bill.appendChild(summary)}
      bill.appendChild(gov_site)
      gov_site.appendChild(link_site)


    });

    // for debugging... check the data received from the API call
    console.log(data)

  } else {
    alert("Bad request!")
  }
}

request.send()
