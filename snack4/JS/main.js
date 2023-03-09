'use strict';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// lista squadre Super lega

const superLega =
[
{ 
    team: 'Juventus',
    Pt : 0,
    falliSubiti : 0
},
{
    name: 'Barcellona',
    Pt : 0,
    falliSubiti : 0
},
{
    name: 'Real Madrid',
    Pt : 0,
    falliSubiti : 0
 },
 {
    name: 'PSG',
    Pt : 0,
    falliSubiti : 0
 },
 {
    name: 'Manchester City',
    Pt : 0,
    falliSubiti : 0
},
{
    name: 'Bayern Monaco',
    Pt : 0,
    falliSubiti : 0
},
]
console.log(superLega)

// punti e falli subiti squadre

const firstTeam = superLega.map(element => {
    element["Pt"] = getRandomInt(80);
    element ["falliSubiti"] = getRandomInt(150);
    return (element)
})
console.log(firstTeam)

// squadra con più falli subiti

const teamWithMorefouls = firstTeam.map((element) => {
    const {name, falliSubiti} = element;
    return {name, falliSubiti};
});
console.log(teamWithMorefouls)