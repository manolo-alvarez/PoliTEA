var method = 'candContrib'
var year = '2016'
var cid = 'N00007360'
const url = `http://www.opensecrets.org/api/?method=${method}&year=${year}&cid=${cid}&output=json&apikey=52f80155d9bb4bd043b2ef5c7e05e9cc`

var request = new XMLHttpRequest()
request.open('GET', url, true)
request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var result = JSON.parse(request.responseText);
    result = JSON.stringify(result)
    result = result.replace(/@/g, "_")

    result = JSON.parse(result)
    console.log(result);

    var elem = document.getElementById('results')
    var header = document.getElementById('header')

    document.getElementById("header").innerHTML = "Top Contributors to " + result.response.contributors._attributes.cand_name + " in 2016 <br>";

    var br = document.createElement("br");
    document.getElementById("notice").innerHTML = "Notice: The organizations themselves did not donate, rather the money came from the organization's PAC, its individual members or employees or owners, and those individuals' immediate families."

    elem.appendChild(br)
    elem.appendChild(br)

    for(var i = 0; i < result.response.contributors.contributor.length; i++) {
          var contributor_title = (i+1) + ". " + result.response.contributors.contributor[i]._attributes.org_name + "<br>";
          document.getElementById("results").innerHTML += contributor_title.bold();
          document.getElementById("results").innerHTML += "Total from large individual contributions: " + result.response.contributors.contributor[i]._attributes.indivs + "<br>";
          document.getElementById("results").innerHTML += "Total from PACs: " + result.response.contributors.contributor[i]._attributes.pacs + "<br>";
          document.getElementById("results").innerHTML += "Total from all itemized sources: " + result.response.contributors.contributor[i]._attributes.total + "<br>" + "<br>";
    }
  }
  else {
    console.log("bad request")
  }
};
request.send()
