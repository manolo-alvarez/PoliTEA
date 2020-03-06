var OpenSecretsClient = require('opensecrets-client');
var client = new OpenSecretsClient('52f80155d9bb4bd043b2ef5c7e05e9cc');
var convert = require('xml-js');

client.makeRequest('candIndustry', {cid: 'N00007360', output: 'xml'})
.on('complete', function(res) {
  if (res instanceof Error) console.log('Something went wrong');
  var elem = document.getElementById('results')
  var header = document.getElementById('header')

  var result = convert.xml2json(res, {compact: true, spaces: 4});
  var result = JSON.parse(result)

  document.getElementById("header").innerHTML = "Top Ten Industries Contributing to " + result.response.industries._attributes.cand_name + "in 2016 <br>";

  var br = document.createElement("br");
  elem.appendChild(br)
  elem.appendChild(br)

  for(var i = 0; i < result.response.industries.industry.length; i++) {
        var industry_title = (i+1) + ". " + result.response.industries.industry[i]._attributes.industry_name + "<br>";
        document.getElementById("results").innerHTML += industry_title.bold();
        // document.getElementById("results").innerHTML += (i+1) + ". " + result.response.industries.industry[i]._attributes.industry_name + "<br>";
        document.getElementById("results").innerHTML += "Total from large individual contributions: " + result.response.industries.industry[i]._attributes.indivs + "<br>";
        document.getElementById("results").innerHTML += "Total from PACs: " + result.response.industries.industry[i]._attributes.pacs + "<br>";
        document.getElementById("results").innerHTML += "Total from all itemized sources: " + result.response.industries.industry[i]._attributes.total + "<br>" + "<br>";
  }
  console.log(result)
});
