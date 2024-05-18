import styles from './styles/NavLogRegister.module.css'; 
import { Link } from 'react-router-dom';
const NavLogRegister = ()=>{
    return(
        <div className={styles.navContainer}>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>

            </nav>
        </div>
    )
}

export default NavLogRegister