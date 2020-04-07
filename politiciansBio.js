/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/05/2020
 * @summary: Javascript file that pulls politician information/bio from ProPublic API
 */

const container = document.getElementById('cards')

// get local storage items //
const id = localStorage.getItem('politician_id');
const firstName = localStorage.getItem('politician_firstName');
const lastName = localStorage.getItem('politician_lastName');
const repParty = localStorage.getItem('politician_party');
const repState = localStorage.getItem('politician_state');
const repDistrict = localStorage.getItem('politician_district');
const website = localStorage.getItem('politician_website');
const twitterHandle = localStorage.getItem('politician_twitterHandle');
const facebookHandle = localStorage.getItem('politician_facebookHandle');
const youtubeHandle = localStorage.getItem('politician_youtubeHandle');
const seniority = localStorage.getItem('politician_seniority');
const nextElection = localStorage.getItem('politician_nextElection');
const totalVotes = localStorage.getItem('politician_totalVotes');
const missedVotes = localStorage.getItem('politician_missedVotes');
const totalPresent = localStorage.getItem('politician_totalPresent');
const lastUpdated = localStorage.getItem('politician_lastUpdated');
const office = localStorage.getItem('politician_office');
const phone = localStorage.getItem('politician_phone');
const fax = localStorage.getItem('politician_fax');
const missedVotesPct = localStorage.getItem('politician_missedVotesPct');
const votesWithPartyPct = localStorage.getItem('politician_votesWithPartyPct');
const votesAgainstPartyPct = localStorage.getItem('politician_votesAgainstPartyPct');

// Create Jumbotron (title) //
{
const jumbotron = document.createElement('div')
const col = document.createElement('div')
const name = document.createElement('h1')
const party = document.createElement('h5')
const state = document.createElement('p')
const district = document.createElement('p')

jumbotron.setAttribute('class', 'jumbotron p-4 p-md-5 text-white rounded bg-dark' );
col.setAttribute('class', 'col-md-6 px-0');
name.setAttribute('id', id);
name.setAttribute('class', 'display-4 font-italic');
party.setAttribute('class', 'lead my-3');
state.setAttribute('class', 'lead my-3');
district.setAttribute('class', 'lead my-3');

name.textContent = firstName + " " + lastName;
if(repParty == 'R') party.textContent = 'Republican';
else party.textContent = 'Democrat';
state.textContent = "State: " + repState;
district.textContent = "District: " + repDistrict;

container.appendChild(jumbotron);
jumbotron.appendChild(col);
col.appendChild(name);
col.appendChild(party);
col.appendChild(state);
if (repDistrict != null) col.appendChild(district);
}

