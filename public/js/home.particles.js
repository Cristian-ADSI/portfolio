const canvas = document.getElementById("canvas-home");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// Get Mouse position
let mouse = {
  x: null,
  y: null,
  radius: (canvas.height / 80) * (canvas.width / 80),
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

// particles
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  // Draw individual particle
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
  }

  update() {
    // Check the particles sitll within canvas [it bounce to in when touch the edge of canvas]
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }

    // calculate the radius distance betwen mouse and particles
    let dx = mouse.x - this.x; // [A hick]
    let dy = mouse.y - this.y; // [B hick]
    distance = Math.sqrt(dx * dx + dy * dy); //[Square Root ]

    // if the distances is less than mouse radius asigned we have collission
    if (distance < mouse.radius + this.size) {
      // if the (mouse is less o more that particle ) AND (particle.X is far of edge)
      if (mouse.x < this.x && this.x < canvas.width - this.size*10) {
        // push the partcle to wrong direction
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10;
      }

      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        this.y += 0;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
    }
    //move paritcle [it folows the mouse directions]
    this.x += this.directionX;
    this.y += this.directionY;
    // TODO: HAsta aqui revisado verificar de nuevo  el draw
    this.draw();
  }
}

function init() {
  particlesArray = [];

  let numberParticles = (canvas.height*canvas.width)/ 9000;

  for (let i = 0; i < numberParticles; i++) {
    let size = Math.random() * 5 + 1;

    let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
    let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;

    let directionX = Math.random() * 5 - 2.5;
    let directionY = Math.random() * 5 - 2.5;
    color = "#fffff";

    particlesArray.push(
      new Particle(x, y, directionX, directionY, size, color)
    );
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < particlesArray.lenght; i++) {
    particlesArray[i].update();
  }
}

init();
animate();
