
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

const iAmThursty = (num) => {
    //do some stuff

    if (num < 21) {     //under 21, 'drink some water'
        return `Drink some water <br>`;
    } else if (num > 20 && num <= 65) {     //over 21, under 65 'have a beer'
        return 'Have a beer <br>';
    } else {     //over 65 'take a nap'
        return 'Take a nap <br>';
    }
}

printToDom('thirsty', iAmThursty(13));
printToDom('thirsty', iAmThursty(26));
printToDom('thirsty', iAmThursty(75));

//Bonus Challenge - printToDom function

// document.getElementById('ageLimit').innerHTML = `You should: ${iAmThursty(26)}`;
