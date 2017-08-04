import React from 'react';
import { setClass, breakpointIsGreaterThan } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './About_Explore.scss';

export class AboutExplore extends React.Component {
  constructor (props) {
    super(props);

    this.animationItems = [
      {
        id: 'aboutExplore',
        title: 'Explore.',
        text: 'We find great solutions by starting with the broadest range of possibilities, exploring all options with a blend of research techniques and vigorous ideation. We go through a lot of paper and Post-Its.',
        colorClass: 'typ--redshift'
      },
      {
        id: 'aboutExperiment',
        title: 'Experiment.',
        text: 'We prototype everything, and these prototypes are the focal points of our process. We think “try it and see” is better than “let’s talk about it.”',
        colorClass: 'typ--ruby'
      },
      {
        id: 'aboutCollaborate',
        title: 'Collaborate.',
        text: 'Tough problems need multiple points of view and a diverse group of minds—all of them challenging, questioning, and collaborating with one another to reach a common goal.',
        colorClass: 'typ--indigo'
      },
      {
        id: 'aboutIterate',
        title: 'Iterate.',
        text: 'We work in rapid cycles with frequent input from clients and users.  How can we make it better? Smarter? Simpler? We set extremely high standards, and we never settle.',
        colorClass: 'typ--plum'
      }
    ];

    this.state = {
      activeItem: 'aboutExplore'
    };
  }

  render () {
    const { breakpoint } = this.props;
    return (
      <section>
        { breakpointIsGreaterThan('tabletLg', breakpoint.size)
          ? <div className="about__wrapper hero layout--landscape">
            <h1 className="typ--bold typ--redshift row">How we work.</h1>
            { this.animationItems.map((i, ind) => (
              <div className="about--work__container" key={ ind }>
                <div className="row col-12">
                  <h1 className={ `${i.colorClass} typ--bold mb2` }>
                    { i.title }
                  </h1>
                  <h3 className={ `about--explore-text ${ setClass({ default: 'col-9', desktopSm: 'col-12' }, breakpoint)}` }>{ i.text }</h3>
                </div>
              </div>
            ))}
          </div>
          : <div className="about__wrapper row">
            <h1 className="typ--bold typ--redshift">How we work.</h1>
            { this.animationItems.map((item, ti) => (
              <div key={ ti } className={ setClass({ default: 'mt6', mobileLg: 'mt4' }, breakpoint) }>
                <h2
                  className={ `typ--bold pb1 ${ item.colorClass }` }
                >
                  { item.title }
                </h2>
                <h3>{ item.text }</h3>
              </div>
            )) }
          </div>
        }
      </section>
    );
  }
}

AboutExplore.defaultProps = {
  activeItem: 'aboutExplore'
};

AboutExplore.propTypes = {
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(AboutExplore);
