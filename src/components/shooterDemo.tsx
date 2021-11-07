import { useRef ,useEffect,useState} from "react"

class Projectile{
    x:number;
    y:number;
    r:number;
    c:string;
    v:{x:number,y:number};
    
    constructor(x:number,y:number,r:number,c:string,v:{x:number,y:number}){
        this.x=x
        this.y=y
        this.r=r
        this.c=c
        this.v=v
        // console.log(v)
    }
    draw(ctx:CanvasRenderingContext2D){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false)
        ctx.fillStyle=this.c
        ctx.fill()
    }
    update(ctx:CanvasRenderingContext2D){
        this.draw(ctx)
        // console.log(this.v)
        this.x+=this.v.x
        this.y+=this.v.y
    }
}


let projectiles:Projectile[]=[]


const ShooterDemo=()=>{
    let cnv=useRef<HTMLCanvasElement>(null)
    const [position,setPosition]=useState({x:0,y:0})
    let raf:number|null=null
    // let interval:NodeJS.Timer|null=null

    const create=(e:MouseEvent)=>{
        // console.log('lolo',e.clientX,e.clientY)
        // console.log(cnv.current!.offsetTop)
        // const p=new Projectile(cnv.current!.width/2,cnv.current!.height/2,8,'red',{x:Math.random()*2-1,y:Math.random()*2-1})
        setPosition({x:e.clientX,y:e.clientY})
        // projectiles.push(p)
    }

    const animate=()=>{

        console.log('animate')
        if(cnv.current){

            cnv.current!.getContext('2d')!.clearRect(0,0,cnv.current!.width,cnv.current!.height)
            // console.log('animate')
            projectiles.forEach((p)=>{
                // if(cnv.current!.getContext("2d"))
                p.update(cnv.current!.getContext("2d")!)
            })
        }
        raf=requestAnimationFrame(()=>animate())
    }
    useEffect(()=>{
        animate()
        window.addEventListener('mousemove',create)
        const colors = ["red", "green", "black", "yellow", "orange", "white"];
        return()=>{
            window.removeEventListener('mousemove',create)
            cancelAnimationFrame(raf!)
        }
    },[])
    useEffect(() => {
        console.log('olaola')
        

       
        let interval= setInterval(()=>{
            let rc='#'+Math.floor(Math.random()*16777215).toString(16)
            // for (let i=0;i<30;i++){
            const pos={
                y:cnv.current!.offsetTop+cnv.current!.height/2,
                x:cnv.current!.offsetLeft+cnv.current!.width/2,
            }
            console.log(pos)
            // console.log(position)
            const angle=Math.atan2(position.y-pos.y,position.x-pos.x)
                const p=new Projectile(
                    cnv.current!.width/2,
                    cnv.current!.height/2,
                    10,
                    rc,
                    {
                        x:Math.cos(angle),
                        y:Math.sin(angle)
                    })
                    projectiles.push(p)
                // }
        },500)

        // let randomColor =colors[Math.floor(Math.random() * colors.length)];
        
        return () => {
            // cleanup
            clearInterval(interval!)
            
        }
    }, [position])
    return(
    <div>
    <canvas ref={cnv} style={{border:'1px solid white'}} width="600" height="300"></canvas>
    {position.x},
    {position.y}
    </div>
    )
} 
export default ShooterDemo