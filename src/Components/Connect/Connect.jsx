import "./Connect.scss";
import pdf from "./ArteseSara_Resume.pdf";
import { TypeAnimation } from "react-type-animation";

function Connect() {
  return (
    <div className="connectContainer" id="connect">
      <h1 className="connectTitle">Who am I?</h1>
      <div className="animationContainer">
        <TypeAnimation
          sequence={[
            "Sara",
            1500,
            "A Creative Developer",
            1500,
            "A Technical Director",
            2000,
            "A Senior Developer",
            2000,
            "A Front-End Developer",
            2000,
            "An Educator",
            2000,
            "Ready to collaberate",
            4000,
            () => {
              console.log("Done typing!"); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="animationDiv"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", color: "#76b9b3ff" }}
        />
      </div>
      <div className="connectContents">
        <div className="aboutMe">
          <div className="meContainer">
            <img
              src="images/media/me.png"
              className="meImage"
              alt="Sara standing on beach with arms spread open."
            />
          </div>
          <div className="infoBlock">
            <div id="talkbubble">
              Hi there! I'm Sara, and my journey over the last 7+ years has led
              me through a diverse range of projects, including agency work,
              contributing to open-source humanitarian software, freelancing,
              geaining experience in educaiton, and teaching programming skills
              to children. I have had years of managing, educating, and learning
              new skills. I'm now actively seeking new opportunities to further
              expand my skill set and create a positive impact in the
              communities around me.
              <br />
              <br />
              My passion lies in continuous learning, creative problem-solving,
              and leveraging my skills to make a difference. I thrive in
              hands-on learning environments and have a proven ability to
              swiftly acquire new skills. Whether you have questions or just
              want to have a chat, feel free to send me a message. Let's connect
              and explore how we can collaborate for a brighter future!{" "}
            </div>
            <div className="socialLinks">
              <a href="https://www.linkedin.com/in/saraartese/" target="_blank">
                Linkedin
              </a>
              <a href={pdf} target="_blank">
                {" "}
                Resume{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
