import { Request, Response, Router } from 'express';
import {
  createNewUser,
  deleteOneUser,
  getAllUsers,
  getOneUser,
  updateOneUser,
} from '../database/mongoServices/user';


const userRouter = Router();

//--------------------------------------------------------------

userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const allUsers = await getAllUsers();
    return res.json({ data: allUsers });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to get all users" });
  }
});

//--------------------------------------------------------------
userRouter.get('/:userId', async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const user = await getOneUser(userId);
    if (!user) {
      return res.status(404).json({ status: "Error", message: "User not found" });
    }
    return res.json({ data: user });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to get user" });
  }
});

//--------------------------------------------------------------
userRouter.post('/', async (req: Request, res: Response) => {
  const newUser = req.body;
  try {
    const createdUser = await createNewUser(newUser);
    return res.status(201).json({ data: createdUser });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to create user" });
  }
});

//--------------------------------------------------------------
userRouter.patch('/:userId', async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    // await updateOneUser(userId, );
    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to update user" });
  }
});

// --------------------------------------------------------------
userRouter.delete('/:userId', async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    await deleteOneUser(userId);
    return res.json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to delete user" });
  }
});

export default userRouter;
