//////////////// HTML elements and variables////////////////////////////////
const list = document.getElementById('list')
const pagination_element = document.getElementById('pagination');
let current_page = 1;
let rows = 5;
let cols = 4;
let cardWidth = 285;

 //////////////////// Get members from DB ///////////////////////////
 const industry_code = localStorage.getItem('industry_code');
 // const industry_code = 'A05'
 const industry = localStorage.getItem('industry');

 console.log("industry_code: " + industry_code);
 console.log("industry: " + industry);
 document.getElementById("header").innerHTML = "Politicians Who Fundraised for " + industry + " Industry <br>";
 var xhttp = GetContributors(industry_code);

const all_members = JSON.parse(xhttp.responseText);
var members = all_members;
// console.log(members)

////////////////////////////// Sort By //////////////////////////////////////
{
var sort = document.getElementById("sort");

sort.addEventListener("change", function() {
    var sortOption = sort.getElementsByTagName('option')[sort.selectedIndex].value;

    if (sortOption === 'name') members.sort((a,b) => (a.member_name > b.member_name) ? 1 : ((b.member_name > a.member_name) ? -1 : 0));
    if (sortOption === 'state') members.sort((a,b) => (a.state > b.state) ? 1 : ((b.state > a.state) ? -1 : 0));
    if (sortOption === 'most') members.sort((a,b) => (a.total < b.total) ? 1 : ((b.total < a.total) ? -1 : 0));
    if (sortOption === 'least') members.sort((a,b) => (a.total > b.total) ? 1 : ((b.total > a.total) ? -1 : 0));

    SetupPagination(members, pagination_element, rows, cols);
    DisplayList(members, rows, cols, current_page);
});
}
/////////////////////////// Set-up Page /////////////////////////////////////
{
SetupPagination(members, pagination_element, rows, cols);
DisplayList(members, rows, cols, current_page);
}
////////////////////////////// Search Bar ////////////////////////////////////
{
const searchBar = document.forms['searchBar'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  if(!(e.key === 'Enter')){
    const select = document.getElementById('select');
    var option = select.getElementsByTagName('option')[select.selectedIndex].value;
    const phrase = e.target.value.toLowerCase();
    members = all_members.filter(function(m){
      var content = null;

      if (option === 'name') content = m.member_name.toLowerCase();
      if (option === 'state') content = m.state.toLowerCase();
      if (option === 'party') {
          if ("republican".includes(phrase)) return m.party == 'R'
          else if ("democrat".includes(phrase)) return m.party == 'D'
      }
      return content.includes(phrase);
    });
  } else{
    e.target.value = "";
    SetupPagination(members, pagination_element, rows, cols);
    DisplayList(members, rows, cols, current_page);
  }
});
}
////////////////////////////// Functions /////////////////////////////////////
function DisplayList (members, rows_per_page, cols_per_page, page) {
	document.getElementById('list').innerHTML = "";
	page--;

	let start = rows_per_page * cols_per_page * page;
	let end = start + rows_per_page * cols_per_page;
	console.log("start: " + start + " end: " + end);

  for (let i = start; i < members.length && i<end; i+=4) {
      const row = document.createElement('div');
      var rowWidth = 4*cardWidth;
      if(members.length-i < 4) rowWidth = cardWidth*(members.length-i);
      row.setAttribute('class', 'row');
      row.setAttribute('style', `margin-top:50px; width:${rowWidth}px`)

    for(let j = i; j < members.length && j<end && j<(i+4); j++){
      const card = document.createElement('div');
      const cardBody = document.createElement('div');
      const bodyTitle = document.createElement('div');
      const bodyParagraph = document.createElement('div');
      const cardFooter = document.createElement('div');
      const head1 = document.createElement('a');
      const head2 = document.createElement('h3');
      const attribute1 = document.createElement('h6');
      const attribute2 = document.createElement('a');
      const footerBody = document.createElement('p');

      card.setAttribute('class' , 'card');
      card.setAttribute('style' , 'width: 255px');
      cardBody.setAttribute('id', 'cardBody');
      cardBody.setAttribute('class', 'card-body');
      bodyTitle.setAttribute('id', 'bodyTitle');
      bodyTitle.setAttribute('style', 'height: 74.66px; vertical-align: middle; text-align: center;');
      bodyParagraph.setAttribute('id', 'bodyParagraph');
      bodyParagraph.setAttribute('style', 'height: 74.66px; vertical-align: middle; text-align: center;');
      cardFooter.setAttribute('id', 'cardFooter');
      cardFooter.setAttribute('class', 'card-footer');
      head1.setAttribute('class', 'featurette-heading');
      head1.setAttribute('style', 'font-family: Playfair Display; font-size: 175%; height: 50px; vertical-align: middle; text-align: center;');

      attribute1.setAttribute('class', 'mb-0');
      attribute2.setAttribute('class', 'card-text mb-auto');

      var request = getCID(members[j].cid);
      
      var bio_member = JSON.parse(request.responseText);
      bio_member = bio_member[0]
      // var members = all_members;
      // console.log(members)

      const politicianObject = JSON.stringify(bio_member);
      head1.addEventListener("click", function(event) {
        storePolitician(politicianObject);
      });
      head1.setAttribute('href', 'politiciansBio.html')

      attribute2.setAttribute('onclick',  `storeState("${bio_member.state}")`)
      attribute2.setAttribute('href', 'state_overview.html')

      var namesplit = members[j].member_name.split(', ');
      head1.innerHTML = namesplit[1] + "<br>" + namesplit[0];

      attribute1.textContent = members[j].party == 'D' ? 'Democrat': 'Republican';
      attribute2.textContent = bio_member.state;

      footerBody.innerHTML += "Total raised: $" + members[j].total +"<br>"
      footerBody.innerHTML += "By PACS: $" + members[j].pacs + "<br>"
      footerBody.innerHTML += "Individual funds: $" + members[j].indivs

      row.appendChild(card);
      card.appendChild(cardBody);
      card.appendChild(cardFooter);
      cardBody.appendChild(bodyTitle);
      cardBody.appendChild(bodyParagraph);
      bodyTitle.appendChild(head1);

      bodyParagraph.appendChild(document.createElement("br"));
      bodyParagraph.appendChild(attribute1);
      bodyParagraph.appendChild(attribute2);
      cardFooter.appendChild(footerBody);
    }
    list.appendChild(row);
  }
}

function SetupPagination (members, wrapper, rows_per_page, cols_per_page) {
	wrapper.innerHTML = "";
	let length = members.length;

	let page_count = Math.ceil(length / (rows_per_page*cols_per_page));
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, members);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, members) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(members, rows, cols, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

function storeState(state){

  // localStorage.setItem('cid', cid);
  localStorage.setItem('state', state);
};
