import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

const UserRepository = AppDataSource.getRepository(User).extend({
    //funciones que se repitan mucho en el codigo 
    findById: async function (id: number ): Promise<User>{
        const user = await this.findOneBy({id})
        if (user) return user
        else throw Error ("Invalid Id")
    },
})

export default UserRepository 