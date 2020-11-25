'use strict'

const coach =
 {  firstName: 'József',
    lastName: 'Verebes',
    team: 'Rába ETO' };

const tag = (texts,...values) =>
    texts.map((text, index)=>
    `<i>${text}</i>${values[index] ? `<strong>${values[index]}</strong>`:''}`).join('');


const template =tag`A régi nagy edzők egyik képviselője: ${coach.lastName} ${coach.firstName} , aki a legnagyobb sikereit a ${coach.team} csapatával érte el.`;
document.body.innerHTML= template;
    
    
    