import React, { useRef,useEffect } from 'react'




class Circle{
    radius:number;    
    x:number;    
    y:number;    
    thicc:number;
    xspd:number;    
    yspd:number;
    static width:number;    
    static height:number;    
    constructor(){
        this.radius=Math.random()*50;
        console.log(Circle.width)
        this.x=Math.random()*(Circle.width-this.radius*3)+this.radius*2;
        this.y=Math.random()*(Circle.height-this.radius*3)+this.radius*2;
        this.thicc=Math.random()*10;
        
        this.xspd=Math.random()*2-1;
        this.yspd=Math.random()*2-1;
    }

    nxt(){
        this.chkBrder()
        this.x+=this.xspd
        this.y+=this.yspd
    }
    chkBrder(){
        if(this.x+this.xspd+this.radius>Circle.width||this.x+this.xspd-this.radius<0)this.xspd*=-1
        if(this.y+this.yspd+this.radius>Circle.height||this.y+this.yspd-this.radius<0)this.yspd*=-1
    }
}

function draw(ctx:CanvasRenderingContext2D,x:number,y:number,r:number,thicc:number){

ctx.beginPath();
ctx.arc(x, y, r, 0, 2 * Math.PI, false);
// ctx.fillStyle = 'green';
// ctx.fill();
ctx.lineWidth = thicc;
ctx.strokeStyle = '#30c230';
ctx.stroke();
}

const Canvas = (props:any) => {
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = React.useRef<number>()
  Circle.height=window.innerHeight;
//   console.log(window.innerHeight)
  Circle.width=1000;
  let circles:Circle[]=[]

  for(let i=0;i<30;i++)
  circles.push(new Circle())
  

  const animate = () => {
      // The 'state' will always be the initial value 
      const canvas = canvasRef.current
      const context = canvas!.getContext('2d')
      if(context)
    {
      context.clearRect(0,0,context.canvas.width,context.canvas.height)
      context.fillStyle="#000"
      context.fillRect(0,0,context.canvas.width,context.canvas.height)
      
      circles.forEach(circle=>{

          draw(context,circle.x,circle.y,circle.radius,circle.thicc)
          circle.nxt()
      })
      
    }
    requestRef.current = requestAnimationFrame(animate);
  }


  useEffect(()=>{
      requestRef.current = requestAnimationFrame(animate);
    return () =>{ if(requestRef.current)cancelAnimationFrame(requestRef.current)};
  },[]);
  
  return <canvas height={window.innerHeight} width="1000" ref={canvasRef} />
}

export default Canvas