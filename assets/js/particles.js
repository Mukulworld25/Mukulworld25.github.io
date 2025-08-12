
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles=[];
class P{constructor(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.r=Math.random()*1.6+0.4;this.vx=(Math.random()-0.5)*0.6;this.vy=(Math.random()-0.5)*0.6;}update(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>canvas.width)this.vx*=-1;if(this.y<0||this.y>canvas.height)this.vy*=-1;}draw(){ctx.fillStyle='rgba(0,212,255,0.9)';ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fill();}}function init(){particles=[];for(let i=0;i<120;i++)particles.push(new P());}function loop(){ctx.clearRect(0,0,canvas.width,canvas.height);for(let p of particles){p.update();p.draw();}requestAnimationFrame(loop);}init();loop();
