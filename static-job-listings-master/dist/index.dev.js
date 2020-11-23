"use strict";

var jobCardArea = document.getElementById('jobCard');
var languages = document.querySelectorAll('languages');
var jobFilters = document.getElementsByClassName('job-card-filters');
var selectedFilters = document.getElementById('selectedFilters');
var clearAllFilters = document.getElementById('clear');
var deleteFilter = document.getElementsByClassName('remove');
var previousSibling = deleteFilter.previousElementSibling;
var jobCard = document.getElementsByClassName('job-card-container');
var filterArr = [];
data.forEach(function (data) {
  jobCardArea.innerHTML += "\n    <div class=\"job-card-container\">\n    <div class=\"job-card-info\">\n      <div class=\"job-card-logo\">\n        <img id=\"logo\" alt=\"".concat(data.company, "-logo\" src=").concat(data.logo, ">\n      </div>\n      <div class=\"job-card-company\">\n        <span id=\"company\">").concat(data.company, "</span>\n        ").concat(data["new"] ? '<span id="new">New!</span>' : '<span></span>', "\n        ").concat(data.featured ? '<span id="featured">FEATURED</span>' : '<span></span>', "\n        <div class=\"job-card-title\">\n          <div id=\"jobTitle\">").concat(data.position, "</div>\n        </div>\n        <div class=\"job-card-details\">\n          <span id=\"postedAt\">").concat(data.postedAt, "</span>\n          <div class=\"divider\"></div>\n          <span id=\"contact\">").concat(data.contract, "</span>\n          <div class=\"divider\"></div>\n          <span id=\"location\">").concat(data.location, "</span>\n        </div>\n      </div>\n      <div class=\"job-card-filters\">\n        <span id=\"role\">").concat(data.role, "</span>\n        <span id=\"level\">").concat(data.level, "</span>\n        ").concat(data.languages.map(function (language) {
    return "<span class=\"languages\">".concat(language, "</span>");
  }).join(''), "\n      </div>\n    </div>\n  </div>\n  ");
}); //Click on job filter and add it to the filters box

for (var i = 0; i < jobFilters.length; i++) {
  jobFilters[i].addEventListener('click', function (e) {
    var filter = e.target.innerText;
    filterArr.push(filter);
    selectedFilters.innerHTML += "\n        <span>".concat(e.target.innerText, "</span>\n        <img id=\"remove\" class=\"remove\" src=\"images/icon-remove.svg\"></img>");
    console.log(filterArr); //Render job cards based on selected filters
    // Array.from(jobCard).forEach(item => {
    //     if (filterArr.includes)
    //     item.classList.toggle('hidden')
    // });
    //Click on selected filter to delete

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
}

clearAllFilters.addEventListener('click', function () {
  selectedFilters.innerHTML = '';
  filterArr = [];
});