import { useEffect, useRef } from "react"
import styles from './Game.module.scss'
const Game=()=>{
    const canvas = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        let ctx=canvas.current!.getContext("2d")
        canvas.current!.width=window.innerWidth-100
        canvas.current!.height=window.innerHeight-100
        return () => {
            // cleanup
        }
    }, [])

    return(
        <div className={styles.container}>

        <canvas className={styles.canvas}ref={canvas}></canvas>
        </div>
    )
}

export default Game