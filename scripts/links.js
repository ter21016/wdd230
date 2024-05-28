'use strict';

const linkBox = document.getElementById('link-box');

const baseUrl = 'https://github.com/ter21016/wdd230';
const linksUrl = 'data/links.json';


async function getLinks() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
  }



const displayLinks = function(weeks) {
    for (let i = 0; i < weeks.length; i++) {
        const week = weeks[i];
        const listElement = document.createElement('li');
        listElement.innerHTML = `${week.week}: `;
        
        const links = week.links;
        for (let j = 0; j < links.length; j++) {
            const link = links[j];
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            linkElement.target = '_blank';
            listElement.appendChild(linkElement);
            
            // Adding separator if not the last link
            if (j !== links.length - 1) {
                const separator = document.createElement('span');
                separator.textContent = ' | ';
                listElement.appendChild(separator);
            }
        }
        
        linkBox.appendChild(listElement);
    }
};


getLinks();