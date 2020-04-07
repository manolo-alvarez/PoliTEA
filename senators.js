/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/06/2020
 * @summary: Javascript file that runs the senators page
 */

localStorage.clear();

 //////////////// HTML elements and variables////////////////////////////////
const list = document.getElementById('list')
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 25;
//////////////////// Get senators from DB ///////////////////////////////////

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://reflected-flux-270220.appspot.com/politicians/senators', false);
xhttp.send();

const allSenators = JSON.parse(xhttp.responseText);
var senators = allSenators;

/////////////////////////// Set-up Page /////////////////////////////////////
{
let current_page = 1;
let rows = 25;

SetupPagination(senators, pagination_element, rows);
DisplayList(senators, rows, current_page);
}
////////////////////////////// Search Bar ////////////////////////////////////
{
const searchBar = document.forms['searchBar'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  if(!(e.key === 'Enter')){
    const phrase = e.target.value.toLowerCase();
    senators = allSenators.filter(function(sen){
      const name = sen.first_name.toLowerCase() + sen.last_name.toLowerCase();
      return name.includes(phrase);
    });
  } else{
    e.target.value = "";
    SetupPagination(senators, pagination_element, rows);
    DisplayList(senators, rows, current_page);
  }
});
}
////////////////////////////// Functions /////////////////////////////////////
function DisplayList (senators, rows_per_page, page) {
	document.getElementById('list').innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	console.log("start: " + start + " end: " + end);

  for (let i = start; i < senators.length && i<end ; i++) {

    const row = document.createElement('div');
    const col = document.createElement('div');
    const card = document.createElement('div');
    const position = document.createElement('div');
    const head1 = document.createElement('h3');
    const head2 = document.createElement('h6');
    const paragraph1 = document.createElement('p');
    const bioPage = document.createElement('a');
    const blankSpace = document.createElement('p');
    const financesPage = document.createElement('a');

    row.setAttribute('class', 'row mb-2');
    col.setAttribute('class', 'col mb-2');
    card.setAttribute('class' , 'row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative');
    position.setAttribute('class', 'col p-4 d-flex flex-column position-static');
    head1.setAttribute('class', 'mb-0');
    head2.setAttribute('class', 'mb-0');
    paragraph1.setAttribute('class', 'card-text mb-auto');
    bioPage.setAttribute('class', 'btn btn-primary');
    bioPage.setAttribute('id', `${senators[i].id}`)
    bioPage.setAttribute('onclick', `store("${senators[i].id}", "${senators[i].first_name}",
    "${senators[i].last_name}", "${senators[i].party}", "${senators[i].state}", "${senators[i].url}", "${senators[i].twitter_account}",
    "${senators[i].facebook_account}", "${senators[i].youtube_account}", "${senators[i].seniority}",
    "${senators[i].next_election}", "${senators[i].total_votes}", "${senators[i].missed_votes}",
    "${senators[i].total_present}", "${senators[i].last_updated}", "${senators[i].office}",
    "${senators[i].phone}", "${senators[i].fax}", "${senators[i].missed_votes_pct}",
    "${senators[i].votes_with_party_pct}", "${senators[i].votes_against_party_pct}");`)
    bioPage.setAttribute('href', 'politiciansBio.html')

    financesPage.setAttribute('class', 'btn btn-primary');
    financesPage.setAttribute('id', `${senators[i].id}` + '_finance')
    financesPage.setAttribute('onclick', `store("${senators[i].id}", "${senators[i].first_name}", "${senators[i].last_name}", "${senators[i].party}", "${senators[i].state}", "${senators[i].district}");`)
    financesPage.setAttribute('href', 'financial_main.html')

    head1.textContent = senators[i].first_name;
    if(senators[i].middle_name != null) head1.textContent += " " + senators[i].middle_name;
    head1.textContent += " " + senators[i].last_name;
    if(senators[i].party == 'R') head2.textContent = 'Republican';
    else head2.textContent = 'Democrat';
    paragraph1.textContent = "State: " + senators[i].state;
    bioPage.textContent = "Biography";
    blankSpace.textContent = " ";
    financesPage.textContent = "Donors and Finances"

    list.appendChild(row);
    row.appendChild(col);
    col.appendChild(card);
    card.appendChild(position);
    position.appendChild(head1);
    position.appendChild(blankSpace);
    position.appendChild(head2);
    position.appendChild(blankSpace);
    position.appendChild(paragraph1);
    position.appendChild(bioPage);
    position.appendChild(document.createElement("br"));
    position.appendChild(financesPage);

	}
}

function SetupPagination (senators, wrapper, rows_per_page) {
	wrapper.innerHTML = "";
	let length = senators.length;

	let page_count = Math.ceil(length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, senators);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, senators) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(senators, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

function store(id, firstName, lastName, party, state, website,
  twitterHandle, facebookHandle, youtubeHandle, seniority, nextElection,
  totalVotes, missedVotes,totalPresent, lastUpdated, office, phone, fax,
  missedVotesPct, votesWithPartyPct, votesAgainstPartyPct){

  localStorage.setItem('politician_id', id);
  localStorage.setItem('politician_firstName', firstName);
  localStorage.setItem('politician_lastName', lastName);
  localStorage.setItem('politician_party', party);
  localStorage.setItem('politician_state', state);
  localStorage.setItem('politician_website', website);
  localStorage.setItem('politician_twitterHandle', twitterHandle);
  localStorage.setItem('politician_facebookHandle', facebookHandle);
  localStorage.setItem('politician_youtubeHandle', youtubeHandle);
  localStorage.setItem('politician_seniority', seniority);
  localStorage.setItem('politician_nextElection', nextElection);
  localStorage.setItem('politician_totalVotes', totalVotes);
  localStorage.setItem('politician_missedVotes', missedVotes);
  localStorage.setItem('politician_totalPresent', totalPresent);
  localStorage.setItem('politician_lastUpdated', lastUpdated);
  localStorage.setItem('politician_office', office);
  localStorage.setItem('politician_phone', phone);
  localStorage.setItem('politician_fax', fax);
  localStorage.setItem('politician_missedVotesPct', missedVotesPct);
  localStorage.setItem('politician_votesWithPartyPct', votesWithPartyPct);
  localStorage.setItem('politician_votesAgainstPartyPct', votesAgainstPartyPct);
};
