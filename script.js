// "use strict";
// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }
// for(let i = 20; i >= 10; i--) {
//     if(i === 13) break;
//     console.log(i);
    
// }
// for(let i = 2; i <= 10; i++) {
//     if(i % 2 == 1) continue;
//     console.log(i);
// }
// for (let i = 2; i <= 16; i++) {
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
// }
// const arrayOfNumbers = [];
// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;
//     console.log(arrayOfNumbers[0]);

// }
// let i = 2;

//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
    



// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// // Пишем решение вот тут
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);


// // Не трогаем
// return result;
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === 'string') {
//         data[i] += ' - done'
//     } else {
//         data[i] *= 2
        
//     }
// }


// console.log(data);
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// let num = 0;
// for (let i = 4; i >= 0; i--){
//     result[num] = data[i]
//     num++;

// }
// console.log(result);
// const lines = 5;
// let result = '';
// for (let i = 0; i <= lines; i++){
//     for(let j = 0; j < lines - i; j++){
//         result += " ";
//     }
//     for(let j = 0; j < 2 * i + 1; j++){
//         result += '*'
//     }
//     result += '\n';
    
// }
// console.log(result);
const numberOfFiles = +prompt('Сколько фильмов вы уже посмотрели', '');
const personalMovieDB = {
    count: numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


// for(let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//           b = prompt('На сколько оцените его', '');
//     personalMovieDB.movies[a] = b;
//     if (a != null && b != null && a != '' && b != ''){
//         personalMovieDB.movies[a] = b;
//         console.log('done');

//     } else { 
//         console.log('error');
//         i--;
//     }

// }
let i = 0; 
do {
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('На сколько оцените его', '');
        personalMovieDB.movies[a] = b;
    i++
    if (a != null && b != null && a != '' && b != ''){
        personalMovieDB.movies[a] = b;
        console.log('done');
        
    } else { 
        console.log('error');
        i--;
    }
}
while(i < 2)
// while (i < 2){
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//           b = prompt('На сколько оцените его', '');
//         personalMovieDB.movies[a] = b;
//     i++
//     if (a != null && b != null && a != '' && b != ''){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
        
//     } else { 
//         console.log('error');
//         i--;
//     }
// }
if (personalMovieDB.count < 10){
    console.log('Мало Фмльма');
    
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");

} else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');

} else {
    console.log('Произошла ошибка');
}

console.log([personalMovieDB])