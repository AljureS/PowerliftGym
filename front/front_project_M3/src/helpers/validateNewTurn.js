export const validateNewTurn = (newTurnData) => {
    const {date, time} = newTurnData

    let errors = {};
    const currentDate = new Date(); // Fecha y hora actual
    const selectedDate = new Date(date + 'T' + time); // Fecha y hora seleccionadas con formato ISO

    const hours = time.split(':')[0]; // Extraer las horas de la hora seleccionada
    const dayOfWeek = selectedDate.getDay(); // Día de la semana para la fecha seleccionada

    // Validar que la fecha no esté vacía
    if (!date) {
        errors.date = 'Please select a date.';
    }

    // Validar que la hora no esté vacía
    if (!time) {
        errors.time = 'Please select a time.';
    }

    // Validar que la fecha y hora seleccionadas no sean del pasado
    if (selectedDate < currentDate) {
        errors.date = 'You cannot book an appointment in the past.';
    }

    // Validar que la hora esté dentro del horario de atención (5 AM - 11 PM)
    if (time && (parseInt(hours) < 5 || parseInt(hours) >= 23)) {
        errors.time = 'Appointment time must be between 05:00 AM and 11:00 PM.';
    }

    // Validar que la fecha sea un día de semana (lunes a viernes)
    if (date && (dayOfWeek === 0 || dayOfWeek === 6)) {
        errors.date = 'Appointments can only be booked on weekdays.';
    }

    return errors;

}

