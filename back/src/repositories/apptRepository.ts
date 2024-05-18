import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";

const AppointmentRepository = AppDataSource.getRepository(Appointment).extend({
    //functions needes several times in the service 
    findById: async function (id: number ): Promise<Appointment>{
        const appt = await this.findOneBy({id})
        if (appt) return appt
        else throw Error ("Invalid Id")
    },
})

export default AppointmentRepository