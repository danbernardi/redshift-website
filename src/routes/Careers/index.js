import React from 'react';
import CareersJobs from './CareersJobs';
import SrUxDesigner from './CareersJobs/roles/SeniorUX';
import SrVisDesigner from './CareersJobs/roles/SeniorVisual';
import UxDesigner from './CareersJobs/roles/UXDesigner';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import Watcher from 'components/Watcher/index';
import './style.scss';

const careers = [
  {
    position: 'Senior UX Designer',
    p1: 'At Redshift, in addition to being a top-notch UX designer, and leading cross-functional project teams, UX Leads are responsible for regularly presenting work to clients, so the ability to communicate confidently and clearly are essential. Leads must be able to speak fluently about both business objectives and design principles, and to handle feedback and questions with poise.',
    p2: 'UX designers, consultants, project managers, and interactive producers are all potential candidates.',
    p3: 'This role reports to our Director of UX',
    id: 'senior-ux-designer',
    component: <SrUxDesigner />
  },
  {
    position: 'UX Designer',
    p1: 'At Redshift, UX Designers are part of cross-functional project teams, working with a Senior UX Designer, Visual Designer, User Researchers, Front-End Engineers, Producers, and company leaders.',
    p2: 'UX designers, consultants, project managers, and interactive producers are all potential candidates.',
    p3: 'This role reports to our Director of UX',
    id: 'ux-designer',
    component: <UxDesigner />
  },
  {
    position: 'Senior Visual Designer',
    p1: 'Redshift is seeking a Senior Visual Designer to join our creative team in San Francisco. You will work closely with the Creative Director, UX Producer and larger Redshift team to concept and create interactive solutions for a large variety of digital projects. We are a small shop with big clients so you can expect to work on web sites, kiosks, interfaces, experiences, occasional print and even product design.',
    id: 'senior-visual-designer',
    component: <SrVisDesigner />
  }
];

export class Careers extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(actions.setHeaderTheme('white'));
  }

  watcherCallback (watcher) {
    const { dispatch } = this.props;

    if (watcher.isAboveViewport) {
      // watcher is in view
      dispatch(actions.setHeaderTheme('pink'));
    }

    if (watcher.isFullyInViewport) {
      // watcher is partly out of view
      dispatch(actions.setHeaderTheme('white'));
    }
  };

  render () {
    return (
      <div>
        <section className="about-gradient careers-hero">
          <div className="row">
            <div className="careers-page-title pb10 pb0--mlg pt4--mlg">
              <div className="hero--scene-text">
                <h1 className="typ--bold pb8 typ--white">Join the team.</h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Watcher offset={ { bottom: '8.5rem' } } stateChange={ (watcher) => this.watcherCallback(watcher) } />
          <div className="row row--maxwidth">
            {
              careers.map((job, index) => (
                <CareersJobs key={ index } job={ job } />
              ))
            }
          </div>
        </section>
      </div>
    );
  }
}

Careers.propTypes = {
  dispatch: React.PropTypes.func
};

export default connect()(Careers);
