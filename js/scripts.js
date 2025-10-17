const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    hamburgerElement.classList.toggle('open');
    navElement.classList.toggle('open');
});

//grab the REVIEWS data from the file
import { reviews } from './reviews.js';
console.log(reviews);

//create an empty card
const myTarget = document.querySelector("#cards");

for (let x = 0; x < reviews.length; x++) {

    //create a section
    const mySection = document.createElement('section')
    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name


    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].text

    const myRating = document.createElement('div')



    //console.log(reviews[x].stars)

    for (let step = 0; step<reviews[x].stars; step++) {
    const revStars = document.createElement('img')
    revStars.src = "./images/star.svg"
    myRating.appendChild(revStars)

    }

    //build the figure with child elements
    mySection.appendChild(myName);
    mySection.appendChild(myRating);
    mySection.appendChild(myReview);

    //add a new card to a page
    myTarget.appendChild(mySection);
}//end loop