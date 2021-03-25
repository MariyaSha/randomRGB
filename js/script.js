//creating an empty string variable to locate each div
let colorBallsHTML=''; 

//functions to create a random number between 0 to 256.
function randomNumber() {
    return Math.floor(Math.random() * 256 );
}

//function that returns rgb(?,?,?) values.
function randomRGB () {
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

//The random rgb values become the background colours of 10 different divs
for (let i = 0; i < 10; i++) {
    colorBallsHTML += `<div style="background-color: ${randomRGB()}"></div>`;
}

document.write(colorBallsHTML);