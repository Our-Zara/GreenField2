const express = require ("express")
const router =express.Router()
import {getUser, userLogin ,signupUser }  from '../controller/user';

router.get("/getAll", getUser);
router.post("/login",userLogin);
 router.post("/signup",signupUser)


module.exports =router 