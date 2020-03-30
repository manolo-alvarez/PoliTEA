/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/06/2020
 * @summary: Javascript file that pulls politicians ProPublica API
 */

 localStorage.clear();

 ///////////////// HTML elements////////////////////////////////////////////////////
 const container = document.getElementById('cards')

 /////////////////////////////////////////////////////////////////////////////

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'http://localhost:3000/politicians/congressman', false);
xhttp.send();

const representatives = JSON.parse(xhttp.responseText);

representatives.forEach(member => {

  const row = document.createElement('div');
  const col = document.createElement('div');
  const card = document.createElement('div');
  const position = document.createElement('div');
  const head1 = document.createElement('h3');
  const head2 = document.createElement('h6');
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const bioPage = document.createElement('a');
  const blankSpace = document.createElement('p');

  row.setAttribute('class', 'row mb-2');
  col.setAttribute('class', 'col mb-2');
  card.setAttribute('class' , 'row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative');
  position.setAttribute('class', 'col p-4 d-flex flex-column position-static');
  head1.setAttribute('class', 'mb-0');
  head2.setAttribute('class', 'mb-0');
  paragraph1.setAttribute('class', 'card-text mb-auto');
  paragraph2.setAttribute('class', 'card-text mb-auto');
  bioPage.setAttribute('class', 'btn btn-primary');
  bioPage.setAttribute('id', `${member.id}`)
  bioPage.setAttribute('onclick', `f1("${member.id}", "${member.first_name}", "${member.last_name}", "${member.party}", "${member.state}", "${member.district}");`)
  bioPage.setAttribute('href', 'politiciansBio.html')

  head1.textContent = member.first_name;
  if(member.middle_name != null) head1.textContent += " " + member.middle_name;
  head1.textContent += " " + member.last_name;
  if(member.party == 'R') head2.textContent = 'Republican';
  else head2.textContent = 'Democrat';
  paragraph1.textContent = "State: " + member.state
  paragraph2.textContent = "District: " + member.district;
  bioPage.textContent = "Biography";
  blankSpace.textContent = " ";

  container.appendChild(row);
  row.appendChild(col);
  col.appendChild(card);
  card.appendChild(position);
  position.appendChild(head1);
  position.appendChild(blankSpace);
  position.appendChild(head2);
  position.appendChild(blankSpace);
  position.appendChild(paragraph1);
  position.appendChild(paragraph2);
  position.appendChild(bioPage);
});

function f1(id, firstName, lastName, party, state, district){
  localStorage.setItem('politician_id', id);
  localStorage.setItem('politician_firstName', firstName);
  localStorage.setItem('politician_lastName', lastName);
  localStorage.setItem('politician_party', party);
  localStorage.setItem('politician_state', state);
  localStorage.setItem('politician_district', district);
};
