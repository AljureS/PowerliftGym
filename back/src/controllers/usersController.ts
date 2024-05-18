import { Request, Response } from "express";
import { createUserService, getUserService, getUserServiceId } from "../service/userService";
import { User } from "../entities/User";
import userDto from "../dto/userDto";
import { userValidateCredService } from "../service/credentialService";
import UserRepository from "../repositories/userRepository";

export const userController  = async (req: Request, res: Response) => {
    try {
        const userList: User[] = await getUserService() // lista de susuarios
        res.status(200).json(userList)
    } catch (error) {
        res.status(400).json({
            error: "Error en el controllador userController"
        })
    }
}

export const userId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params //req.params
        const userById = await getUserServiceId(Number(id)) // ussurio por id 
        res.status(200).json(userById)
    } catch (error) {
        res.status(404).json({
            error: "User not found"
        })
    }
}
//vamos a tomar los datos del usuario del body de la request 
    //llamar a la funcion correspondiente del servicio de usurio 
    //para crear el nuevo usuario 
    // id, name, email, HBD, address
export const userRegister = async (req: Request, res: Response) => {
    try {
        const {id, name, email, birthdate, nDni, username, password}: userDto = req.body
        const newUser = await createUserService({id, name, email, birthdate, nDni, username, password}) 
        res.status(201).json(newUser)
        
    } catch (error) {
        res.status(400).json({
            error: "Error en el controllador de registro: Data incorrecta"
        })
    }
}

export const userLogin = async (req: Request, res: Response) => {

    try {
        const {username, password}= req.body
        const loggedUser = await userValidateCredService({username, password})
        const user = await UserRepository.findById(loggedUser.id)
        res.status(202).json({
            login: true,
            user
        })
        
    } catch (error) {
        res.status(400).json({
            login: false,
            error: "Error en el controllador de Login: Data incorrecta"
        })
    }
    
    
}