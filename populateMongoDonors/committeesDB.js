var industry_codes = ["A11", "A01", "A02", "A04", "A05", "A06", "A07", "A10", "C01", "C02", "C03", "C04", "C05", "B00", "B01", "B02", "B09", "B08", "B12", "B13", "D03", "D01", "D02", "E07", "E01", "E04", "E08", "E09", "E10", "E11", "F13", "F03", "F04", "F05", "F06", "F07", "F09", "F10", "F11", "N12", "N00", "A09", "N01", "N02", "N09", "N03", "N04", "N05", "N06", "N07", "H05", "H01", "H02", "H03", "H04", "W04", "W07", "Q10", "Q01", "Q02", "Q03", "Q04", "Q05", "Q12", "Q13", "Q09", "Q14", "Q15", "Q08", "Q11", "K01", "K02", "P05", "P04", "P01", "P02", "P03", "N15", "N13", "N14", "N16", "M06", "M01", "M02", "M03", "M04", "M05", "N08", "W06", "W03", "W02", "W05", "Y00", "Y01", "Y02", "Y03", "Y04", "Q16", "Z04", "Z02", "Z07", "Z08", "Z09"]

var comm_codes = ["HADM", "HAGR", "HAPP", "HARM", "HBAN", "HBUD", "HCOM", "HEDU", "HEGW", "HENE", "HFIN", "HGOV", "HHSC", "HINT", "HITL", "HJUD", "HPRC", "HRES", "HRUL", "HSCI", "HSMA", "HSTA", "HTRA", "HVET", "HWAY", "JECO", "JLIB", "JPRI", "JTAX", "SAGI", "SAGR", "SAPP", "SARM", "SBAN", "SBUD", "SCOM", "SENE", "SENV", "SETH", "SFIN", "SFOR", "SGOV", "SIND", "SITL", "SJUD", "SLAB", "SRUL", "SSMA", "STEC", "SVET"]

// var comm_names = ["House Administration", "Agriculture", "Appropriations", "Armed Services", "Banking", "Budget", "Commerce", "Education and Labor", "Select Energy Independence and Global Warming", "Energy and Commerce", "Financial Services", "Oversight and Government Reform", "Homeland Security", "Foreign Affairs", "Permanent Select on Intelligence", "Judiciary", "U.S. National Security and Military/Commercial Concerns with the People's Republic of China", "Natural Resources", "Rules", "Science", "Small Business", "Standards of Official Conduct", "Transportation and Infrastructure", "Veterans' Affairs", "Ways and Means", "Joint Economic", "Joint Library of Congress", "Joint Printing", "Joint Taxation", "Special Aging", "Agriculture, Nutrition and Forestry", "Appropriations", "Armed Services", "Banking, Housing, and Urban Affairs", "Budget", "Commerce, Science, and Transportation", "Energy and Natural Resources", "Environment and Public Works", "Select Ethics", "Finance", "Foreign Relations", "Homeland Security and Governmental Affairs", "Indian Affairs", "Select Intelligence", "Judiciary", "Health, Education, Labor and Pensions", "Rules and Administration", "Small Business and Entrepreneurship", "Special Year 2000 Technology Problem", "Veterans' Affairs"]

