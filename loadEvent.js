
const loadEvents = () => {
   let xhttp = getEventByID(localStorage.getItem('event_id'))
   show_events(xhttp);
  }
  
  
  function show_events (xhttp){
    let status = xhttp.status;
    if (status == "404"){
        const x = `
            <div>
                <br><br>
                <h5 class="card-title text-danger ">${xhttp.responseText}</h5>
                <p class="card-title">Expand your search range above or <a href ="./address.html">enter a new address</a>.</p>
          </div>
         `;
      document.getElementById('display_msg').innerHTML = x;
    } 
  
    else {
        
      let oData = xhttp.responseText;
    //   console.log(JSON.parse(oData))
      DisplayList(oData);
    }
  
  }
  
  
  function DisplayList (oData) {
    events = JSON.parse(oData);
    console.log(events[0]);
      document.getElementById('event_data').innerHTML = "";
  
    //   for (let i = 0; i < events[0].length; i++) {
           let item_element = document.createElement('div');
           //////Logic to create HTML element and display
           let id = events[0]._id;
  
           var title = "";
          if (events[0].title != null)
              title = events[0].title;
      
          var time = "";
          time = events[0].start_time;
          if (time != null){
            if (events[0].stop_time != null)
              time +=' - '+events[0].stop_time;
              time = `<b>When:</b> ${time}`;
            }
    
        var postal = "";  
        if (events[0].postal_code != null)
            postal = events[0].postal_code;

        var region = "";  
        if (events[0].region_abbr != null)
            region = events[0].region_abbr;

        var city = "";  
        if (events[0].city_name != null)
            city= events[0].city_name;

          var addr = "";
          if (events[0].venue_address != null){
            addr = events[0].venue_address + " " + city + ", " + region +" " + postal;
            addr = `<b>Where:</b> ${addr}`;
        }
      
          var description = "";  
          if (events[0].description != null)
            description = events[0].description;
      
          var url = ""; 
          if (events[0].url != null){
              url = events[0].url;
              url_btn = `<hr><button onclick="window.location.href = '${url}';" class="btn btn-info">Visit Website</button> `
  
          }

          document.getElementById("title").innerHTML = title;
                
          const x = `
                          <p>${time}</p>
                          <p>${addr}</p>
                          <p>${description}</p>
                          ${url_btn}
          `
              item_element.innerText = x;
              document.getElementById('event_data').innerHTML = document.getElementById('event_data').innerHTML + x;
          
    // } 
  }
  

  loadEvents();
  