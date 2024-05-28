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

// const todayDisplay = document.querySelector(".today");
// const visitsDisplay = document.querySelector(".visits");

// let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// // 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
// }

// // 4️⃣ increment the number of visits by one.
// numVisits++;

// // 5️⃣ store the new visit total into localStorage, key=numVisits-ls
// localStorage.setItem("numOfVisits-ls", JSON.stringify(numOfVisits));

// // 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
// year.textContent = getDate().year;
// date.textContent = `${getDate().date} ${getDate().time}`;

document.addEventListener("DOMContentLoaded", () => {
  const todayDisplay = document.querySelector(".today");
  const visitsDisplay = document.querySelector(".visits");
  
  let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
  
  // Determine if this is the first visit or display the number of visits.
  if (numVisits !== 0) {
      visitsDisplay.textContent = numVisits;
  } else {
      visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
  }
  
  // Increment the number of visits by one.
  numVisits++;
  
  // Store the new visit total into localStorage, key=numVisits-ls
  localStorage.setItem("numVisits-ls", numVisits);
  
  // Assuming getDate() is a function that returns an object with 'year', 'date', and 'time' properties.
  function getDate() {
      const now = new Date();
      return {
          year: now.getFullYear(),
          date: now.toLocaleDateString(),
          time: now.toLocaleTimeString()
      };
  }
  
  const yearElement = document.querySelector("#currentYear");
  const dateElement = document.querySelector("#lastModified");
  
  const currentDate = getDate();
  yearElement.textContent = currentDate.year;
  dateElement.textContent = `Last Modified: ${document.lastModified}`;
});

