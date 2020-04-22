
const loadEvents = (url_path) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url_path, false);
  xhttp.send();
  show_events(xhttp);
}


function show_events (xhttp){
  let status = xhttp.status;
  if (status == "404"){
      const x = `
          <div>
              <br><br>
              <h5 class="card-title text-danger ">${xhttp.responseText}</h5>
              <p class="card-title">Expand your search range above or return to "Get Involved" page and enter a new address.</p>
        </div>
       `;
    document.getElementById('display_msg').innerHTML = x;
  } 
  else if (status == "303"){
      //redirecting bc could not find any state matchings, check state matchings with state abbreviation
      let url_path = "https://reflected-flux-270220.appspot.com/events/stateAbbr/" + localStorage.getItem("state"); 
      loadEvents(url_path);
    }
  else {
    
  
  showUpcomingMsg();
  let oData = xhttp.responseText;
  DisplayList(oData, rows, current_page);
  }

}


function DisplayList (oData, rows_per_page, page) {
//   console.log(oData)
  events = JSON.parse(oData);
  allEvents = JSON.parse(oData);

	document.getElementById('event_data').innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	// console.log("start: " + start + " end: " + end);

	for (let i = start; i < events.length && i<end ; i++) {
		 let item_element = document.createElement('div');
		 //////Logic to create HTML element and display
		 var title = "";
		if (events[i].title != null)
			title = events[i].title;
	
		var time = "";
		time = events[i].start_time;
		if (time != null){
		  if (events[i].stop_time != null)
			time +=' - '+events[i].stop_time;
		}
	
		var addr = "";
		if (events[i].venue_address != null)
		  addr = events[i].venue_address;
	
		var description = "";  
		if (events[i].description != null)
		  description = events[i].description;
	
		var url = ""; var url_btn = "";
		if (events[i].url != null){
			url = events[i].url;
			url_btn = `<button onclick="window.location.href = '${url}';" class="btn btn-info">More Info</button> `
		}
	
		const x = `
			<div>
				<div class="row no-gutters border rounded overflow-hidden flex-md-row mr-4 mb-4 shadow-sm position-relative">
					<div class="card-body">
						<h5 class="card-title">${title}</h5>
						<h6 class="card-subtitle mb-2 text-muted">${time}</h6>
						<h6 class="card-subtitle mb-2 text-info">${addr}</h6>
						<div>${description}</div>
						<hr>
						${url_btn}
					</div>
				</div>
			</div>
		`
			item_element.innerText = x;
			document.getElementById('event_data').innerHTML = document.getElementById('event_data').innerHTML + x;
		
  } 
  SetupPagination (oData, pagination_element, rows);
}


function SetupPagination (oData, wrapper, rows_per_page) {
  events = JSON.parse(oData);
	wrapper.innerHTML = "";
	let length = events.length;

	let page_count = Math.ceil(length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, oData);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, oData) {
  events = JSON.parse(oData);
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
    current_page = page;
    console.log(events);
		DisplayList(oData, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

function showUpcomingMsg(){
  
  let searchReq="";
  if (range == "zip"){
    searchReq = localStorage.getItem("zip");
  }
  if (localStorage.searchRange == "city"){
    searchReq = localStorage.getItem("city");     
  }
  if (localStorage.searchRange == "state"){
    searchReq = localStorage.getItem("state");     
  }
  const msg = `
            <br>
            <h5>Upcoming events in <strong>${searchReq}</strong></h5>
            `;
  document.getElementById('display_msg').innerHTML = msg;

}

/// Pagination///
const pagination_element = document.getElementById('pagination');
let current_page = 1;
let rows = 5;
////

// Search Bar //
document.getElementById("searchBtn").addEventListener("click", function(){
	let searchInput = document.getElementById("searchBar").value;
	if (searchInput != ""){
		matchedEvents = allEvents.filter(function(event){
			if (event.description == null)
				event.description = "";
			if (event.venue_address == null)
				event.venue_address = "";
			if (event.start_time == null)
				event.start_time = "";
			
			const info = event.title.toLowerCase() + event.description.toLowerCase() + event.venue_address.toLowerCase() + event.start_time.toLowerCase();
			input = searchInput.toLowerCase();
			return info.includes(input);
		  });
		  
		if (matchedEvents.length == 0){
			const msg = `<br><h5>No events found with <strong>${searchInput}</strong></h5>`;
			document.getElementById("display_msg").innerHTML = msg;
		}

		matchedEvents = JSON.stringify(matchedEvents);
		DisplayList(matchedEvents, rows, current_page);
	}
});

//////////////




const range = localStorage.getItem("searchRange");

let url_path = "https://reflected-flux-270220.appspot.com/";

if ((localStorage.getItem("zip") == "") || localStorage.getItem("city") == "" || localStorage.getItem("state") == ""){
  window.alert("You must enter a complete address!");
  window.location.href = "./address.html";
}

if (range=="zip"){
  url_path = url_path + "events/zip/" + localStorage.getItem("zip"); 
}
else if (range=="city"){
  url_path = url_path + "events/city/" + localStorage.getItem("city"); 
}
else if (range=="state"){
  url_path = url_path + "events/state/" + localStorage.getItem("state"); 
}


loadEvents(url_path);
