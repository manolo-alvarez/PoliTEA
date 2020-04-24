
localStorage.clear();

 //////////////// HTML elements and variables////////////////////////////////
 const list = document.getElementById('list')
 const pagination_element = document.getElementById('pagination');
 let current_page = 1;
 let rows = 2;
 let cols = 4;




 var topics = ["Agriculture and Food", "Animals", "Armed Forces and National Security", "Arts, Culture, Religion",
 "Civil Rights and Liberties, Minority Issues", "Commerce", "Congress", "Crime and Law Enforcement", 
 "Economics and Public Finance", "Education", "Emergency Management", "Energy", "Environmental Protection", "Families",
 "Finance and Financial Sector", "Foreign Trade and International Finance", "Government Operations and Politics", 
 "Health", "Housing and Community Development", "Immigration", "International Affairs", "Labor and Employment", "Law", 
 "Native Americans", "Public Lands and Natural Resources", "Science, Technology, Communications", "Social Sciences and History",
 "Social Welfare", "Sports and Recreation", "Taxation", "Transportation and Public Works", "Water Resources Development"]

 //////////////////// Get bills from DB ///////////////////////////////////

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://reflected-flux-270220.appspot.com/bills/all', false);
//xhttp.open('GET', 'http://localhost:3000/bills/all', false);
xhttp.send();

const allBills = JSON.parse(xhttp.responseText);
var bills = allBills;

/////////////////////////// Set-up Page /////////////////////////////////////
{
SetupPagination(topics, pagination_element, rows, cols);
DisplayList(topics, rows, cols, current_page);
}
 ////////////////////////////// Search Bar ////////////////////////////////////
{
  const searchBar = document.forms['searchBar'].querySelector('input');
  searchBar.addEventListener('keyup', function(e){
    if(!(e.key === 'Enter')){
      const select = document.getElementById('select');
      var option = select.getElementsByTagName('option')[select.selectedIndex].value;
      const phrase = e.target.value.toLowerCase();
      bills = allBills.filter(function(bill){
        var content = null;

        //if (option === 'keyword') content = .toLowerCase();
        if (option === 'name') content = bill.sponsor_name.toLowerCase();
        if (option === 'number') content = bill.number.toLowerCase();
  
        return content.includes(phrase);
      });
    } else{
      e.target.value = "";
      SetupPagination(topics, pagination_element, rows, cols);
      DisplayList(topics, rows, cols, current_page);
    }
  });
  } 
////////////////////////////// Functions /////////////////////////////////////
function DisplayList (topics, rows_per_page, cols_per_page, page) {
	document.getElementById('list').innerHTML = "";
	page--;

	let start = rows_per_page * cols_per_page * page;
	let end = start + rows_per_page * cols_per_page;
	console.log("start: " + start + " end: " + end);

  for (let i = start; i < topics.length && i<end; i+=4) {
      const row = document.createElement('div');
      row.setAttribute('class', 'row');
      row.setAttribute('style', 'margin-top:50px')

    for(let j = i; j < topics.length && j<end && j<(i+4); j++){
      const card = document.createElement('div');
      const cardBody = document.createElement('div');
      const cardFooter = document.createElement('div');
      const head1 = document.createElement('h3');
      //const head2 = document.createElement('h6');
      //const paragraph1 = document.createElement('p');
      const seeRecentBills = document.createElement('a');
      //const blankSpace = document.createElement('p');
      //const financesPage = document.createElement('a');

      card.setAttribute('class' , 'card');
      cardBody.setAttribute('id', 'cardBody');
      cardBody.setAttribute('class', 'card-body');
      cardFooter.setAttribute('id', 'cardFooter');
      cardFooter.setAttribute('class', 'card-footer');
      head1.setAttribute('class', 'mb-0');
      //head2.setAttribute('class', 'mb-0');
      //paragraph1.setAttribute('class', 'card-text mb-auto');
      seeRecentBills.setAttribute('class', 'btn btn-primary');
      seeRecentBills.setAttribute('id', `${topics[j]}`);
      topicsSpaces = topics[j].replace(/%20/g, ' ');
      //seeRecentBills.setAttribute('onclick', `store("${topicsSpaces}");`)
      seeRecentBills.setAttribute('href', 'billList.html?topic=' + topicsSpaces);


      head1.textContent = topics[j];
      //if(senators[j].middle_name != null) head1.textContent += " " + senators[j].middle_name;
      //head1.textContent += " " + senators[j].last_name;
      //if(senators[j].party == 'R') head2.textContent = 'Republican';
      //else head2.textContent = 'Democrat';
      //paragraph1.textContent = "State: " + senators[j].state
      seeRecentBills.textContent = "See Recent Bills";
      //blankSpace.textContent = " ";
      //financesPage.textContent = "Donors and Finances"

      row.appendChild(card);
      card.appendChild(cardBody);
      card.appendChild(cardFooter);
      cardBody.appendChild(head1);
      //cardBody.appendChild(blankSpace);
      //cardBody.appendChild(head2);
      //cardBody.appendChild(blankSpace);
      //cardBody.appendChild(paragraph1);
      cardFooter.appendChild(seeRecentBills);
      //cardFooter.appendChild(document.createElement("p"));
      //cardFooter.appendChild(financesPage);
    }
    list.appendChild(row);
  }
}

function SetupPagination (topics, wrapper, rows_per_page, cols_per_page) {
	wrapper.innerHTML = "";
	let length = topics.length;

	let page_count = Math.ceil(length / (rows_per_page*cols_per_page));
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, topics);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, topics) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(topics, rows, cols, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}


