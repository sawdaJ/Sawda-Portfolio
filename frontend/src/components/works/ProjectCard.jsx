

const ProjectCard = ({ project }) => {
  const { mainImg, title, description, tags } = project;
  const imageSrc = `http://localhost:4002/assets/${mainImg}`;

  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-image-container">
          <img src={imageSrc} alt={title} className="project-image" />
        </div>
        <div className="project-details">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
          <div className="project-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
