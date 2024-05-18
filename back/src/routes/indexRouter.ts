import { Router } from "express";
import userRouter from "./usersRouter"
import apptRouter from "./appointmentsRouter"

const router: Router = Router()

router.use("/users", userRouter)
router.use("/appointments", apptRouter)

export default router 
