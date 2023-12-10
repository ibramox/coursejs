let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: (numberOfFilms),
    movies: {},
    genres: [],
    privat: false
};

const result = prompt('Один из последних просмотренных фильмов?');
const result2 = prompt('На сколько оцените его?');
const result3 = prompt('Один из последних просмотренных фильмов?');
const result4 = prompt('На сколько оцените его?');
personalMovieDB.movies[result] = result2;
personalMovieDB.movies[result3] = result4;

console.log(personalMovieDB);