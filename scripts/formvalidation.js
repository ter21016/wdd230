{/* <input type="password" name="pass1" required>
const x = document.querySelectore('input[name=pass1]')
const y = x.value



if (user1.value !== user2.value){

}else{
    
} */}

// [7:21 PM] Terry, Jessica
// const value = document.getElementById("ratingvalue");
// const range = document.getElementById("page_rating");
 
// range.addEventListener('change', displayRatingValue);
// range.addEventListener('input', displayRatingValue);
 
// function displayRatingValue() {
//     value.innerHTML = range.value;
// }
 
// const pw = document.querySelector("#password");
// const repeat = document.querySelector("#repeat_password");
 
// function passwordValidation() {
//     if (pw.value != repeat.value) {
//         repeat.setCustomValidity("Entered passwords do not match");
//     } else {
//         repeat.setCustomValidity("");
//     }
// }
 
// pw.onchange = passwordValidation;
// repeat.onkeyup = passwordValidation;

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}