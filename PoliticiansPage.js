class PoliticiansPage {


    constructor(politicians, pagination_element, current_page, rows, cols) {
        this.politicians-politicians;
        this.pagination_element = pagination_element;
        this.current_page = current_page;
        this.rows = rows;
        this.cols = cols;
    }








     ////////////////////////////// Functions /////////////////////////////////////

     paginationButton (page, representatives) {
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

     setupPagination (representatives, wrapper, rows_per_page, cols_per_page) {
        .innerHTML = "";
        let length = representatives.length;
    
        let page_count = Math.ceil(length / (rows_per_page*cols_per_page));
        for (let i = 1; i < page_count + 1; i++) {
            let btn = PaginationButton(i, representatives);
            wrapper.appendChild(btn);
        }
    }


    
displayList(politicians, rows_per_page, cols_per_page, page) {
    document.getElementById('list').innerHTML = "";
    page--;
    console.log(politicians);
    let start = rows_per_page * cols_per_page * page;
    let end = start + rows_per_page * cols_per_page;
    for (let i = start; i < politicians.length && i < end; i += 4) {
      const row = document.createElement('div');
      var rowWidth = 4 * cardWidth;
      if (politicians.length - i < 4)
        rowWidth = cardWidth * (politicians.length - i);
      row.setAttribute('class', 'row');
      row.setAttribute('style', `margin-top:50px; width:${rowWidth}px`);
      for (let j = i; j < politicians.length && j < end && j < (i + 4); j++) {
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
        attribute2.setAttribute('onclick', `f1("${politicians[j].state}")`);
        attribute3.setAttribute('class', 'card-text mb-auto');
        bioPage.setAttribute('class', 'btn btn-primary');
        bioPage.setAttribute('id', `${politicians[j].id}`);
        bioPage.setAttribute('onclick', `store("${politicians[j].id}", "${politicians[j].first_name}",
        "${politicians[j].last_name}", "${politicians[j].party}", "${politicians[j].state}",
        "${politicians[j].district}", "${politicians[j].url}", "${politicians[j].twitter_account}",
        "${politicians[j].facebook_account}", "${politicians[j].youtube_account}", "${politicians[j].seniority}",
        "${politicians[j].next_election}", "${politicians[j].total_votes}", "${politicians[j].missed_votes}",
        "${politicians[j].total_present}", "${politicians[j].last_updated}", "${politicians[j].office}",
        "${politicians[j].phone}", "${politicians[j].fax}", "${politicians[j].missed_votes_pct}",
        "${politicians[j].votes_with_party_pct}", "${politicians[j].votes_against_party_pct}");`);
        bioPage.setAttribute('href', 'politiciansBio.html');
        bioPage.setAttribute('style', 'vertical-align: middle; ');
        img.setAttribute("class", "w3-image");
        img.setAttribute('alt', 'Avatar');
        img.setAttribute('style', 'display: block; width: 175px; height: 225px; margin-left: auto; margin-right: auto; margin-top: 5px; border-radius: 50%;');
        head1.textContent = politicians[j].first_name;
        head2.textContent = politicians[j].last_name;
        attribute1.textContent = politicians[j].party;
        attribute2.textContent = politicians[j].state;
        attribute3.textContent = "District " + politicians[j].district;
        bioPage.textContent = "Biography";
        img.src = 'https://bioguideretro.congress.gov/Static_Files/images/photos/' + politicians[j].id.charAt(0) + '/' + politicians[j].id + '.jpg';
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