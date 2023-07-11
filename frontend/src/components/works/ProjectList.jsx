import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './project.css'

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4002/projects') 
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch projects:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div id="works" className="project-sec">
     
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="project-list">
          {projects.map((project, index) => (
            <Link className={`links-${index}`} to={`/projects/${project._id}`} key={project._id}>
              <div className="project">
                <div className="__img_wrapper">
                  <img src={`http://localhost:4002/assets/${project.mainImg}`} alt={project.title} />
                </div>
                <div className="__content_wrapper">
                  <h3 className="title">{project.title}</h3>
                  <p className="description">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div> 
      )}
    </div>
  );
};

export default ProjectList;
