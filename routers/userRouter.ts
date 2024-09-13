import { Router } from 'express';
import { getUsers, createUser } from '../controllers/userController';
import  validateUser  from '../middlewares/validateUser';

const router = Router();

// Define routes
router.get('/', getUsers); // GET /users
router.post('/', validateUser, createUser); // POST /users

export default router;