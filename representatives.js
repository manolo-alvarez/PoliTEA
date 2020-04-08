/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/06/2020
 * @summary: Javascript file that runs the representatives page
 */

// Clear Storage
localStorage.clear();

//////////////// HTML elements and variables////////////////////////////////

const list = document.getElementById('list')
const pagination_element = document.getElementById('pagination');
let current_page = 1;
let rows = 5;
let cols = 4;

 //////////////////// Get Representatives from DB ///////////////////////////

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://reflected-flux-270220.appspot.com/politicians/congressman', false);
xhttp.send();

const allReps = JSON.parse(xhttp.responseText);
var representatives = allReps;

/////////////////////////// Set-up Page /////////////////////////////////////
{
SetupPagination(representatives, pagination_element, rows, cols);
DisplayList(representatives, rows, cols, current_page);
}
////////////////////////////// Search Bar ////////////////////////////////////
{
const searchBar = document.forms['searchBar'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  if(!(e.key === 'Enter')){
    const phrase = e.target.value.toLowerCase();
    representatives = allReps.filter(function(rep){
      const name = rep.first_name.toLowerCase() + rep.last_name.toLowerCase();
      return name.includes(phrase);
    });
  } else{
    e.target.value = "";
    SetupPagination(representatives, pagination_element, rows, cols);
    DisplayList(representatives, rows, cols, current_page);
  }
});
}
////////////////////////////// Functions /////////////////////////////////////
function DisplayList (representatives, rows_per_page, cols_per_page, page) {
	document.getElementById('list').innerHTML = "";
	page--;

	let start = rows_per_page * cols_per_page * page;
	let end = start + rows_per_page * cols_per_page;
	console.log("start: " + start + " end: " + end);

  for (let i = start; i < representatives.length && i<end; i+=4) {
      const row = document.createElement('div');
      row.setAttribute('class', 'row');
      row.setAttribute('style', 'margin-top:50px')

    for(let j = i; j < representatives.length && j<end && j<(i+4); j++){
      const card = document.createElement('div');
      const cardBody = document.createElement('div');
      const cardFooter = document.createElement('div');
      const head1 = document.createElement('h3');
      const head2 = document.createElement('h6');
      const paragraph1 = document.createElement('p');
      const paragraph2 = document.createElement('p');
      const bioPage = document.createElement('a');
      const blankSpace = document.createElement('p');
      const financesPage = document.createElement('a');

      card.setAttribute('class' , 'card');
      cardBody.setAttribute('id', 'cardBody');
      cardBody.setAttribute('class', 'card-body');
      cardFooter.setAttribute('id', 'cardFooter');
      cardFooter.setAttribute('class', 'card-footer');
      head1.setAttribute('class', 'mb-0');
      head2.setAttribute('class', 'mb-0');
      paragraph1.setAttribute('class', 'card-text mb-auto');
      paragraph2.setAttribute('class', 'card-text mb-auto');
      bioPage.setAttribute('class', 'btn btn-primary');
      bioPage.setAttribute('id', `${representatives[j].id}`)
      bioPage.setAttribute('onclick', `store("${representatives[j].id}", "${representatives[j].first_name}",
      "${representatives[j].last_name}", "${representatives[j].party}", "${representatives[j].state}",
      "${representatives[j].district}", "${representatives[j].url}", "${representatives[j].twitter_account}",
      "${representatives[j].facebook_account}", "${representatives[j].youtube_account}", "${representatives[j].seniority}",
      "${representatives[j].next_election}", "${representatives[j].total_votes}", "${representatives[j].missed_votes}",
      "${representatives[j].total_present}", "${representatives[j].last_updated}", "${representatives[j].office}",
      "${representatives[j].phone}", "${representatives[j].fax}", "${representatives[j].missed_votes_pct}",
      "${representatives[j].votes_with_party_pct}", "${representatives[j].votes_against_party_pct}");`)
      bioPage.setAttribute('href', 'politiciansBio.html')

      financesPage.setAttribute('class', 'btn btn-primary');
      financesPage.setAttribute('id', `${representatives[j].id}` + '_finance')
      financesPage.setAttribute('onclick', `store("${representatives[j].id}", "${representatives[j].first_name}", "${representatives[j].last_name}", "${representatives[j].party}", "${representatives[j].state}", "${representatives[j].district}");`)
      financesPage.setAttribute('href', 'financial_main.html')

      head1.textContent = representatives[j].first_name;
      if(representatives[j].middle_name != null) head1.textContent += " " + representatives[j].middle_name;
      head1.textContent += " " + representatives[j].last_name;
      if(representatives[j].party == 'R') head2.textContent = 'Republican';
      else head2.textContent = 'Democrat';
      paragraph1.textContent = "State: " + representatives[j].state
      paragraph2.textContent = "District: " + representatives[j].district;
      bioPage.textContent = "Biography";
      blankSpace.textContent = " ";
      financesPage.textContent = "Donors and Finances"

      row.appendChild(card);
      card.appendChild(cardBody);
      card.appendChild(cardFooter);
      cardBody.appendChild(head1);
      cardBody.appendChild(blankSpace);
      cardBody.appendChild(head2);
      cardBody.appendChild(blankSpace);
      cardBody.appendChild(paragraph1);
      cardBody.appendChild(paragraph2);
      cardFooter.appendChild(bioPage);
      cardFooter.appendChild(document.createElement("p"));
      cardFooter.appendChild(financesPage);
    }
    list.appendChild(row);
  }
}

function SetupPagination (representatives, wrapper, rows_per_page, cols_per_page) {
	wrapper.innerHTML = "";
	let length = representatives.length;

	let page_count = Math.ceil(length / (rows_per_page*cols_per_page));
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
		DisplayList(representatives, rows, cols, current_page);

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
