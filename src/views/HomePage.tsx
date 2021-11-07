import styles from "./Homepage.module.scss"
import ShooterDemo from "../components/shooterDemo"
const Homepage=()=>{

    


    return (
        <div className={styles.container}>
        <h1>Type Shooter</h1>
        <p>a javascript based web game built using canvas API
            <br/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore fugiat ipsa eveniet distinctio rem asperiores obcaecati! Repudiandae laborum iure autem atque veritatis? Consequatur iusto officia, dolores facilis dolor iure voluptates!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, veritatis. Iure delectus distinctio libero aperiam eum corrupti, voluptatum in eligendi odio facere illo hic accusantium ipsum veniam quos explicabo natus.
        </p>
        <ShooterDemo></ShooterDemo>
        </div>
    )
}

export default Homepage