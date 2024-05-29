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




/////////////// API Grid ///////////////////
/* GitHub link for directory: 'https://raw.githubusercontent.com/klittler-byui/wdd230/main/04-Chamber/04js/directorylist.json' */
const baseUrl = "https://github.com/ter21016/wdd230/blob/main/chamber/index.html";
const requestURL = "data/members.json"  ;

const Mcards = document.querySelector('.Mcards');

fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);
  const members = jsonObject['members'];
  members.forEach(displayMembers);
});

function displayMembers (member) {
  let Mcard = document.createElement('section');
  let name = document.createElement('name');
  let logo = document.createElement('img');
  let address = document.createElement('span');
  let phone = document.createElement('span');
  let web = document.createElement('a');

  name.textContent = `${member.name}`;
  address.textContent = `${member.address}`;
  phone.textContent = `${member.phone}`;
  web.textContent = `${member.web}`;

  logo.setAttribute('src', member.logoImg);
  logo.setAttribute('alt', `${member.name} logo`);
  logo.setAttribute('loading', 'lazy');
  web.setAttribute("href", member.web);
  web.setAttribute("target", "_blank");

  Mcard.appendChild(logo);
  Mcard.appendChild(name);
  Mcard.appendChild(address);
  Mcard.appendChild(phone);
  Mcard.appendChild(web);

  document.querySelector('div.Mcards').appendChild(Mcard);
}


//////// Grid View Toggle Function ///////////
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".Mcards");



gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}