import { connect, disconnect } from "./database/connectMongo";
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
      createRandomContact(10),
      createRandomRoom(10),
    ]);
    await createRandomBooking(10);
    await disconnect();
  } catch (error) {
    console.error(error);
  }
};

seedDB();