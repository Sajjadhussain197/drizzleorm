import { Request, Response } from 'express';
import { db } from '../config/connection';
import { UsersTable } from '../models/userSchema';

// Get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await db.select().from(UsersTable);
    res.json(users);
  } catch (error) {
    res.status(500).send('Error retrieving users');
  }
};

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, image } = req.body; // Expecting data from request body

    // Hardcoded user data can be replaced with data from req.body
    const newUser = {
      name,
      email,
      image,
      createdAt: new Date(), // Use the current date and time
    };

    // Insert the new user into the database
    await db.insert(UsersTable).values(newUser);

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
};