import { createNewUser, updateOneUser } from "../database/mongoServices/user";
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
const createUser = async (newUser: UserModel) => {
  try {
    const createdUser: UserModel = await createNewUser(newUser);
    return createdUser;
  } catch (error) {
    throw error;
  }
};

//---------------------------------------------------
const updateUser = async (userId: string, changes: Omit<Partial<UserModel>, "user_id">) => {
  try {
    const updatedUser = await updateOneUser(userId, changes);
    return updatedUser;
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
  createUser,
  updateUser,
  deleteOneUser,
};