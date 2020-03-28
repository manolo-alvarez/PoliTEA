
const loadBooks = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://localhost:3000/events/city/chicago", false);
  xhttp.send();
  show_events(xhttp);
}


function show_events (xhttp){

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

    var url = "";
    if (event.url != null)
        url = event.url;

    const x = `
        <div>
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${time}</h6>
                    <h6 class="card-subtitle mb-2 text-primary">${addr}</h6>
                    <div>${description}</div>
                    <hr>
                    <button onclick="window.location.href = '${url}';" class="btn btn-primary">More Info</button>

                </div>
            </div>
        </div>
    `
    document.getElementById('event_data').innerHTML = document.getElementById('event_data').innerHTML + x;
    }

}

loadBooks();
