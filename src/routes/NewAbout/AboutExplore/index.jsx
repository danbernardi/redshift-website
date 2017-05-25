import React from 'react';

export class AboutExplore extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeItem: 'aboutExplore',
      setOpacity: true
    };
  }

  render () {
    const aboutExplore = [
      {
        id: 'aboutExplore',
        title: 'Explore.',
        text: 'We find great solutions by starting with the broadest range of possibilities. We uncover these possibilities using a blend of research techniques and vigorous ideation. We go through a lot of paper and Post-Its.',
        img: require('assets/img/about/about__explore.svg')
      },
      {
        id: 'aboutExperiment',
        title: 'Experiment.',
        text: 'Our practice is inquisitive and hands-on. We prototype everything, and these prototypes are the focal point of our process. We think “try it and see” is better than “let’s talk about it.”',
        img: require('assets/img/about/about__experiment.svg')
      },
      {
        id: 'aboutCollaborate',
        title: 'Collaborate.',
        text: 'Tough problems need multiple points of view and a diverse set of minds. By challenging and motivating one another, we create far better work than any of us could alone.',
        img: require('assets/img/about/about__collaborate.svg')
      },
      {
        id: 'aboutIterate',
        title: 'Iterate.',
        text: 'We work in rapid cycles with frequent input from both clients and users, continually asking ourselves, “How can we make it better? How can we make it simpler?” We set extraordinarily high standards, and achieve them through incremental refinement.',
        img: require('assets/img/about/about__iterate.svg')
      }
    ];

    const { setOpacity } = this.state;

    return (
      <section>
        <div className="hide--tlg hero layout--relative layout--fullheight layout--flex">
          { aboutExplore.map((image, ind) => (
            <div key={ ind } className={ `about--image ${setOpacity ? 'opacity--one' : 'opacity--zero'}` }>
              { this.state.activeItem === image.id && <img src={ image.img } /> }
            </div>
            ))
          }

          <div className="row layout--absolute layout-abs--bottom pb5">
            <div>
              <div className="col-4 col-5--dsm">
                { aboutExplore.map((item, i) => (
                  <div key={ i }>
                    <h1
                      className={ `typ--bold ${ item.id && 'typ--redshift' }` }
                      onMouseEnter={ () => { this.setState({ activeItem: item.id, setOpacity: true }); } }
                      onMouseLeave={ () => { this.setState({ activeItem: '', setOpacity: false }); } }
                    >
                      { item.title }
                    </h1>
                  </div>
                  ))
                }
              </div>

              <div className="col-8 col-7--dsm col-last">
                { aboutExplore.map((content, index) => (
                  <div
                    className={ `about--transition ${setOpacity ? 'opacity--one' : 'opacity--zero' }` }
                    key={ index }
                  >
                    { this.state.activeItem === content.id && <h3 className="about--explore-text">{ content.text }</h3> }
                  </div>
                )) }
              </div>
            </div>

          </div>
        </div>
        <div className="show--tlg row my6">
          <h1 className="typ--bold typ--redshift">How we work.</h1>
          { aboutExplore.map((item, ti) => (
            <div key={ ti } className="mt4">
              <h2
                className={ `typ--bold ${ item.id && 'typ--redshift' }` }
                onMouseEnter={ () => { this.setState({ activeItem: item.id, setOpacity: true }); } }
                onMouseLeave={ () => { this.setState({ activeItem: '', setOpacity: false }); } }
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
