import { Router } from "express";
import * as ApiController from "../controllers/apiController";
import * as ViewController from '../controllers/viewController';

const router = Router();

//VIEWS
router.get('/',ViewController.homePage);
router.get('/login',ViewController.loginPage);
router.get('/register-user',ViewController.registrationPage);
router.post('/register-new-user',ViewController.registration);
router.post('/login/get-registred-user',ViewController.login);

//API
router.post('/registration',ApiController.registration);
router.get('/users',ApiController.getUsers);
router.post('/registred-user',ApiController.findRegistredUser);

export default router;