import express from "express"
const web_route=express.Router();
import { home } from "../controller/siteController.js";

web_route.get("/",home)

export default web_route