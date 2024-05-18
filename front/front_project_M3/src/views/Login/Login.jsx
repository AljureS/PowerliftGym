import axios from "axios"
import { useState } from "react"
import styles from "./Login.module.css"
import { validateLogin } from "../../helpers/validateLogin"
import { ToastContainer, toast } from 'react-toastify';
import {useDispatch} from "react-redux"
import { addLogin, addUserId } from "../../redux/reducer"
import { Link, useNavigate } from 'react-router-dom';

/*
    Controlar el formulario de manera tal que se pueda validar que todos los datos necesarios para el login están completos, al mismo tiempo que los datos de los inputs son reflejados en el estado local correspondiente y viceversa. 

    Una vez completos y validados los datos, se debe poder presionar un botón que dispare un evento, el cual ejecutará una función que se encargue de realizar la petición de tipo POST correspondiente al servidor para el login del usuario enviando como body el estado que se confeccionó a través del formulario.

    En caso de que el login sea exitoso, informar al usuario. Del mismo modo, informar al usuario si ha ocurrido un error.
*/

const Login = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // Crear los input necesarios para el login de un usuario existente
    const[userdata, setUserdata] = useState({
        username: "",
        password: ""
    })
    const [errorsLogin, setErrorsLogin] = useState({
        username: "username is required",
        password: "password is required"
    })
    

    const handleChange = (event) => { 
        const{name, value} = event.target //el target sale en la consola 

        setUserdata(previousForm =>{
            const updateForm = {...previousForm, [name]: value}
            setErrorsLogin(validateLogin(updateForm)) // errores de validacion del cliente mientras interactua con el login
            return updateForm
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault() 
        const formErros = validateLogin(userdata)
        setErrorsLogin(formErros)

        const hasErrors = Object.values(formErros).some(error => error)
        if (!hasErrors) {
            functionQueryLogin()
        } 
        
    }
    // enviar peticion al backend (users/login) devuleve true si esta registrado o no 

    const functionQueryLogin = async ()=>{
        await axios.post("http://localhost:3000/users/login", userdata)
        .then((res)=>{
            
            dispatch(addLogin(res.data.user))
            dispatch(addUserId(res.data.user.id))
            // setUserdata(userdata)
            toast.success("Login successfull", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            // navigate al /home 
            setTimeout(() => {
                navigate("/");
            }, 2000);
        })

        .catch(()=>{
            // console.log(err.data)
            toast.error("Wrong username or password", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        })
    }
    
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <h2 className={styles.title}>LOG IN</h2>
            <div className={styles.subtitle}>
                <p><Link className={styles.subtitle} href="/register"> Do not have an account? </Link></p>
            </div>

            <div className={styles.inputContainer}>
                <input 
                    className={styles.input}
                    type="text"
                    value={userdata.username}
                    name="username"
                    placeholder=""
                    onChange={handleChange}
                />
                {errorsLogin.username && <p className={styles.cutError}>{errorsLogin.username}</p>}
                <div className={styles.cut}></div>
                <label className={styles.iLabel}>USERNAME</label>
            </div>

            <div className={styles.inputContainer}>
                <input 
                    className={styles.input}
                    type="password"
                    value={userdata.password}
                    name="password"
                    placeholder=""
                    onChange={handleChange}
                />
                {errorsLogin.password && <p className={styles.cutError}>{errorsLogin.password}</p>}
                <div className={styles.cut}></div>
                <label className={styles.iLabel}>PASSWORD</label>
            </div>


            <button className={styles.submit} onClick={handleSubmit}>SUBMIT</button>
            <ToastContainer/>
        </form>
    )
}

export default Login