const jobCardArea = document.getElementById('jobCard')
const languages = document.querySelectorAll('languages')

data.forEach((data) => {

    jobCardArea.innerHTML += `
    <div class="job-card-container">
    <div class="job-card-info">
      <div class="job-card-logo">
        <img id="logo" src=${data.logo}>
      </div>
      <div class="job-card-company">
        <span id="company">${data.company}</span>
        <span id="new">New!</span>
        <span id="featured">FEATURED</span>
        <div class="job-card-title">
          <div id="jobTitle">${data.position}</div>
        </div>
        <div class="job-card-details">
          <span id="postedAt">${data.postedAt}</span>
          <div class="divider"></div>
          <span id="contact">${data.contract}</span>
          <div class="divider"></div>
          <span id="location">${data.location}</span>
        </div>
      </div>
      <div class="job-card-filters">
        <span id="role">${data.role}</span>
        <span id="level">${data.level}</span>
        ${data.languages.map((language) => {

            return `<span class="languages">${language}</span>`
        }).join('')}
      </div>
    </div>
  </div>
  `

  console.log(data.languages);
});