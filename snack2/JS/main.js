'use strict';

const students =
[
{ 
    id: '213',
    name: 'Marco della Rovere',
    grades : '78'
},
{
    id: '110',
    name: 'Paola Cortellessa',
    grades : '96'
},
{
    id: '250',
    name: 'Andrea Mantegna ',
    grades : '48'
 },
 {
    id: '145',
    name: 'Gaia Borromini',
    grades : '74'
 },
 {
    id: '196',
    name: 'Luigi Grimaldello',
    grades : '68'
},
{
    id: '102',
    name: 'Piero della Francesca',
    grades : '50'
},
{
    id: '120',
    name: 'Francesca da Polenta',
    grades : '84'
}
]
console.log(students);

// lista studenti in maiuscolo 

const uppercaseName = students.map((element) => {
    return element.name.toUpperCase()
});
console.log(uppercaseName);

// lista studenti con voto superiore a 70

const topGrade = students.filter((element) => {
    if(element.grades > 70){
        return true;
    }
})
console.log(topGrade);