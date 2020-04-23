
/* 
var query = require('url').parse(req.url,true).query;
var topic = query.id;
var option = query.option; */



localStorage.clear();

/* var topic = req.query.tagid; */

const queryString = window.location.search;
console.log(queryString);
topic = queryString.split('=')[1];
if(topic != null)topicSpaces = topic.replace(/%20/g, ' ');
else topicSpaces = null;

///////////////// HTML elements////////////////////////////////////////////////////
const list = document.getElementById('list')

/////////////////////////////////////////////////////////////////////////////
//if(topic != null) var url_test = 'https://reflected-flux-270220.appspot.com/bills/' + topic;
///else var url_test = 'https://reflected-flux-270220.appspot.com/bills/all'

if(topic != null) var url_test = 'http://localhost:3000/bills/' + topic;
else var url_test = 'http://localhost:3000/bills/all'

var xhttp = new XMLHttpRequest();
xhttp.open('GET', url_test, false);
xhttp.send();

const billsParse = JSON.parse(xhttp.responseText);

const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 10;

SetupPagination(billsParse, pagination_element, rows);
DisplayList(billsParse, rows, current_page);

function DisplayList (billsParse, rows_per_page, page) {
   document.getElementById('list').innerHTML = "";
   page--;

   let start = rows_per_page * page;
   let end = start + rows_per_page;
   console.log("start: " + start + " end: " + end);

   var header = document.getElementById("header");
   if(topicSpaces != null) {
      var text = document.createTextNode("Bills on " + topicSpaces);
      header.appendChild(text);
   }
 for (let i = start; i < billsParse.length && i<end ; i++) {

   const row = document.createElement('div');
   const col = document.createElement('div');
   const card = document.createElement('div');
   const position = document.createElement('div');
   const head1 = document.createElement('h6');
   const head2 = document.createElement('h4');
   const paragraph1 = document.createElement('p');
   const blankSpace = document.createElement('p');
   const moreBillInfo = document.createElement('a');
/*    const blankSpace = document.createElement('p');
   const financesPage = document.createElement('a'); */

   row.setAttribute('class', 'row mb-2');
   col.setAttribute('class', 'col mb-2');
   card.setAttribute('class' , 'row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative');
   position.setAttribute('class', 'col p-4 d-flex flex-column position-static');
   head1.setAttribute('class', 'mb-0');
   head2.setAttribute('class', 'mb-0');
   paragraph1.setAttribute('class', 'card-text mb-auto');
   moreBillInfo.setAttribute('class', 'btn btn-primary');
   moreBillInfo.setAttribute('number', `${billsParse[i].number}`)
   moreBillInfo.setAttribute('onclick', `f1("${billsParse[i].number}", "${billsParse[i].title}", "${billsParse[i].introduced_date}", "${billsParse[i].sponsor_title}", "${billsParse[i].sponsor_id}", "${billsParse[i].sponsor_name}", "${billsParse[i].sponsor_state}", "${billsParse[i].sponsor_party}", "${billsParse[i].primary_subject}", "${billsParse[i].summary}", "${billsParse[i].congressdotgov_url}");`)
   moreBillInfo.setAttribute('href', 'billTemplate.html')
/* 
   financesPage.setAttribute('class', 'btn btn-primary');
   financesPage.setAttribute('id', `${senators[i].id}`)
   financesPage.setAttribute('onclick', `f1("${senators[i].id}", "${senators[i].first_name}", "${senators[i].last_name}", "${senators[i].party}", "${senators[i].state}", "${senators[i].district}");`)
   financesPage.setAttribute('href', 'financial_main.html') */

  /*  if(billsParse[i].short_title != null) */
   head1.textContent = billsParse[i].short_title + " (" + billsParse[i].number + ")";
   //head1.textContent += " (" + billsParse[i].number + ")";
   head2.textContent = billsParse[i].introduced_date;

   paragraph1.textContent = billsParse[i].sponsor_title + " " + billsParse[i].sponsor_name + " (" + billsParse[i].sponsor_party + ") " + billsParse[i].sponsor_state;

   blankSpace.textContent = " ";

   moreBillInfo.textContent = "More Info";

   list.appendChild(row);
   row.appendChild(col);
   col.appendChild(card);
   card.appendChild(position);
   position.appendChild(head1);
   position.appendChild(blankSpace);
   position.appendChild(head2);
   position.appendChild(blankSpace);
   position.appendChild(paragraph1);
   position.appendChild(moreBillInfo);


   }
}

function SetupPagination (billsParse, wrapper, rows_per_page) {
   wrapper.innerHTML = "";
   let length = billsParse.length;

   let page_count = Math.ceil(length / rows_per_page);
   for (let i = 1; i < page_count + 1; i++) {
       let btn = PaginationButton(i, billsParse);
       wrapper.appendChild(btn);
   }
}

function PaginationButton (page, billsParse) {
   let button = document.createElement('button');
   button.innerText = page;

   if (current_page == page) button.classList.add('active');

   button.addEventListener('click', function () {
       current_page = page;
       DisplayList(billsParse, rows, current_page);

       let current_btn = document.querySelector('.pagenumbers button.active');
       current_btn.classList.remove('active');

       button.classList.add('active');
   });

   return button;
}

 function f1(number, title, date, sponsor_title, sponsor_id, sponsor_name, sponsor_state, sponsor_party, primary_subject, summary, congressdotgov_url){
 localStorage.setItem('bill_number', number);
 localStorage.setItem('bill_title', title);
 localStorage.setItem('bill_date', date);
 localStorage.setItem('bill_sTitle', sponsor_title);
 localStorage.setItem('bill_sID', sponsor_id);
 localStorage.setItem('bill_sName', sponsor_name);
 localStorage.setItem('bill_sState', sponsor_state);
 localStorage.setItem('bill_sParty', sponsor_party);
 localStorage.setItem('bill_subject', primary_subject);
 localStorage.setItem('bill_summary', summary);
 localStorage.setItem('bill_website', congressdotgov_url);

};