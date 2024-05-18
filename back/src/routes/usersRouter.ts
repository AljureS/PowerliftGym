/*
    GET /users => Obtener el listado de todos los usuarios.

    GET /users/:id => Obtener el detalle de un usuario específico.

    POST /users/register => Registro de un nuevo usuario.

    POST /users/login => Login del usuario a la aplicación.
    
*/
import { Router } from "express";
import { userController, userId, userLogin, userRegister } from "../controllers/usersController";

const userRouter: Router = Router()

userRouter.get("/", userController)
userRouter.get("/:id", userId)

userRouter.post("/register", userRegister)
userRouter.post("/login", userLogin)

export default userRouter