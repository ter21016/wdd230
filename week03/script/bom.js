const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// button.onclick = function() {
//     let myChapter = input.value;
//     input.value = '';
//     if (myChapter !== '') {
//     const listItem = document.createElement('li');
//     const listText = document.createElement('span');
//     const listBtn = document.createElement('button');
    
//     listText.textContent = myChapter;
//     listBtn.textContent = '❌';
    
//     listItem.appendChild(listText);
//     listItem.appendChild(listBtn);
//     list.appendChild(listItem);
    
//     listBtn.onclick = function(e) {
//         list.removeChild(listItem);
//     }
// }
// else {
//     alert('Please enter a chapter');
// }
//     input.focus();
//     }

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
    
});
  
    
button.addEventListener('click', () => {
    if (input.value != '') PageTransitionEvent
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();

});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    console.log(" I  Don't like to copy code instead of typing it out myself and trying to understand it. ");

}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('MyFavBOMList'));
}



function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

