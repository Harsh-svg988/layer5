import React, { useContext } from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import ProjectItemWrapper from "./projectSection.style";
import logo from "./images/meshery-icon.svg";
import {
  ThemeManagerContext,
  ThemeManagerProvider,
} from "../../../theme/app/ThemeManager";
import Button from "../../../reusecore/Button";

const Projects = () => {
  const { isDark, didLoad } = useContext(ThemeManagerContext);
  if (!didLoad) {
    return null;
  }

  return (
    <ProjectItemWrapper id="projects">
      <Container>
        <div className="logo-meshery">
          <img src={logo} alt="catalog" />
        </div>

        <div className="project-title">
          <SectionTitle
            className="section-title"
            leftAlign={true}
            UniWidth="75%"
          >
            <h2>
              Get Multiplayer <span>Infrastructure Management</span>
            </h2>
          </SectionTitle>
        </div>

        <h4 className="subtitle">
          Explore the Cloud Native Computing Foundation's graduated, incubation,
          and sandbox projects as well as many other popular open source
          projects.
        </h4>

        <div className="banner-btn">
          <Button
            primary
            title="Use Meshery Playground"
            external={true}
            url="https://play.meshery.io/"
          />
        </div>
      </Container>
    </ProjectItemWrapper>
  );
};

export default Projects;