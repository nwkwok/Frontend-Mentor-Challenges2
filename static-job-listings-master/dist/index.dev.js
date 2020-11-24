"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

for (var _i = 0; _i < jobFilters.length; _i++) {
  jobFilters[_i].addEventListener('click', function (e) {
    var filter = e.target.innerText;
    filterArr.push(filter);
    selectedFilters.innerHTML += "\n        <span>".concat(e.target.innerText, "</span>\n        <img id=\"remove\" class=\"remove\" src=\"images/icon-remove.svg\"></img>"); // console.log(filterArr);
    //Toggle filter box

    filterArr.length !== 0 && filterBox.classList.remove('hidden'); // After we add the item to filterArr, we want to see what jobCards hold the value of filterArr. If they do not hold that value, we want to hide these card. 
    // Loop through each card and create an array with that card's filter values

    for (var _i2 = 0; _i2 < jobCard.length; _i2++) {
      var cardArr = [];
      cardArr.push.apply(cardArr, [data[_i2].role, data[_i2].level].concat(_toConsumableArray(data[_i2].languages))); // console.log(filterArr);

      console.log(cardArr); //Once you have the card value, check it to filterArr

      if (!cardArr.includes.apply(cardArr, _toConsumableArray(filterArr))) {
        jobCard[_i2].classList.add('hidden');
      }
    } // Remove a selected filter item


    var _loop = function _loop(_i3) {
      deleteFilter[_i3].addEventListener('click', function () {
        var item = deleteFilter[_i3].previousElementSibling.innerText;

        if (filterArr.includes(item)) {
          filterArr.splice(filterArr.indexOf(item));
        }

        console.log(filterArr);
        deleteFilter[_i3].previousElementSibling.innerText = '';

        deleteFilter[_i3].parentNode.removeChild(deleteFilter[_i3]);

        filterArr.length == 0 && filterBox.classList.add('hidden');
      });
    };

    for (var _i3 = 0; _i3 < deleteFilter.length; _i3++) {
      _loop(_i3);
    }
  });
} // Remove all filters and clear array


clearAllFilters.addEventListener('click', function () {
  selectedFilters.innerHTML = '';
  filterArr = [];
  filterArr.length == 0 && filterBox.classList.add('hidden');

  for (i = 0; i < jobCard.length; i++) {
    filterArr.length == 0 && jobCard[i].classList.remove('hidden');
  }
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