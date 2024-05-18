import { useEffect } from "react"
import Turno from "../../components/Turno/Turno.jsx"
import styles from "../../components/Turno/Turno.module.css"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'; //?useSelector: Necesito los turnos del estado global
import { useNavigate } from 'react-router-dom';
import { addAppointment} from "../../redux/reducer"
const MisTurnos= ()=>{

    const navigate = useNavigate()
    const user = useSelector(state => state.userLogged)
    const appointments = useSelector(state => state.userAppointments)
    // const userID = useSelector(state => state.userId)
    
    const dispatch = useDispatch() // para enviarle la info al reducer de turnos

    useEffect(() => {
        !user.name && navigate("/")
        // alert("login first to see your appointments, if you don't have an account you can register")
    }, [])

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/users/${user.id}`)
                dispatch(addAppointment(res.data.appointment))

            } catch (error) {
                console.log("Error obtaining appointments: ", error);
            }
        }
        fetchData()
    }, [])

    return (
        <>
            {
                !user.name ? (<div>Loading ...</div>) :(
                    <div className={styles.cards}>
                        <h1 className={styles.mainTitle}>Your appointments: </h1>
                            {
                                appointments.length === 0 && (<div>You have no appointments</div>)
                            }
                            {
                                appointments.map((appointment)  => {
                                    return (
                                        <Turno
                                            key={appointment.id}
                                            date={appointment.date}
                                            time={appointment.time}
                                            status={appointment.status}
                                            id={appointment.id} 
                                        />
                                    )
                                })
                            }
                    </div>
                )
            }
        
        </>
        
    )
}

export default MisTurnos