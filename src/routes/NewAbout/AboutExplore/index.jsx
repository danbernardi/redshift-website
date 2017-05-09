import React from 'react';

export class AboutExplore extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      aboutExplore: true,
      aboutExperiment: false,
      aboutCollaborate: false,
      aboutIterate: false
    };
  }

  render () {
    const aboutExplore = [
      {
        id: 'aboutExplore',
        title: 'Explore.',
        text: 'We find great solutions by starting with the broadest range of possibilities. We uncover these possibilities using a blend of research techniques and vigorous ideation. We go through a lot of paper and Post-Its.'
      },
      {
        id: 'aboutExperiment',
        title: 'Experiment.',
        text: 'Our practice is inquisitive and hands-on. We prototype everything, and these prototypes are the focal point of our process. We think “try it and see” is better than “let’s talk about it.”'
      },
      {
        id: 'aboutCollaborate',
        title: 'Collaborate.',
        text: 'Tough problems need multiple points of view and a diverse set of minds. By challenging and motivating one another, we create far better work than any of us could alone.'
      },
      {
        id: 'aboutIterate',
        title: 'Iterate.',
        text: 'We work in rapid cycles with frequent input from both clients and users, continually asking ourselves, “How can we make it better? How can we make it simpler?” We set extraordinarily high standards, and achieve them through incremental refinement.'
      }
    ]
    return (
      <section className="hero layout--relative layout--fullheight">
        <div className="layout--absolute layout-abs--bottom pb5">

          <div>
            <div className="col-4">
              {aboutExplore.map((item, i) => (
                <div key={ i }>
                  <h1
                    className={`typ--bold ${ item.id && 'typ--redshift' }` }
                    onMouseEnter={() => { this.setState({ activeItem: item.id }) } }
                    onMouseLeave={() => { this.setState({ activeItem: '' }) } }
                  >
                    { item.title }
                  </h1>
                </div>
                ))
              }

            </div>

            <div className="col-8 col-last">
              { aboutExplore.map((content, index) => ( <div key={ index }>{ this.state.activeItem === content.id && <h3>{ content.text }</h3> }</div>)) }
            </div>
          </div>

        </div>
      </section>

    );
  }
}

export default AboutExplore;