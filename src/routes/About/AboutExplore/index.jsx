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
        title: 'Explore.',
        text: 'We find great solutions by starting with the broadest range of possibilities, exploring all options with a blend of research techniques and vigorous ideation. We go through a lot of paper and Post-Its.',
        svgAnim: <AboutExploreAnimation />,
        colorClass: 'typ--redshift'
      },
      {
        id: 'aboutExperiment',
        title: 'Experiment.',
        text: 'We prototype everything, and these prototypes are the focal points of our process. We think “try it and see” is better than “let’s talk about it.”',
        svgAnim: <AboutExperimentAnimation />,
        colorClass: 'typ--ruby'
      },
      {
        id: 'aboutCollaborate',
        title: 'Collaborate.',
        text: 'Tough problems need multiple points of view and a diverse group of minds—all of them challenging, questioning, and collaborating with one another to reach a common goal.',
        svgAnim: <AboutCollaborationAnimation />,
        colorClass: 'typ--indigo'
      },
      {
        id: 'aboutIterate',
        title: 'Iterate.',
        text: 'We work in rapid cycles with frequent input from clients and users.  How can we make it better? Smarter? Simpler? We set extremely high standards, and we never settle.',
        svgAnim: <AboutIterateAnimation />,
        colorClass: 'typ--plum'
      }
    ];

    this.state = {
      activeItem: 'aboutExplore'
    };
  }

  render () {
    return (
      <section className="my8 mt0--mlg mb4--mlg">
        <div className="about__animation-wrapper hide--tlg hero layout--relative layout--fullheight layout--landscape layout--flex">
          { this.animationItems.map((image, ind) => (
            this.state.activeItem === image.id &&
              <div
                key={ ind }
                className="about--image"
              >
                { image.svgAnim }
              </div>
            ))}

          <div className="row layout--absolute layout-abs--bottom pb5">

            <div className="col-4 col-5--dsm about-explore--titles">
              { this.animationItems.map((item, i) => (
                <div key={ i }>
                  <h1
                    className={ `typ--bold btn ${ this.state.activeItem === item.id ? item.colorClass : 'typ--light-gray' }` }
                    onClick={ () => { this.setState({ activeItem: item.id }); } }
                  >
                    { item.title }
                  </h1>
                </div>
                ))
              }
            </div>

            <div className="col-8 col-7--dsm col-last">
              { this.animationItems.map((content, index) => (
                <div
                  className="about--transition"
                  key={ index }
                >
                  { this.state.activeItem === content.id && <h3 className="about--explore-text">{ content.text }</h3> }
                </div>
              )) }
            </div>
          </div>
        </div>
        <div className="show--tlg row">
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
