'use strict';

const linkBox = document.getElementById('link-box');

const baseUrl = 'https://github.com/ter21016/wdd230/tree/main';
const linksUrl = '';


const getLinks = async function() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.weeks);
}


const displayLinks = function(data) {
    for (let index = 0; index < data.length; index++) {
        let listEl = document.createElement('li');

        listEl.innerHTML = `${data[index].week}: `;
        data[index].links.forEach((link, i) => {
            let linkEl = document.createElement('a');
            linkEl.href = link.url;
            linkEl.title = link.title;
            linkEl.innerHTML = link.title;
            linkEl.target = '_blank';

            listEl.appendChild(linkEl)
        });

        linkBox.appendChild(listEl);
    }
};

getLinks();