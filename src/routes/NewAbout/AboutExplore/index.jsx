import React from 'react';

export class AboutExplore extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeItem: 'aboutExplore'
    };
  }

  render () {
    const aboutExplore = [
      {
        id: 'aboutExplore',
        title: 'Explore.',
        text: 'We find great solutions by starting with the broadest range of possibilities. We uncover these possibilities using a blend of research techniques and vigorous ideation. We go through a lot of paper and Post-Its.',
        img: require('assets/img/about/about__explore.svg'),
        colorClass: 'typ--redshift'
      },
      {
        id: 'aboutExperiment',
        title: 'Experiment.',
        text: 'Our practice is inquisitive and hands-on. We prototype everything, and these prototypes are the focal point of our process. We think “try it and see” is better than “let’s talk about it.”',
        img: require('assets/img/about/about__experiment.svg'),
        colorClass: 'typ--ruby'
      },
      {
        id: 'aboutCollaborate',
        title: 'Collaborate.',
        text: 'Tough problems need multiple points of view and a diverse set of minds. By challenging and motivating one another, we create far better work than any of us could alone.',
        img: require('assets/img/about/about__collaborate.svg'),
        colorClass: 'typ--indigo'
      },
      {
        id: 'aboutIterate',
        title: 'Iterate.',
        text: 'We work in rapid cycles with frequent input from both clients and users, continually asking ourselves, “How can we make it better? How can we make it simpler?” We set extraordinarily high standards, and achieve them through incremental refinement.',
        img: require('assets/img/about/about__iterate.svg'),
        colorClass: 'typ--plum'
      }
    ];

    return (
      <section>
        <div className="hide--tlg hero layout--relative layout--fullheight layout--flex">
          { aboutExplore.map((image, ind) => (
            <div key={ ind } className="about--image">
              { this.state.activeItem === image.id && <img src={ image.img } /> }
            </div>
            ))
          }

          <div className="row layout--absolute layout-abs--bottom pb5">

            <div className="col-4 col-5--dsm">
              { aboutExplore.map((item, i) => (
                <div key={ i }>
                  <h1
                    className={ `typ--bold ${ this.state.activeItem === item.id ? item.colorClass : 'typ--light-gray' }` }
                    onMouseEnter={ () => { this.setState({ activeItem: item.id }); } }
                    onMouseLeave={ () => { this.setState({ activeItem: 'aboutExplore' }); } }
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
                  className="about--transition"
                  key={ index }
                >
                  { this.state.activeItem === content.id && <h3 className="about--explore-text">{ content.text }</h3> }
                </div>
              )) }
            </div>
          </div>
        </div>
        <div className="show--tlg row my6">
          <h1 className="typ--bold typ--redshift">How we work.</h1>
          { aboutExplore.map((item, ti) => (
            <div key={ ti } className="mt4">
              <h2
                className={ `typ--bold ${ this.state.activeItem === item.id ? 'typ--redshift' : 'typ--light-gray' }` }
                onMouseEnter={ () => { this.setState({ activeItem: item.id }); } }
                onMouseLeave={ () => { this.setState({ activeItem: 'aboutExplore' }); } }
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