var committee_dict = {
  "HADM": "House Administration",
  "HAGR": "Agriculture",
  "HAPP": "Appropriations",
  "HARM": "Armed Services",
  "HBAN": "Banking",
  "HBUD": "Budget",
  "HCOM": "Commerce",
  "HEDU": "Education and Labor",
  "HEGW": "Select Energy Independence and Global Warming",
  "HENE": "Energy and Commerce",
  "HFIN": "Financial Services",
  "HGOV": "Oversight and Government Reform",
  "HHSC": "Homeland Security",
  "HINT": "Foreign Affairs",
  "HITL": "Permanent Select on Intelligence",
  "HJUD": "Judiciary",
  "HPRC": "U.S. National Security and Military/Commercial Concerns with the People's Republic of China",
  "HRES": "Natural Resources",
  "HRUL": "Rules",
  "HSCI": "Science",
  "HSMA": "Small Business",
  "HSTA": "Standards of Official Conduct",
  "HTRA": "Transportation and Infrastructure",
  "HVET": "Veterans' Affairs",
  "HWAY": "Ways and Means",
  "JECO": "Joint Economic",
  "JLIB": "Joint Library of Congress",
  "JPRI": "Joint Printing",
  "JTAX": "Joint Taxation",
  "SAGI": "Special Aging",
  "SAGR": "Agriculture, Nutrition and Forestry",
  "SAPP": "Appropriations",
  "SARM": "Armed Services",
  "SBAN": "Banking, Housing, and Urban Affairs",
  "SBUD": "Budget",
  "SCOM": "Commerce, Science, and Transportation",
  "SENE": "Energy and Natural Resources",
  "SENV": "Environment and Public Works",
  "SETH": "Select Ethics",
  "SFIN": "Finance",
  "SFOR": "Foreign Relations",
  "SGOV": "Homeland Security and Governmental Affairs",
  "SIND": "Indian Affairs",
  "SITL": "Select Intelligence",
  "SJUD": "Judiciary",
  "SLAB": "Health, Education, Labor and Pensions",
  "SRUL": "Rules and Administration",
  "SSMA": "Small Business and Entrepreneurship",
  "STEC": "Special Year 2000 Technology Problem",
  "SVET": "Veterans' Affairs"
}

var ind_dict = {
  "Misc Agriculture" : "A11",
  "Crop Production": "A01",
  "Tobacco": "A02",
  "Dairy": "A04",
  "Poultry & Eggs": "A05",
  "Livestock": "A06",
  "Agricultural Svcs": "A07",
  "Forest Products": "A10",
  "General Contractors": "C01",
  "Home Builders": "C02",
  "Subcontractors": "C03",
  "Construction Svcs": "C04",
  "Building Materials": "C05",
  "Misc Communications/Electronics": "B00",
  "Publishing": "B01",
  "TV/Movies/Music": "B02",
  "Telecom Svcs": "B09",
  "Telephone Utilities": "B08",
  "Electronics Mfg/Eqp": "B12",
  "Internet": "B13",
  "Misc Defense": "D03",
  "Defense Aerospace":"D01",
  "Defense Electronics": "D02",
  "Misc Energy": "E07",
  "Oil & Gas": "E01",
  "Mining": "E04",
  "Electric Utilities": "E08",
  "Environmental Svcs/Equipment":"E09",
  "Waste Management": "E10",
  "Fisheries & Wildlife": "E11",
  "Misc Finance":"F13",
  "Commercial Banks":"F03",
  "Savings & Loans":"F04",
  "Credit Unions":"F05",
  "Finance/Credit":"F06",
  "Securities/Invest":"F07",
  "Insurance":"F09",
  "Real Estate":"F10",
  "Accountants":"F11",
  "Misc Business":"N12",
  "Business Assns":"N00",
  "Food Process/Sales":"A09",
  "Food & Beverage":"N01",
  "Beer, Wine & Liquor":"N02",
  "Marijuana":"N09",
  "Retail Sales":"N03",
  "Misc Services":"N04",
  "Business Services":"N05",
  "Recreation":"N06",
  "Casinos/Gambling":"N07",
  "Misc Health":"H05",
  "Health Professionals":"H01",
  "Hospitals/Nurs Homes":"H02",
  "Health Services":"H03",
  "Pharm/Health Prod":"H04",
  "Education":"W04",
  "Other":"W07",
  "Misc Issues":"Q10",
  "Repub/Conservative":"Q01",
  "Democratic/Liberal":"Q02",
  "Leadership PACs":"Q03",
  "Foreign Policy":"Q04",
  "Pro-Israel":"Q05",
  "Gun Control":"Q12",
  "Gun Rights":"Q13",
  "Human Rights":"Q09",
  "Anti-Abortion":"Q14",
  "Pro-Abortion Rights":"Q15",
  "Women's Issues":"Q08",
  "Environment":"Q11",
  "Lawyers/Law Firms":"K01",
  "Lobbyists":"K02",
  "Misc Unions":"P05",
  "Public Sector Unions":"P04",
  "Bldg Trade Unions":"P01",
  "Industrial Unions":"P02",
  "Transport Unions":"P03",
  "Misc Mfg/Distrib":"N15",
  "Chemicals":"N13",
  "Steel Production":"N14",
  "Textiles":"N16",
  "Misc Transport":"M06",
  "Air Transport":"M01",
  "Automotive":"M02",
  "Trucking":"M03",
  "Railroads":"M04",
  "Sea Transport":"M05",
  "Lodging/Tourism":"N08",
  "Retired":"W06",
  "Civil Servants":"W03",
  "Non-Profits":"W02",
  "Clergy/Religious":"W05",
  "Unknown":"Y00",
  "Homemakers/Non-income earners":"Y01",
  "No Employer Listed or Found":"Y02",
  "Generic Occupation/Category Unknown":"Y03",
  "Employer Listed/Category Unknown":"Y04",
  "Candidate Cmtes":"Q16",
  "Joint Candidate Cmte":"Z04",
  "Party Committees":"Z02",
  "Candidate Self-finance":"Z07",
  "Party Committee Transfer":"Z08",
  "Non-contribution":"Z09"
}
var existing = []

