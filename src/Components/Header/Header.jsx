import "./Header.scss";
import { ReactP5Wrapper } from "react-p5-wrapper";

///global
var boxx;
var boxy;
var boxSpeed = 1;
var boxDirectionX = 1;
var boxDirectionY = 1;
let string = "SA";

function sketch(p5) {
  let imgyellow;
  let imgblue;
  let imgwhite;
  let imgpink;
  let currentImg;

  // p is a reference to the p5 instance this sketch is attached to
  p5.preload = () => {
    imgyellow = p5.loadImage("images/media/logoyellow.png");
    imgblue = p5.loadImage("images/media/logoblue.png");
    imgpink = p5.loadImage("images/media/logopink.png");
    imgwhite = p5.loadImage("images/media/logowhite.png");
  };

  p5.setup = () => {
    p5.createCanvas(300, 200);
    p5.background(0);
    boxx = p5.width / 2;
    boxy = p5.height / 2;
    currentImg = imgyellow;
  };

  p5.draw = () => {
    p5.background(0);
    //p5.text(string, boxx, boxy);
    p5.image(currentImg, boxx, boxy, 50, 50);
    //p5.describe(`The text ${string} written in white.`);

    //physics
    boxx = boxx + boxDirectionX * boxSpeed; //move horizontally
    boxy = boxy + boxDirectionY * boxSpeed; //move vertically

    //bounce functions
    if (boxy >= p5.height - 50) {
      //hit bottom wall
      currentImg = imgblue;
      boxDirectionY = boxDirectionY * -1; //change direction
    }

    if (boxx >= p5.width - 50) {
      //hit right wall
      // p5.fill(0, 255, 0); //change color
      currentImg = imgpink;
      boxDirectionX = boxDirectionX * -1; //change direction
    }

    if (boxy <= 0) {
      //hit top wall
      //p5.fill(0, 0, 255); //change color
      currentImg = imgwhite;
      boxDirectionY = boxDirectionY * -1; //change direction
    }

    if (boxx <= 0) {
      //hit left wall
      //p5.fill(255, 255, 0); //change color
      currentImg = imgyellow;
      boxDirectionX = boxDirectionX * -1; //change direction
    }
  };
}

function Header() {
  // create a reference to the container in which the p5 instance should place the canvas
  return (
    <div className="headerContainer">
      <div id="tv">
        <img src="images/media/retroTV.png" className="tvimg" />
      </div>

      <div className="canvas">
        <ReactP5Wrapper sketch={sketch} />
      </div>
    </div>
  );
}

export default Header;
