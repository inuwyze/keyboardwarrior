import styles from "./NavBar.module.scss"
import { Link } from "react-router-dom"
const NavBar=()=>{
    return(
        <div className={styles.container}>
            <Link to='/'  className={styles.item}>home</Link>
            <Link to='/Game' className={styles.item}>collision detection</Link>
            <div className={styles.item}>game</div>
            <div className={styles.item}>highscore</div>
        </div>
    )
}
export default NavBar