const committees = require('../RestAPI/server')
const https = require('https');

////////////////////////////////////////////////////////////////////////////////
// TEST SMALL SAMPLES TO NOT WASTE GET REQUESTS PER DAY
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Connect to MongoDB database
////////////////////////////////////////////////////////////////////////////////
// const uri = "mongodb+srv://megan:123@clustertest-wsnll.mongodb.net/test?retryWrites=true&w=majority"
const uri = "mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority"

const express = require('express');
const app = express();
const mongoose = require('mongoose');

function connectDb() {
  console.log('start connectdb')

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function() {
      console.log('Connected')
      // next function
      // populateDb()
      // printCommInd()
      // removeExisting()
      // updateIndustryID()
      // updateCommitteeFullName()
      updateMemberNames()
  })
}

function updateMemberNames() {
  committees.find( {}, 'member' function(err, docs) {
    if (err) return err

    docs.forEach(doc => {
        members = doc.member
        members.forEach(member => {

          committees.updateMany({'_attributes.industry':key},
          {"$set": {"_attributes.industry_code":ind_dict[key]}},
          function() {
            committees.find({'_attributes.industry':key}, '_attributes.industry_code', function(err, docs) {
              if (err) return err
              console.log(docs)
            })
          })

        })
    })

  })

}


function updateIndustryID(){
  var need_code = []
  committees.find( {'_attributes.industry_code': {$exists : false }}, function(err, docs) {
    if (err) return err
    console.log('docs without industry code length is ' + docs.length)
    docs.forEach(docs => {
      console.log(docs)
      if (docs.crp_id!=null)
        need_code.push(docs._attributes.industry)
    })
  })
  for(var key in ind_dict) {
    // console.log('key, value is ' + key + ", " + ind_dict[key])
    committees.updateMany({'_attributes.industry':key},
    {"$set": {"_attributes.industry_code":ind_dict[key]}},
    function() {
      committees.find({'_attributes.industry':key}, '_attributes.industry_code', function(err, docs) {
        if (err) return err
        console.log(docs)
      })
    })
  }
}

function updateCommitteeFullName() {
  for(var key in committee_dict) {
    // console.log('key, value is ' + key + ", " + ind_dict[key])
    committees.updateMany({'_attributes.committee_name':key},
    {"$set": {"_attributes.committee_full_name":committee_dict[key]}},
    function() {
      committees.find({'_attributes.committee_name':key}, '_attributes', function(err, docs) {
        if (err) return err
        console.log(docs)
      })
    })
  }
}

function removeExisting() {
  var indus, cmte
  existing = []
  committees.find({},function(err,docs) {
      if(err) return err
      docs.forEach(docs => {
        existing.push(docs._attributes.committee_name + " " + docs._attributes.industry)
      })
      // printCommInd()
      populateDb()
  })
}

function printCommInd() {
  console.log('number of existing documents is ' + existing.length)
   console.log("existing is " + existing)

}

