const d = document; 

//create a random number between 0 to 256.
const randomNumber = () => {
    return Math.floor(Math.random() * 256 );
}

//returns rgb(R,G,B) values, where R,G,B between 0 and 256 
const randomRGB = () => {
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

//The random rgb values become the background colours of n different divs
const appendBalls = (numOfBalls) => {  
    let i = 0;
    const fragment = new DocumentFragment;
    //Believe it or not while has better performance than for of, in and each. 
    while (i < numOfBalls) {
        const ball = d.createElement("div");
        ball.classList.add("ball");
        ball.style.backgroundColor = randomRGB();
        fragment.appendChild(ball);
        i++;
    }; 
    d.body.appendChild(fragment);
};

appendBalls(500);
