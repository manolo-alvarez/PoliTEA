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
const id = localStorage.getItem('politician_id')
console.log("The id is: " + id)
const url = 'http://localhost:3000/politicians/' + id;

var request = new XMLHttpRequest()
request.open('GET', url, false)
request.send()

// Parse JSON and create JSON Object
const politician = JSON.parse(request.responseText);

// card is a wrapper for each element and title
const card = document.createElement('div')
// h1 is the header of each card (title of element for that politician),
const h1 = document.createElement('h1')
// p is the text under each header of card (elenet name for that politician)
const p = document.createElement('p')

card.setAttribute('class', 'card')
h1.textContent = politician[0].first_name
p.textContent = politician[0].party

// Append or add document element to HTML doc
container.appendChild(card)
card.appendChild(h1)
card.appendChild(p)


function f1(){
  alert("YEEEESSS")
}
