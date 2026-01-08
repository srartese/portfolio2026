import "./Projects.scss";
import projects from "../../projects.json";
import DetailModal from "./DetailModal";

function Projects() {
  return (
    <div className="projectsContainer">
      <h1> Projects Gallery </h1>
      {projects.map((filteredProject, index) => (
        <div className="project" key={index}>
          <div className="projectImgContainer">
            <img
              className="projectImg"
              src={"images/prevImage/" + filteredProject.background}
            />
          </div>
          <div className="projectTitle"> {filteredProject.project}</div>
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
  );
}

export default Projects;
