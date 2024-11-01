import express from 'express'
import { addToCart, removeToCart, getToCart } from '../controllers/cartControllers.js'
import authMiddleware from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/add', authMiddleware, addToCart)
cartRouter.post('/remove', authMiddleware, removeToCart)
cartRouter.post('/get', authMiddleware,  getToCart)

export default cartRouter;