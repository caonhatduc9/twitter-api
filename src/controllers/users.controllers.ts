import { Request, Response } from 'express';
import User from '~/models/schemas/user.schema';
import databaseService from '~/services/database.services';
import usersServices from '~/services/users.services';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import User from '../models/user.model';

export const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  res.json({ username: username, password: password });
  // try {
  //   const user = await User.findOne({ email });

  //   if (!user) {
  //     return res.status(404).json({ message: 'User not found' });
  //   }

  //   const isPasswordCorrect = await bcrypt.compare(password, user.password);

  //   if (!isPasswordCorrect) {
  //     return res.status(400).json({ message: 'Invalid credentials' });
  //   }

  //   const token = jwt.sign({ email: user.email, id: user._id }, 'secret', { expiresIn: '1h' });

  //   res.status(200).json({ result: user, token });
  // } catch (error) {
  //   res.status(500).json({ message: 'Something went wrong' });
  // }
};

export const registerController = async (req: Request, res: Response) => {
  console.log('check');
  const { email, password } = req.body;
  try {
    const result = await usersServices.register({ email, password });
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
