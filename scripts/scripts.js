
// Identify coordinate text elements
const XCOORD = document.querySelector('#x_number');
const YCOORD = document.querySelector('#y_number');
// Identify button
const ROLLBUTTON = document.querySelector('#button');

// const CTA = document.querySelector(".cta 3");
// const ALERT = document.querySelector("#booking-alert“)3
// CTA.classList.remove("hide”);
// ALERT.classList.add("hide");

function reveal(e,current) {
    let min = 2;
    let max = 12;

    e.preventDefault();
    // console.log("Button clicked");
    // current.innerHTML == "Book Now!" ? CTA.innerHTML = "Oooopsl" : CTA.innerHTML = "Book Nowl";
    // ALERT.classList.toggle("hide");

    let newXnum = Math.floor(Math.random() * (max - min + 1) ) + min;
    let newYnum = Math.floor(Math.random() * (max - min + 1) ) + min;

    XCOORD.innerHTML = newXnum;
    YCOORD.innerHTML = newYnum;

}

ROLLBUTTON.addEventListener('click', function(e){ reveal(e,this); }, false);
// ROLLBUTTON.addEventListener('click', function(){console.log("The button was clicked!")}, false);
