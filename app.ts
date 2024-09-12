// src/index.ts
import express from 'express';
import { db } from './config/connection';
import { UsersTable } from './models/schema';
const app = express();
app.use(express.json());
app.get('/', async (req, res) => {
 res.send('Reaching')
});

app.get('/users', async (req, res) => {
  try {
    const users = await db.select().from(UsersTable);
    res.json(users);
  } catch (error) {
    res.status(500).send('Error retrieving users');
  }
});
// POST endpoint to create a new user with hardcoded data
app.post('/users', async (req, res) => {
  try {
    // Hardcoded user data
    const newUser = {
      name: 'Sajjad',
      email: 's@g.com',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhnX49OLtgTeMsXO8VIdD2IjtpH7XDDjmQNj_Vp-qKXbIqJwAlUVXIMyWGH9k-sW6tYI&usqp=CAU',
      createdAt: new Date(), // Use the current date and time
    };

    // Insert the new user into the database
    await db.insert(UsersTable).values(newUser);

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});