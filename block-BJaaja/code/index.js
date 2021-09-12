// good
let num = 10;

let increaseNumber = () => num++;
let increasePassedNumber = (number) => number++;

let num1 = increaseNumber();
let num2 = increasePassedNumber(num1);
console.log(num1);
console.log(num2);

//3

const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// // bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};



// 4


//bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;
  
    return `${firstName} ${lastName}`;
  }
// good
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
  }

