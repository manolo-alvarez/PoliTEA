function getEventByID(id) {
  var command = new GetEventIDCommand();
  return command.execute(id);
}

function getEventByZip(zip) {
  var command = new GetEventZipCommand();
  return command.execute(zip);
}

function getEventByCity(city) {
  var command = new GetEventCityCommand();
  return command.execute(city);
}

function getEventByState(state) {
  var command = new GetEventStateCommand();
  return command.execute(state);
}

function getEventByStateAbbr(abbr) {
  var command = new GetEventStateAbbrCommand();
  return command.execute(abbr);
}

////BILLS////
function getAllBills() {
  let tmp = "";
  var command = new GetAllBills();
  return command.execute(tmp);
}

function getBillsByTopic(topic) {
  var command = new GetBillsByTopic();
  return command.execute(topic);
}

function getBillByID(id) {
  var command = new GetBillByID();
  return command.execute(id);
}