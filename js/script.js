//creating an empty string variable.
var html = '';
//creating an empty variable.
var rgbColour;

//functions to create a random number between 0 to 256.
function randomNumber() {
    return Math.floor(Math.random() * 256 );
}

//function that returns rgb(?,?,?) values.
function randomRgb () {
    var colour = 'rgb(';

    colour += randomNumber() + ',';
    colour += randomNumber() + ',';
    colour += randomNumber() + ')';

    return colour;
}

//The random rgb values become the background colours of 10 different divs.
for (var i = 0; i < 10; i += 1) {
    rgbColour = randomRgb();
    html += '<div style="background-color:' + rgbColour + '"></div>';
}

document.write(html);