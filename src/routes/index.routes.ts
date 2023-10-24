import express from "express";
import authRouter from "./auth.routes";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
