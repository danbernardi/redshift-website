import React from 'react';
import RoleTemplate from './RoleTemplate';

export function CareerSeniorVisual () {
  return (
    <RoleTemplate name="Senior Visual Designer">
      <section id="sr-visual-designer" className="modal__content job-description">
        <div className="row pb10 row--maxwidth">
          <h4 className="typ--light careers__type">VISUAL</h4>
          <h1 className="careers-title">Senior Visual Designer</h1>
          <h3 className="pb10 pb2--mlg typ--light">REDSHIFT is seeking a Senior Visual Designer to join our creative team in San Francisco. You will work closely with the Creative Director, UX Producer and larger REDSHIFT team to concept and create interactive solutions for a large variety of digital projects. We are a small shop with big clients so you can expect to work on web sites, kiosks, interfaces, experiences, occasional print and even product design.</h3>
          <h2 className="careers-section">Candidates must have:</h2>
          <ul className="job-description pb3 list--block">
            <li>A portfolio of beautiful designs</li>
            <li>3+ years visual design experience in an agency environment</li>
            <li>Skill with layout, typography, and color theory</li>
            <li>Strong design eye and excellent taste</li>
            <li>Expertise with Photoshop and Illustrator (Flash and After Effects a plus.)</li>
            <li>Ability to create beautiful mock-ups based on wireframes and creative direction</li>
            <li>Strong design thinking skills and understanding of UX design</li>
            <li>Ability to take criticism and quickly apply feedback to designs</li>
            <li>Tolerance for working on-site in an open studio environment</li>
            <li>A sense of humor</li>
            <li>A passion for beautiful things (and translating them to web, mobile, desktop, social, etc)</li>
            <li>A talent for envisioning simple, elegant interfaces for digital products</li>
            <li>An understanding of modern web development technologies and techniques</li>
            <li>The ability to express yourself clearly and confidently</li>
          </ul>
          <h2 className="careers-section">...Plus at least 2-3 of these:</h2>
          <ul className="job-description pb3 list--block">
            <li>Experience working with large consumer brands</li>
            <li>Ability to wireframe UI concepts</li>
            <li>Ability to code HTML/CSS/JS</li>
            <li>Great Spotify library</li>
          </ul>
        </div>
      </section>
    </RoleTemplate>
  );
}

export default CareerSeniorVisual;
