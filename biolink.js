function storeObject(politicianObject) {
  politicianObject = JSON.parse(politicianObject)
  for(var key in politicianObject){
    if (politicianObject.hasOwnProperty(key)) {
        localStorage.setItem(key, politicianObject[key]);
    }
  }
}
