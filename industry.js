/**
 * @author: Megan Nguyen
 * @summary: Javascript file that pulls industry donor informtion from api
 */

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

var id = localStorage.getItem('politician_id');
console.log('id is ' + id)

const url = `http://localhost:3000/politicians/${id}`
// const url = `https://reflected-flux-270220.appspot.com/politicians/${id}`

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', url, true)

// Send request
request.send()

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(request.responseText)
      console.log(result)

      result = result[0]

      var industries = result.industries
      var elem = document.getElementById('results')
      var header = document.getElementById('header')

      document.getElementById("results").innerHTML = "";

      var first_last = result.first_name + " " + result.last_name
      document.getElementById("header").innerHTML = "Top Industries Contributing to " + first_last + " in " + industries[0].year + "<br>";

      var br = document.createElement("br")
      elem.appendChild(br)
      elem.appendChild(br)

      if(industries.length==0) {
        document.getElementById("results").innerHTML = "No industries available for " + first_last
      }

      for(var i = 0; i < industries.length; i++) {
            // var xhttp = new XMLHttpRequest()
            // let url = `http://localhost:3000/industries/name/${industries[i].industry_name}`
            // xhttp.open('GET', url, false);
            // xhttp.send();
            // var industry_code = JSON.parse(xhttp.responseText);
            // console.log('industry code is ' + industry_code)

            var industry_title = (i+1) + ". " + industries[i].industry_name + "<br>";

            // if(industry_code!=null){
            //   const industry_name = document.createElement('a');
            //   // industry_name.setAttribute('style', 'font-family: Arial Narrow, sans-serif;');
            //   industry_name.innerHTML = industry_title.bold();
            //   industry_name.setAttribute('onclick', `store("${industries[i].industry_name}","${industry_code}");`)
            //   industry_name.setAttribute('href', 'fundraisers.html')
            //   elem.append(industry_name);
            //
            //   // document.getElementById("results").innerHTML += (i+1) + ". " + industry_name + "<br>";
            // } else {
              document.getElementById("results").innerHTML += industry_title.bold();
            // }

            document.getElementById("results").innerHTML += "Total from large individual contributions: $" + industries[i].indivs + "<br>";
            document.getElementById("results").innerHTML += "Total from PACs: $" + industries[i].pacs + "<br>";
            document.getElementById("results").innerHTML += "Total from all itemized sources: $" + industries[i].total + "<br>" + "<br>";
      }
  } else {
      var elem = document.getElementById('results')
      document.getElementById("results").innerHTML = "";
      var br = document.createElement("br");
      elem.appendChild(br)
      elem.appendChild(br)
      document.getElementById("results").innerHTML = "No industries available";
  }
}

function store(industry, industry_code){
  localStorage.setItem('industry', industry);
  localStorage.setItem('industry_code', industry_code);
};
