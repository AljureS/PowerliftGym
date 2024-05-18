import appointmentDto from "../dto/apptDto";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import AppointmentRepository from "../repositories/apptRepository";
import UserRepository from "../repositories/userRepository";

// Implementar una función que pueda retornar el arreglo completo de turnos.
export const getTurnService = async ():Promise<Appointment[]> => {
    const arrayTurn: Appointment[] = await AppointmentRepository.find({
        relations: {
            user: true
        }
    })
    return arrayTurn
}

// Implementar una función que pueda obtener el detalle de un turno por ID.
export const getTurnServiceId = async (id: number): Promise<Appointment | undefined> => {
    const userID = await AppointmentRepository.findById(id)
    return userID
}

// Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 

export const createTurn = async(turnData: appointmentDto ): Promise<Appointment> =>{
    const appt: Appointment = await AppointmentRepository.create(turnData)
    appt.status = "active"
    await AppointmentRepository.save(appt)

    const user: User  = await UserRepository.findById(turnData.userId)
    if(!user) throw Error ("User doesnt exist")
    appt.user = user
    await AppointmentRepository.save(appt)
    return appt
}

// Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.
export const cancellAppt = async (id: number): Promise<Appointment | undefined> => {

    const userID = await AppointmentRepository.findById(id)
    userID.status ="cancelled"
    const cancelAppt = await AppointmentRepository.save(userID)
    return cancelAppt

}

