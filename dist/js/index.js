"use strict";
function pickProperty(user, property) {
    return user[property];
}
const usuario = {
    name: 'Stella',
    age: 26,
    address: {
        street: 'Rua tal',
        number: 600
    }
};
console.log(pickProperty(usuario, 'age'));
const video = {
    title: 'Usando TypeScript',
    duration: 180,
};
