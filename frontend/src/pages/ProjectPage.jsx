import React, { useEffect, useState } from 'react';
import './ProjectPage.css';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { Resume } from '../components/resume/Resume';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { SideNavbar } from '../components/nav/SideNavbar';
import ProjectList from '../components/works/ProjectList';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const ProjectPage = () => {
  const classes = useStyles();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectId = getProjectIdFromURL(); // Implement your own function to extract the project ID from the URL
    fetchProject(projectId);
  }, []);

  const getProjectIdFromURL = () => {
    // Implement your own logic to extract the project ID from the URL
    const url = window.location.href;
    const projectId = url.substr(url.lastIndexOf('/') + 1);
    return projectId;
  };

  const fetchProject = (projectId) => {
    fetch(`http://localhost:4002/projects/${projectId}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.error('Failed to fetch project:', error));
  };

  return (
    <div className={`${classes.root} project-page`}>
      <LogoLink />
      <div className="top-section">
        {project ? (
          <>
            <section className="hero-section">
              <div className="hero-image-container">
                <img
                  src={`http://localhost:4002/assets/${project.mainImg}`}
                  alt={project.title}
                  className="hero-image"
                />
              </div>
              <div className="hero-details">
                <h1 className="hero-title">{project.title}</h1>
                <p className="hero-description">{project.description}</p>
                <div className="hero-tags">
                  Tags: {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </section>
            <div className="demo-github-container">
              {project.demo && (
                <div className="demo-link">
                  <Link
                    href={project.demo}
                    color="inherit"
                    underline="none"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Demo
                  </Link>
                </div>
              )}
              {project.github && (
                <div className="github-link">
                  <Link
                    href={project.github}
                    color="inherit"
                    underline="none"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </Link>
                </div>
              )}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="project-features">
        {project?.features.map((feature, index) => (
          <div
            className={`feature-container ${index % 2 === 0 ? 'even' : 'odd'}`}
            key={index}
          >
            <div className="feature-details">
              <h2 className="feature-title">{feature.title}</h2>
              <p className="feature-text">{feature.text}</p>
            </div>
            <div className="feature-image-container">
              <img
                src={`http://localhost:4002/assets/${feature.image}`}
                alt={feature.title}
                className="feature-image"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="side-nav">
        <ThemeToggle />
        <Hidden smDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
        <Resume />
      </div>
      <SideNavbar />
    </div>
  );
};

export default ProjectPage;
