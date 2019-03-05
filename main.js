
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

//Objects in js
let catName = 'killer';
const bucketOCats = {
    cat1: 'fluffy',
    cat2: 4,
    cat3: catName,
    cat4: {
        water: 'nope',
        sunlight: 'yep'
    }
}
//dot notation
console.log(bucketOCats.cat2);

//bracket notation
console.log(bucketOCats['cat2']);

console.log(bucketOCats.cat4.water);

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};console.log('The meaniong of life is: ',hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);


let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010"
}
console.log(`Our company's lawyer is ${employee.name}`);
console.log(`Jeff was hired on ${employee.hire_date}`);

let eom = "employee of the month";

employee.vacation_days = 20;

console.log(employee);

employee[eom] = false;

const printToEmploy = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML + employee;
};

printToDom('employee', `Our company\'s lawyer is ${employee.name}<br>`);
printToDom('employee', `${employee.name} was hired on ${employee.hire_date}`);