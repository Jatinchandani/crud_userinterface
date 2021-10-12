const express = require('express');
const router=express.Router(); //Router method use 
const controller=require('../controller/user'); //Require controller path
const { verifyTokenFn } = require("../lib/jwt");
const { emailToken } = require("../lib/jwt");
//Router
//------------- User-Router ------------- 
router.post('/addUser',controller.addUser);
router.put('/editUser',verifyTokenFn,controller.editUser);
router.delete('/deleteUser',verifyTokenFn,controller.deleteUser);
router.get('/showUserList',verifyTokenFn,controller.showUserList);
router. post('/filterUserList',verifyTokenFn,controller.filterUserList);
router. post('/login',controller.login);
router.post("/forgot-password", controller.forgotPassword);
router.post("/verifyMail", controller.verifyEmail);
router.post("/change-password",verifyTokenFn, controller.changePassword);

router.get("/reset",verifyTokenFn, controller.resetPass);
router.get("/forgotReset",emailToken, controller.forgotReset);
//Module export to router
module.exports=router;