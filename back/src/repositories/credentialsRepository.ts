import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credentials";

const CredentialRepository = AppDataSource.getRepository(Credential).extend({
    //functions needes several times in the service 
})

export default CredentialRepository

