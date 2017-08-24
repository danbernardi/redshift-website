import React from 'react';
import { setClass, breakpointIsLessThan, breakpointIsGreaterThan } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './About_Explore.scss';

/**
 * The About Page
 *
 * @param {Object} props
 * @param {object} breakpoint           Checks browser width
 * @return {React.Component}
 */


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
  }

  render () {
    const { breakpoint } = this.props;
    return (
      <section>
        <div className="about__wrapper row">
          { breakpointIsLessThan('mobileLg', breakpoint.size) &&
            <div className="pb3">
              <h2 className="pb2">How we work.</h2>
              <div className="typ--b1">
                We believe the best products are created by hybrid teams. Designers, researchers, and developers work shoulder-to-shoulder in our studio to create experiences that are beautiful and grounded in real user needs.
              </div>
            </div>
          }
          { this.animationItems.map((item, ti) => (
            <div key={ ti }>
              <div className={ setClass({ default: 'col-9 py6', mobileLg: 'col-12 py3' }, breakpoint) }>
                <h3
                  className={ `
                    ${ setClass({ default: 'pb3', mobileLg: 'pb2' }, breakpoint) }
                    ${ item.colorClass }
                  ` }
                >
                  { item.title }
                </h3>
                <div className="typ--b2">{ item.text }</div>
              </div>
              { breakpointIsGreaterThan('mobileLg', breakpoint.size) && <div className="col-3 col-last" /> }
            </div>
          )) }
        </div>
      </section>
    );
  }
}

AboutExplore.propTypes = {
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(AboutExplore);
