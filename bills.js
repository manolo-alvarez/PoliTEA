/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/06/2020
 * @summary: Javascript file that pulls politicians ProPublica API
 */

const app = document.getElementById('billsRoot')
const container = document.createElement('div')
const cards = document.createElement('div')
container.setAttribute('class', 'container')
cards.setAttribute('class', 'card-body')
app.appendChild(container)
container.appendChild(cards)

const bill_number = localStorage.getItem('bill_number');
const bill_title = localStorage.getItem('politician_firstName');
const bill_date = localStorage.getItem('bill_date');
const sponsor_title = localStorage.getItem('bill_sTitle');
const sponsor_name = localStorage.getItem('bill_sName');
const sponsor_state = localStorage.getItem('bill_sState');
const sponsor_party = localStorage.getItem('bill_sParty');
const bill_subject = localStorage.getItem('primary_subject');
const bill_summary = localStorage.getItem('bill_summary');
const bill_website = localStorage.getItem('bill_website');






      const bill = document.createElement('div')
      const title = document.createElement('h4')
      const attributes = document.createElement('ol')
      const number = document.createElement('li')
      const sponsor = document.createElement('li')
      const date = document.createElement('li')
      const summary = document.createElement('li')
      const gov_site = document.createElement('li')
      const link_site = document.createElement('a')


      bill.setAttribute('class', 'p-4')
      title.setAttribute('class', 'font-italic')
      attributes.setAttribute('class', 'list-unstyled mb-0')
      link_site.setAttribute('href', bill_website)

      title.textContent = bill_title;
      number.textContent = bill_number;
      sponsor.textContent = sponsor_title + " " + sponsor_name + " (" + sponsor_party + ") " + sponsor_state;
      summary.textContent = summary;
      link_site.textContent = "Congress.gov Link";


      cards.appendChild(bill);
      bill.appendChild(title);
      bill.appendChild(number);
      bill.appendChild(sponsor);
      bill.appendChild(date);
      if (summary != null) {bill.appendChild(summary);}
      bill.appendChild(gov_site);
      gov_site.appendChild(link_site);


  
