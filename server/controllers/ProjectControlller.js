import Project from '../models/Project.js';

// Controller to get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get projects' });
  }
};
//Get by ID
export const getProjectById = async (req, res) => {
  const projectId = req.params.projectId;

  try {
    const project = await Project.findById(projectId);
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project' });
  }
};
//Add
const projects = [
  {
    title: 'Sawda Jimale Portfolio',
    description: 'A full stack portfolio with repsonsive design and light and dark mode',
    tags: ['React', 'Material-Ui', 'MongoDb', 'Express', 'Node.js',],
    mainImg: 'portfolio1.png',
    features: [
      { 
        title: 'Light and Dark Mode', 
        image: 'portfolio2.png', 
        text: 'Users can switch between light and dark mode to personalize their experience. The design of the portfolio is responsive and adapts to different screen sizes.' 
      },
      { 
        title: 'Project List with Backend Integration', 
        image: 'portfolio3.png', 
        text: 'A project list that is integrated with a backend server, allowing for easy addition and removal of projects. The server-side implementation simplifies project management.' 
      },
      { 
        title: 'Comprehensive Project Pages', 
        image: 'portfolio4.png', 
        text: 'Each project has a dedicated page that provides a comprehensive description, showcasing the project in detail. Users can learn more about each project and its features.' 
      },
      { 
        title: 'Contact Form with Email.js', 
        image: 'portfolio5.png', 
        text: 'A contact form integrated with email.js for secure submission of messages. Users can easily get in touch by filling out the form.' 
      }
    ],
    
    
    type: 'full-stack',
    github: 'https://github.com/sawdaJ/MomLove',
    demo:'https://mom-love.netlify.app/',
  },
  
  
  
];

async function insertProjects() {
  try {
    await Project.insertMany(projects);
    console.log('Projects inserted successfully!');
  } catch (error) {
    console.error('Error inserting projects:', error);
  }
}




