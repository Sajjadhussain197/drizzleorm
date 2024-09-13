import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.originalUrl} - ${new Date().toISOString()}`);
  next(); // Call the next middleware or route handler
};

export default logger;