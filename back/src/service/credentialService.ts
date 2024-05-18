
import credentialDtio from "../dto/credentialDto";
import { Credential } from "../entities/Credentials";
import CredentialRepository from "../repositories/credentialsRepository";

/*
    Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.
*/
export const userCredService = async (credentialDto: credentialDtio): Promise<Credential> => {

    const newCredential: Credential = await CredentialRepository.create(credentialDto)
    await CredentialRepository.save(newCredential)
    return newCredential;
}

/*
Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales. 
*/
export const userValidateCredService = async (credentialData: credentialDtio): Promise< Credential > => {
    const {username, password} = credentialData
    const credential = await CredentialRepository.findOne({
        where: { username: username, password: password }
    });

    if (credential) {
        return credential
    } else {
        throw Error("Credenciales incorrectas")
    }

}