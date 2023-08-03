import { faker } from '@faker-js/faker';
import { userInterface } from '../database/mongoDB/userInterface';
import { contactInterface } from '../database/mongoDB/contactInterface';
import { roomInterface } from '../database/mongoDB/roomInterface';
import { bookingInterface } from '../database/mongoDB/bookingInterface';

//------------------------------------------------------
export const createRandomUser = async (numberUsers: number) => {
  for (let i = 0; i < numberUsers; i++) {
    const rand = Math.floor(Math.random() * 2);
    console.log(rand);

    const user = await new userInterface({
      id: faker.number.int({ min: 50, max: 100 }),
      img: faker.image.avatar(),
      name: faker.person.fullName(),
      Job_Desk: faker.person.jobTitle(),
      Contact: faker.phone.number('+34 9##-##-##-##'),
      Status: rand % 2 === 0 ? "ACTIVE" : "INACTIVE",
    })
    // .save();
    console.log(user);
  }
};

//---------------------------------------------------
export const createRandomContact = async (numberContacts: number) => {
  for (let i = 0; i < numberContacts; i++) {

    const contact = await new contactInterface({
      id: faker.number.int({ min: 50, max: 100 }),
      date: String(faker.date.between({
        from: '2023-01-06T00:00:00.000Z',
        to: '2023-01-12T00:00:00.000Z'
      })),
      customer: faker.person.fullName(),
      comment: faker.lorem.paragraph(),
      action: "Archive"
    })
    // .save()
    // console.log(contact);
  }
};

//---------------------------------------------------
let room: any;

export const createRandomRoom = async (numberRooms: number) => {
  for (let i = 0; i < numberRooms; i++) {

    room = new roomInterface({
      id: faker.number.int({ min: 50, max: 100 }),
      img: faker.image.urlPicsumPhotos(),
      bed_Type: faker.helpers.arrayElement([
        "Double Bed",
        "Single Bed",
        "Suite",
        "Double Superior"
      ]),
      facilities: faker.helpers.arrayElement([
        "AC",
        "Shower",
        "Double Bed",
        "Towel",
        "Bathup",
        "Coffee Set",
        "LED TV",
        "Wifi"
      ]),
      price: faker.number.int({ min: 50, max: 500 }),
      offer: faker.number.int({ min: 0, max: 99 }),
      status: faker.helpers.arrayElement(["ACTIVE", "INACTIVE"]),
    })
    // .save()
    // console.log(room);
  }
};

//--------------------------------------------------

export const createRandomBooking = async (numberBookings: number) => {
  for (let i = 0; i < numberBookings; i++) {

    const booking = await new bookingInterface({
      id: faker.number.int({
        min: 50,
        max: 100
      }),
      img: faker.image.urlPicsumPhotos(),
      Guest: faker.person.fullName(),
      Order_Date: String(faker.date.between({
        from: '2023-01-01T00:00:00.000Z',
        to: '2023-01-12T00:00:00.000Z'
      })),
      Check_in: String(faker.date.between({
        from: '2023-01-01T00:00:00.000Z',
        to: '2023-01-12T00:00:00.000Z'
      })),
      Check_out: String(faker.date.between({
        from: '2023-01-01T00:00:00.000Z',
        to: '2023-01-12T00:00:00.000Z'
      })),
      roomId: Number(room.id),
      price: faker.number.int({
        min: 50,
        max: 500
      }),
      Special_Request: faker.company.catchPhraseAdjective(),
      amenities: faker.helpers.arrayElement([
        "AC",
        "Shower",
        "Double Bed",
        "Towel",
        "Bathup",
        "Coffee Set",
        "LED TV",
        "Wifi"
      ]),
      description: faker.company.catchPhrase(),
      Status: faker.helpers.arrayElement([
        'Booked',
        'Pending',
        'Canceled',
        'Refund'
      ])
    })
    // .save()
    // console.log(booking);
  }
};
