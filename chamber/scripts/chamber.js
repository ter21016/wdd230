document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const nav = document.querySelector("nav");

  menuButton.addEventListener("click", function () {
      nav.classList.toggle("open");
      menuButton.classList.toggle("open");
  });
});


// Match 'timestamp' in 'last_modif=timestamp'
// e.g. '1687964614822' in 'last_modif=1687964614822'
const pattern = /last_modif\s*=\s*([^;]*)/;

if (Date.parse(document.lastModified) > (parseFloat(document.cookie.match(pattern)?.[1]) || 0)) {
document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${location.pathname}`;
alert("This page has changed!");
}

// Display the last modified date in the footer
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

document.addEventListener("DOMContentLoaded", function() {
  const visitMessage = document.getElementById('visitMessage');
  const lastVisit = localStorage.getItem('lastVisit');
  const now = Date.now();
  let message = "";

  if (!lastVisit) {
      message = "Welcome! Let us know if you have any questions.";
  } else {
      const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
      if (daysSinceLastVisit < 1) {
          message = "Back so soon! Awesome!";
      } else if (daysSinceLastVisit === 1) {
          message = `You last visited 1 day ago.`;
      } else {
          message = `You last visited ${daysSinceLastVisit} days ago.`;
      }
  }

  visitMessage.textContent = message;
  localStorage.setItem('lastVisit', now);
});

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
// today's date
const theDateToday = new Date();

// initialize display elements
const todayElement = document.querySelector("#today");
const christmasElement = document.querySelector("#christmas");
const christmasDateElement = document.querySelector("#christmasDate");
const daysElement = document.querySelector("#daysleft");

// processing
const today = Date.now();
const christmasDate = new Date(Date.UTC(theDateToday.getFullYear(), 11, 25));
// check if is the waing days of December, if so ... change to next year.
if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
	christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}
// find difference between epoch times in ms and convert to days
let daysleft = (christmasDate.getTime() - Date.now()) / msToDays;

todayElement.textContent = today;
christmasElement.textContent = christmasDate.getTime();
christmasDateElement.textContent = christmasDate;
daysElement.textContent = `${daysleft.toFixed(0)} days`;

// Directory//
const baseUrl = "https://github.com/ter21016/wdd230/blob/main/chamber/index.html"
const requestURL = 'chamber/data/members.json';
let clickState = 'grid';

function displayBusinessGrid(item) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let name = document.createElement('h2');
    let site = document.createElement('a');
    let phone = document.createElement('p');
    let address = document.createElement('p');

    logo.setAttribute('src', "./img/" + item.logo);
    logo.setAttribute('alt', item.name + "'s Logo");
    name.textContent = item.name;
    site.setAttribute('href', item.website);
    site.setAttribute('target', "_blank");
    site.textContent = item.name + " Website";
    phone.textContent = item.phone;
    address.textContent = item.address;

    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(site);
    card.appendChild(phone);
    card.appendChild(address);

    document.querySelector('.bus-cards').appendChild(card);
}

function createTable() {
    let table = document.createElement('table');
    document.querySelector('.bus-cards').appendChild(table);
}

function displayBusinessList(item) {
    let row = document.createElement('tr');
    let name = document.createElement('p');
    let site = document.createElement('a');
    let phone = document.createElement('p');
    let address = document.createElement('p');

    name.textContent = item.name;
    site.setAttribute('href', item.website);
    site.setAttribute('target', '_blank');
    site.textContent = item.name + ' Website';
    phone.textContent = item.phone;
    address.textContent = item.address;

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    td1.appendChild(name);
    td2.appendChild(site);
    td3.appendChild(phone);
    td4.appendChild(address);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    document.querySelector('table').appendChild(row);
}

async function getBusinesses(requestURL, type) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const jsObject = await response.json();
        const businesses = jsObject['businesses'];

        if (type === 'grid') {
            businesses.forEach(displayBusinessGrid);
        } else if (type === 'list') {
            createTable();
            businesses.forEach(displayBusinessList);
        }
    }
}

function clearCards() {
    document.querySelector('.bus-cards').innerHTML = "";
}

function hearClick(value) {
    if (clickState === value) {
        return;
    } else if (value === 'grid') {
        clickState = 'grid';
        clearCards();
        getBusinesses(requestURL, 'grid');
    } else if (value === 'list') {
        clickState = 'list';
        clearCards();
        getBusinesses(requestURL, 'list');
    }
}

getBusinesses(requestURL, clickState);
