import { UserInterface } from '../Interfaces/userInterface'; 

declare global {
  namespace Express {
    interface Request {
      user?: UserInterface;
    }
  }
}
