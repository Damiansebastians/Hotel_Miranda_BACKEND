// import { createNewUser, updateOneUser } from "../database/mongoServices/user";
// import { UserModel } from "../models/userModel";
// import fs from "fs";

// const userData = require("../data/userData.json");

// //---------------------------------------------------
// const getUsers = async () => {
//   try {
//     const allUsers = await userData;
//     return allUsers;
//   } catch (error) {
//     throw error;
//   }
// };

// //---------------------------------------------------
// const getOneUser = async (userId: string) => {
//   try {
//     const user = userData.find((user: UserModel) => user.id === Number(userId));
//     return user;
//   } catch (error) {
//     throw error;
//   }
// };

// //---------------------------------------------------
// const createUser = async (newUser: UserModel) => {
//   try {
//     const createdUser: UserModel = await createNewUser(newUser);
//     return createdUser;
//   } catch (error) {
//     throw error;
//   }
// };

// //---------------------------------------------------
// const updateUser = async (userId: string, changes: Omit<Partial<UserModel>, "user_id">) => {
//   try {
//     const updatedUser = await updateOneUser(userId, changes);
//     return updatedUser;
//   } catch (error) {
//     throw error;
//   }
// };

// //---------------------------------------------------
// const deleteOneUser = async (userId: string) => {
//   try {
//     const user = userData.filter((user: any) => user.id !== userId);
//     fs.writeFileSync("./data/userData.json", JSON.stringify(user));
//   } catch (error) {
//     throw error;
//   }
// };

// export {
//   getUsers,
//   getOneUser,
//   createUser,
//   updateUser,
//   deleteOneUser,
// };

import { userInterface } from "../database/mongoDB/userInterface";
import { hashPassword } from "../middleware/auth";
import { UserModel } from "../models/userModel";

export const getUsers = async () => {
  try {
    const users: UserModel[] = await userInterface
      .find()
      .sort({ id: 1 })
      .exec();
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
      throw new Error(
        `User with ID ${userId} could not be found in the database.`
      );
    }
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (
  updatedUser: UserModel,
  userId: UserModel["id"]
) => {
  try {
    updatedUser.id = userId;

    if (updatedUser.password) {
      updatedUser.password = await hashPassword(updatedUser.password);
    }

    const user = await userInterface
      .findOneAndUpdate(
        { id: userId },
        {
          $set: updatedUser,
        },
        { new: true }
      )
      .exec();

    if (user) {
      return user;
    } else {
      throw new Error(
        `User with ID ${userId} could not be found in the database.`
      );
    }
  } catch (e) {
    throw e;
  }
};

export const createUser = async (newUser: UserModel) => {
  try {
    const lastUser = (await userInterface
      .findOne()
      .sort({ id: -1 })
      .exec()) as UserModel;
    const lastId = parseInt(lastUser.id.slice(2)) || 0;

    let { id, name, email, password, img, Status, Contact, Job_Desk } = newUser;

    id = "U-" + (lastId + 1).toString().padStart(4, "0");
    password = await hashPassword(newUser.password);

    const user = new userInterface({
      id: id,
      name: name,
      email: email,
      password: password,
      img: img,
      Contact: Contact,
      Job_Desk: Job_Desk,
      Status: Status,
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
      throw new Error(
        `User with ID ${userId} could not be found in the database.`
      );
    }
  } catch (error) {
    throw error;
  }
};
