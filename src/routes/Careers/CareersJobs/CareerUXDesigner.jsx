import React from 'react';
import JobContact from './JobContact';
import JobThanks from './JobThanks';
import '../style.scss';

export function CareerUXDesigner () {
  return (
    <div>
      <section id="ux-designer" className="modal__content job-description">
        <div className="row pb10 row--maxwidth">
          <h4 className="typ--light careers__type">UX</h4>
          <h1 className="careers-title">UX Designer</h1>
          <h3 className="pb10 pb2--mlg typ--light">At Redshift, UX Designers are part of cross-functional project teams, working with a Senior UX Designer, Visual Designer, User Researchers, Front-End Engineers, Producers, and company leaders.</h3>UX designers, consultants, project managers, and interactive producers are all potential candidates.
          This role reports to our Director of UX.
          <h2 className="careers-section">Responsibilities</h2>
          <ul className="job-description pb3 list--block">
            <li>Under the leadership of a Senior UX Designer, collaborate cross-functionally with other UX Designers, research, visual design, front-end engineering, producers, and company leaders to take products from concept to launch.</li>
            <li>Understand our clients' customers and users, and serve as their advocate when making design proposals.</li>
            <li>Generate design concepts, participate in design discussions and critiques, and collaborative sessions with teams and stakeholders.</li>
            <li>Prototype design flows and interactions with low-fidelity paper prototypes and clickable prototypes (using tools such as InVision and Pixate), and guide high-fidelity coded prototypes toward a high standard of excellence.</li>
            <li>Deliver detailed wireframes and user flows to agile development teams and refine as needed during project sprints.</li>
            <li>Participate in client meetings and presentations, and respond appropriately to feedback.</li>
            <li>Help plan and participate in user research and testing, and incorporate learnings back into designs.</li>
            <li>Contribute to a collaborative culture in maintaining openness to new or different ideas, seeking out and incorporating input from other team members, and making a creative contribution to other studio projects.</li>
            <li>Contribute to a positive, pleasant, and creative culture, and help ensure it is always fun to do business with Redshift.</li>
          </ul>
          <h2 className="careers-section">Candidates must have:</h2>
          <ul className="job-description pb3 list--block">
            <li>Passion for user-centered design, and all things digital (web, mobile, desktop, social)</li>
            <li>Strong knowledge of the latest design and technology trends</li>
            <li>And understanding of user interface design processes and methodology across a variety of devices, and of how web and mobile apps are built</li>
            <li>A sophisticated sense of taste</li>
            <li>Ability to rapidly generate multiple design solutions, evaluate their strengths and weaknesses, and improve upon selected designs</li>
            <li>Ability to express yourself clearly and confidently</li>
            <li>Outstanding client management skills</li>
            <li>Experience managing a 3-5 person team of UX, Visual Design, researchers, and developers</li>
            <li>Great wireframing chops</li>
            <li>Proficiency with UX tools (e.g. InVision, Sketch, and the Adobe Creative Suite), as well as any other UX tools needed to get the job done</li>
            <li>1-3+ years experience on a UX team in an agency environment</li>
            <li>Contributed to the launch of at least one web, mobile, and/or software applications</li>
            <li>Ability to take criticism and quickly apply feedback to designs</li>
            <li>Tolerance for working on-site in an open studio environment</li>
            <li>A sense of humor</li>
          </ul>
          <h2 className="careers-section">...Plus at least 2-3 of these:</h2>
          <ul className="job-description pb3 list--block">
            <li>Experience working with large consumer brands</li>
            <li>Excellent writing skills</li>
            <li>Visual design experience</li>
            <li>Technical experience (e.g. coding)</li>
            <li>Formal project management training</li>
            <li>Great Spotify library</li>
          </ul>
        </div>
      </section>
      <section>
        <div classNameName="contact__form py8">
          <div classNameName="row">
            <h3 classNameName="pb4">Apply</h3>
            {/*
            <form
              id="rs-contact-04"
              encType="multipart/form-data"
              method="post"
              classNameName="apply-form sr-ux-designer"
            >
              <input type="hidden" value="UX Designer" name="from_position" />
              <JobContact />
            </form>
            */}
            <JobThanks />
          </div>
        </div>
      </section>
    </div>
  );
}
export default CareerUXDesigner;
