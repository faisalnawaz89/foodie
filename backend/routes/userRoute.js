import express from 'express'
import { loginUser, userRegistration } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', userRegistration)
userRouter.post('/login', loginUser)

export default userRouter;