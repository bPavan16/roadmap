import express from 'express'
import users from '../data/users.js'

import { getAllUsers , getUserById} from '../controllers/user.controller.js'

const router = express.Router()


router.get("/",getAllUsers)

router.get("/id/:id",getUserById)

export default router
