const mongo = require('mongodb');
const url = "mongodb://localhost:27017";

mongo.connect(url, {useNewUrlParser: true}, (err, db) => {
    if(err) {
       console.log(err);
       process.exit(0);
    }
    var dbo = db.db('codeforgeek');
    console.log('database connected!');
    var collection = dbo.collection('users');
    collection.find({name: 'Shahid Shaikh'}).toArray((err, results) => {
        if(err) {
            console.log(err);
            process.exit(0);
        }
        console.log(results);
        db.close();
    });
});