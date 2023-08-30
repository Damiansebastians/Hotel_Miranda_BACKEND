import { userInterface } from "../database/mongoDB/userInterface";
import { hashPassword } from "../middleware/auth";
import { UserModel } from "../models/userModel";

export const getUsers = async () => {
  try {
    const users: UserModel[] = await userInterface.find().sort({ id: 1 }).exec();
    if (users.length > 0) {
      return users;
    } else {
      throw new Error("Couldn't find users in the database.");
    }
  } catch (e) {
    throw e;
  }
};

export const getSingleUser = async (userId: UserModel["id"]) => {
  try {
    const user = await userInterface.findOne({ id: userId }).exec();
    if (user) {
      return user;
    } else {
      throw new Error(`User with ID ${userId} could not be found in the database.`);
    }
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (updatedUser: UserModel, userId: UserModel["id"]) => {
  try {
    updatedUser.id = userId;

    if (updatedUser.password) {
      updatedUser.password = await hashPassword(updatedUser.password);
    }

    const user = await userInterface.findOneAndUpdate(
      { id: userId },
      {
        $set: updatedUser,
      },
      { new: true }
    ).exec();

    if (user) {
      return user;
    } else {
      throw new Error(`User with ID ${userId} could not be found in the database.`);
    }
  } catch (e) {
    throw e;
  }
};

export const createUser = async (newUser: UserModel) => {
  try {
    const lastUser = await userInterface.findOne().sort({ id: -1 }).exec();

    if (!lastUser) {
      throw new Error("Couldn't find users in the database");
    }

    const lastId = parseInt(lastUser.id.slice(2)) || 0;
    const id = "U-" + (lastId + 1).toString().padStart(4, "0");

    const password = await hashPassword(newUser.password);

    const user = new userInterface({
      ...newUser,
      id: id,
      password: password,
    });

    await user.save();
    return user;
  } catch (e) {
    throw e;
  }
};

export const deleteUser = async (userId: UserModel["id"]) => {
  try {
    const user = await userInterface.findOneAndDelete({ id: userId }).exec();
    if (user) {
      return user;
    } else {
      throw new Error(`User with ID ${userId} could not be found in the database.`);
    }
  } catch (error) {
    throw error;
  }
};

