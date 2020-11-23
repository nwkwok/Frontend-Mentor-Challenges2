const jobCardArea = document.getElementById('jobCard')
const jobFilters = document.getElementsByClassName('job-card-filters');
const selectedFilters = document.getElementById('selectedFilters');
const clearAllFilters = document.getElementById('clear');
const deleteFilter = document.getElementsByClassName('remove');
const previousSibling = deleteFilter.previousElementSibling

// For toggling filter box
const filterBox = document.getElementById('filter-box');

// For hiding elements based on filters
const jobCard = document.getElementsByClassName('job-card-container');
const roles = document.getElementsByClassName('role')
const level = document.getElementsByClassName('level')
const languages = document.getElementsByClassName('languages')

// Arrays
let filterArr = [];
let rolesArr = [];
let levelArr = [];
let languageArr = [];


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
        <span class="role">${data.role}</span>
        <span class="level">${data.level}</span>
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

        //Toggle filter box
        filterArr.length !== 0 && filterBox.classList.remove('hidden');

        // After we add the item to filterArr, we want to see what jobCards hold the value of filterArr. If they do not hold that value, we want to hide the car. 


      // Remove a selected filter item
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

  

    
    // Remove all filters and clear array
    clearAllFilters.addEventListener('click', () => {
        selectedFilters.innerHTML = ''
        filterArr = [];
        filterArr.length == 0 && filterBox.classList.add('hidden');
    });

    




//////////// Attempted ideas /////////////

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

