var OpenSecretsClient = require('opensecrets-client');
var client = new OpenSecretsClient('52f80155d9bb4bd043b2ef5c7e05e9cc');
var convert = require('xml-js');

client.makeRequest('candContrib', {cid: 'N00007360', output: 'xml'})
.on('complete', function(res) {
  if (res instanceof Error) console.log('Something went wrong');
  var elem = document.getElementById('results')
  var header = document.getElementById('header')

  var result = convert.xml2json(res, {compact: true, spaces: 4});
  var result = JSON.parse(result)

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
  console.log(result)
});
