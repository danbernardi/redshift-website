import React from 'react';
import JobDescription from './JobDescription';

const jobDetail = {
  id: 'sr-ux-designer',
  header: 'UX',
  position: 'Senior UX Designer',
  description: 'At Redshift, in addition to being a top-notch UX designer, and leading cross-functional project teams, UX Leads are responsible for regularly presenting work to clients, so the ability to communicate confidently and clearly are essential. Leads must be able to speak fluently about both business objectives and design principles, and to handle feedback and questions with poise. UX designers, consultants, project managers, and interactive producers are all potential candidates. This role reports to our Director of UX. This role reports to our Director of UX.',
  responsibilities: [
    'Lead a small team of UX designer, and collaborate cross-functionally with research, visual design, front-end engineering, producers. and company leaders to take products from concept to launch.',
    'Understand our clients\' customers and users, and serve as their advocate when making design proposals.',
    'Generate design concepts, drive design discussions and critiques, and facilitate collaborative sessions with teams and stakeholders.',
    'Prototype design flows and interactions with low-fidelity paper prototypes and clickable prototypes (using tools such as InVision and Pixate), and guide high-fidelity coded prototypes toward a high standard of excellence.',
    'Deliver detailed wireframes and user flows to agile development teams and refine as needed during project sprints.',
    'Manage simultaneous project schedules and budgets.',
    'Lead client meetings and presentations, confidently articulate Redshift\'s design thinking, and respond appropriately to feedback.',
    'Mentor junior designers so they may expand their skills.',
    'Help plan and participate in user research and testing, and incorporate learnings into designs.',
    'Manage client relationships, and ensure client satisfaction.',
    'Contribute to a collaborative culture by maintaining openness to new or different ideas, seeking out and incorporating input from other team members, and making a creative contribution to other studio projects',
    'Assist in the planning and estimating of the project, participating in broader project coordination and expectation setting.',
    'Participate in interviewing other UX candidates.',
    'Contribute to a positive, pleasant and creative culture, and help ensure it is always fun to do business with Redshift.'
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
    '3-5+ years of experience on a UX team in an agency environment',
    'Contributed to the launch of several web, mobile, and/or software applications',
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

export function SeniorUX () {
  return (
    <JobDescription jobDetail={ jobDetail } />
  );
}

export default SeniorUX;
