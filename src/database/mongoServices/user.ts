import { UserModel } from "../../models/userModel";
import { userInterface } from "../mongoDB/userInterface";

export const getAllUsers = async () => {
  try {
    const users = await userInterface.find();
    return users;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

export const getOneUser = async (userId: string) => {
  try {
    const user = await userInterface.find({ id: userId })
    return user;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

export const createNewUser = async (newUser: UserModel): Promise<UserModel> => {
  try {
    await userInterface.create(newUser)
    return newUser;
  } catch (error) {
    throw { status: 500, message: error };
  };
};

export const updateOneUser = async (userId: string, changes: Omit<Partial<UserModel>, "id">) => {
  try {
    await userInterface.findOneAndUpdate({ _id: userId }, changes);
  } catch (error) {
    throw { status: 500, message: error };
  }
};


export const deleteOneUser = async (userId: string): Promise<void> => {
  try {
    await userInterface.findOneAndDelete({ id: userId })
  } catch (error) {
    throw { status: 500, message: error };
  }
};