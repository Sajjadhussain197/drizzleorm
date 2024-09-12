// src/index.ts
import express from 'express';
import { db } from './config/connection';
import { UsersTable } from './schema';
const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const users = await db.select().from(UsersTable);
    res.json(users);
  } catch (error) {
    res.status(500).send('Error retrieving users');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});