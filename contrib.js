/**
 * @author: Megan Nguyen
 * @summary: Javascript file that pulls company contributions informtion from api
 */

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

var id = localStorage.getItem('politician_id');
console.log('id is ' + id)

// const url = `http://localhost:3000/politician/${id}`
const url = `https://reflected-flux-270220.appspot.com/politicians/${id}`

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', url, true)

// Send request
request.send()


request.onload = function() {
  if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(request.responseText)
      console.log(result)

      result = result[0]
      var donors = result.donors
      var elem = document.getElementById('results')
      var header = document.getElementById('header')

      document.getElementById("results").innerHTML = "";

      var first_last = result.first_name + " " + result.last_name
      document.getElementById("header").innerHTML = "Top Contributors to " + first_last + " in " + donors[0].year + "<br>";

      document.getElementById("notice").innerHTML = "Notice: The organizations themselves did not donate, rather the money came from the organization's PAC, its individual members or employees or owners, and those individuals' immediate families."

      var br = document.createElement("br");
      elem.appendChild(br)
      elem.appendChild(br)

      if(donors.length==0) {
        document.getElementById("results").innerHTML = "No contributors available for " + first_last
      }

      for(var i = 0; i < donors.length; i++) {
            var donor_title = (i+1) + ". " + donors[i].org_name + "<br>";
            document.getElementById("results").innerHTML += donor_title.bold();
            document.getElementById("results").innerHTML += "Total from large individual contributions: $" + donors[i].indivs + "<br>";
            document.getElementById("results").innerHTML += "Total from PACs: $" + donors[i].pacs + "<br>";
            document.getElementById("results").innerHTML += "Total from all itemized sources: $" + donors[i].total + "<br>" + "<br>";
      }
  } else {
      var elem = document.getElementById('results')
      document.getElementById("results").innerHTML = "";
      var br = document.createElement("br");
      elem.appendChild(br)
      elem.appendChild(br)
      document.getElementById("results").innerHTML = "No contributors available";
  }
}
