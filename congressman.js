/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/06/2020
 * @summary: Javascript file that pulls politicians ProPublica API
 */

 ///////////////// HTML elements////////////////////////////////////////////////////
 const root = document.getElementById('root')
 const container = document.createElement('div')
 const cards = document.createElement('div')
 container.setAttribute('class', 'container')
 cards.setAttribute('class', 'card-deck mb-3 text-center')
 root.appendChild(container)
 container.appendChild(cards)
 /////////////////////////////////////////////////////////////////////////////

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://reflected-flux-270220.appspot.com/politicians/congressman', false);
xhttp.send();

const senators = JSON.parse(xhttp.responseText);

senators.forEach(member => {

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
  bioPage.setAttribute('id', `${member.id}`)
  bioPage.setAttribute('onclick', `f1(${member.id})`)
  bioPage.setAttribute('href', 'politiciansBio.html')
  votingHistPage.setAttribute('href', 'politicianVotingHistory.html')

  bioPage.onclick = `f1(${member.id});`

  name.textContent = member.first_name;
  if(member.middle_name != null) name.textContent += " " + member.middle_name;
  name.textContent += " " + member.last_name;
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

function f1(id){
  localStorage.setItem('politician_id', id);
}
