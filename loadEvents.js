
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
      let url_path = "http://localhost:3000/events/stateAbbr/" + localStorage.getItem("state"); 
      loadEvents(url_path);
    }
  else {
    
  
  showUpcomingMsg();

  const oData = JSON.parse(xhttp.responseText);


  for (let event of oData) {
    var title = "";
    if (event.title != null)
        title = event.title;

    var time = "";
    time = event.start_time;
    if (time != null){
      if (event.stop_time != null)
        time +=' - '+event.stop_time;
    }

    var addr = "";
    if (event.venue_address != null)
      addr = event.venue_address;

    var description = "";  
    if (event.description != null)
      description = event.description;

    var url = ""; var url_btn = "";
    if (event.url != null){
        url = event.url;
        url_btn = `<button onclick="window.location.href = '${url}';" class="btn btn-info">More Info</button> `
    }

    const x = `
        <div>
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mr-4 mb-4 shadow-sm h-md-250 position-relative">
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
    document.getElementById('event_data').innerHTML = document.getElementById('event_data').innerHTML + x;
    }
  }

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




const range = localStorage.getItem("searchRange");

let url_path = "http://localhost:3000/";

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