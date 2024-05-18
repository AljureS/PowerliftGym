/*
    id: ID numérico que identifica al turno.

    date: fecha para la cual fue reservado el turno.

    time: hora para la cual fue reservado el turno.

    ?userId: ID del usuario que agendó el turno, referencia al usuario

    status: status actual del turno, que puede ser “active” o “cancelled”.
*/

interface IAppointment {
    id: number,
    date: Date ,
    time: number,
    userId: number,
    status: string,
    
}

export default IAppointment