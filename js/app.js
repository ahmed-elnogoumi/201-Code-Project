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





guessing_game();
