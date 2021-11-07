import styles from './LoginPage.module.scss'
import Canvas from '../components/loginCanvas'
import axios from 'axios'
import { useEffect,useState, useRef } from 'react'


function LoginPage(props:any){
const [w,sw]=useState<Number>(100)
const ref=useRef<HTMLDivElement>(null);
const fnc=async()=>{
    console.log('click',username,password)
    try{
        // axios code
        let res=await axios.post("http://localhost:4000/api/auth/signin",{
        name:username,
        password:password
    })
    console.log(res,"ola")
    props.login(true)
    }catch(err:any|unknown){
        // console.log("ola",Object.keys(err))
        console.log(err.response.data.msg)
    }
}
useEffect(()=>{
    window.addEventListener("resize", () =>{ if(ref.current)sw(ref.current.offsetWidth)});
    // console.log(w)
},[])
const [username, setUsername] = useState(''); // '' is the initial state value
const [password, setPassword] = useState(''); // '' is the initial state value


return (
    <div className={styles.loginPage}>
    
        <div className={styles.loginImg}
        ref={ref}>
            
            <Canvas width={w} height={window.innerHeight}></Canvas>
        </div>
        <div className={styles.form}>
            <div
            className={styles.container}>

            <h1>Sign In</h1>
            <div >
                
                <input type="text" placeholder="username" value={username} onInput={e => setUsername((e.target as HTMLInputElement).value)} />
            </div>
            <div >
                
                <input type="password"  placeholder="password" value={password} onInput={e => setPassword((e.target as HTMLInputElement).value)}/>
            </div>
            <div
            className={styles.button}
            onClick={fnc}>login</div>            
            </div>
        </div>
    </div>
)
}

export default LoginPage