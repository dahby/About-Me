'use strict';

var userPoints = 0;

console.log('hello world');

alert('Hello! My name is David and I have crafted a guessing game for us to play!');

var user = prompt('First off, what is your name?')

alert('Well hello ' + user + '! Let\'s find out how well you know me.');

var answer1 = prompt('Did David grow up in the Seattle area?' , 'type yes or no please').toLowerCase();

console.log(answer1);

//check if the user's answer is correct
//what is correct?
//find out what the answer is
//toLowerCase or toUpperCase
//use a confirm box

if (answer1 === 'no' || answer1 === 'n'){
    //if it's correct give them a point
    userPoints++;
    alert('You got it! Born and raised in Utah.');
} else {
    //if it's not correct, tell them to try again
    alert('I\'m afraid that is incorrect, ' + user + '. I grew up in Salt Lake City');
}

alert('You have ' + userPoints + ' points');

alert('All right, moving along');

var answer2 = prompt('Does David work in the banking industry?' , 'again, yes or no').toLowerCase();

console.log(answer2);

if (answer2 === 'yes' || answer2 === 'y'){
    userPoints++;
    alert('Unfortunately, yes, I am a banker');
} else {
    alert('Sorry to say, I\'ve been in banking for 10.5 years')
}

alert('You have ' + userPoints + ' points');
