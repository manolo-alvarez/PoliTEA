
/* 
var query = require('url').parse(req.url,true).query;
var topic = query.id;
var option = query.option; */



localStorage.clear();

/* var topic = req.query.tagid; */

const queryString = window.location.search;
console.log(queryString);
topic = queryString.split('=')[1];
if(topic != null) topicSpaces = topic.replace(/%20/g, ' ');

///////////////// HTML elements////////////////////////////////////////////////////
const list = document.getElementById('list')

/////////////////////////////////////////////////////////////////////////////
//if(topic != null) var url_test = 'https://reflected-flux-270220.appspot.com/bills/topics/' + topic;
//else var url_test = 'https://reflected-flux-270220.appspot.com/bills/all'

if(topic != null) var url_test = 'http://localhost:3000/bills/topics/' + topic;
else var url_test = 'http://localhost:3000/bills/all'

var xhttp = new XMLHttpRequest();
xhttp.open('GET', url_test, false);
xhttp.send();

const billsParse = JSON.parse(xhttp.responseText);
var bills = billsParse;

const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 10;

/////////////////////////// Set-up Page /////////////////////////////////////
if(topic != null) {
   SetupPagination(bills, pagination_element, rows);
   DisplayList(bills, rows, current_page);
}
else {
   var text = document.createTextNode("Search All Bills");
   header.appendChild(text);
} 


////////////////////////////// Search Bar ////////////////////////////////////
{
   const searchBar = document.forms['searchBar'].querySelector('input');
   searchBar.addEventListener('keyup', function(e){
     if(!(e.key === 'Enter')){
       const select = document.getElementById('select');
       var option = select.getElementsByTagName('option')[select.selectedIndex].value;
       const phrase = e.target.value.toLowerCase();
       bills = billsParse.filter(function(bill){
         var content = null;
 
         if (option === 'keyword') content = bill.title.toLowerCase();
         if (option === 'name') content = bill.sponsor_name.toLowerCase();
         if (option === 'number') content = bill.number.toLowerCase();
   
         return content.includes(phrase);
       });
     } else{
       e.target.value = "";
         SetupPagination(bills, pagination_element, rows);
         DisplayList(bills, rows, current_page);
     }
   });
   }

   ////////////////////////////// Functions /////////////////////////////////////
function DisplayList (bills, rows_per_page, page) {
   document.getElementById('list').innerHTML = "";
   page--;

   let start = rows_per_page * page;
   let end = start + rows_per_page;
   console.log("start: " + start + " end: " + end);

   var header = document.getElementById("header");
   if(topic != null && document.getElementById("header").firstChild == null) {
      var text = document.createTextNode("Bills on " + topicSpaces);
      header.appendChild(text);
   }
   else if (document.getElementById("header").firstChild == null) {
      var text = document.createTextNode("Recent Bills")
      header.appendChild(text);
   }
   
 for (let i = start; i < bills.length && i<end ; i++) {

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
   moreBillInfo.setAttribute('number', `${bills[i].number}`)
   moreBillInfo.setAttribute('onclick', `f1("${bills[i].number}", "${bills[i].title}", "${bills[i].introduced_date}", "${bills[i].sponsor_title}", "${bills[i].sponsor_id}", "${bills[i].sponsor_name}", "${bills[i].sponsor_state}", "${bills[i].sponsor_party}", "${bills[i].primary_subject}", "${bills[i].summary}", "${bills[i].congressdotgov_url}");`)
   moreBillInfo.setAttribute('href', 'billTemplate.html')
/* 
   financesPage.setAttribute('class', 'btn btn-primary');
   financesPage.setAttribute('id', `${senators[i].id}`)
   financesPage.setAttribute('onclick', `f1("${senators[i].id}", "${senators[i].first_name}", "${senators[i].last_name}", "${senators[i].party}", "${senators[i].state}", "${senators[i].district}");`)
   financesPage.setAttribute('href', 'financial_main.html') */

  /*  if(bills[i].short_title != null) */
   head1.textContent = bills[i].short_title + " (" + bills[i].number + ")";
   //head1.textContent += " (" + bills[i].number + ")";
   head2.textContent = bills[i].introduced_date;

   paragraph1.textContent = bills[i].sponsor_title + " " + bills[i].sponsor_name + " (" + bills[i].sponsor_party + ") " + bills[i].sponsor_state;

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

function SetupPagination (bills, wrapper, rows_per_page) {
   wrapper.innerHTML = "";
   let length = bills.length;

   let page_count = Math.ceil(length / rows_per_page);
   for (let i = 1; i < page_count + 1; i++) {
   //for (let i = 1; i < 11; i++) {
       let btn = PaginationButton(i, bills);
       wrapper.appendChild(btn);
   }
}

function PaginationButton (page, bills) {
   let button = document.createElement('button');
   button.innerText = page;

   if (current_page == page) button.classList.add('active');

   button.addEventListener('click', function () {
       current_page = page;
       DisplayList(bills, rows, current_page);

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