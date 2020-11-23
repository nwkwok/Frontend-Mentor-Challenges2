const jobCardArea = document.getElementById('jobCard')
const languages = document.querySelectorAll('languages')
const jobFilters = document.getElementsByClassName('job-card-filters');
const selectedFilters = document.getElementById('selectedFilters');
const clearAllFilters = document.getElementById('clear');
const deleteFilter = document.getElementsByClassName('remove');
const previousSibling = deleteFilter.previousElementSibling
const jobCard = document.getElementsByClassName('job-card-container');

let filterArr = [];

data.forEach((data) => {
    jobCardArea.innerHTML += `
    <div class="job-card-container">
    <div class="job-card-info">
      <div class="job-card-logo">
        <img id="logo" alt="${data.company}-logo" src=${data.logo}>
      </div>
      <div class="job-card-company">
        <span id="company">${data.company}</span>
        ${data.new ? '<span id="new">New!</span>' : '<span></span>'}
        ${data.featured ? '<span id="featured">FEATURED</span>' : '<span></span>'}
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
});

//Click on job filter and add it to the filters box
for (let i = 0; i < jobFilters.length; i++) {
    jobFilters[i].addEventListener('click', (e) => {
        const filter = e.target.innerText;
        filterArr.push(filter);
        selectedFilters.innerHTML += `
        <span>${e.target.innerText}</span>
        <img id="remove" class="remove" src="images/icon-remove.svg"></img>` 
        console.log(filterArr);

        //Render job cards based on selected filters
        // Array.from(jobCard).forEach(item => {
        //     if (filterArr.includes)
        //     item.classList.toggle('hidden')
        // });

        //Click on selected filter to delete
        for (let i = 0; i < deleteFilter.length; i++) {
            deleteFilter[i].addEventListener('click', () => {
                const item = (deleteFilter[i].previousElementSibling.innerText);
                if (filterArr.includes(item)) {
                    filterArr.splice(filterArr.indexOf(item));
                }

                deleteFilter[i].previousElementSibling.innerText = '';
                deleteFilter[i].parentNode.removeChild(deleteFilter[i]);
                console.log(filterArr);
            })
        }
    })}

clearAllFilters.addEventListener('click', () => {
    selectedFilters.innerHTML = ''
    filterArr = [];
});


