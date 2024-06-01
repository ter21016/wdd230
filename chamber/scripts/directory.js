// const url = 'https://github.com/ter21016/wdd230/blob/main/chamber/data/members.json';
// const cards = document.querySelector('#company-cards');
// const viewTypeSelect = document.querySelector('#view-type');

// let currentViewType = 'gridC';

// async function getCompanyData(url) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Failed to fetch company data');
//         }
//         const data = await response.json();
//         displayCompanies(data);
//     } catch (error) {
//         console.error(error);
//     }
// }



// const displayCompanies = (companies) => {
//     companies.forEach((company) => {

//         let card = document.createElement('section');
//         let name = document.createElement('h2');
//         let address = document.createElement('p');
//         let phone = document.createElement('p');
//         let website = document.createElement('a');
//         let image = document.createElement('img');
//         let membership = document.createElement('p');

//         name.textContent = company.name;

//         address.textContent = `Address: ${company.address}`;

//         phone.textContent = `Phone: ${company.phone}`;

//         website.textContent = "Website";
//         website.setAttribute('href', company.website);

//         image.setAttribute('src', company.image);
//         image.setAttribute('alt', `Logo of ${company.name}`);
//         image.setAttribute('loading', 'lazy');
//         image.setAttribute('width', '200');
//         image.setAttribute('height', '200');

//         membership.textContent = `Membership Level: ${company.membership_level}`;

//         card.appendChild(name);
//         card.appendChild(address);
//         card.appendChild(phone);
//         card.appendChild(website);
//         card.appendChild(image);
//         card.appendChild(membership);
//         card.setAttribute('background-color', '#37505C')

//         cards.appendChild(card);
//     });
// }

// function updateViewType(viewType) {
//     currentViewType = viewType;

//     const companyCards = document.querySelectorAll('#company-cards');

//     companyCards.forEach((card) => {
//         card.classList.remove('list', 'gridC');
//         card.classList.add(currentViewType);
//     });
// }

// viewTypeSelect.addEventListener('change', (event) => {
//     const viewType = event.target.value;
//     updateViewType(viewType);
// });

// getCompanyData(url);

document.addEventListener("DOMContentLoaded", function() {
    const viewTypeSelector = document.getElementById('view-type');
    const companyCardsContainer = document.getElementById('company-cards');
    const requestURL = 'https://github.com/ter21016/wdd230/blob/main/chamber/data/members.json';
  
    viewTypeSelector.addEventListener('change', () => {
      fetchBusinesses(viewTypeSelector.value);
    });
  
    async function fetchBusinesses(viewType) {
      try {
        const response = await fetch(requestURL);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayBusinesses(data, viewType);
      } catch (error) {
        console.error('Fetching error:', error);
      }
    }
  
    function displayBusinesses(businesses, viewType) {
      companyCardsContainer.innerHTML = '';
      if (viewType === 'grid') {
        businesses.forEach(displayBusinessGrid);
      } else if (viewType === 'list') {
        createTable();
        businesses.forEach(displayBusinessList);
      }
    }
  
    function displayBusinessGrid(business) {
      const card = document.createElement('section');
      card.className = 'grid-item';
      card.innerHTML = `
        <img src="img/${business.logo}" alt="${business.name} Logo">
        <h2>${business.name}</h2>
        <p>${business.address}</p>
        <p>${business.phone}</p>
        <a href="${business.website}" target="_blank">Visit Website</a>
      `;
      companyCardsContainer.appendChild(card);
    }
  
    function createTable() {
      const table = document.createElement('table');
      table.innerHTML = `
        <tr>
          <th>Name</th>
          <th>Website</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      `;
      companyCardsContainer.appendChild(table);
    }
  
    function displayBusinessList(business) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${business.name}</td>
        <td><a href="${business.website}" target="_blank">${business.name} Website</a></td>
        <td>${business.phone}</td>
        <td>${business.address}</td>
      `;
      document.querySelector('table').appendChild(row);
    }
  
    // Fetch and display the businesses initially with the default view type
    fetchBusinesses(viewTypeSelector.value);
  });
  