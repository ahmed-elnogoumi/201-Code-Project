'use strict';

function guessing_game(){
  let Favorite_TV_Show = prompt('Whats Ahmeds favorite TV show?');
  Favorite_TV_Show = Favorite_TV_Show.toLowerCase();

  if (Favorite_TV_Show === 'mr. robot'){
    //console.log('Correct!');
    alert('Correct!');
  } else {
    //console.log('Wrong! Its Mr. Robot.');
    alert('Wrong! Its Mr. Robot.');
  }

  let Favorite_Movie = prompt('Whats Ahmeds favorite movie?');
  Favorite_Movie = Favorite_Movie.toLowerCase();
  if (Favorite_Movie === 'empire strikes back'){
    //console.log('Correct!');
    alert('Correct!');
  } else {
    //console.log('Wrong! Its Empire Strikes Back');
    alert('Wrong! Its Empire Strikes Back');
  }

  let favoriteBook = prompt('Whats Ahmeds favorite book?');
  favoriteBook = favoriteBook.toLowerCase();
  if (favoriteBook === 'brave new world') {
    //console.log('Correct!');
    alert('Correct!');
  } else {
    //console.log('Wrong! Its Brave New World');
    alert('Wrong! Its Brave New World');
  }

  let favoriteFood = prompt('Whats Ahmeds favorite food?');
  favoriteFood = favoriteFood.toLowerCase();
  if (favoriteFood === 'pizza') {
    //console.log('Correct!');
    alert('Correct!');
  } else {
    //console.log('Wrong! Its Pizza');
    alert('Wrong! Its Pizza');
  }

  let favoriteGame = prompt('Whats Ahmeds favorite game?');
  favoriteGame = favoriteGame.toLowerCase();
  if (favoriteGame === 'mario kart') {
    //console.log('Correct!');
    alert('Correct!');
  } else {
    //console.log('Wrong! Its Mario Kart');
    alert('Wrong! Its Mario Kart');
  }
}

function number_guessing_game(){
  let number = 7;
  let user_guess;

  while(!user_guess){
    user_guess = prompt('Guess a number: 1 - 10.');
    user_guess = parseInt(user_guess);
  }

  while(user_guess !== number){
    if(user_guess > number){
      alert('Too high, try again!');
    } else if (user_guess < number){
      alert('Too low, try again!');
    }
    user_guess = prompt('Guess a number: 1 - 10.');
    user_guess = parseInt(user_guess);
  }

  if(user_guess === number){
    alert('Correct answer!');
    user_guess = parseInt(user_guess);
  }

}

function programming_language_guessing_game(){

  let programming_languages = ['C++', 'JavaScript', 'HTML', 'CSS', 'Python', 'Lua'];
  let guess = prompt('Which programming languages does Ahmed know?');
  let guess_count = 0;

  for (let x = 0; x < 6; x++) {
    if (programming_languages.includes(guess)) {
      guess_count++;
      alert('Correct! You have ' + guess_count + ' questions right!');
      guess = prompt('Which programming languages does Ahmed know?');
    } else {
      guess = prompt('Incorrect. Try again: Which programming languages does Ahmed know?');
    }
  }

  alert('You got ' + guess_count + ' questions right!');

}

guessing_game();
programming_language_guessing_game();
number_guessing_game();