// About //
{
const about = document.createElement('div');
const aboutTitle = document.createElement('h4');
const aboutWebsite = document.createElement('a');
const aboutSeniority = document.createElement('p');
const aboutOffice = document.createElement('p');
const aboutPhone = document.createElement('p');
const aboutFax = document.createElement('p');
const aboutTwitter = document.createElement('p');
const aboutFacebook = document.createElement('p');
const aboutYoutube = document.createElement('p');
const aboutNextElection = document.createElement('p');
const aboutTotalVotes = document.createElement('p');
const aboutMissedVotes = document.createElement('p');
const aboutTotalPresent = document.createElement('p');
const aboutMissedVotesPct = document.createElement('p');
const aboutVotesWithPartyPct = document.createElement('p');
const aboutVotesAgainstPartyPct = document.createElement('p');
const aboutLastUpdated = document.createElement('p');

about.setAttribute('class', "p-4 mb-3 bg-light rounded");
aboutTitle.setAttribute('class', "font-italic");
aboutWebsite.setAttribute('class', "mb-0");
aboutWebsite.setAttribute('href', website);
aboutSeniority.setAttribute('class', "mb-0");
aboutOffice.setAttribute('class', "mb-0");
aboutPhone.setAttribute('class', "mb-0");
aboutFax.setAttribute('class', "mb-0");
aboutTwitter.setAttribute('class', "mb-0");
aboutFacebook.setAttribute('class', "mb-0");
aboutYoutube.setAttribute('class', "mb-0");
aboutNextElection.setAttribute('class', "mb-0");
aboutTotalVotes.setAttribute('class', "mb-0");
aboutMissedVotes.setAttribute('class', "mb-0");
aboutTotalPresent.setAttribute('class', "mb-0");
aboutMissedVotesPct.setAttribute('class', "mb-0");
aboutVotesWithPartyPct.setAttribute('class', "mb-0");
aboutVotesAgainstPartyPct.setAttribute('class', "mb-0");
aboutLastUpdated.setAttribute('class', "mb-0");

aboutTitle.textContent = "About";
aboutWebsite.textContent = website;
aboutSeniority.textContent = "seniority: " + seniority;
aboutOffice.textContent = "office: " + office;
aboutPhone.textContent = "phone: " + phone;
aboutFax.textContent = "fax: " + fax;
aboutTwitter.textContent = "twitter: " + twitterHandle;
aboutFacebook.textContent = "facebook: " + facebookHandle;
aboutYoutube.textContent = "youtube: " + youtubeHandle;
aboutNextElection.textContent = "next election: " + nextElection;
aboutTotalVotes.textContent = "total votes: " + totalVotes;
aboutMissedVotes.textContent = "missed votes: " + missedVotes;
aboutTotalPresent.textContent = "total present: " + totalPresent;
aboutMissedVotesPct.textContent = "missed votes %" + missedVotesPct;
aboutVotesWithPartyPct.textContent = "votes with party %" + votesWithPartyPct;
aboutVotesAgainstPartyPct.textContent = "votes against party %" + votesAgainstPartyPct;
aboutLastUpdated.textContent = "last updated: " + lastUpdated;

container.appendChild(about);
about.appendChild(aboutTitle);
if(website != 'null') about.appendChild(aboutWebsite);
if(seniority != 'null') about.appendChild(aboutSeniority);
if(office != 'null') about.appendChild(aboutOffice);
if(phone != 'null') about.appendChild(aboutPhone);
if(fax != 'null') about.appendChild(aboutFax);
if(twitterHandle != 'null') about.appendChild(aboutTwitter);
if(facebookHandle != 'null') about.appendChild(aboutFacebook);
if(youtubeHandle != 'null') about.appendChild(aboutYoutube);
if(nextElection != 'null') about.appendChild(aboutNextElection);
if(totalVotes != 'null') about.appendChild(aboutTotalVotes);
if(missedVotes != 'null') about.appendChild(aboutMissedVotes);
if(totalPresent != 'null') about.appendChild(aboutTotalPresent);
if(missedVotesPct != 'null') about.appendChild(aboutMissedVotesPct);
if(votesWithPartyPct != 'null') about.appendChild(aboutVotesWithPartyPct);
if(votesAgainstPartyPct != 'null') about.appendChild(aboutVotesAgainstPartyPct);
if(lastUpdated != 'null') about.appendChild(aboutLastUpdated);
}

// Get voting History //
{
const url = 'https://reflected-flux-270220.appspot.com/votes/' + id;
//const url = 'https://localhost:3000/votes/' + id;
var request = new XMLHttpRequest()
request.open('GET', url, false)
request.send()

// Parse JSON and create JSON Object
const politician = JSON.parse(request.responseText);

console.log(politician[0].length)

if(!(politician[0].votes.length == 0)){

const votesTitle = document.createElement('h3');
votesTitle.textContent ='Recent Voting History';
container.appendChild(votesTitle);

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

} else{
  const row = document.createElement('div');
  const col = document.createElement('div');
  const card = document.createElement('div');
  const position = document.createElement('div');
  const blankSpace = document.createElement('p');
  const head1 = document.createElement('h3');

  row.setAttribute('class', 'row mb-2');
  col.setAttribute('class', 'col mb-2');
  card.setAttribute('class' , 'row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative');
  position.setAttribute('class', 'col p-4 d-flex flex-column position-static');
  head1.setAttribute('class', 'mb-0');
  head1.textContent = "No Voting History";
  blankSpace.textContent = " ";

  container.appendChild(row);
  row.appendChild(col);
  col.appendChild(card);
  card.appendChild(position);
  position.appendChild(blankSpace)
  position.appendChild(head1);
}
}
