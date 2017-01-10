import React from 'react';
import JobDescription from './JobDescription';

const jobDetail = {
  id: 'sr-visual-designer',
  header: 'VISUAL',
  position: 'Senior Visual Designer',
  description: 'REDSHIFT is seeking a Senior Visual Designer to join our creative team in San Francisco. You will work closely with the Creative Director, UX Producer and larger REDSHIFT team to concept and create interactive solutions for a large variety of digital projects. We are a small shop with big clients so you can expect to work on web sites, kiosks, interfaces, experiences, occasional print and even product design.',
  skills: [
    'A portfolio of beautiful designs',
    '3+ years visual design experience in an agency environment',
    'Skill with layout, typography, and color theory',
    'Strong design eye and excellent taste',
    'Expertise with Photoshop and Illustrator (Flash and After Effects a plus.)',
    'Ability to create beautiful mock-ups based on wireframes and creative direction',
    'Strong design thinking skills and understanding of UX design',
    'Ability to take criticism and quickly apply feedback to designs',
    'Tolerance for working on-site in an open studio environment',
    'A sense of humor',
    'A passion for beautiful things (and translating them to web, mobile, desktop, social, etc)',
    'A talent for envisioning simple, elegant interfaces for digital products',
    'An understanding of modern web development technologies and techniques',
    'The ability to express yourself clearly and confidently'
  ],
  plusses: [
    'Experience working with large consumer brands',
    'Ability to wireframe UI concepts',
    'Ability to code HTML/CSS/JS',
    'Great Spotify library'
  ]
};

export function SeniorVisual () {
  return (
    <JobDescription jobDetail={ jobDetail } />
  );
}

export default SeniorVisual;
