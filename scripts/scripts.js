// sg

// Identify coordinate text elements
const XCOORD = document.querySelector('#x_number');
const YCOORD = document.querySelector('#y_number');
// Identify button
const ROLLBUTTON = document.querySelector('#button');

const xMinInput = document.querySelector('#xMin');
const xMaxInput = document.querySelector('#xMax');
const yMinInput = document.querySelector('#yMin');
const yMaxInput = document.querySelector('#yMax');

// const CTA = document.querySelector(".cta 3");
// const ALERT = document.querySelector("#booking-alert“)3
// CTA.classList.remove("hide”);
// ALERT.classList.add("hide");
// good
function reveal(e,current, xmin, xmax, ymin, ymax) {
    // let min = 2;
    // let max = 12;
    
    console.log(`Xmin is ${xmin}`);



    e.preventDefault();
    // console.log("Button clicked");
    // current.innerHTML == "Book Now!" ? CTA.innerHTML = "Oooopsl" : CTA.innerHTML = "Book Nowl";
    // ALERT.classList.toggle("hide");

    let newXnum = Math.floor(Math.random() * (xmax - xmin + 1) ) + xmin;
    let newYnum = Math.floor(Math.random() * (ymax - ymin + 1) ) + ymin;

    XCOORD.innerHTML = newXnum;
    YCOORD.innerHTML = newYnum;
}

ROLLBUTTON.addEventListener('click', function(e){
    let xmin = xMinInput.value;
    let xmax = xMaxInput.value;
    let ymin = yMinInput.value;
    let ymax = yMaxInput.value;
    reveal(e,this, xmin, xmax, ymin, ymax);
}, false);
// ROLLBUTTON.addEventListener('click', function(){console.log("The button was clicked!")}, false);
