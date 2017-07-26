// @flow
import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import './Header.scss';
import './HeaderClose.scss';
import * as actions from 'store/actions';
import Nav from 'components/Nav/index';
import { scrollDocToZero } from 'utils/scrollTo';
import Hamburger from 'components/Hamburger';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax } from 'gsap';

export class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = { redshift: false };
  }

  componentDidMount () {
    if (location.pathname === '/') {
      this.timeline = this.addAnimation(this.animateIn);
    }
  }

  animateIn ({ target }) {
    const logo = target[0].querySelector('.header__logo');
    const menu = target[0].querySelector('.menu__trigger');

    return new TimelineMax({})
      .staggerFrom([logo, menu], 0.55, { delay: 1.5, opacity: 0, y: -50 }, 0.15)
      .play();
  }

  getPageTitle (path) {
    return {
      work: { label: 'work', color: 'white' },
      about: { label: 'about', color: 'pink' },
      careers: { label: 'careers', color: '' },
      '404': { label: '404', color: 'white' }
    }[path || 'work'];
  };

  triggerRouteChange () {
    const { modalState, dispatch } = this.props;

    let animate = true;
    if (modalState.open || (location.pathname !== '/' && location.pathname.split('/')[1] !== '/work')) {
      browserHistory.push('/');
      scrollDocToZero();

      dispatch(actions.toggleModal(false));

      setTimeout(() => {
        dispatch(actions.setActiveModal(null, null));
      }, 200);

      animate = false;
    }

    dispatch(actions.goToNextCaseStudy(-1, animate, []));
  };

  toggleHeaderModal () {
    const { modalState, dispatch } = this.props;
    if (modalState.open) {
      dispatch(actions.toggleModal(false));
      this.timer = setTimeout(() => { dispatch(actions.setActiveModal(null, null)); }, 200);
    } else {
      dispatch(actions.setActiveModal(<Nav />, 'nav'));
      dispatch(actions.toggleModal(true));
      ReactGA.event({
        category: 'Navigation',
        action: 'Hamburger Click'
      });
    }
  };

  componentWillUnmount () {
    window.clearInterval(this.timer);
  }

  addRedshift () {
    this.setState({ redshift: true });
  }

  hideRedshift () {
    this.setState({ redshift: false });
  }

  render () {
    const { modalState, headerTheme } = this.props;

    const initialStyles = { transition: `opacity 200ms ease-in-out` };
    let logoTransformStyles = {};

    if (modalState.open && modalState.modalID !== 'nav') {
      // if modal is currently active
      logoTransformStyles = { opacity: 0, pointerEvents: 'none' };
    } else {
      // if modal isn't currently active
      logoTransformStyles = { opacity: 1, pointerEvents: 'auto' };
    }

    return (
      <header className={ `header ${headerTheme}-theme` }>
        <div className="row">
          <div
            onClick={ () => this.triggerRouteChange() }
            style={ Object.assign(initialStyles, logoTransformStyles) }
            className="header__logo layout--left"
            onMouseEnter={ () => this.addRedshift() }
            onMouseLeave={ () => this.hideRedshift() }
          >
            <span className="logo">
              <span
                className="icon-redshift"
                style={ { color: modalState.open && modalState.modalID === 'nav' && '#FFFFFF' } }
              />
            </span>
          </div>
          <span className="header__text"
            style={ {
              opacity: this.state.redshift ? 1 : 0,
              transition: 'opacity 0.2s ease'
            } }>

            <svg width="108px" height="27px" viewBox="0 0 108 27">
              <g id="Landing-&amp;-Menu" stroke="none" fill="none" fillRule="evenodd">
                <g id="header__text" transform="translate(-129.000000, -58.000000)" fill={ modalState.open && modalState.modalID === 'nav' ? '#FFFFFF' : '#222222' }>
                  <g id="logo" transform="translate(129.000000, 58.000000)">
                    <g id="Text" transform="translate(0.500000, 0.000000)">
                      <path d="M13.4680488,19.268 C13.4680488,19.9500034 13.6165473,20.5714972 13.9135488,21.1325 C14.2105503,21.6935028 14.6010464,22.171998 15.0850488,22.568 C15.5690512,22.964002 16.1300456,23.2719989 16.7680488,23.492 C17.406052,23.7120011 18.0660454,23.822 18.7480488,23.822 C19.6720534,23.822 20.4750454,23.6075021 21.1570488,23.1785 C21.8390522,22.7494979 22.466046,22.1830035 23.0380488,21.479 L25.2820488,23.195 C23.6320406,25.3290107 21.3220637,26.396 18.3520488,26.396 C17.1200427,26.396 16.0035538,26.1870021 15.0025488,25.769 C14.0015438,25.3509979 13.1545523,24.7735037 12.4615488,24.0365 C11.7685454,23.2994963 11.2350507,22.430505 10.8610488,21.4295 C10.487047,20.428495 10.3000488,19.3450058 10.3000488,18.179 C10.3000488,17.0129942 10.5035468,15.929505 10.9105488,14.9285 C11.3175509,13.927495 11.8785453,13.0585037 12.5935488,12.3215 C13.3085524,11.5844963 14.1610439,11.0070021 15.1510488,10.589 C16.1410538,10.1709979 17.219043,9.962 18.3850488,9.962 C19.7710558,9.962 20.942544,10.2039976 21.8995488,10.688 C22.8565536,11.1720024 23.6430457,11.8044961 24.2590488,12.5855 C24.8750519,13.3665039 25.3205475,14.2464951 25.5955488,15.2255 C25.8705502,16.2045049 26.0080488,17.1999949 26.0080488,18.212 L26.0080488,19.268 L13.4680488,19.268 Z M22.8400488,16.892 C22.8180487,16.2319967 22.7135498,15.6270027 22.5265488,15.077 C22.3395479,14.5269973 22.0590507,14.048502 21.6850488,13.6415 C21.311047,13.234498 20.8435516,12.9155012 20.2825488,12.6845 C19.721546,12.4534988 19.0670526,12.338 18.3190488,12.338 C17.5930452,12.338 16.9275519,12.4754986 16.3225488,12.7505 C15.7175458,13.0255014 15.2060509,13.3829978 14.7880488,13.823 C14.3700467,14.2630022 14.04555,14.7524973 13.8145488,15.2915 C13.5835477,15.8305027 13.4680488,16.3639974 13.4680488,16.892 L22.8400488,16.892 Z" id="redshift" />
                      <path d="M43.934,26 L40.964,26 L40.964,23.756 L40.898,23.756 C40.3259971,24.5920042 39.539505,25.2409977 38.5385,25.703 C37.537495,26.1650023 36.5090053,26.396 35.453,26.396 C34.242994,26.396 33.1485049,26.1870021 32.1695,25.769 C31.1904951,25.3509979 30.3545035,24.7680037 29.6615,24.02 C28.9684965,23.2719963 28.4350019,22.403005 28.061,21.413 C27.6869981,20.422995 27.5,19.3450058 27.5,18.179 C27.5,17.0129942 27.6869981,15.929505 28.061,14.9285 C28.4350019,13.927495 28.9684965,13.0585037 29.6615,12.3215 C30.3545035,11.5844963 31.1904951,11.0070021 32.1695,10.589 C33.1485049,10.1709979 34.242994,9.962 35.453,9.962 C36.5750056,9.962 37.630995,10.1984976 38.621,10.6715 C39.611005,11.1445024 40.3699974,11.7879959 40.898,12.602 L40.964,12.602 L40.964,1.052 L43.934,1.052 L43.934,26 Z M35.816,23.624 C36.608004,23.624 37.3229968,23.4865014 37.961,23.2115 C38.5990032,22.9364986 39.1379978,22.5625024 39.578,22.0895 C40.0180022,21.6164976 40.3589988,21.0445034 40.601,20.3735 C40.8430012,19.7024966 40.964,18.971004 40.964,18.179 C40.964,17.386996 40.8430012,16.6555034 40.601,15.9845 C40.3589988,15.3134966 40.0180022,14.7415024 39.578,14.2685 C39.1379978,13.7954976 38.5990032,13.4215014 37.961,13.1465 C37.3229968,12.8714986 36.608004,12.734 35.816,12.734 C35.023996,12.734 34.3090032,12.8714986 33.671,13.1465 C33.0329968,13.4215014 32.4940022,13.7954976 32.054,14.2685 C31.6139978,14.7415024 31.2730012,15.3134966 31.031,15.9845 C30.7889988,16.6555034 30.668,17.386996 30.668,18.179 C30.668,18.971004 30.7889988,19.7024966 31.031,20.3735 C31.2730012,21.0445034 31.6139978,21.6164976 32.054,22.0895 C32.4940022,22.5625024 33.0329968,22.9364986 33.671,23.2115 C34.3090032,23.4865014 35.023996,23.624 35.816,23.624 L35.816,23.624 Z" id="redshift" />
                      <path d="M78.693,10.358 L81.663,10.358 L81.663,26 L78.693,26 L78.693,10.358 Z M78,4.748 C78,4.15399703 78.2144979,3.64250215 78.6435,3.2135 C79.0725021,2.78449786 79.583997,2.57 80.178,2.57 C80.772003,2.57 81.2834979,2.78449786 81.7125,3.2135 C82.1415021,3.64250215 82.356,4.15399703 82.356,4.748 C82.356,5.34200297 82.1415021,5.85349786 81.7125,6.2825 C81.2834979,6.71150215 80.772003,6.926 80.178,6.926 C79.583997,6.926 79.0725021,6.71150215 78.6435,6.2825 C78.2144979,5.85349786 78,5.34200297 78,4.748 L78,4.748 Z" id="redshift" />
                      <path d="M0.451000162,10.358 L3.42100016,10.358 L3.42100016,12.767 L3.48700016,12.767 C3.68500115,12.3489979 3.94899851,11.9695017 4.27900016,11.6285 C4.60900181,11.2874983 4.97749813,10.9960012 5.38450016,10.754 C5.7915022,10.5119988 6.23699774,10.3195007 6.72100016,10.1765 C7.20500258,10.0334993 7.68899774,9.962 8.17300016,9.962 C8.65700258,9.962 9.09699818,10.0279993 9.49300016,10.16 L9.36100016,13.361 C9.11899895,13.2949997 8.87700137,13.2400002 8.63500016,13.196 C8.39299895,13.1519998 8.15100137,13.13 7.90900016,13.13 C6.4569929,13.13 5.34600401,13.5369959 4.57600016,14.351 C3.80599631,15.1650041 3.42100016,16.4299914 3.42100016,18.146 L3.42100016,26 L0.451000162,26 L0.451000162,10.358 Z" id="Path" />
                      <path d="M56.136,14.285 C55.7839982,13.8449978 55.3495026,13.4765015 54.8325,13.1795 C54.3154974,12.8824985 53.6830037,12.734 52.935,12.734 C52.2309965,12.734 51.6205026,12.8824985 51.1035,13.1795 C50.5864974,13.4765015 50.328,13.9109971 50.328,14.483 C50.328,14.9450023 50.4764985,15.3189986 50.7735,15.605 C51.0705015,15.8910014 51.422498,16.1219991 51.8295,16.298 C52.236502,16.4740009 52.6709977,16.6059996 53.133,16.694 C53.5950023,16.7820004 53.9909983,16.8589997 54.321,16.925 C54.9590032,17.0790008 55.5584972,17.2659989 56.1195,17.486 C56.6805028,17.7060011 57.164498,17.9919982 57.5715,18.344 C57.978502,18.6960018 58.2974988,19.1249975 58.5285,19.631 C58.7595012,20.1370025 58.875,20.7529964 58.875,21.479 C58.875,22.3590044 58.6880019,23.1124969 58.314,23.7395 C57.9399981,24.3665031 57.456003,24.877998 56.862,25.274 C56.267997,25.670002 55.5915038,25.9559991 54.8325,26.132 C54.0734962,26.3080009 53.3090038,26.396 52.539,26.396 C51.2409935,26.396 50.1025049,26.198002 49.1235,25.802 C48.1444951,25.405998 47.2700038,24.6800053 46.5,23.624 L48.744,21.776 C49.2280024,22.2600024 49.766997,22.6889981 50.361,23.063 C50.955003,23.4370019 51.6809957,23.624 52.539,23.624 C52.9130019,23.624 53.2924981,23.5855004 53.6775,23.5085 C54.0625019,23.4314996 54.4034985,23.3105008 54.7005,23.1455 C54.9975015,22.9804992 55.2394991,22.7715013 55.4265,22.5185 C55.6135009,22.2654987 55.707,21.9740016 55.707,21.644 C55.707,21.2039978 55.5695014,20.8410014 55.2945,20.555 C55.0194986,20.2689986 54.6895019,20.0435008 54.3045,19.8785 C53.9194981,19.7134992 53.5125021,19.5815005 53.0835,19.4825 C52.6544979,19.3834995 52.2750016,19.3010003 51.945,19.235 C51.3069968,19.0809992 50.7020029,18.905001 50.13,18.707 C49.5579971,18.508999 49.0520022,18.2450017 48.612,17.915 C48.1719978,17.5849984 47.8200013,17.1670025 47.556,16.661 C47.2919987,16.1549975 47.16,15.5280037 47.16,14.78 C47.16,13.9659959 47.3304983,13.256503 47.6715,12.6515 C48.0125017,12.046497 48.4634972,11.546002 49.0245,11.15 C49.5855028,10.753998 50.2234964,10.457001 50.9385,10.259 C51.6535036,10.060999 52.3739964,9.962 53.1,9.962 C54.1560053,9.962 55.1679952,10.159998 56.136,10.556 C57.1040048,10.952002 57.8739971,11.6119954 58.446,12.536 L56.136,14.285 Z" id="Path" />
                      <path d="M61.5,1.052 L64.47,1.052 L64.47,12.767 L64.536,12.767 C64.9100019,11.9309958 65.5589954,11.2545026 66.483,10.7375 C67.4070046,10.2204974 68.473994,9.962 69.684,9.962 C70.4320037,9.962 71.1524965,10.0774988 71.8455,10.3085 C72.5385035,10.5395012 73.1434974,10.8969976 73.6605,11.381 C74.1775026,11.8650024 74.5899985,12.4864962 74.898,13.2455 C75.2060015,14.0045038 75.36,14.9009948 75.36,15.935 L75.36,26 L72.39,26 L72.39,16.76 C72.39,16.0339964 72.291001,15.4125026 72.093,14.8955 C71.894999,14.3784974 71.6310016,13.9605016 71.301,13.6415 C70.9709983,13.3224984 70.5915021,13.0915007 70.1625,12.9485 C69.7334979,12.8054993 69.2880023,12.734 68.826,12.734 C68.2099969,12.734 67.6380026,12.832999 67.11,13.031 C66.5819974,13.229001 66.120002,13.5424979 65.724,13.9715 C65.327998,14.4005021 65.0200011,14.9449967 64.8,15.605 C64.5799989,16.2650033 64.47,17.0459955 64.47,17.948 L64.47,26 L61.5,26 L61.5,1.052 Z" id="Path" />
                      <path d="M87.366,12.932 L84,12.932 L84,10.358 L87.366,10.358 L87.366,6.86 C87.366,4.76998955 87.767496,3.21350511 88.5705,2.1905 C89.373504,1.16749488 90.7539902,0.656 92.712,0.656 C93.0420016,0.656 93.3884982,0.66699989 93.7515,0.689 C94.1145018,0.71100011 94.5049979,0.77699945 94.923,0.887 L94.593,3.527 C94.3069986,3.41699945 94.0320013,3.34000022 93.768,3.296 C93.5039987,3.25199978 93.2180015,3.23 92.91,3.23 C92.3599972,3.23 91.9200016,3.31249918 91.59,3.4775 C91.2599983,3.64250082 91.0015009,3.87899846 90.8145,4.187 C90.6274991,4.49500154 90.5065003,4.86349785 90.4515,5.2925 C90.3964997,5.72150215 90.369,6.21099725 90.369,6.761 L90.369,10.358 L93.9,10.358 L93.9,12.932 L90.336,12.932 L90.336,26 L87.366,26 L87.366,12.932 Z" id="Path" />
                      <path d="M106.659,12.932 L102.402,12.932 L102.402,20.027 C102.402,20.4670022 102.413,20.9014979 102.435,21.3305 C102.457,21.7595021 102.539499,22.1444983 102.6825,22.4855 C102.825501,22.8265017 103.045499,23.101499 103.3425,23.3105 C103.639501,23.519501 104.073997,23.624 104.646,23.624 C104.998002,23.624 105.360998,23.5910003 105.735,23.525 C106.109002,23.4589997 106.449998,23.3380009 106.758,23.162 L106.758,25.868 C106.405998,26.066001 105.949503,26.2034996 105.3885,26.2805 C104.827497,26.3575004 104.393002,26.396 104.085,26.396 C102.940994,26.396 102.055503,26.2365016 101.4285,25.9175 C100.801497,25.5984984 100.339501,25.1860025 100.0425,24.68 C99.7454985,24.1739975 99.5695003,23.6075031 99.5145,22.9805 C99.4594997,22.3534969 99.432,21.7210032 99.432,21.083 L99.432,12.932 L96,12.932 L96,10.358 L99.432,10.358 L99.432,5.969 L102.402,5.969 L102.402,10.358 L106.659,10.358 L106.659,12.932 Z" id="Path" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <div
            style={ Object.assign(initialStyles, logoTransformStyles) }
            onClick={ () => this.toggleHeaderModal() }
            className="menu__trigger layout--right typ--link"
          >
            <Hamburger />
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  modalState: PropTypes.object,
  headerTheme: PropTypes.string,
  dispatch: PropTypes.func
};

const injectStateProps = state => ({
  modalState: state.modalState,
  headerTheme: state.headerTheme
});

export default connect(injectStateProps)(GSAP()(Header));
