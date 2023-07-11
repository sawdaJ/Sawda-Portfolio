import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  mainImg: {
    type: String,
    required: true,
  },
  features: [{
    title:{
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  }],
  type: {
    type: String,
    enum: ['full-stack', 'backend', 'frontend', 'design'],
    required: true,
  },
  github:{
    type: String,
    required: true,
    
  },
  demo:{
    type: String,
    default: 'null'
  }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
