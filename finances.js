/**
 * @author: Megan Nguyen
 * @summary: Javascript file that pulls personal financial informtion from api
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
      var finances = result.finances[0]
      var assets = result.assets
      var elem = document.getElementById('assets')
      var header = document.getElementById('header')

      document.getElementById("assets").innerHTML = "";

      var first_last = result.first_name + " " + result.last_name
      document.getElementById("header").innerHTML = "Personal Finances of " + first_last + " in " + finances.year + "<br>";

      var br = document.createElement("br")
      elem.appendChild(br)
      elem.appendChild(br)

      if(Number(finances.net_worth) > 0) {
        document.getElementById("networth").innerHTML = "Estimated Net Worth: $" + finances.net_worth + "<br>";
      } else {
        document.getElementById("networth").innerHTML = "Net Worth Not Available" + "<br>";
      }

      if(Number(finances.total_assets) > 0) {
        document.getElementById("assetheader").innerHTML = "Estimated Total Asset Value: $" + finances.total_assets + "<br>";
      } else {
        document.getElementById("assetheader").innerHTML = "Total Asset Value Not Available" + "<br>";
      }

      document.getElementById("assets").innerHTML += "Top Assets".bold();
      elem.appendChild(br)

      if(assets.length==0) {
        document.getElementById("assets").innerHTML = "No assets available for " + first_last
      }

      for(var i = 0; i < assets.length; i++) {
            var asset_title = (i+1) + ". " + assets[i].name + "<br>";
            if(assets[i].name=='') asset_title = (i+1) + ". Unspecified Asset <br>"
            document.getElementById("assets").innerHTML += asset_title.bold();
            document.getElementById("assets").innerHTML += "Estimated Asset Value: $" + assets[i].asset_value + "<br>" + "<br>";
      }

  } else {
      var elem = document.getElementById('assets')
      document.getElementById("assets").innerHTML = "";
      var br = document.createElement("br");
      elem.appendChild(br)
      elem.appendChild(br)
      document.getElementById("assets").innerHTML = "Assets not available";
  }
}
