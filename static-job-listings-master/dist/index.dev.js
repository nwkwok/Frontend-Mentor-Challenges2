"use strict";

var jobCardArea = document.getElementById('jobCard');
var languages = document.querySelectorAll('languages');
data.forEach(function (data) {
  jobCardArea.innerHTML += "\n    <div class=\"job-card-container\">\n    <div class=\"job-card-info\">\n      <div class=\"job-card-logo\">\n        <img id=\"logo\" src=".concat(data.logo, ">\n      </div>\n      <div class=\"job-card-company\">\n        <span id=\"company\">").concat(data.company, "</span>\n        <span id=\"new\">New!</span>\n        <span id=\"featured\">FEATURED</span>\n        <div class=\"job-card-title\">\n          <div id=\"jobTitle\">").concat(data.position, "</div>\n        </div>\n        <div class=\"job-card-details\">\n          <span id=\"postedAt\">").concat(data.postedAt, "</span>\n          <div class=\"divider\"></div>\n          <span id=\"contact\">").concat(data.contract, "</span>\n          <div class=\"divider\"></div>\n          <span id=\"location\">").concat(data.location, "</span>\n        </div>\n      </div>\n      <div class=\"job-card-filters\">\n        <span id=\"role\">").concat(data.role, "</span>\n        <span id=\"level\">").concat(data.level, "</span>\n        <span class=\"languages\" id=\"languages\">").concat(data.languages[0], "</span>\n        <span class=\"languages\" id=\"languages\">").concat(data.languages[1], "</span>\n        <span class=\"languages\" id=\"languages\">").concat(data.languages[2], "</span>\n      </div>\n    </div>\n  </div>\n  ");

  if (languages.textContent === 'undefined') {
    languages.innerHTML === '<div></div>';
  }
});