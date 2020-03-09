var method = 'memPFDprofile'
var year = '2016'
var cid = 'N00007360'
const url = `http://www.opensecrets.org/api/?method=${method}&year=${year}&cid=${cid}&output=json&apikey=52f80155d9bb4bd043b2ef5c7e05e9cc`

var request = new XMLHttpRequest()
request.open('GET', url, true)

// Must send request with API key as a header. Key can be used at most 1000 times/day
// request.setRequestHeader('X-API-Key', '52f80155d9bb4bd043b2ef5c7e05e9cc')
request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var result = JSON.parse(request.responseText);
    result = JSON.stringify(result)
    result = result.replace(/@/g, "_")

    result = JSON.parse(result)
    console.log(result);

    var elem = document.getElementById('assets')
    var header = document.getElementById('header')

    document.getElementById("header").innerHTML = "Personal Finances of " + result.response.member_profile._attributes.name + " in 2016 <br>";

    var br = document.createElement("br");
    elem.appendChild(br)
    // var low = JSON.stringify(result.response.member_profile._attributes.net_low)
    var networth = (Number(result.response.member_profile._attributes.net_low) + Number(result.response.member_profile._attributes.net_high))/2
    // var networth = (+(result.response.member_profile._attributes.net_low) + +(result.response.member_profile._attributes.net_high))/2
    // console.log(Number(low))
    console.log(Number(result.response.member_profile._attributes.net_low))
    console.log(Number(result.response.member_profile._attributes.net_high))

    console.log(Number(result.response.member_profile._attributes.net_low)+ Number(result.response.member_profile._attributes.net_high))

    document.getElementById("networth").innerHTML = "Estimated Net Worth: " + networth + "<br>";

    var totalassets = (Number(result.response.member_profile._attributes.asset_low) + Number(result.response.member_profile._attributes.asset_high))/2
    document.getElementById("assetheader").innerHTML = "Estimated Total Asset Value: " + totalassets + "<br>";

    document.getElementById("assets").innerHTML += "Top Assets in 2016".bold();
    elem.appendChild(br)

    for(var i = 0; i < result.response.member_profile.assets.asset.length; i++) {
          var asset_title = (i+1) + ". " + result.response.member_profile.assets.asset[i]._attributes.name + "<br>";
          document.getElementById("assets").innerHTML += asset_title.bold();
          var assetvalue = (Number(result.response.member_profile.assets.asset[i]._attributes.holdings_low) + Number(result.response.member_profile.assets.asset[i]._attributes.holdings_high))/2
          document.getElementById("assets").innerHTML += "Estimated Asset Value: " + assetvalue + "<br>" + "<br>";
    }
  }
  else {
    console.log("bad request")
  }
};
request.send()
