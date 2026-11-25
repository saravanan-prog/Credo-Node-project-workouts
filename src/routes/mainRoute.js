import express from 'express'
import {
    mainPage
} from '../controller/controller.js'

const MainRouter = express.Router()

MainRouter.get('/',mainPage)



export default MainRouter