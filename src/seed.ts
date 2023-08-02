import { faker } from '@faker-js/faker';
import { UserModel } from './models/userModel';

function createRandomUser() {
  const user: UserModel = {
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
};

const users = [];
for (let i = 0; i < 10; i++) {
  users.push(createRandomUser());
}

console.log(users);


