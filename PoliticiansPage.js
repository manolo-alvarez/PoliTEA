export class PoliticiansPage {

  #politicians
  #pagination_element
  #current_page
  #rows
  #cols
#cardWidth

    constructor(politicians, pagination_element, current_page, rows, cols, cardWidth) {
        this.politicians = politicians;
        this.pagination_element = pagination_element;
        this.current_page = current_page;
        this.rows = rows;
        this.cols = cols;
        this.cardWidth = cardWidth;
    }



     ////////////////////////////// Functions /////////////////////////////////////


     updateFields(politicians, current_page, rows, cols) {
      this.politicians = politicians;
      this.current_page = current_page;
      this.rows = rows;
      this.cols = cols;
     }

     paginationButton (page) {
        let button = document.createElement('button');
        button.innerText = page;
    
        if (this.current_page == page) button.classList.add('active');
    
        button.addEventListener('click', function () {
            this.current_page = page;
            this.displayList(page);
    
            let current_btn = document.querySelector('.pagenumbers button.active');
            current_btn.classList.remove('active');
    
            button.classList.add('active');
        });
    
        return button;
    }

     setupPagination () {
        this.pagination_element.innerHTML = "";
        let length = this.politicians.length;
    
        let page_count = Math.ceil(length / (this.rows*this.cols));
        for (let i = 1; i < page_count + 1; i++) {
            let btn = this.paginationButton(i);
            this.pagination_element.appendChild(btn);
        }
    }


    
displayList(page) {
    document.getElementById('list').innerHTML = "";
    page--;
    console.log(this.politicians);
    let start = this.rows * this.cols * page;
    let end = start + this.rows * this.cols;
    for (let i = start; i < this.politicians.length && i < end; i += 4) {
      const row = document.createElement('div');
      var rowWidth = 4 * this.cardWidth;
      if (this.politicians.length - i < 4)
        rowWidth = this.cardWidth * (this.politicians.length - i);
      row.setAttribute('class', 'row');
      row.setAttribute('style', `margin-top:50px; width:${rowWidth}px`);
      for (let j = i; j < this.politicians.length && j < end && j < (i + 4); j++) {
        const card = document.createElement('div');
        const image = document.createElement('div');
        const cardBody = document.createElement('div');
        const bodyTitle = document.createElement('div');
        const bodyParagraph = document.createElement('div');
        const cardFooter = document.createElement('div');
        const head1 = document.createElement('h3');
        const head2 = document.createElement('h3');
        const attribute1 = document.createElement('h6');
        const attribute2 = document.createElement('a');
        const attribute3 = document.createElement('p');
        const bioPage = document.createElement('a');
        const img = document.createElement('img');
        card.setAttribute('class', 'card');
        card.setAttribute('style', 'width: 255px');
        image.setAttribute('style', 'width: 255px; height: 225px;');
        cardBody.setAttribute('id', 'cardBody');
        cardBody.setAttribute('class', 'card-body');
        bodyTitle.setAttribute('id', 'bodyTitle');
        bodyTitle.setAttribute('style', 'height: 74.66px; vertical-align: middle; text-align: center;');
        bodyParagraph.setAttribute('id', 'bodyParagraph');
        bodyParagraph.setAttribute('style', 'height: 74.66px; vertical-align: middle; text-align: center;');
        cardFooter.setAttribute('id', 'cardFooter');
        cardFooter.setAttribute('class', 'card-footer');
        cardFooter.setAttribute('style', 'text-align: center;');
        head1.setAttribute('class', 'mb-0');
        head2.setAttribute('class', 'mb-0');
        attribute1.setAttribute('class', 'mb-0');
        attribute2.setAttribute('class', 'card-text mb-auto');
        attribute2.setAttribute('href', 'state_overview.html');
        attribute2.setAttribute('onclick', `f1("${this.politicians[j].state}")`);
        attribute3.setAttribute('class', 'card-text mb-auto');
        bioPage.setAttribute('class', 'btn btn-primary');

        //refactored part
        bioPage.setAttribute('id', `${this.politicians[j].id}`);
        const politicianObject = JSON.stringify(this.politicians[j]);
        bioPage.addEventListener("click", function(event) {
          storeObject(politicianObject);
        });
//

        bioPage.setAttribute('href', 'politiciansBio.html');
        bioPage.setAttribute('style', 'vertical-align: middle; ');
        img.setAttribute("class", "w3-image");
        img.setAttribute('alt', 'Avatar');
        img.setAttribute('style', 'display: block; width: 175px; height: 225px; margin-left: auto; margin-right: auto; margin-top: 5px; border-radius: 50%;');
        head1.textContent = this.politicians[j].first_name;
        head2.textContent = this.politicians[j].last_name;
        attribute1.textContent = this.politicians[j].party;
        attribute2.textContent = this.politicians[j].state;
        attribute3.textContent = "District " + this.politicians[j].district;
        bioPage.textContent = "Biography";
        img.src = 'https://bioguideretro.congress.gov/Static_Files/images/photos/' + this.politicians[j].id.charAt(0) + '/' + this.politicians[j].id + '.jpg';
        row.appendChild(card);
        card.appendChild(image);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);
        image.appendChild(img);
        cardBody.appendChild(bodyTitle);
        cardBody.appendChild(bodyParagraph);
        bodyTitle.appendChild(head1);
        bodyTitle.appendChild(head2);
        bodyParagraph.appendChild(attribute1);
        bodyParagraph.appendChild(attribute2);
        bodyParagraph.appendChild(attribute3);
        cardFooter.appendChild(bioPage);
        cardFooter.appendChild(document.createElement("p"));
      }
      list.appendChild(row);
    }
  }


  store(id, firstName, lastName, party, state, district, website,
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
  
 f1(state){
    localStorage.setItem('state', state);
  }
  
  
}