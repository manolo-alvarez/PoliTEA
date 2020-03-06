// var OpenSecrets = require('opensecrets-js')
// var API = new OpenSecretsAPI(process.env.API_KEY)

// console.log(OpenSecretsAPI.getLegislators("TX"))
// OpenSecrets.candSummary("TX", window.print())
// OpenSecrets.memPFDprofile(2016, 00000528, document.write())

// OpenSecrets.candSummary("TX")



// console.log(OpenSecrets.candSummary("N00000528"))

var OpenSecretsClient = require('opensecrets-client');
var client = new OpenSecretsClient('52f80155d9bb4bd043b2ef5c7e05e9cc');
client.makeRequest('candIndustry', {cid: 'N00007360', output: 'json'})
.on('complete', function(res) {
  // if (res instanceof Error) console.log('Something went wrong');
  if (res instanceof Error) console.log('Something went wrong');
  // document.write(res)
  var elem = document.getElementById('results')

  res_string = JSON.stringify(res)

  var data = res_string.replace(/\\/g, "")
  var finalData = data.replace("/@//g","")
  //
  finalData = JSON.parse(res_string)
  // var text = JSON.stringify(res, function (key, value) {
  //   if (key == "firstlast\\") {
  //     return value.toUpperCase();
  //   } else {
  //     return value;
  //   }
  // });
  // for (name in finalData) {
    // document.getElementById("results").innerHTML += name + "<br>";
    // for(x in finalData) {
    //   document.getElementById("results").innerHTML += x + "<br>";
    // }
    // elem.appendChild(document.createTextNode(finalData.response.legislator."@attributes".cid))
    elem.appendChild(document.createTextNode(finalData))
  // }
  console.log(finalData)
});
