import { Router } from 'express';
import { validateLogin } from '../middlewares/users.middlewares';
import { loginController, registerController } from '../controllers/users.controllers';
const usersRouter = Router();

// usersRouter.use((req, res, next) => {
//   console.log('time:', Date.now());
//   next();
// });

usersRouter.post('/login', validateLogin, loginController);
usersRouter.post('/register', registerController);

export default usersRouter;
