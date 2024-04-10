import express from 'express';
const router = express.Router();
import * as basecontroller from '../controller/basic.controller.js';




/**
 * App Routes 
*/
router.get('/', basecontroller.login);
router.get('/SignUp', basecontroller.signup);
router.get('/home', basecontroller.home);
router.get('/aboutUs', basecontroller.aboutus);
router.get('/categories', basecontroller.categories);
router.get('/contact', basecontroller.contact);
router.get('/arts', basecontroller.arts);
router.get('/humor', basecontroller.humor);
router.get('/parenting', basecontroller.parenting);
router.get('/politics', basecontroller.politics);
router.get('/teens', basecontroller.teens);
//router.get('/blog', basecontroller.blog);



export default router;