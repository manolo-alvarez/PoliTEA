/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/05/2020
 * @summary: Javascript file that pulls politician information/bio from ProPublic API
 */

const container = document.getElementById('cards')

// Constant URL value for ProPublica API. This pulls all members in the current (116) house
const id = localStorage.getItem('politician_id');
const firstName = localStorage.getItem('politician_firstName');
const lastName = localStorage.getItem('politician_lastName');
const repParty = localStorage.getItem('politician_party');

console.log("id: " + id);
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("party: " + repParty);

const jumbotron = document.createElement('div')
const col = document.createElement('div')
const name = document.createElement('h1')
const party = document.createElement('p')

jumbotron.setAttribute('class', 'jumbotron p-4 p-md-5 text-white rounded bg-dark' );
col.setAttribute('class', 'col-md-6 px-0');
name.setAttribute('class', 'display-4 font-italic');
party.setAttribute('class', 'lead my-3');

name.textContent = firstName + " " + lastName;
if(repParty == 'R') party.textContent = 'Republican';
else party.textContent = 'Democrat';

container.appendChild(jumbotron);
jumbotron.appendChild(col);
col.appendChild(name);
col.appendChild(party);

const url = 'https://reflected-flux-270220.appspot.com/votes/' + id;

var request = new XMLHttpRequest()
request.open('GET', url, false)
request.send()

// Parse JSON and create JSON Object
const politician = JSON.parse(request.responseText);

politician[0].votes.forEach(vote => {

  const row = document.createElement('div');
  const col = document.createElement('div');
  const card = document.createElement('div');
  const position = document.createElement('div');
  const head1 = document.createElement('h3');
  const head2 = document.createElement('h6');
  const paragraph = document.createElement('p');

  row.setAttribute('class', 'row mb-2');
  col.setAttribute('class', 'col mb-2');
  card.setAttribute('class' , 'row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative');
  position.setAttribute('class', 'col p-4 d-flex flex-column position-static');
  head1.setAttribute('class', 'mb-0');
  head2.setAttribute('class', 'mb-0');
  paragraph.setAttribute('class', 'card-text mb-auto');

  head1.textContent = vote.bill.number + " - " + vote.position
  head2.textContent = "Result: " + vote.result;
  paragraph.textContent = vote.bill.title;

  container.appendChild(row);
  row.appendChild(col);
  col.appendChild(card);
  card.appendChild(position);
  position.appendChild(head1);
  position.appendChild(head2);
  position.appendChild(paragraph);

});
