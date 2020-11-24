"use strict";

var jobCardArea = document.getElementById('jobCard');
var jobFilters = document.getElementsByClassName('job-card-filters');
var selectedFilters = document.getElementById('selectedFilters');
var clearAllFilters = document.getElementById('clear');
var deleteFilter = document.getElementsByClassName('remove');
var previousSibling = deleteFilter.previousElementSibling; // For toggling filter box

var filterBox = document.getElementById('filter-box'); // For hiding elements based on filters

var jobCard = document.getElementsByClassName('job-card-container');
var roles = document.getElementsByClassName('role');
var level = document.getElementsByClassName('level');
var languages = document.getElementsByClassName('languages');
var children = document.getElementsByClassName('child'); // Arrays

var filterArr = [];
var rolesArr = [];
var levelArr = [];
var languageArr = [];
data.forEach(function (data) {
  jobCardArea.innerHTML += "\n    <div class=\"job-card-container\">\n    <div class=\"job-card-info\">\n      <div class=\"job-card-logo\">\n        <img alt=\"".concat(data.company, "-logo\" src=").concat(data.logo, ">\n      </div>\n      <div class=\"job-card-company\">\n        <span class='company'>").concat(data.company, "</span>\n        ").concat(data["new"] ? '<span class="new">New!</span>' : '<span></span>', "\n        ").concat(data.featured ? '<span class="featured">FEATURED</span>' : '<span></span>', "\n        <div class=\"job-card-title\">\n          <div class=\"jobTitle\">").concat(data.position, "</div>\n        </div>\n        <div class=\"job-card-details\">\n          <span class=\"postedAt\">").concat(data.postedAt, "</span>\n          <div class=\"divider\"></div>\n          <span class=\"contact\">").concat(data.contract, "</span>\n          <div class=\"divider\"></div>\n          <span class=\"location\">").concat(data.location, "</span>\n        </div>\n      </div>\n      <div class=\"job-card-filters\">\n        <span class=\"child\">").concat(data.role, "</span>\n        <span class=\"child\">").concat(data.level, "</span>\n        ").concat(data.languages.map(function (language) {
    return "<span class=\"child\">".concat(language, "</span>");
  }).join(''), "\n      </div>\n    </div>\n  </div>\n  ");
}); //Click on job filter and add it to the filters box

for (var i = 0; i < jobFilters.length; i++) {
  jobFilters[i].addEventListener('click', function (e) {
    var filter = e.target.innerText;
    filterArr.push(filter);
    selectedFilters.innerHTML += "\n        <span>".concat(e.target.innerText, "</span>\n        <img id=\"remove\" class=\"remove\" src=\"images/icon-remove.svg\"></img>"); // console.log(filterArr);
    //Toggle filter box

    filterArr.length !== 0 && filterBox.classList.remove('hidden'); // After we add the item to filterArr, we want to see what jobCards hold the value of filterArr. If they do not hold that value, we want to hide these card. 
    // This is where I'm stuck
    // Remove a selected filter item

    var _loop = function _loop(_i) {
      deleteFilter[_i].addEventListener('click', function () {
        var item = deleteFilter[_i].previousElementSibling.innerText;

        if (filterArr.includes(item)) {
          filterArr.splice(filterArr.indexOf(item));
        }

        deleteFilter[_i].previousElementSibling.innerText = '';

        deleteFilter[_i].parentNode.removeChild(deleteFilter[_i]);

        filterArr.length == 0 && filterBox.classList.add('hidden');
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
  filterArr.length == 0 && filterBox.classList.add('hidden');
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