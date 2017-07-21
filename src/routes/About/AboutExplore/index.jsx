import React from 'react';
import AboutExploreAnimation from '../AboutAnimations/AboutExplore';
import AboutExperimentAnimation from '../AboutAnimations/AboutExperiment';
import AboutCollaborationAnimation from '../AboutAnimations/AboutCollaboration';
import AboutIterateAnimation from '../AboutAnimations/AboutIterate';

export class AboutExplore extends React.Component {
  constructor (props) {
    super(props);

    this.animationItems = [
      {
        id: 'aboutExplore',
        class: 'about__explore',
        title: 'Explore.',
        text: 'We find great solutions by starting with the broadest range of possibilities, exploring all options with a blend of research techniques and vigorous ideation. We go through a lot of paper and Post-Its.',
        svgAnim: <AboutExploreAnimation />,
        colorClass: 'typ--redshift'
      },
      {
        id: 'aboutExperiment',
        class: 'about__experiment',
        title: 'Experiment.',
        text: 'We prototype everything, and these prototypes are the focal points of our process. We think “try it and see” is better than “let’s talk about it.”',
        svgAnim: <AboutExperimentAnimation />,
        colorClass: 'typ--ruby',
        position: 'right'
      },
      {
        id: 'aboutCollaborate',
        class: 'about__collaborate',
        title: 'Collaborate.',
        text: 'Tough problems need multiple points of view and a diverse group of minds—all of them challenging, questioning, and collaborating with one another to reach a common goal.',
        svgAnim: <AboutCollaborationAnimation />,
        colorClass: 'typ--indigo'
      },
      {
        id: 'aboutIterate',
        class: 'about__iterate',
        title: 'Iterate.',
        text: 'We work in rapid cycles with frequent input from clients and users.  How can we make it better? Smarter? Simpler? We set extremely high standards, and we never settle.',
        svgAnim: <AboutIterateAnimation />,
        colorClass: 'typ--plum',
        position: 'right'
      }
    ];

    this.state = {
      activeItem: 'aboutExplore'
    };
  }

  render () {
    return (
      <section>
        <div className="about__animation-wrapper hide--tlg hero layout--landscape">
          <h1 className="typ--bold typ--redshift row">How we work.</h1>
          { this.animationItems.map((i, ind) => (
<<<<<<< HEAD

=======
>>>>>>> Fixing key warning in aboutExplore
            <div className={ `${i.class} about--animation__container` } key={ ind }>
              { i.svgAnim }
              <div className={ `${i.class}--text row col-12` }>
                <h1 className={ `${i.colorClass} typ--bold mb2` }>
                  { i.title }
                </h1>
                <h3 className={ `about--explore-text col-9 col-12--dsm ${i.position === 'right' && 'col-last'}` } >{ i.text }</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="about__wrapper show--tlg row">
          <h1 className="typ--bold typ--redshift">How we work.</h1>
          { this.animationItems.map((item, ti) => (
            <div key={ ti } className="mt6">
              <h2
                className={ `typ--bold pb1 ${ item.colorClass }` }
              >
                { item.title }
              </h2>
              <h3>{ item.text }</h3>
            </div>
          )) }
        </div>
      </section>

    );
  }
}

AboutExplore.defaultProps = {
  activeItem: 'aboutExplore'
};

export default AboutExplore;
