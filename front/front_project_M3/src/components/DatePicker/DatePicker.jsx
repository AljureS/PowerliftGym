import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DatePicker = ({ value, onChange }) => {
    const [showCalendar, setShowCalendar] = useState(false);

    const handleDateChange = (newDate) => {
        onChange(newDate);
        setShowCalendar(false); // Ocultar el calendario después de seleccionar la fecha
    };

    return (
        <>
            <input
                type="text"
                value={value.toLocaleDateString()}
                readOnly
                onClick={() => setShowCalendar(!showCalendar)}
                placeholder="Select a date"
            />
            {showCalendar && (
                <Calendar
                    onChange={handleDateChange}
                    value={new Date(value)}
                />
            )}
        </>
    );
};

export default DatePicker;
