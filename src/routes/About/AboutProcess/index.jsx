import React from 'react';

export function AboutProcess () {
  const icons =[
    {
      img: require('assets/img/about/telescope.png'),
      alt: 'telescope',
      label: 'Research',
      text: 'lorem ipsum'
    },
    {
      img: require('assets/img/about/constellation.png'),
      alt: 'constellation',
      label: 'UX',
      text: 'lorem ipsum'
    },
    {
      img: require('assets/img/about/comet.png'),
      alt: 'comet',
      label: 'Visual Design',
      text: 'lorem ipsum'
    },
    {
      img: require('assets/img/about/rocket.png'),
      alt: 'rocket',
      label: 'Engineering',
      text: 'lorem ipsum'
    }
  ];

  return (
    <section className="about__process mb10">
      <div className="col-12 row pb10">
        <h1 className="typ--bold mb4">We are Redshift<span className="typ--redshift">.</span></h1>
        <h3>We believe in improving people’s lives with simple, meaningful design.</h3>
      </div>
      <div className="col-12 theme--gray py10">
        <div className="row">
          <h2 className="typ--bold">Redshift is a digital experience firm that’s out of this world.</h2>
          <h5>We leverage expertise across multiple disciplines – User experience, Visual design, Engineering, and Research – to create real products and deliver out-of-this-world experiences that are usable, beautiful, feasible and grounded in real user needs.</h5>
          <div className="col-12 typ--center py2">
            { icons.map((icon, i) => (
              <span key={ i } >
                <img
                  src={ icon.img }
                  alt={ icon.alt }
                />
              </span>
            )) }
          </div>
        </div>
        <div className="col-12">
          <img style={ { width: '100%', position: 'absolute' } } src={ require('assets/img/about/about_curve.png') } />
          { icons.map((icon, i) => (
            <div className="col-3 typ--center" key={ i } style={ { padding: '11% 0' } }>
              <h3 className="typ--bold">{ icon.label }</h3>
              <h5>{ icon.text }</h5>
            </div>
          )) }
        </div>
      </div>
    </section>
  );
}

export default AboutProcess;
