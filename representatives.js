/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/06/2020
 * @summary: Javascript file that runs the representatives page
 */

// Clear Storage
localStorage.clear();

import { PoliticiansPage } from './PoliticiansPage.js'


//////////////// HTML elements and variables////////////////////////////////
const list = document.getElementById('list')
const pagination_element = document.getElementById('pagination');
let current_page = 1;
let rows = 5;
let cols = 4;
let cardWidth = 285;

 //////////////////// Get Representatives from DB ///////////////////////////

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://reflected-flux-270220.appspot.com/politicians/congressman', false);
xhttp.send();

// we write the entire object logic as private members and
// expose an anonymous object which maps members we wish to reveal
// to their corresponding public members
var repsCollection = (function() {
    // private members
    var allReps = JSON.parse(xhttp.responseText);
    var representatives = allReps;

    function replaceCollection(objects){
      representatives = objects;
    }

    function addRep(object) {
      representatives.push(object);
    }

    function removeRep(object) {
      var index = objects.indexOf(object);
      if (index >= 0) {
          representatives.splice(index, 1);
      }
    }

    function getReps() {
      return JSON.parse(JSON.stringify(representatives));
    }

    function getAllReps() {
      return JSON.parse(JSON.stringify(allReps));
    }

    // public members
    return {
      replaceCollection: replaceCollection,
      addRep: addRep,
      removeRep: removeRep,
      getReps: getReps,
      getAllReps: getAllReps
    };
})();


/////////////////////////// Set-up Page /////////////////////////////////////
//{
  let repsPage = new PoliticiansPage(repsCollection.getReps(), pagination_element, current_page, rows, cols, cardWidth);
  repsPage.setupPagination();
  repsPage.displayList(current_page);
//}



////////////////////////////// Sort By //////////////////////////////////////
{
var sort = document.getElementById("sort");
sort.addEventListener("change", function() {
    var sortOption = sort.getElementsByTagName('option')[sort.selectedIndex].value;

    representatives = repsCollection.getReps();

    if (sortOption === 'last name') representatives.sort((a,b) => (a.last_name > b.last_name) ? 1 : ((b.last_name > a.last_name) ? -1 : 0));
    if (sortOption === 'first name') representatives.sort((a,b) => (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0));
    if (sortOption === 'state') representatives.sort((a,b) => (a.state > b.state) ? 1 : ((b.state > a.state) ? -1 : 0));
    if (sortOption === 'district') representatives.sort((a,b) => (a.district > b.district) ? 1 : ((b.district > a.district) ? -1 : 0));

    repsPage.updateFields(representatives, current_page, rows, cols);
    repsPage.setupPagination(representatives, pagination_element, rows, cols);
    repsPage.displayList(representatives, rows, cols, current_page);
});
}

////////////////////////////// Search Bar ////////////////////////////////////
{
const searchBar = document.forms['searchBar'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  if(!(e.key === 'Enter')){
    const select = document.getElementById('select');
    var option = select.getElementsByTagName('option')[select.selectedIndex].value;
    const phrase = e.target.value.toLowerCase();
    repsCollection.replaceCollection(repsCollection.getAllReps().filter(function(rep){
      var content = null;

      if (option === 'name') content = rep.first_name.toLowerCase() + rep.last_name.toLowerCase();
      if (option === 'state') content = rep.state.toLowerCase();
      if (option === 'district') return rep.district.toLowerCase() === phrase;
      if (option === 'party') content = rep.party.toLowerCase();

      return content.includes(phrase);
    }));
  } else{
    e.target.value = "";
    SetupPagination((repsCollection.getReps()), pagination_element, rows, cols);
    DisplayList(repsCollection.getReps(), rows, cols, current_page);
  }
});
}
