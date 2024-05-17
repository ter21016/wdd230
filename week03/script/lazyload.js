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

