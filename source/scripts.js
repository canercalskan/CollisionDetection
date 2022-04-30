
const canvas = document.querySelector('canvas');
console.log(canvas);
const c = canvas.getContext('2d')

const scoreboard = document.querySelector('.scoreboard')

const p = document.querySelector('p')

canvas.width = innerWidth
canvas.height = innerHeight

// let cas = Math.ceil(Math.random() * 10) randomize the positions 
// console.log(cas)
const mouse = {
    x: 132,
    y: 349
}
let score = 0;
let matched = false;
addEventListener('mousemove' , (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
})

addEventListener('resize' , (e) => {
    canvas.width = innerWidth
    canvas.height = innerHeight
})

// class Object {
//     constructor() {
//         this.position = {
//             x: canvas.width / 2 + 50,
//             y: canvas.height / 2,
//         }
//         this.color = '#92ABEA'
//         this.width = 100
//         this.height = 100  
//     }
//     draw() {
//         c.fillStyle = this.color;
//         c.fillRect(this.x,this.y,this.width,this.height)
//     }
// }

// let obj = new Object();

function animate() {
  requestAnimationFrame(animate)

  c.clearRect(0,0,canvas.width,canvas.height);
  c.fillStyle = '#1A1A23'
  c.fillRect(0,0,canvas.width,canvas.height)

  c.fillStyle = '#92ABEA'
  c.fillRect(canvas.width / 2 , canvas.height / 2 , 100 , 100)
 
  c.fillStyle = '#E86262'
  c.fillRect(mouse.x,mouse.y,100,100)
  

  if(mouse.x + 100 == canvas.width / 2) {
      c.fillStyle = 'orange'
      c.fillRect(mouse.x,mouse.y,100,100)
  }
  else if(mouse.x + 100 > canvas.width / 2 && mouse.x -100 < canvas.width / 2  &&mouse.y + 100 >= canvas.height / 2 && mouse.y - 100 <= canvas.height / 2) {
      c.fillStyle = 'orange'
      c.fillRect(mouse.x,mouse.y,100,100)
  }  

  if(mouse.x == canvas.width / 2 && mouse.y == canvas.height/2) {
      c.fillStyle == 'green'
      c.fillRect(mouse.x,mouse.y,100,100)
      score ++;
      scoreboard.style.visibility = 'visible'
      scoreboard.style.top = canvas.height/2 - 150 +'px'
      p.style.fontSize = '100px'
      p.textContent = 'Good!'
      matched = true;
  }
  else {
      p.style.fontSize = '0px'
      scoreboard.style.top = '0px'
  }
  
  if(matched) {
    c.clearRect(canvas.width/2 , canvas.height/2 , 100, 100)
    matched = false
  }
}
animate()

// COUNTDOWN TIMER EKLENECEK
// OBJELER RANDOM POSITIONLARDA YARATILACAK
// HER MATCH'TEN SONRA OBJE SILINECEK
// LEVEL SISTEMI EKLENECEK, HER 10 MATCH'TE BIR LEVEL ATLANACAK
// LOCALSTORAGE ILE SCOREBOARD SAVE EDILECEK
// YENI REKOR'DA ALERT TARZI INFO VERILECEK