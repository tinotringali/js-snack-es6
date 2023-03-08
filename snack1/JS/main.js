'use strict';

const guest = [
    
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];


const guestList = guest.map((element, index) => {
    return {
        table: 'Vip table ', guest: element, place: index + 1
    }
})
console.log(guestList)
