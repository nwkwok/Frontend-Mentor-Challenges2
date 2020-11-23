"use strict";

var jobCardArea = document.getElementById('jobCard');
var jobFilters = document.getElementsByClassName('job-card-filters');
var selectedFilters = document.getElementById('selectedFilters');
var clearAllFilters = document.getElementById('clear');
var deleteFilter = document.getElementsByClassName('remove');
var previousSibling = deleteFilter.previousElementSibling; // For hiding elements based on filters

var jobCard = document.getElementsByClassName('job-card-container');
var roles = document.getElementsByClassName('role');
var level = document.getElementsByClassName('level');
var languages = document.getElementsByClassName('languages'); // Arrays

var filterArr = [];
var rolesArr = [];
var levelArr = [];
var languageArr = [];
data.forEach(function (data) {
  jobCardArea.innerHTML += "\n    <div class=\"job-card-container\">\n    <div class=\"job-card-info\">\n      <div class=\"job-card-logo\">\n        <img id=\"logo\" alt=\"".concat(data.company, "-logo\" src=").concat(data.logo, ">\n      </div>\n      <div class=\"job-card-company\">\n        <span id=\"company\">").concat(data.company, "</span>\n        ").concat(data["new"] ? '<span id="new">New!</span>' : '<span></span>', "\n        ").concat(data.featured ? '<span id="featured">FEATURED</span>' : '<span></span>', "\n        <div class=\"job-card-title\">\n          <div id=\"jobTitle\">").concat(data.position, "</div>\n        </div>\n        <div class=\"job-card-details\">\n          <span id=\"postedAt\">").concat(data.postedAt, "</span>\n          <div class=\"divider\"></div>\n          <span id=\"contact\">").concat(data.contract, "</span>\n          <div class=\"divider\"></div>\n          <span id=\"location\">").concat(data.location, "</span>\n        </div>\n      </div>\n      <div class=\"job-card-filters\">\n        <span class=\"role\">").concat(data.role, "</span>\n        <span class=\"level\">").concat(data.level, "</span>\n        ").concat(data.languages.map(function (language) {
    return "<span class=\"languages\">".concat(language, "</span>");
  }).join(''), "\n      </div>\n    </div>\n  </div>\n  ");
}); //Click on job filter and add it to the filters box

for (var i = 0; i < jobFilters.length; i++) {
  jobFilters[i].addEventListener('click', function (e) {
    var filter = e.target.innerText;
    filterArr.push(filter);
    selectedFilters.innerHTML += "\n        <span>".concat(e.target.innerText, "</span>\n        <img id=\"remove\" class=\"remove\" src=\"images/icon-remove.svg\"></img>");
    console.log(filterArr); // After we add the item to filterArr, we want to see what jobCards hold the value of filterArr. If they do not hold that value, we want to hide the car. 
    // Remove a selected filter item

    var _loop = function _loop(_i) {
      deleteFilter[_i].addEventListener('click', function () {
        var item = deleteFilter[_i].previousElementSibling.innerText;

        if (filterArr.includes(item)) {
          filterArr.splice(filterArr.indexOf(item));
        }

        deleteFilter[_i].previousElementSibling.innerText = '';

        deleteFilter[_i].parentNode.removeChild(deleteFilter[_i]);

        console.log(filterArr);
      });
    };

    for (var _i = 0; _i < deleteFilter.length; _i++) {
      _loop(_i);
    }
  });
} // Remove all filters and clear array


clearAllFilters.addEventListener('click', function () {
  selectedFilters.innerHTML = '';
  filterArr = [];
}); //////////// Attempted ideas /////////////
//Render job cards based on selected filters
// Array.from(roles).map(role => {
//   if (filterArr.includes(role.innerText) === false) {
//     console.log(this.jobCard.innerHTML);
//   }
// })
// Array.from(level).map(level => {
//   levelArr.push(level.innerText);
// })
// Array.from(languages).map(language => {
//   languageArr.push(language.innerText)
// })
// const combinedArr = [...rolesArr, ...levelArr, ...languageArr];
// console.log(combinedArr);
// Array.from(jobCard).forEach(item => {
//     if (filterArr.includes)
//     item.classList.toggle('hidden')
// });