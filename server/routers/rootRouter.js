import express from "express";
import {home,  getLogin, postLogin,  verifyToken,
   getJoin, postJoin, header,  isAdmin, 
 
} from "../controllers/usercontroller.js";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/index.html", home);
rootRouter.get("/header.html", header);
rootRouter.route("/login.html").get(getLogin).post(postLogin);
rootRouter.route("/join.html").get(getJoin).post(postJoin);
rootRouter.post("/verifyToken", verifyToken);
rootRouter.post("/isAdmin", isAdmin);

export default rootRouter;   