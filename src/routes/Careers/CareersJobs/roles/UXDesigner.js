import React from 'react';
import JobDescription from './JobDescription';

const jobDetail = {
  id: 'ux-designer',
  header: 'UX',
  position: 'Senior Visual Designer',
  description: 'At Redshift, UX Designers are part of cross-functional project teams, working with a Senior UX Designer, Visual Designer, User Researchers, Front-End Engineers, Producers, and company leaders.</h3>UX designers, consultants, project managers, and interactive producers are all potential candidates.',
  responsibilities: [
    'Under the leadership of a Senior UX Designer, collaborate cross-functionally with other UX Designers, research, visual design, front-end engineering, producers, and company leaders to take products from concept to launch.',
    'Understand our clients\' customers and users, and serve as their advocate when making design proposals.',
    'Generate design concepts, participate in design discussions and critiques, and collaborative sessions with teams and stakeholders.',
    'Prototype design flows and interactions with low-fidelity paper prototypes and clickable prototypes (using tools such as InVision and Pixate), and guide high-fidelity coded prototypes toward a high standard of excellence.',
    'Deliver detailed wireframes and user flows to agile development teams and refine as needed during project sprints.',
    'Participate in client meetings and presentations, and respond appropriately to feedback.',
    'Help plan and participate in user research and testing, and incorporate learnings back into designs.',
    'Contribute to a collaborative culture in maintaining openness to new or different ideas, seeking out and incorporating input from other team members, and making a creative contribution to other studio projects.',
    'Contribute to a positive, pleasant, and creative culture, and help ensure it is always fun to do business with Redshift.'
  ],
  skills: [
    'Passion for user-centered design, and all things digital (web, mobile, desktop, social)',
    'Strong knowledge of the latest design and technology trends',
    'And understanding of user interface design processes and methodology across a variety of devices, and of how web and mobile apps are built',
    'A sophisticated sense of taste',
    'Ability to rapidly generate multiple design solutions, evaluate their strengths and weaknesses, and improve upon selected designs',
    'Ability to express yourself clearly and confidently',
    'Outstanding client management skills',
    'Experience managing a 3-5 person team of UX, Visual Design, researchers, and developers',
    'Great wireframing chops',
    'Proficiency with UX tools (e.g. InVision, Sketch, and the Adobe Creative Suite), as well as any other UX tools needed to get the job done',
    '1-3+ years experience on a UX team in an agency environment',
    'Contributed to the launch of at least one web, mobile, and/or software applications',
    'Ability to take criticism and quickly apply feedback to designs',
    'Tolerance for working on-site in an open studio environment',
    'A sense of humor'
  ],
  plusses: [
    'Experience working with large consumer brands',
    'Excellent writing skills',
    'Visual design experience',
    'Technical experience (e.g. coding)',
    'Formal project management training',
    'Great Spotify library'
  ]
};

export function UXDesigner () {
  return (
    <JobDescription jobDetail={ jobDetail } />
  );
}
export default UXDesigner;
