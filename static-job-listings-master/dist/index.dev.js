"use strict";

var jobCardArea = document.getElementById('jobCard');
var languages = document.querySelectorAll('languages');
var jobFilters = document.getElementsByClassName('job-card-filters');
var selectedFilters = document.getElementById('selectedFilters');
var clearAllFilters = document.getElementById('clear');
var deleteFilter = document.getElementsByClassName('remove');
var prevSibling = deleteFilter.prevSibling;
var filterArr = [];
data.forEach(function (data) {
  jobCardArea.innerHTML += "\n    <div class=\"job-card-container\">\n    <div class=\"job-card-info\">\n      <div class=\"job-card-logo\">\n        <img id=\"logo\" alt=\"".concat(data.company, "-logo\" src=").concat(data.logo, ">\n      </div>\n      <div class=\"job-card-company\">\n        <span id=\"company\">").concat(data.company, "</span>\n        <span id=\"new\">New!</span>\n        <span id=\"featured\">FEATURED</span>\n        <div class=\"job-card-title\">\n          <div id=\"jobTitle\">").concat(data.position, "</div>\n        </div>\n        <div class=\"job-card-details\">\n          <span id=\"postedAt\">").concat(data.postedAt, "</span>\n          <div class=\"divider\"></div>\n          <span id=\"contact\">").concat(data.contract, "</span>\n          <div class=\"divider\"></div>\n          <span id=\"location\">").concat(data.location, "</span>\n        </div>\n      </div>\n      <div class=\"job-card-filters\">\n        <span id=\"role\">").concat(data.role, "</span>\n        <span id=\"level\">").concat(data.level, "</span>\n        ").concat(data.languages.map(function (language) {
    return "<span class=\"languages\">".concat(language, "</span>");
  }).join(''), "\n      </div>\n    </div>\n  </div>\n  ");
});

for (var i = 0; i < jobFilters.length; i++) {
  jobFilters[i].addEventListener('click', function (e) {
    var filter = e.target.innerText;
    filterArr.push(filter);
    selectedFilters.innerHTML += "\n        <span>".concat(e.target.innerText, "</span>\n        <img id=\"remove\" class=\"remove\" src=\"images/icon-remove.svg\"></img>");

    for (var _i = 0; _i < deleteFilter.length; _i++) {
      deleteFilter[_i].addEventListener('click', function () {
        prevSibling.innerHTML = '';
      });
    }

    console.log(filterArr);
  });
}

clearAllFilters.addEventListener('click', function () {
  selectedFilters.innerHTML = '';
}); //     if (filterArr.includes(e.target.innerText) === false) {
//         const filter = e.target.innerText;
//         filterArr.push(filter);
//         [...new Set(filterArr)];
//         console.log(...filterArr);
//     }
// })}