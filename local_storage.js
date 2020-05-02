function storeObject(politicianObject) {
  politicianObject = JSON.parse(politicianObject)
  for(var key in politicianObject){
    if (politicianObject.hasOwnProperty(key)) {
        localStorage.setItem(key, politicianObject[key]);
    }
  }
}

function storeDonorId(id, firstName, LastName) {
  localStorage.setItem('politician_id', id)
  localStorage.setItem('politician_firstName', firstName)
  localStorage.setItem('politician_lastName', lastName)
}
