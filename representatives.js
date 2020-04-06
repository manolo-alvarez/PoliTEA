/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/06/2020
 * @summary: Javascript file that pulls politicians ProPublica API
 */

 localStorage.clear();

 ///////////////// HTML elements////////////////////////////////////////////////////
 const list = document.getElementById('list')

 /////////////////////////////////////////////////////////////////////////////

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'http://localhost:3000/politicians/congressman', false);
xhttp.send();

const representatives = JSON.parse(xhttp.responseText);

const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 10;

SetupPagination(representatives, pagination_element, rows);
DisplayList(representatives, rows, current_page);

function DisplayList (representatives, rows_per_page, page) {
	document.getElementById('list').innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	console.log("start: " + start + " end: " + end);

  for (let i = start; i < representatives.length && i<end ; i++) {

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
    const financesPage = document.createElement('a');

    row.setAttribute('class', 'row mb-2');
    col.setAttribute('class', 'col mb-2');
    card.setAttribute('class' , 'row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative');
    position.setAttribute('class', 'col p-4 d-flex flex-column position-static');
    head1.setAttribute('class', 'mb-0');
    head2.setAttribute('class', 'mb-0');
    paragraph1.setAttribute('class', 'card-text mb-auto');
    paragraph2.setAttribute('class', 'card-text mb-auto');
    bioPage.setAttribute('class', 'btn btn-primary');
    bioPage.setAttribute('id', `${representatives[i].id}`)
    bioPage.setAttribute('onclick', `store("${representatives[i].id}", "${representatives[i].first_name}",
    "${representatives[i].last_name}", "${representatives[i].party}", "${representatives[i].state}",
    "${representatives[i].district}", "${representatives[i].url}", "${representatives[i].twitter_account}",
    "${representatives[i].facebook_account}", "${representatives[i].youtube_account}", "${representatives[i].seniority}",
    "${representatives[i].next_election}", "${representatives[i].total_votes}", "${representatives[i].missed_votes}",
    "${representatives[i].total_present}", "${representatives[i].last_updated}", "${representatives[i].office}",
    "${representatives[i].phone}", "${representatives[i].fax}", "${representatives[i].missed_votes_pct}",
    "${representatives[i].votes_with_party_pct}", "${representatives[i].votes_against_party_pct}");`)
    bioPage.setAttribute('href', 'politiciansBio.html')

    financesPage.setAttribute('class', 'btn btn-primary');
    financesPage.setAttribute('id', `${representatives[i].id}` + '_finance')
    financesPage.setAttribute('onclick', `store("${representatives[i].id}", "${representatives[i].first_name}", "${representatives[i].last_name}", "${representatives[i].party}", "${representatives[i].state}", "${representatives[i].district}");`)
    financesPage.setAttribute('href', 'financial_main.html')

    head1.textContent = representatives[i].first_name;
    if(representatives[i].middle_name != null) head1.textContent += " " + representatives[i].middle_name;
    head1.textContent += " " + representatives[i].last_name;
    if(representatives[i].party == 'R') head2.textContent = 'Republican';
    else head2.textContent = 'Democrat';
    paragraph1.textContent = "State: " + representatives[i].state
    paragraph2.textContent = "District: " + representatives[i].district;
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
    position.appendChild(paragraph2);
    position.appendChild(bioPage);
    position.appendChild(document.createElement("br"));
    position.appendChild(financesPage);

  }
}

function SetupPagination (representatives, wrapper, rows_per_page) {
	wrapper.innerHTML = "";
	let length = representatives.length;

	let page_count = Math.ceil(length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, representatives);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, representatives) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(representatives, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

function store(id, firstName, lastName, party, state, district, website,
  twitterHandle, facebookHandle, youtubeHandle, seniority, nextElection,
  totalVotes, missedVotes,totalPresent, lastUpdated, office, phone, fax,
  missedVotesPct, votesWithPartyPct, votesAgainstPartyPct){

  localStorage.setItem('politician_id', id);
  localStorage.setItem('politician_firstName', firstName);
  localStorage.setItem('politician_lastName', lastName);
  localStorage.setItem('politician_party', party);
  localStorage.setItem('politician_state', state);
  localStorage.setItem('politician_district', district);
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
