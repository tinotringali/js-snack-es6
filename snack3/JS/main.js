'use strict';

// lista bici  
const bikes =
[
    {
        name: 'Tandem',
        weight: 15
    },
    {
        name: 'Bici da corsa',
        weight: 8
    },
    {
        name: 'Bici elettrica',
        weight: 9
    },
    {
        name: 'Cargo bike',
        weight: 11
    },
    {
        name: 'Fat bike',
        weight: 12
    }
];
console.log(bikes)

//ciclo for each

bikes.forEach((element) => {
    let { name, weight } = element;
    console.log(name, weight)
});
