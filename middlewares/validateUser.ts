import { Request, Response, NextFunction } from 'express';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, image } = req.body;

  // Check if required fields are present
  if (!name || !email || !image) {
    return res.status(400).json({ message: 'Name, email, and image are required.' });
  }

  // Optionally, you can add more validation logic here (e.g., email format)

  next(); // Call the next middleware or route handler
};

export default validateUser;