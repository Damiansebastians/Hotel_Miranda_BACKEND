"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('@faker-js/faker');
function createRandomUser() {
    var user = {
        id: faker.number.int({ min: 50, max: 100 }),
        img: faker.image.avatar(),
        name: faker.person.firstName(),
        number: faker.number.int(),
        Job_Desk: faker.person.jobTitle(),
        Schedule: faker.string.alphanumeric(),
        Contact: faker.internet.email(),
        Status: faker.helpers.arrayElement(["ACTIVE", "INACTIVE"]),
    };
    return user;
}
// Generar usuarios aleatorios
var numberOfUsersToGenerate = 10; // Cambia esto para generar más o menos usuarios
var users = [];
for (var i = 0; i < numberOfUsersToGenerate; i++) {
    users.push(createRandomUser());
}
console.log(users);
