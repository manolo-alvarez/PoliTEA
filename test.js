
const loadBooks = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://localhost:3000/events/city/Dallas", false);
  xhttp.send();

  const oData = JSON.parse(xhttp.responseText);
  // for (let book of books) {
  //     const x = `
  //         <div class="col-4">
  //             <div class="card">
  //                 <div class="card-body">
  //                     <h5 class="card-title">${book.title}</h5>
  //                     <h6 class="card-subtitle mb-2 text-muted">${book.start_time}</h6>

  //                     <div>Description: ${book.description}</div>
  //                     <div>Address: ${book.venue_address}</div>
  //                     <div>More Information: ${book.url}</div>

  //                     <hr>
  //                 </div>
  //             </div>
  //         </div>
  //     `

      
  //     // document.getElementById('event_data').innerHTML = document.getElementById('event_data').innerHTML + x;

  // }
      console.log(oData);
      var data = '';

      for(var i = 0;i < oData.length;i++){
        var title = oData[i].title;
        var time = oData[i].start_time;
        if (time != null){
          if (oData[i].stop_time != null)
            time +=' - '+oData[i].stop_time;
          time = time + "  |  ";
        }
  
        addr = "";
        if (oData[i].venue_address != null)
          addr = oData[i].venue_address;
        time = time + addr;
  
        description = "";
        if (oData[i].description != null)
          description = oData[i].description;
  
  
        url = oData[i].url;
        if (url != null)
          url = "Visit for more information: <br>"+url;

        data += '<h3 id="ev_title">'+title+'</h3>'+'<h4 id="ev_time">'+ time+'</h4>'+'<p>'+ description+'</p>'+'<p>'+ url+'</p>'+'<br>';
      }
      document.getElementById('event_data').innerHTML  =   data;

      // document.getElementById('event_data').innerHTML = document.getElementById('event_data').innerHTML + y;

}

loadBooks();