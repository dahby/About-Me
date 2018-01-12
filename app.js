'use strict';

var userPoints = 0;

console.log('hello world');

alert('Hello! My name is David and I have crafted a guessing game for us to play!');

var user = prompt('First off, what is your name?')

alert('Well hello ' + user + '! Let\'s find out how well you know me.');

var answer = prompt('Did David grow up in the Seattle area?' , 'type yes or no please').toLowerCase();

console.log(answer);

//check if the user's answer is correct
//what is correct?
//find out what the answer is
//toLowerCase or toUpperCase
//use a confirm box

if (answer === 'no' || answer === 'n'){
    //if it's correct give them a point
    userPoints++;
} else {
    //if it's not correct, tell them to try again
    alert('I\'m afraid that is incorrect, ' + user + '. I grew up in Salt Lake City');
}

alert('You have ' + userPoints + ' points');