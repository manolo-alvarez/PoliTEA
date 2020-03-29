
const politician = require('./politiciansApi.js')

var pol = politician.getPoliticianByFirstName('Justin', function(result){
    console.log(result)
});
