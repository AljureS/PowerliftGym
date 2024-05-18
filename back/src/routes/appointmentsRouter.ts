/* 
    GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.

    GET /appointments/:id => Obtener el detalle de un turno específico.

    POST /appointment/schedule => Agendar un nuevo turno.

    PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
*/

import { Router } from "express";
import { apptCancel, apptController, apptId, apptSchedule } from "../controllers/appointmentsController";

const apptRouter: Router = Router()

apptRouter.get("/", apptController)
apptRouter.get("/:id", apptId)

apptRouter.post("/schedule", apptSchedule)
apptRouter.put("/cancel/:id", apptCancel)

export default apptRouter