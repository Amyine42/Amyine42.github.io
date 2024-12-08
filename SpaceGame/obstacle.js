// class Obstacle {
//   constructor(x, y, r, couleur) {
//     this.pos = createVector(x, y);
//     this.r = r;
//     this.color = couleur;
//   }

//   show() {
//     push();
//     fill(this.color);
//     stroke(0)
//     strokeWeight(3);
//     ellipse(this.pos.x, this.pos.y, this.r * 2);
//     fill(0);
//     ellipse(this.pos.x, this.pos.y, 10);
//     pop();
//   }
// }

class Obstacle {
  constructor(x, y, r, image) {
    this.pos = createVector(x, y);
    this.r = r;
    this.image = loadImage(image);
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y); // Déplace le point d'origine à la position de l'obstacle
    rotate(HALF_PI); // Tourne de 90 degrés (HALF_PI en radians)
    imageMode(CENTER); // Image centrée sur les coordonnées de l'obstacle
    image(this.image, 0, 0, this.r * 2, this.r * 2); // Affiche l'image
    pop();
  }
}