import { Request, Response } from "express";
import { cancellAppt, createTurn, getTurnService, getTurnServiceId } from "../service/appointmentService";


import { Appointment } from "../entities/Appointment";
import appointmentDto from "../dto/apptDto";



export const apptController = async (req: Request, res: Response) => {
    try {
        const arrayTruns: Appointment[] = await getTurnService()
        res.status(200).json(arrayTruns)
        // res.status(201).json({"message": "Obtener el listado de todos los turnos de todos los usuarios"})
    } catch (error) {
        res.status(400).json({
            error: "Error en el controllador general de citas"
        })
    }
    
}

export const apptId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params //req.params
        const turnById = await getTurnServiceId(Number(id)) // ussurio por id 
        res.status(200).json(turnById)
        // res.status(200).json({"message": "Obtener el detalle de un turno específico"})
    } catch (error) {
        res.status(404).json({
            error: "Turn doesnt exist"
        })
    }
    
}

export const apptSchedule = async (req: Request, res: Response) => {
    try {
        const { date, time, userId}: appointmentDto = req.body
        const newTurn : Appointment = await createTurn({ date, time, userId})
        res.status(200).json(newTurn)
    } catch (error) {
        res.status(400).json({
            error: "Error in the data to scheduale appt"
        })
    }
    
}

export const apptCancel = async (req: Request, res: Response) => {

    try {
        const {id}  = req.params
        await cancellAppt(Number(id))
        res.status(200).json({"message": "Turn was cancelled"})
        // res.status(200).json({"message": "Cambiar el estatus de un turno a “cancelled”"})
    } catch (error) {
        res.status(404).json({
            error: "Turn wasnt found"
        })
    }
}