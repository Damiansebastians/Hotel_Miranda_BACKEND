import { Request, Response, Router } from 'express';
// import bcrypt from 'bcrypt';
import {
  createNewUser,
  deleteOneUser,
  getAllUsers,
  getOneUser,
  updateOneUser,
} from '../database/mongoServices/user';
import { userSchemaCreate, userSchemaUpdate } from '../validators/usersValidate';


const userRouter = Router();

//--------------------------------------------------------------

userRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const allUsers = await getAllUsers();
    return res.send({ data: allUsers });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to get all users" });
  }
});

//--------------------------------------------------------------
userRouter.get('/:userId', async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const user = await getOneUser(userId);
    if (!user) {
      return res.status(404).send({ status: "Error", message: "User not found" });
    }
    return res.send({ data: user });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to get user" });
  }
});

//--------------------------------------------------------------
// const salt = bcrypt.genSalt(10);
// const password = await bcrypt.hash(body.user_password,salt);
//     console.log(password);

userRouter.post('/', async (req: Request, res: Response) => {
  const newUser = req.body;
  try {
    userSchemaCreate.validate(req.body, { abortEarly: false });
    const createdUser = await createNewUser(newUser);
    return res.status(201).send({ data: createdUser });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to create user" });
  }
});

//--------------------------------------------------------------
userRouter.patch('/:userId', async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const changes = req.body;

  try {
    userSchemaUpdate.validate(req.body, { abortEarly: false });
    await updateOneUser(userId, changes);
    return res.send({ success: true });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to update user" });
  }
});

// --------------------------------------------------------------
userRouter.delete('/:userId', async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    await deleteOneUser(userId);
    return res.send({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to delete user" });
  }
});

export default userRouter;
