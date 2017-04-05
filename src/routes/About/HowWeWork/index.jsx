import React from 'react';

const HowWeWork = props => {
  return (
    <section className="about__process mb10">
      <div className="row">
        <h1 className="typ--bold mb4 mb3--tlg">
          <span>How We Work</span>
          <span className="typ--redshift">.</span>
        </h1>
        <div className="col-5 about--process__image typ--center col-last pl5 pt10 hide--tlg">
          <img src={ require('assets/img/about/process.png') } alt="research engineering user experience visual design" />
        </div>
        <div className="col-7 col-12--tlg">
          <div className="typ--h4">
            <h3 className="mb2">Exploration</h3>
            <p className="mb4">We find great solutions by starting with the broadest range of possibilities. We uncover these possibilities using a blend of research techniques and vigorous ideation. We go through a lot of paper and Post-Its.</p>
            <h3 className="mb2">Experimentation</h3>
            <p className="mb4">Our practice is inquisitive and hands-on. We prototype everything, and these prototypes are the focal point of our process. We think “try it and see” is better than “let’s talk about it.”</p>
            <h3 className="mb2">Collaboration</h3><p className="mb4">Tough problems need multiple points of view and a diverse set of minds. By challenging and motivating one another, we create far better work than any of us could alone.</p>
            <h3 className="mb2">Iteration</h3>
            <p className="mb4 mb0--msm">We work in rapid cycles with frequent input from both clients and users, continually asking ourselves, “How can we make it better? How can we make it simpler?” We set extraordinarily high standards, and achieve them through incremental refinement.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
