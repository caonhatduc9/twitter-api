import { Request, Response, NextFunction } from 'express';

function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Perform additional validation logic here, such as checking if the username and password match a user in the database

  next();
}

export { validateLogin };
