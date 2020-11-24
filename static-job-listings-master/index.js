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

// Arrays
let filterArr = [];


data.forEach((data) => {
    jobCardArea.innerHTML += `
    <div class="job-card-container">
    <div class="job-card-info">
      <div class="job-card-logo">
        <img alt="${data.company}-logo" src=${data.logo}>
      </div>
      <div class="job-card-company">
        <span class='company'>${data.company}</span>
        ${data.new ? '<span class="new">New!</span>' : '<span></span>'}
        ${data.featured ? '<span class="featured">FEATURED</span>' : '<span></span>'}
        <div class="job-card-title">
          <div class="jobTitle">${data.position}</div>
        </div>
        <div class="job-card-details">
          <span class="postedAt">${data.postedAt}</span>
          <div class="divider"></div>
          <span class="contact">${data.contract}</span>
          <div class="divider"></div>
          <span class="location">${data.location}</span>
        </div>
      </div>
      <div class="job-card-filters">
        <span class="child">${data.role}</span>
        <span class="child">${data.level}</span>
        ${data.languages.map((language) => {
            return `<span class="child">${language}</span>`
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

        //Toggle filter box
        filterArr.length !== 0 && filterBox.classList.remove('hidden');

        // Loop through each card and create an array with that card's filter values
        for (let i = 0; i < jobCard.length; i++) {
          let cardArr = [];
          cardArr.push(data[i].role, data[i].level, ...data[i].languages);

          //Once you have the card value, check it to filterArr
          if (!cardArr.includes(...filterArr)) {
            jobCard[i].classList.add('hidden');
          }
        }  

      // Remove a selected filter item
        for (let i = 0; i < deleteFilter.length; i++) {
            deleteFilter[i].addEventListener('click', () => {
                const item = (deleteFilter[i].previousElementSibling.innerText);
                if (filterArr.includes(item)) {
                    filterArr.splice(filterArr.indexOf(item));
                }
                
                deleteFilter[i].previousElementSibling.innerText = '';
                deleteFilter[i].parentNode.removeChild(deleteFilter[i]);
                filterArr.length == 0 && filterBox.classList.add('hidden');

            })
        }
    })}
    
    // Remove all filters and clear array
    clearAllFilters.addEventListener('click', () => {
        selectedFilters.innerHTML = ''
        filterArr = [];
        filterArr.length == 0 && filterBox.classList.add('hidden');

        for (i = 0; i<jobCard.length; i++) {
          filterArr.length == 0 && jobCard[i].classList.remove('hidden');
        }

    });

