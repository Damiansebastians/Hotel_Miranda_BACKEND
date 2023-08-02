import { faker } from '@faker-js/faker';
import { UserModel } from '../models/userModel';
import { ContactModel } from '../models/contactModel';
import { RoomModel } from '../models/roomModel';
import { BookingModel } from '../models/bookingModel';
import { userInterface } from '../database/mongoDB/userInterface';
import { contactInterface } from '../database/mongoDB/contactInterface';
import { roomInterface } from '../database/mongoDB/roomInterface';
import { bookingInterface } from '../database/mongoDB/bookingInterface';

//------------------------------------------------------
export const createRandomUser = (numberUsers: number) => {
  for (let i = 0; i < numberUsers; i++) {

    const user: UserModel = {
      id: faker.number.int({ min: 50, max: 100 }),
      img: faker.image.avatar(),
      name: faker.person.firstName(),
      Job_Desk: faker.person.jobTitle(),
      Contact: Number(faker.phone.number()),
      Status: faker.helpers.arrayElement(["ACTIVE", "INACTIVE"]),
    };
    userInterface.create(user);
  }
};

//---------------------------------------------------
export const createRandomContact = (numberContacts: number) => {
  for (let i = 0; i < numberContacts; i++) {

    let contact: ContactModel = {
      id: faker.number.int({ min: 50, max: 100 }),
      date: String(faker.date.between({
        from: '2023-01-06T00:00:00.000Z',
        to: '2023-01-12T00:00:00.000Z'
      })),
      customer: faker.person.fullName(),
      comment: faker.lorem.paragraph(),
      action: "Archive"
    }
    contactInterface.create(contact);
  }
};

//---------------------------------------------------

let room: RoomModel

export const createRandomRoom = (numberRooms: number) => {
  for (let i = 0; i < numberRooms; i++) {

    room = {
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
    }
    roomInterface.create(room);
  }
};

//--------------------------------------------------

export const createRandomBooking = (numberBookings: number) => {
  for (let i = 0; i < numberBookings; i++) {

    const booking: BookingModel = {
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
    }
    return bookingInterface.create(booking);
  }
};