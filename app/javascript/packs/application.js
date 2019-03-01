import "bootstrap";
import {microphone} from './jsprac';

// microphone("I am the greatest rapper alive");
function colorIcon(e) {
this.classList.add('active-icon');
// const icon = document.querySelector('.inactive-icon');
// icon.classList.add('active-icon');
// console.log(icon);
};

// function uncolorIcon(e) {

// };

const icon = document.querySelector('.inactive-icon');
icon.addEventListener('click', colorIcon);





