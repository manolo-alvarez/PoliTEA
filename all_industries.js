// Clear Storage
localStorage.clear();

//////////////// HTML elements and variables////////////////////////////////
const list = document.getElementById('list')
const pagination_element = document.getElementById('pagination');
let current_page = 1;
let rows = 5;
let cols = 4;
let cardWidth = 285;

 //////////////////// Get industries from DB ///////////////////////////

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://reflected-flux-270220.appspot.com/industries');
// xhttp.open('GET', 'http://localhost:3000/industries', false);

xhttp.send();

const all_industries = JSON.parse(xhttp.responseText);
var industries = all_industries;
console.log(industries)
industries.sort((a,b) => (a.industry > b.industry) ? 1 : ((b.industry > a.industry) ? -1 : 0));
/////////////////////////// Set-up Page /////////////////////////////////////
{
SetupPagination(industries, pagination_element, rows, cols);
DisplayList(industries, rows, cols, current_page);
}
////////////////////////////// Search Bar ////////////////////////////////////
{
const searchBar = document.forms['searchBar'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  if(!(e.key === 'Enter')){
    // const select = document.getElementById('select');
    var option = 'industry';
    const phrase = e.target.value.toLowerCase();
    industries = all_industries.filter(function(ind){
      var content = null;

      content = ind.industry.toLowerCase();

      return content.includes(phrase);
    });
  } else{
    e.target.value = "";
    SetupPagination(industries, pagination_element, rows, cols);
    DisplayList(industries, rows, cols, current_page);
  }
});
}
////////////////////////////// Functions /////////////////////////////////////
function DisplayList (industries, rows_per_page, cols_per_page, page) {
	document.getElementById('list').innerHTML = "";
	page--;

	let start = rows_per_page * cols_per_page * page;
	let end = start + rows_per_page * cols_per_page;
	console.log("start: " + start + " end: " + end);

  for (let i = start; i < industries.length && i<end; i+=4) {
      const row = document.createElement('div');
      var rowWidth = 4*cardWidth;
      if(industries.length-i < 4) rowWidth = cardWidth*(industries.length-i);
      row.setAttribute('class', 'row');
      row.setAttribute('style', `margin-top:50px; width:${rowWidth}px`)

    for(let j = i; j < industries.length && j<end && j<(i+4); j++){
      const card = document.createElement('div');
      const cardBody = document.createElement('div');
      const bodyTitle = document.createElement('div');
      const cardFooter = document.createElement('div');
      const head1 = document.createElement('h4');

      const fundraisersPage = document.createElement('a');
      const committeesPage = document.createElement('a');

      card.setAttribute('class' , 'card');
      card.setAttribute('style' , 'width: 255px');
      cardBody.setAttribute('id', 'cardBody');
      cardBody.setAttribute('class', 'card-body');
      bodyTitle.setAttribute('id', 'bodyTitle');
      bodyTitle.setAttribute('style', 'height: 50px; vertical-align: middle; text-align: center;');

      cardFooter.setAttribute('id', 'cardFooter');
      cardFooter.setAttribute('class', 'card-footer');
      head1.setAttribute('class', 'mb-0');

      fundraisersPage.setAttribute('class', 'btn btn-primary');

      console.log(industries[j].industry_code)
      fundraisersPage.setAttribute('id', `${industries[j].industry_code}`)
      fundraisersPage.setAttribute('onclick', `store("${industries[j].industry}","${industries[j].industry_code}");`)

      fundraisersPage.setAttribute('href', 'fundraisers.html')

      committeesPage.setAttribute('class', 'btn btn-primary');
      committeesPage.setAttribute('id', `${industries[j].industry_code}`)
      committeesPage.setAttribute('onclick', `store("${industries[j].industry}", "${industries[j].industry_code}";`)

      head1.textContent = industries[j].industry;
      fundraisersPage.textContent = "Contributing Politicians";

      row.appendChild(card);
      card.appendChild(cardBody);
      card.appendChild(cardFooter);
      cardBody.appendChild(bodyTitle);
      bodyTitle.appendChild(head1);
      cardFooter.appendChild(fundraisersPage);

    }
    list.appendChild(row);
  }
}

function SetupPagination (industries, wrapper, rows_per_page, cols_per_page) {
	wrapper.innerHTML = "";
	let length = industries.length;

	let page_count = Math.ceil(length / (rows_per_page*cols_per_page));
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, industries);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, industries) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(industries, rows, cols, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

function store(industry, industry_code){
  localStorage.setItem('industry', industry);
  localStorage.setItem('industry_code', industry_code);
};
