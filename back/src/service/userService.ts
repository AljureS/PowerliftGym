import userDto from "../dto/userDto";
import { Credential } from "../entities/Credentials";
import { User } from "../entities/User";
import UserRepository from "../repositories/userRepository";
import { userCredService } from "./credentialService";

//Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.
export const createUserService = async (userData: userDto): Promise<User>=>{
    
    const newCredential: Credential = await userCredService({
        username: userData.username,
        password: userData.password,
    })
    
    const newUser = await UserRepository.create(userData)
    newUser.credential = newCredential
    const createdUser = await UserRepository.save(newUser)

    return createdUser
}

//Implementar una función que pueda retornar el arreglo completo de usuarios.
export const getUserService = async (): Promise<User[]> => {
    const arrayUsers: User[] = await UserRepository.find({
        relations: {
            appointment: true
        }
    })
    return arrayUsers

}

//Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.
export const getUserServiceId = async (id: number): Promise<User | undefined> => {
    const userID: User | null = await UserRepository.findOne({where: {id}, relations:['appointment']})
    if (userID){
        return userID
    } else throw Error("No se encontro usuario con ese ID ")
    
}




