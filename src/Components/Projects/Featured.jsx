import "./Featured.scss";
import projects from "../../projects.json";
import { Link } from "react-router-dom";
import DetailModal from "./DetailModal";

function Featured() {
  return (
    <div className="featureContainer">
      <h1>Feature Projects</h1>
      <div className="featureProjectContainer">
        {projects
          .filter((project, index) => project.display === "feature")
          .map((filteredProject, index) => (
            <div className="featureProject" key={index}>
              <div className="featureProjectImgContainer">
                <img
                  className="featureProjectImg"
                  src={"images/prevImage/" + filteredProject.background}
                />
              </div>
              <div className="featureProjectTitle">
                {filteredProject.project}
              </div>
              <p className="projectRole">{filteredProject.role}</p>
              <p className="skills">{filteredProject.tools}</p>
              <div className="projectDetailsLink">
                <DetailModal
                  title={filteredProject.project}
                  description={filteredProject.description}
                  gallery={filteredProject.gallery}
                  index={index}
                ></DetailModal>
              </div>
            </div>
          ))}
      </div>

      <div className="galleryLink">
        <Link className="galleryLink" to="/projectgallery">
          View Full Project Gallery{" "}
        </Link>
      </div>
    </div>
  );
}

export default Featured;
