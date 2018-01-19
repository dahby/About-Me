'use strict';

var userPoints = 0;

alert('Hello! My name is David and I have crafted a guessing game for us to play!');

var user = prompt('First off, what is your name?');

alert('Well hello ' + user + '! Let\'s find out how well you know me.');

function question1() {
  var answer = prompt('Did David grow up in the Seattle area?' , 'type yes or no please').toLowerCase();
  console.log('Did David grow up in the Seattle area?');
  console.log(answer);

  if (answer === 'no' || answer === 'n'){
    userPoints++;
    alert('You got it! Born and raised in Utah.');
  } else {
    alert('I\'m afraid that is incorrect, ' + user + '. I grew up in Salt Lake City');
  }

  alert('You have ' + userPoints + ' point!');
  console.log(user + ' has a score of ' + userPoints);
}
question1();

alert('All right, moving along');

function question2() {
  var answer = prompt('Does David work in the banking industry?' , 'again, yes or no').toLowerCase();
  console.log('Does David work in the banking industry?');
  console.log(answer);

  if (answer === 'yes' || answer === 'y'){
    userPoints++;
    alert('Unfortunately, yes, I am a banker');
  } else {
    alert('Sorry to say, I\'ve been in banking for 10.5 years');
  }

  alert('You have ' + userPoints + ' points!');
  console.log(user + ' has a score of ' + userPoints);
}
question2();

alert('On to the next one!');

function question3() {
  var answer = prompt('Is David\'s favorite baseball team the Seattle Mariners?' , 'yes or no').toLowerCase();
  console.log('Is David\'s favorite baseball team the Seattle Mariners?');
  console.log(answer);

  if (answer === 'yes' || answer === 'y'){
    userPoints++;
    alert('You\'d better believe it.');
  } else {alert('I\'m disappointed that you would think that of me.');
  }
}
question3();

alert('You have ' + userPoints + ' points!');
console.log(user + ' has a score of ' + userPoints);

alert('We\'re almost there!');

function question4() {
  var answer = prompt('Is there any food that David does not like?' , 'yes or no').toLowerCase();
  console.log('Is there any food that David does not like?');
  console.log(answer);

  if (answer === 'yes' || answer === 'y'){
    userPoints++;
    alert('Correct. While I\'ll eat most anything, I really don\'t like beets.');
  } else {alert('It may surprise you, but I REALLY don\'t like beets');
  }

  alert('Dwight Schrute and I would not get along');
}
question4();

alert('You have ' + userPoints + ' points!');
console.log(user + ' has a score of ' + userPoints);

alert('Next question!');

function question5() {
  var answer = prompt('Does David miss having the Sonics in town?' , 'yes or no').toLowerCase();
  console.log('Does David miss having the sonics in town?');
  console.log(answer);

  if (answer === 'yes' || answer === 'y'){
    userPoints++;
    alert('Definitely. I\'d love to watch the Utah Jazz play up here a few times a year.');
  } else {alert('While I was never a Sonics fan, I definitely wish they were still here');
  }
}
question5();

alert('Another question for you');

function question6() {
  var brothers = 3;
  var wrongAns = true;
  var answer;
  for (var tries = 4; tries > 0 && wrongAns; tries--) {
    answer = prompt('How many brothers do I have?', 'Enter a number this time');
    answer = parseInt(answer);
    console.log('How many brothers does David have?');
    console.log(answer);
    if (answer === brothers) {
      alert('Yep! 3 brothers and no sisters... My poor mother');
      userPoints++;
      wrongAns = false;
    } if (answer < brothers) {
      alert('More than that');
    } if (answer > brothers) {
      alert('Not that many');
    } if (tries === 1) {
      alert('Let\'s move on.');
    }
  }
}
question6();

alert('You have ' + userPoints + ' points!');
console.log(user + ' has a score of ' + userPoints);
alert('Last question, I promise!');

function question7() {
  var brosNames = ['doug', 'douglas', 'dan', 'daniel', 'darren'];
  var wrongName = true;
  var tries = 0;

  while (tries < 6 && wrongName === true) {
    var answer = prompt('Can you guess the name of any of my brothers?', 'Hint: We all start with D').toLowerCase();
    console.log('What are my brothers names?');
    console.log(answer);

    for (var i = 0; i < brosNames.length; i++) {
      console.log(brosNames[i]);

      if (brosNames[i].toLowerCase() === answer){
        userPoints++;
        wrongName = false;
        alert('Great guess! In order from older to youngest, it\'s Doug, Dan, David, and then Darren');
      }
    }
    if (wrongName === true) {
      tries++;
      alert ('Nope! Guess again!');
    }
  }
}
question7();

alert('You have finished with ' + userPoints + ' out of a possible 7 points!');
console.log(user + ' has a score of ' + userPoints);

alert('Congrats! You\'ve made it to the end.');
alert('As your reward, enjoy some very simplistic CSS design!');