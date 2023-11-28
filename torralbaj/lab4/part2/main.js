const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']

/* Declaring the alternative text for each image file */
const altTexts = ['pic1.jpg'='Closeup of an eyeball', 'pic2'='random quartz', 'pic3'='violets', 'pic4'='greek art', 'pic5'='butterfly']
/* Looping through images */

//for loop
const newImage = document.createElement('img');
newImage.setAttribute('src', images[num]);
newImage.setAttribute('alt', altTexts[images[num]]);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
