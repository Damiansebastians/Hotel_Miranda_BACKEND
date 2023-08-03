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
      console.log("datos creados user"),
      createRandomContact(10),
      console.log("datos creados contact"),
      createRandomRoom(10),
      console.log("datos creados Room")
    ]);
    await createRandomBooking(10);
    await disconnect();
  } catch (error) {
    console.error(error);
  }
};

seedDB();