function populateDb() {
  // var api_key = '52f80155d9bb4bd043b2ef5c7e05e9cc'  // utexas
  // var api_key = '17670ea6524ff0d3a02e77c6d6835d08' //maemeigh
  // var api_key = '8501d386724d739584d71c1328ce4feb' //mtn gmail
  // var api_key = 'ed0ccb4fd1f64fdbce4e8915564c40e2' // ee461
  var api_key = '00d06946b742b2613873185d48895a2e' // res org
  // var api_key = '2332f6dd943afd1e54c4548560d94769' //res ut

  var indus;
  var cmte;
  var url;
  // var committee_full_name
  // var url = `https://www.opensecrets.org/api/?method=congCmteIndus&congno=116&output=json&indus=${indus}&cmte=${cmte}&apikey=${api_key}`


  for(var i = 0; i < comm_codes.length; i++) {
    for(var j = 0; j < industry_codes.length; j++) {

      let cmte = comm_codes[i]
      let indus = industry_codes[j]

      // url = `https://www.opensecrets.org/api/?method=congCmteIndus&congno=116&output=json&indus=${indus}&cmte=${cmte}&apikey=${api_key}`

      // committees.countDocuments({'_attributes.committee_name':cmte, '_attributes.industry':indus}, function(err,count) {
          // if(err) return err
          // if(count == 0) {

            let url = `https://www.opensecrets.org/api/?method=congCmteIndus&congno=116&output=json&indus=${indus}&cmte=${cmte}&apikey=${api_key}`
            // console.log('document does not exist, add to db')

          if(!existing.includes(cmte + " " + ind_dict[indus])) {

            https.get(url, (res) => {
              console.log('get ' + url)
              console.log('statusCode:', res.statusCode);
              if(res.statusCode=='200') {
                let result = '';
                res.on('data', (d) => {
                  // process.stdout.write(d);
                  result += d;
                });

                res.on('end', () =>  {
                  result = JSON.parse(result)
                  result = JSON.stringify(result)
                  result = result.replace(/@/g, "_")
                  result = JSON.parse(result)
                  console.log(result)
                  // let committee_name = result.response.committee._attributes.committee_name
                  // let industry_name = result.response.committee._attributes.industry
                  // console.log('committee name, industry name is ' + committee_name + ', '+ industry_name)
                  committees.create(result.response.committee, function(err, docs) {
                    if(err) return "error creating document"
                    else console.log(docs + ' document created')
                  })
                })

              }
            }).on('error', (e) => {console.error('GET error: ' + e)});
          } else {console.log(cmte + ' ' + ind_dict[indus] + ' document exists')}
        // })
    }
  }
}


async function populateDb1() {
  for(var i = 0; i < comm_codes.length; i++) {
    for(var j = 0; j < industry_codes.length; j++) {
      let cmte = comm_codes[i]
      let indus = industry_codes[j]
      if(!existing.includes(cmte + " " + ind_dict[indus])) {
          makeSynchronousRequest(cmte, indus);
        }

    }
  }
}

// async function to make https request
async function makeSynchronousRequest(cmte, indus) {
	try {
		let https_promise = getPromise(cmte, indus);
		let response_body = await https_promise;

		// holds response from server that is passed when Promise is resolved
		console.log(response_body);
	}
	catch(error) {
		// Promise rejected
		console.log(error);
	}
}

function getPromise(cmte, indus) {
  // var api_key = '52f80155d9bb4bd043b2ef5c7e05e9cc'  // utexas
  // var api_key = '17670ea6524ff0d3a02e77c6d6835d08' //maemeigh
  // var api_key = '8501d386724d739584d71c1328ce4feb' //mtn gmail
  var api_key = 'ed0ccb4fd1f64fdbce4e8915564c40e2' // ee461
  // var api_key = '00d06946b742b2613873185d48895a2e' // res org
  // var api_key = '2332f6dd943afd1e54c4548560d94769' //res ut


	return new Promise((resolve, reject) => {
    let url = `https://www.opensecrets.org/api/?method=congCmteIndus&congno=116&output=json&indus=${indus}&cmte=${cmte}&apikey=${api_key}`

    console.log('get url ' + url)

  	https.get(url, (response) => {
			let result = '';

			response.on('data', (d) => {
				result+=d;
			});

			response.on('end', () => {
        result = JSON.parse(result)
        result = JSON.stringify(result)
        result = result.replace(/@/g, "_")
        result = JSON.parse(result)
        console.log(result)
        committees.create(result.response.committee, function(err, docs) {
          if(err) return "error creating document"
          else console.log(docs + ' document created')
        })
			});

			response.on('error', (error) => {
				reject(error);
			});
		}).on('error', (e) => {console.error('GET error:' + e)});
	});
}

connectDb()
