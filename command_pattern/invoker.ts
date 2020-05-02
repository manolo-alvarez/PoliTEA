////EVENTS////
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

////POLITICIANS////
function getAllSen(id) {
  var command = new GetAllSenatorsCommand();
  return command.execute(id);
}

function getAllRep(id) {
  var command = new GetAllCongressmanCommand();
  return command.execute(id);
}
function getPolByID(id) {
  var command = new GetPoliticianByIDCommand();
  return command.execute(id);
}

function getPolID(id) {
  var command = new GetPoliticianIDCommand();
  return command.execute(id);
}

function getPolByIDAsync(id) {
  var command = new GetPoliticianByIDAsyncCommand();
  return command.execute(id);
}

function getPolByNameState(id) {
  var command = new GetPoliticianByNameStateCommand();
  return command.execute(id);
}

////INDUSTRIES////
function getIndustries() {
  var command = new GetIndustriesCommand();
  return command.execute(null);
}

function getIndustriesByID(id) {
  var command = new GetIndustriesByIDCommand();
  return command.execute(id);
}

function getIndustriesByIndName(id) {
  var command = new GetIndustriesByIndNameCommand();
  return command.execute(id);
}

function GetContributors(id) {
  var command = new GetContributorsCommand();
  return command.execute(id);
}

function GetContributorsByComm(id) {
  var command = new GetContributorsByCommCommand();
  return command.execute(id);
}

function getVotes(id) {
  var command = new GetVotesCommand();
  return command.execute(id);
}

function getDonors(id) {
  var command = new GetDonorsCommand();
  return command.execute(id);
}

function getFinances(id) {
  var command = new GetFinancesCommand();
  return command.execute(id);
}

function GetAssets(id) {
  var command = new GetAssetsCommand();
  return command.execute(id);
}

function getCID(id) {
  var command = new GetCIDCommand();
  return command.execute(id);
}