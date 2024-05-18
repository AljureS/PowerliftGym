import axios from "axios"
import { useState } from "react"
import styles from "./Register.module.css"
import { validateRegister } from "../../helpers/validateRegister"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
// import DatePicker from "../../components/DatePicker/DatePicker";

/*
    ?Controlar el formulario de manera tal que se pueda validar que todos los datos necesarios para el registro están completos, al mismo tiempo que los datos de los inputs son reflejados en el estado local correspondiente y viceversa.

    ?Una vez completos y validados los datos, se debe poder presionar un botón que dispare un evento, el cual ejecutará una función que se encargue de realizar la petición de tipo POST correspondiente al servidor para el registro del usuario enviando como body el estado que se confeccionó a través del formulario. 

    ?En caso de que el registro sea exitoso, informar al usuario. Del mismo modo, informar al usuario si ha ocurrido un error.
*/ 

const Register = ()=>{
    const navigate = useNavigate() 
    const [registerForm, setRegisterForm] = useState({
        // datos del form : ""
        name: "", 
        email: "",
        birthdate:"", //new Date("2000-01-01"), 
        nDni: "",
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: ""
    })
    console.log(errors);
    //funcion que escuche los cambios en el forms 
    const handleChange = (event) =>{
        const{name, value} = event.target //el target sale en la consola 

        setRegisterForm(previousForm =>{
            const updateForm = {...previousForm, [name]: value}

            setErrors(validateRegister(updateForm))
            return updateForm
        })
        
    }

    // const handleDateChange = (newDate) => {
    //     setRegisterForm(prevState => ({
    //         ...prevState,
    //         birthdate: newDate // Actualiza la fecha
    //     }));
    // };

    const handleSubmit = (event) => {
        event.preventDefault() // evita que se recargue la pagina con cada click en submit
        const formErrors = validateRegister(registerForm)
        setErrors(formErrors)

        const hasErrors = Object.values(formErrors).some(error => error)
        if(!hasErrors){
            functionQuery()
        }
    }

    // Antes de hacer la peticion checkear que el forms este bien 
    const functionQuery = ()=>{
        axios.post("http://localhost:3000/users/register", registerForm)
        .then(()=>{
            toast.success("Registered successfully!");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        })
        .catch(() => {
            toast.error("Registration error!");
        })
    }

    // Crear los input necesarios para el registro de un usuario nuevo 
    return(
        <form className={styles.registerForm} onSubmit={handleSubmit}>
            <div className={styles.title}>Welcome</div>

            <div className={styles.subtitle}>Go ahead and create your account!</div>

            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder=""
                    name="name"
                    value={registerForm.name}
                    onChange={handleChange}
                />
                {errors.name && <p className={styles.cutError}>{errors.name}</p>}
                <div className={styles.cut}></div>
                <label className={styles.iLabel}>Name</label>
            </div>

            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="email"
                    placeholder=""
                    name="email"
                    value={registerForm.email}
                    onChange={handleChange}
                />
                {errors.email && <p className={styles.cutError}>{errors.email}</p>}
                <div className={styles.cut}></div>
                <label className={styles.iLabel}>Email</label>
            </div>

            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="Date"
                    placeholder=""
                    name="birthdate"
                    value={registerForm.birthdate}
                    onChange={handleChange}
                />
                {errors.birthdate && <p className={styles.cutError}>{errors.birthdate}</p>}
                <div className={styles.cut}></div>
                <label className={styles.iLabel}>Birthdate</label>
            </div>

            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="number"
                    placeholder=""
                    name="nDni"
                    value={registerForm.nDni}
                    onChange={handleChange}
                />
                {errors.nDni && <p className={styles.cutError}>{errors.nDni}</p>}
                <div className={styles.cut}></div>
                <label className={styles.iLabel}>nDni</label>
            </div>

            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder=""
                    name="username"
                    value={registerForm.username}
                    onChange={handleChange}
                />
                {errors.username && <p className={styles.cutError}>{errors.username}</p>}
                <div className={styles.cut}></div>
                <label className={styles.iLabel}>Username</label>
            </div>

            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="password"
                    placeholder=""
                    name="password"
                    value={registerForm.password}
                    onChange={handleChange}
                />
                {errors.password && <p className={styles.cutError}>{errors.password}</p>}
                <div className={styles.cut}></div>
                <label className={styles.iLabel}>Password</label>
            </div>

            <button className={styles.submit} onClick={handleSubmit}>SUBMIT</button>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
        </form>
    )
}

export default Register