// global variable
const particles = [];

function setup() {
  // takes up the whole window
  createCanvas(window.innerWidth, window.innerHeight);

  const particlesLength = Math.floor(window.innerWidth / 10);

  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0, 0, 0);
  particles.forEach((p, index) => {
    p.update();
    p.draw();
    p.checkParticles(particles.slice(index));
  });
}

//
// for each particle is created i need to instantiate a new particle object from this class
class Particle {
  // constrictor is a method that runs automatically
  constructor() {
    // POSITION
    // createVector(x, y) where on the x and y axis do i want the particle to be placed
    // random() gives me a random number. i can pass in width and height into the parameter
    this.pos = createVector(random(width), random(height));
    // create Velocity...how much it moves within a time frame
    // -2 ---goes left 2 goes right
    this.vel = createVector(random(-2, 2), random(-2, 2));
    // SIZE
    // size of the circle
    this.size = 10;
  }

  // creates movement
  // updates movement by adding velocity
  update() {
    this.pos.add(this.vel);
    this.edges();
  }

  // this method creates each circle
  // draw singe particle
  draw() {
    // no border
    noStroke();
    // fill in the circle
    fill('rgba(56, 101, 144,0.9)');
    circle(this.pos.x, this.pos.y, this.size);
  }
  // detect edges
  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  // connect particles
  checkParticles(particles) {
    particles.forEach(particle => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

      if (d < 120) {
        stroke('rgba(255,255,255,0.1)');
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
}
