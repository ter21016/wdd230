

/*document.addEventListener("DOMContentLoaded", function () {
    // Get current year and set it in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Get last modified date and set it in the footer
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate;

    const hamburgerElement = document.querySelector('#myButton');
    const navElement = document.querySelector('#animateme');

    hamburgerElement.addEventListener('click', () => {
        navElement.classList.toggle('open');
        hamburgerElement.classList.toggle('open');
    });


  
     
    
   const button= document.querySelector('#darkBtn');
    
    
    darkBtn.addEventListener('click', () => {
            mainElement.classList.toggle('dark-mode');
    });
    
    
});*/

document.addEventListener("DOMContentLoaded", function () {
    // Get current year and set it in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Get last modified date and set it in the footer
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate;

    const hamburgerElement = document.querySelector('#myButton');
    const navElement = document.querySelector('#animateme');
    const button = document.getElementById("darkMode");
    const mainElement = document.querySelector('body');

    hamburgerElement.addEventListener('click', () => {
        navElement.classList.toggle('open');
        hamburgerElement.classList.toggle('open');
    });

    button.addEventListener('click', () => {
        mainElement.classList.toggle('darkMain');
    });
});
