/**
 * @author: Aidan McGraw
 * @lastRevised: 04/24/2020
 * @summary: 
 */

const app = document.getElementById('billsRoot')
const container = document.createElement('div')
const cards = document.createElement('div')
container.setAttribute('class', 'container')
cards.setAttribute('class', 'card-body')
app.appendChild(container)
container.appendChild(cards)


if(localStorage.getItem('bill_id') != null) 
  //var bill_id_temp = localStorage.getItem('bill_id').split("-")[0];
  var bill_id_temp = localStorage.getItem('bill_id');

else var bill_id_temp = null;
const bill_id = bill_id_temp;

if(localStorage.getItem('from_poliBio') != null)
  var from_poliBio = localStorage.getItem('from_poliBio');




if(localStorage.getItem('from_poliBio') == 'yep') {
  var xhttp = getBillByID(bill_id);
        
        const foundBill = JSON.parse(xhttp.responseText);
/*         bills = billsParse;

       bills = billsParse.filter(function(bill){
        var content = null;
 
       content = bill.bill_id;
  
        return content.includes(bill_id);
      }); */
          localStorage.setItem('bill_number', foundBill.number);
          localStorage.setItem('bill_title', foundBill.title);
          localStorage.setItem('bill_date', foundBill.date);
          localStorage.setItem('bill_sTitle', foundBill.sponsor_title);
          localStorage.setItem('bill_sID', foundBill.sponsor_id);
          localStorage.setItem('bill_sName', foundBill.sponsor_name);
          localStorage.setItem('bill_sState', foundBill.sponsor_state);
          localStorage.setItem('bill_sParty', foundBill.sponsor_party);
          localStorage.setItem('bill_subject', foundBill.primary_subject);
          localStorage.setItem('bill_summary', foundBill.summary);
          localStorage.setItem('bill_website', foundBill.congressdotgov_url);
              
}



const bill_number = localStorage.getItem('bill_number');
const bill_title = localStorage.getItem('bill_title');
const bill_date = localStorage.getItem('bill_date');
const sponsor_title = localStorage.getItem('bill_sTitle');
const sponsor_id = localStorage.getItem('bill_sID');
const sponsor_name = localStorage.getItem('bill_sName');
const sponsor_state = localStorage.getItem('bill_sState');
const sponsor_party = localStorage.getItem('bill_sParty');
const bill_subject = localStorage.getItem('primary_subject');
const bill_summary = localStorage.getItem('bill_summary');
const bill_website = localStorage.getItem('bill_website');


console.log("Number: " + bill_number);
console.log("Title: " + bill_title);
console.log("Date Introduced: " + bill_date);
console.log("Sponsor Title: " + sponsor_title);
console.log("Sponsor ID: " + sponsor_id);
console.log("Sponsor Name: " + sponsor_name);
console.log("Sponsor State: " + sponsor_state);
console.log("Sponsor Party: " + sponsor_party);
console.log("Subject: " + bill_subject);
console.log("Summary: " + bill_summary);
console.log("Website: " + bill_website);
console.log("From politicianBio page? : " + from_poliBio);
console.log("Bill ID: " + bill_id);


      const bill = document.createElement('div')
      const title = document.createElement('h4')
      const attributes = document.createElement('ol')
      const number = document.createElement('li')
      const sponsor = document.createElement('li')
      const link_sponsor = document.createElement('a')
      const date = document.createElement('li')
      const summary = document.createElement('li')
      const gov_site = document.createElement('li')
      const link_site = document.createElement('a')


      bill.setAttribute('class', 'p-4')
      title.setAttribute('class', 'font-italic')
      link_sponsor.setAttribute('onclick', `f1(sponsor_id);`)
      link_sponsor.setAttribute('href', 'politiciansBio.html')
      attributes.setAttribute('class', 'list-unstyled mb-0')
      link_site.setAttribute('href', bill_website)

      title.textContent = bill_title;
      number.textContent = bill_number;
      link_sponsor.textContent = sponsor_title + " " + sponsor_name + " (" + sponsor_party + ") " + sponsor_state;
      date.textContent = bill_date;
      summary.textContent = bill_summary;
      link_site.textContent = "Congress.gov Link";


      cards.appendChild(bill);
      bill.appendChild(title);
      bill.appendChild(number);
      bill.appendChild(sponsor);
      sponsor.appendChild(link_sponsor);
      bill.appendChild(date);
      if (bill_summary.length > 0) {bill.appendChild(summary);}
      bill.appendChild(gov_site);
      gov_site.appendChild(link_site);


  
      function f1(sponsor_id){
        //var url = 'https://localhost:3000/politicians/' + sponsor_id;
        //localStorage.clear();
  
  
        var url = 'https://reflected-flux-270220.appspot.com/politicians/' + sponsor_id;
        
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, false);
        xhttp.send();
        
        const politician = JSON.parse(xhttp.responseText);
  
  
        localStorage.setItem('politician_id', politician[0].id);
        localStorage.setItem('politician_firstName', politician[0].first_name);
        localStorage.setItem('politician_lastName', politician[0].last_name);
        localStorage.setItem('politician_party', politician[0].party);
        localStorage.setItem('politician_state', politician[0].state);
        localStorage.setItem('politician_district', politician[0].district);
        //if(localStorage.getItem('politician_district') == 'undefined' || localStorage.getItem('politician_district') == 'null') 
        //  localStorage.removeItem('politician_district');
  
            localStorage.setItem('politician_website', politician[0].url);
            localStorage.setItem('politician_twitterHandle', politician[0].twitter_account);
            localStorage.setItem('politician_facebookHandle', politician[0].facebook_account);
            localStorage.setItem('politician_youtubeHandle', politician[0].youtube_account);
            localStorage.setItem('politician_seniority', politician[0].seniority);
            localStorage.setItem('politician_nextElection', politician[0].next_election);
            localStorage.setItem('politician_totalVotes', politician[0].total_votes);
            localStorage.setItem('politician_missedVotes', politician[0].missed_votes);
            localStorage.setItem('politician_totalPresent', politician[0].total_present);
            localStorage.setItem('politician_lastUpdated', politician[0].last_updated);
            localStorage.setItem('politician_office', politician[0].office);
            localStorage.setItem('politician_phone', politician[0].phone);
            localStorage.setItem('politician_fax', politician[0].fax);
            localStorage.setItem('politician_missedVotesPct', politician[0].missed_votes_pct);
            localStorage.setItem('politician_votesWithPartyPct', politician[0].votes_with_party_pct);
            localStorage.setItem('politician_votesAgainstPartyPct', politician[0].votes_against_party_pct);
          
  
  
        //xhttp.open('GET', url, false);
  
  
        window.location.href="politiciansBio.html";
      };

      