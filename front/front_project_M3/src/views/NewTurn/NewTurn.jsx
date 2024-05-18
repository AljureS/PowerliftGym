import { validateNewTurn } from "../../helpers/validateNewTurn"
import styles from "./NewTurn.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NewTurn = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.userLogged)

    const [bookingForm, setBookingForm] = useState({
        date: "",
        time: "",
    })
    const [errors, setErrors] = useState({
        date: "",
        time: "",
    })

    useEffect(() => {
        !user.name && navigate("/")
        // alert("login first to see your appointments, if you don't have an account you can register")
    }, [])
    const handleChange = (event) => {
        const{name, value} = event.target //el target sale en la consola 

        setBookingForm(previousForm =>{
            const updateForm = {...previousForm, [name]: value}

            setErrors(validateNewTurn(updateForm))
            return updateForm
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        const formErrors = validateNewTurn(bookingForm)
        setErrors(formErrors)

        const hasErrors = Object.values(formErrors).some(error => error)
        if(!hasErrors){
            functionQuery()
        }
    }

    const functionQuery = ()=>{
        axios.post("http://localhost:3000/appointments/schedule", {...bookingForm, userId: user.id})
        .then(()=>{
            toast.success("Appointment booked successfully!");
            setTimeout(() => {
                navigate("/appointments");
            }, 2000);
        })
        .catch(() => {
            toast.error("There is a problem booking the appointment!");
        })
    }

    return (
        <form className={styles.registerForm} onSubmit={handleSubmit}>
            <div className={styles.title}>Hi again</div>

            <div className={styles.subtitle}>Go ahead and book an appointment with us</div>
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="Date"
                    placeholder=""
                    name="date"
                    value={setBookingForm.date}
                    onChange={handleChange}
                />
                {errors.date && <p className={styles.cutError}>{errors.date}</p>}
                <div className={styles.cut}></div>
                <label className={styles.iLabel}>Date</label>
            </div>

            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="time"
                    placeholder=""
                    name="time"
                    value={setBookingForm.time}
                    onChange={handleChange}
                />
                {errors.time && <p className={styles.cutError}>{errors.time}</p>}
                <div className={styles.cut}></div>
                <label className={styles.iLabel}>Time</label>
            </div>


            <button className={styles.submit} onClick={handleSubmit}>SUBMIT</button>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
        </form>
    )
}

export default NewTurn