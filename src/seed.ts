import { connect, disconnect } from "./database/connectMongoLocal";
import {
  createRandomBooking,
  createRandomContact,
  createRandomRoom,
  createRandomUser
} from "./data/seedData";

const connection = async () => await connect();

async function seedDB(): Promise<void> {
  try {
    await connection();
    await Promise.all([
      createRandomUser(10),
      console.log("datos creados users"),
      createRandomContact(10),
      console.log("datos creados contacts"),
      createRandomRoom(10),
      console.log("datos creados rooms")
    ]);
    await createRandomBooking(10);
    console.log("datos creados bookings")
    await disconnect();
  } catch (error) {
    console.error(error);
  }
};

seedDB();