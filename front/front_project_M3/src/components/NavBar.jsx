import { useState } from 'react';
import styles from './styles/NavBar.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const NavBar = () => {

    const user = useSelector(state => state.userLogged)

    // Estado para controlar la visibilidad del sidebar
    const [isOpen, setIsOpen] = useState(false);

    // Función para cambiar el estado de isOpen
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    
    return (
        <div>
            {
                user.name && (<button onClick={toggleSidebar} className={styles.toggleButton}>
                                {isOpen ? 'X' : '|||'}
                            </button>)
            }
            
            
            <div className={isOpen ? `${styles.sidebar} ${styles.open}` : styles.sidebar}>
                <nav >
                    <ul>
                        <li><Link to="/" className={styles.link}>Home</Link></li>
                        <li><Link to="/appointments" className={styles.link}>My Appointments</Link></li>
                        <li><Link to="/booking" className={styles.link}>Book Appointments</Link></li>
                        <li><Link to="#" className={styles.link}>About This Project</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;

