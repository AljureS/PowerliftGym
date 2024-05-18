import NavLogRegister from "../components/NavLogRegister"
import Logo from "../assets/logo.png"
import styles from "./Home.module.css"


const Home = () => {

    return (
        <section>
            <div>
                <NavLogRegister/>
            </div>
            <div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Surpass your limits</h1>
                    <h2 className={styles.subTitle}>Book an appointment with us</h2>
                </div>
                <img src={Logo} alt="" />
            </div>
        </section>
        
    )
}

export default Home 