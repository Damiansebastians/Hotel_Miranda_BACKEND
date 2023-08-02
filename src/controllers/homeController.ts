import { Router } from 'express';
import { getHome } from '../services/homeService';

export const homeController = Router();

homeController.get('', (_req, res) => {
  res.status(200).json(getHome());


});