async function main(oArgs){

    const mongoose = require('mongoose');
    const https = require('http');  
    const uri = "mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/locations?retryWrites=true&w=majority"
    const EVENTFUL_ROOT_URL = 'http://api.eventful.com/json';
    try {
      // Connect to the MongoDB cluster
      mongoose.set('bufferCommands', false);
      mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(err => console.log("CONNECTION ERROR"));
  
      const Schema = mongoose.Schema;
  
      const Event = new Schema({
        // watching_count: String,
        // olson_path: String,
        // calendar_count: String,
        // comment_count: String,
        region_abbr: String,
        postal_code: String,
        // going_count: String,
        // all_day: String,
        // latitude: String,
        // groups: String,
        url: String,
        id: String,
        // privacy: String,
        city_name: String,
        // link_count: String,
        // longitude: String,
        country_name: String,
        // country_abbr: String,
        region_name: String,
        start_time: String,
        // tz_id: String,
        description: String,
        // modified: String,
        // venue_display: String,
        // tz_country: String,
        // performers: String,
        title: String,
        venue_address: String,
        // geocode_type: String,
        // tz_olson_path: String,
        // recur_string: String,
        // calendars: String,
        // owner: String,
        // going: String,
        // country_abbr2: String,
        // image: String,
      //   image:[{
      //     // small:[{
      //     //     width: String,
      //     //     url: String,
      //     //     height: String
      //     // }],
      //     width: String,
      //     caption: String,
      //     // medium:[{
      //     //     width: String,
      //     //     url: String,
      //     //     height: String
      //     // }],
      //     url: String,
      //     // thumb:[{
      //     //     width: String,
      //     //     url: String,
      //     //     height: String
      //     // }],
      //         height: String
      // }],
          // created: String,
        // venue_id: String,
        // tz_city: String,
        stop_time: String,
        venue_name: String
        // venue_url: String
        
      });
      
      var event = mongoose.model('event', Event);
      var EVENTFUL_URL = await setURL(EVENTFUL_ROOT_URL, oArgs);
     
      //TEMP FOR TESTING
      // var EVENTFUL_URL = "http://api.eventful.com/json/events/search?app_key=sWWmrMk9BSdFZKQL&&c=politics_activism&&location=Chicago&&date=Future&&page_size=1&&page_number=1&&location=United%20States";
      // console.log(EVENTFUL_URL);

      https.get(EVENTFUL_URL, (resp) => {
          let json = '';

          // A chunk of data has been recieved.
          resp.on('data', (chunk) => {
              json += chunk;
          });

          // The whole response has been received. Print out the result.
          resp.on('end', () => {
              var odata = JSON.parse(json);
              // console.log("----Currently iterating through " + odata.page_number);
              var page_no = odata.page_number;
              odata.events.event.forEach(eventObj => {
                  event.create(eventObj, function (err, eventObj) {
                    if (err) {
                      return "error creating"; 
                      console.log(err);}
                    else {
                        console.log("Creating page " + page_no +" docs...");
                      }

                  });
              });
          });

      }).on("error", function(error) {
          console.log("get problem");
    }).on('data', (chunk) => {
      json += chunk;
  });

    } catch (e) {
      console.error(e);
    } 
}
  

async  function setURL(EVENTFUL_ROOT_URL, oArgs){

  var c, where, date, page_size, location, page_number;
  c = where = date= page_size= location = '';

  if (oArgs.c !=null) 
      c=  "&&c=" + oArgs.c;
  if (oArgs.where !=null) 
      where = "&&location=" + oArgs.where;
  if (oArgs.date !=null) 
      date = "&&date=" + oArgs.date;
  if (oArgs.page_size !=null)  
      page_size = "&&page_size=" + oArgs.page_size;
  if (oArgs.page_number !=null)  
      page_number = "&&page_number=" + oArgs.page_number;
  if (oArgs.location !=null) {
      location = "&&location=" + oArgs.location;
      if (location = "United States")
        location = "&&location=United%20States";
  }
  var EVENTFUL_URL = EVENTFUL_ROOT_URL + "/events/search?app_key=" + oArgs.app_key+c+where+date+page_size+page_number+location;
  console.log(EVENTFUL_URL);
  return EVENTFUL_URL;
  }

//"page_number":"2","page_size":"1","page_items":null, "page_count":"5
// const page_count =4;
// for (var i =0; i < page_count; i++){  
//TOFIX: MANUALLY RAN CODE $PAGE_COUNT TIME (4)
var oArgs = {
  
    app_key: "sWWmrMk9BSdFZKQL",

    c: "politics_activism",

    // where: "chicago",

    "date": "Future",

    page_size: 250,

    page_number:4,

    location: "United States"

  };

  main(oArgs).catch(console.error);
  