import { UserModel } from "../models/userModel";
import fs from "fs";

const userData = require("../data/userData.json");

//---------------------------------------------------
const getUsers = async () => {
  try {
    const allUsers = await userData;
    return allUsers;
  } catch (error) {
    throw error;
  }
};

//---------------------------------------------------
const getOneUser = async (userId: string) => {
  try {
    const user = userData.find((user: UserModel) => user.id === Number(userId));
    return user;
  } catch (error) {
    throw error;
  }
};

//---------------------------------------------------
const createNewUser = async (newUser: UserModel) => {
  try {
    const createdUser: UserModel = await createNewUser(newUser);
    return createdUser;
  } catch (error) {
    throw error;
  }
};

//---------------------------------------------------
const updateOneUser = async (userId: string) => {
  try {
    
  } catch (error) {
    throw error;
  }
};

//---------------------------------------------------
const deleteOneUser = async (userId: string) => {
  try {
    const user = userData.filter((user: any) => user.id !== userId);
    fs.writeFileSync("./data/userData.json", JSON.stringify(user));
  } catch (error) {
    throw error;
  }
};

export {
  getUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
