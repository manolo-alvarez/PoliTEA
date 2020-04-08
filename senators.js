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
 let rows = 5;
 let cols = 4;
//////////////////// Get senators from DB ///////////////////////////////////

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://reflected-flux-270220.appspot.com/politicians/senators', false);
xhttp.send();

const allSenators = JSON.parse(xhttp.responseText);
var senators = allSenators;

/////////////////////////// Set-up Page /////////////////////////////////////
{
SetupPagination(senators, pagination_element, rows, cols);
DisplayList(senators, rows, cols, current_page);
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
    SetupPagination(senators, pagination_element, rows, cols);
    DisplayList(senators, rows, cols, current_page);
  }
});
}
////////////////////////////// Functions /////////////////////////////////////
function DisplayList (senators, rows_per_page, cols_per_page, page) {
	document.getElementById('list').innerHTML = "";
	page--;

	let start = rows_per_page * cols_per_page * page;
	let end = start + rows_per_page * cols_per_page;
	console.log("start: " + start + " end: " + end);

  for (let i = start; i < senators.length && i<end; i+=4) {
      const row = document.createElement('div');
      row.setAttribute('class', 'row');
      row.setAttribute('style', 'margin-top:50px')

    for(let j = i; j < senators.length && j<end && j<(i+4); j++){
      const card = document.createElement('div');
      const cardBody = document.createElement('div');
      const cardFooter = document.createElement('div');
      const head1 = document.createElement('h3');
      const head2 = document.createElement('h6');
      const paragraph1 = document.createElement('p');
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
      bioPage.setAttribute('class', 'btn btn-primary');
      bioPage.setAttribute('id', `${senators[j].id}`)
      bioPage.setAttribute('onclick', `store("${senators[j].id}", "${senators[j].first_name}",
      "${senators[j].last_name}", "${senators[j].party}", "${senators[j].state}",
      "${senators[j].district}", "${senators[j].url}", "${senators[j].twitter_account}",
      "${senators[j].facebook_account}", "${senators[j].youtube_account}", "${senators[j].seniority}",
      "${senators[j].next_election}", "${senators[j].total_votes}", "${senators[j].missed_votes}",
      "${senators[j].total_present}", "${senators[j].last_updated}", "${senators[j].office}",
      "${senators[j].phone}", "${senators[j].fax}", "${senators[j].missed_votes_pct}",
      "${senators[j].votes_with_party_pct}", "${senators[j].votes_against_party_pct}");`)
      bioPage.setAttribute('href', 'politiciansBio.html')

      financesPage.setAttribute('class', 'btn btn-primary');
      financesPage.setAttribute('id', `${senators[j].id}` + '_finance')
      financesPage.setAttribute('onclick', `store("${senators[j].id}", "${senators[j].first_name}", "${senators[j].last_name}", "${senators[j].party}", "${senators[j].state}", "${senators[j].district}");`)
      financesPage.setAttribute('href', 'financial_main.html')

      head1.textContent = senators[j].first_name;
      if(senators[j].middle_name != null) head1.textContent += " " + senators[j].middle_name;
      head1.textContent += " " + senators[j].last_name;
      if(senators[j].party == 'R') head2.textContent = 'Republican';
      else head2.textContent = 'Democrat';
      paragraph1.textContent = "State: " + senators[j].state
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
      cardFooter.appendChild(bioPage);
      cardFooter.appendChild(document.createElement("p"));
      cardFooter.appendChild(financesPage);
    }
    list.appendChild(row);
  }
}

function SetupPagination (senators, wrapper, rows_per_page, cols_per_page) {
	wrapper.innerHTML = "";
	let length = senators.length;

	let page_count = Math.ceil(length / (rows_per_page*cols_per_page));
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
		DisplayList(senators, rows, cols, current_page);

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
