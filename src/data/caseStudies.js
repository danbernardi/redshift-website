import React from 'react';

import FiveShadow from 'components/SVGs/FiveShadow';
import KaiserShadow from 'components/SVGs/KaiserShadow';
import NexusShadow from 'components/SVGs/NexusShadow';
import NortonShadow from 'components/SVGs/NortonShadow';
import YumavoreShadow from 'components/SVGs/YumavoreShadow';

export const caseStudies = [
  // Kaiser Permanente
  {
    id: 'kaiser',
    name: 'Kaiser Permanente',
    color: '#1FB4E7',
    // shortDescription: 'Sed posuere consectetur est at lobortis',
    // gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/kaiser/grid-thumbnail.jpg',
    device: {
      shadow: require('assets/img/case-studies/kaiser/kaiser_shadow.svg'),
      body: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/kaiser/kaiser_body.svg',
      overlay: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/kaiser/kaiser_overlay.png',
      overlaytlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/kaiser/kaiser_overlay_tlg.png',
      overlaymlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/kaiser/kaiser_overlay_mlg.png'
    },
    heading: 'Kaiser Permanente has partnered with Redshift to create an entirely new digital healthcare experience—one that puts the patient in charge.',
    content: [
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp4.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp4_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp4_mlg.jpg'
        },
        imgAlt: 'Kaiser Permanente 1',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'KP has dozens of legacy websites. Our first task was to bring these together into a single online destination that is simple, modern, and personalized.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp5.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp5_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp5_mlg.jpg'
        },
        imgAlt: 'Kaiser Permanente 2',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'We designed new ways for patients to manage their healthcare online. Now members can access medical records, track their prescriptions, manage healthcare costs, and monitor the health of their entire family.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp6.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp6_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp6_mlg.jpg'
        },
        imgAlt: 'Kaiser Permanente 3',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'We also explored new ways to help KP doctors and patients communicate and share information—whether in the exam room or at home. '
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp3.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp3_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp3_mlg.jpg'
        },
        imgAlt: 'Kaiser Permanente 4',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'The future of digital healthcare at KP is patient-driven and mobile-first, allowing users to access their healthcare anytime, anywhere.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp7.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp7_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/KP/kp7_mlg.jpg'
        },
        imgAlt: 'Kaiser Permanente 5',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            linkText:
            {
              startText: 'Visit Kaiser Permanente’s new home page at ',
              linkText: 'KP.org',
              link: 'http://kp.org',
              endText: ' — the first of several steps in an ambitious effort to revamp all the organization’s digital touch points.'
            }
          }
        ]
      }
    ],
    caption: ['Reimagining the', 'Future of Healthcare'],
    anchor: true,
    featured: true
  },
  // Norton Antivirus
  {
    id: 'norton',
    name: 'Norton Online',
    color: '#FFC300',
    // shortDescription: 'Sed posuere consectetur est at lobortis',
    // gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/norton/grid-thumbnail.jpg',
    device: {
      shadow: require('assets/img/case-studies/norton/norton_shadow.svg'),
      body: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/norton/norton_body.svg',
      overlay: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/norton/norton_overlay.png',
      overlaymlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/norton/norton_overlay_mlg.png'
    },
    caption: ['A single interface', 'for all things Norton'],
    featured: true,
    heading: 'The world’s fourth largest software company approached Redshift with a critical challenge: How can we get more Norton on more devices?',
    content: [
      {
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'Norton’s security software is ubiquitous on desktop PCs, but the modern home contains Macs, smartphones, tablets, smart TVs, and other connected devices. We proposed a system that unites all of these connected devices in a single, simple interface.'
          }
        ]
      },
      {
        video: {
          id: 'norton',
          url: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/norton_950x624.mp4',
          url_sm: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/norton_950x624_sm.mp4',
          type: 'laptop'
        },
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'Many users are unaware of Norton’s offerings such as Online Family, Backup, and Zone. The new console makes trying and buying products as simple as switching on a new feature. Software is automatically deployed to all devices from the cloud, and billed in a single subscription.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Norton/norton6.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Norton/norton6_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Norton/norton6_mlg.jpg'
        },
        imgAlt: 'Norton Online 7',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'In the past, each Norton product had its own separate interface, which made it very awkward to use multiple products together. The new solution lets users control and protect all their devices—from any device. For example, Mom can use her smartphone to remotely change Online Family settings for the home PC.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Norton/norton1.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Norton/norton1_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Norton/norton1_mlg.jpg'
        },
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'The look and feel we created was a departure for Norton, whose software has usually employed a dark, “high-tech” look. We wanted the new console to feel light, modern, and approachable. Simple icons, ample whitespace, and bright splashes of color make a powerful product feel easy to use.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Norton/norton8.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Norton/norton8_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Norton/norton8_mlg.jpg'
        },
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'This work, which included both web and native apps, was considered the most ambitious and significant UX initiative on the company’s roadmap.'
          }
        ]
      }
    ]
  },

  // Google Nexus
  {
    id: 'nexus',
    color: '#3AD283',
    name: 'Google Nexus',
    // shortDescription: 'Sed posuere consectetur est at lobortis',
    // gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/nexus/grid-thumbnail.jpg',
    device: {
      shadow: require('assets/img/case-studies/nexus/nexus_shadow.svg'),
      body: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/nexus/nexus_body.svg',
      overlay: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/nexus/nexus_overlay.png',
      // shadowmlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/nexus/nexus_shadow-mlg.svg',
      // bodymlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/nexus/nexus_body-mlg.svg',
      overlaytlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/nexus/nexus_overlay_tlg.png',
      overlaymlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/nexus/nexus_overlay_mlg.png'
    },
    caption: ['A new home', 'for Google Nexus'],
    featured: true,
    heading: 'Google asked Redshift to reinvent the way their customers experience Nexus products online.',
    content: [
      {
        video: {
          id: 'nexus',
          url: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/nexus_n7_950x624.mp4',
          url_sm: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/nexus_n7_950x624_sm.mp4',
          type: 'laptop'
        },
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'Instead of focusing on specs, we built the site around a set of rich, interactive “moments,” which show features in action. For example, to demonstrate the new HDR camera we let users take photos under backlit conditions using a virtual Nexus phone.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Nexus/nexus6.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Nexus/nexus6_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Nexus/nexus6_mlg.jpg'
        },
        imgAlt: 'Google Nexus 2',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'For diehard Nexus fans, it’s what’s under the hood that matters most. Inspired by “teardowns” that are popular on tech blogs, we created an interactive 3D model that allows these customers to virtually deconstruct the phone component by component.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Nexus/nexus7.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Nexus/nexus7_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Nexus/nexus7_mlg.jpg'
        },
        imgAlt: 'Google Nexus 3',
        classes: 'mb10',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'Google wanted the site to be transactional as well as inspirational. So we streamlined the shopping flows to reduce friction to a minimum, and maximize conversion.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Nexus/nexus8.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Nexus/nexus8_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Nexus/nexus8_mlg.jpg'
        },
        imgAlt: 'Google Nexus 4',
        classes: 'mt5',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'We love working with Google because they aim high. The Nexus site broke new ground for how to showcase hardware products online.'
          }
        ]
      }
    ]
  },

  // Yumavore
  {
    id: 'yumavore',
    name: 'Yumavore',
    color: '#FF765C',
    // shortDescription: 'Sed posuere consectetur est at lobortis',
    // gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/yumavore/grid-thumbnail.jpg',
    device: {
      shadow: require('assets/img/case-studies/yumavore/yumavore_shadow.svg'),
      body: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/yumavore/yumavore_body.svg',
      overlay: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/yumavore/yumavore_overlay.png',
      overlaytlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/yumavore/yumavore_overlay_tlg.png',
      overlaymlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/yumavore/yumavore_overlay_mlg.png'
    },
    caption: ['A new way to create', 'and share recipes'],
    featured: true,
    heading: 'Working with celebrity chef Tyler Florence, Redshift designed a publishing platform that allows anyone to share beautiful recipes with food lovers everywhere.',
    content: [
      {
        video: {
          id: 'yumavore',
          url: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/yumavore_768x1024.mp4',
          url_sm: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/yumavore_768x1024_sm.mp4',
          type: 'ipad'
        },
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'By observing home chefs, we discovered that flipping between ingredients and directions (as most apps require) can be very frustrating while cooking with a phone. So, we remixed the traditional recipe format with a design that shows ingredients and steps side-by-side.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Yumavore/yumavore7.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Yumavore/yumavore7_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Yumavore/yumavore7_mlg.jpg'
        },
        imgAlt: 'Yumavore 2',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'Yumavore is more than a cooking app; it is a publishing tool that enables chefs to create beautiful recipes with photos, video, smart ingredients lists, timers, and more. Text and graphics can be edited and organized with tap-and-drag simplicity.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Yumavore/yumavore8.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Yumavore/yumavore8_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Yumavore/yumavore8_mlg.jpg'
        },
        imgAlt: 'Yumavore 8',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'Like other apps, Yumavore can combine recipes to build smart shopping lists. But unlike other apps, Yumavore’s list can be organized by grocery aisle, so shoppers spend less time criss-crossing the supermarket.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Yumavore/yumavore4.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Yumavore/yumavore4_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Yumavore/yumavore4_mlg.jpg'
        },
        imgAlt: 'Yumavore 4',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'We also created Yumavore’s visual identity, which features an elegant logo, sophisticated typefaces, and a palette of black, white, and coral. The simplicity of this visual system allows food photography to take center stage.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Yumavore/yumavore5.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Yumavore/yumavore5.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Yumavore/yumavore5.jpg'
        }
      },
      {
        containerClass: 'typ--center',
        copy: [{
          src: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Yumavore/yumavore6.jpg',
          classes: 'casestudy__text typ--h3',
          text: 'Yumavore is available in the app store, featuring user-created content from thousands of professional and home chefs.'
        },
        {
          classes: 'btn btn--ghost mt5 typ--yumavore',
          text: 'download the app',
          url: 'https://itunes.apple.com/us/app/yumavore/id1043281685?mt=8'
        }]
      }
    ]
  },

  // Five
  {
    id: 'five',
    name: 'Five',
    color: '#936FEE',
    // shortDescription: 'Sed posuere consectetur est at lobortis',
    // gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/five/grid-thumbnail.jpg',
    device: {
      shadow: require('assets/img/case-studies/five/five_shadow.svg'),
      body: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/five/five_body.svg',
      overlay: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/five/five_overlay.png',
      overlaymlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/five/five_overlay_mlg.png'
    },
    caption: ['Share and compare', 'your top 5 of anything'],
    featured: true,
    heading: 'Redshift’s first product, Five, is a social app that lets you share and compare your top five of everything.',
    content: [
      {
        video: {
          id: 'five',
          url: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/five_374x666.mp4',
          url_sm: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/five_374x666_sm.mp4',
          type: 'iphone'
        },
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'SF’s secret swimming spots. Best breakfast cocktails. Cover songs that blow away the original. Five is an app that lets you curate your favorite things in a simple, addictive format: the top five list.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Five/five1.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Five/five1_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Five/five1_mlg.jpg'
        },
        imgAlt: 'Five 2',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'To keep the focus on the content, we designed a minimal interface that relies on gestures and animation instead of bars and buttons. When users swipe up to open a five, a signature animation creates a dramatic reveal.'
          }
        ]
      },
      {
        video: {
          id: 'five2',
          url: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/five_blinds_640x1136.mp4',
          url_sm: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/five_blinds_640x1136.mp4',
          type: 'iphone'
        },
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'The first version of Five included a drafts feature for saving incomplete lists, but most users never got around to finishing them. So we eliminated the drafts, and allowed other users to fill in the unfinished lists. Losing the feature solved the problem—and made the app much more engaging in the process.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Five/five4.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Five/five4_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Five/five4_mlg.jpg'
        },
        imgAlt: 'Five 4',
        copy: [
          {

          }
        ]
      },
      {
        containerClass: 'typ--center',
        copy: [{
          src: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/Five/five5.jpg',
          classes: 'casestudy__text typ--h3',
          text: 'Be one of the first to try out the new app. It just might become one of your top five favorites!'
        },
        {
          classes: 'btn btn--ghost mt5 typ--five',
          text: 'download the app',
          url: 'https://itunes.apple.com/us/app/five-share-and-compare-your-top-five-of-anything/id1160849650?mt=8'
        }]
      }
    ]
  },
  // ARCHIVE
  // GOOGLE FIBER
  {
    id: 'google-fiber',
    name: 'Google Fiber',
    color: '#89CA78',
    shortDescription: 'A companion app for an experimental retail space.',
    gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/google-fiber/grid-thumbnail.jpg',
    heading: 'Redshift was tasked with creating personal mobile experience to support the Google Fiber retail spaces. It helped visitors get the most out of the Google Fiber space while also allowing them to experience the delight that only Google can provide.',
    content: [
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF1.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF1_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF1_mlg.jpg'
        },
        imgAlt: 'Google Fiber 1'
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF2.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF2_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF2_mlg.jpg'
        },
        imgAlt: 'Google Fiber 2'
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF3.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF3_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF3_mlg.jpg'
        },
        imgAlt: 'Google Fiber 3'
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF4.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF4_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF4_mlg.jpg'
        },
        imgAlt: 'Google Fiber 4'
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF5.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF5_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Google/GF5_mlg.jpg'
        },
        imgAlt: 'Google Fiber 5'
      }
    ]
  },
  // CHATWORK
  {
    id: 'chatwork',
    name: 'Chatwork',
    color: '#CB2780',
    shortDescription: 'Business chat for an international audience.',
    gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/chatworks/grid-thumbnail.jpg',
    heading: 'Chatwork is a highly successful business communication platform. As part of their plan to expand to a global market, Chatwork asked Redshift to refresh their current product’s interface to a more universal design.',
    content: [
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Chatwork/CW1.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Chatwork/CW1_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Chatwork/CW1_mlg.jpg'
        },
        imgAlt: 'ChatWork 1'
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Chatwork/CW2.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Chatwork/CW2_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Chatwork/CW2_mlg.jpg'
        },
        imgAlt: 'ChatWork 2'
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Chatwork/CW3.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Chatwork/CW3_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Chatwork/CW3_mlg.jpg'
        },
        imgAlt: 'ChatWork 3'
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Chatwork/CW4.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Chatwork/CW4_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Chatwork/CW4_mlg.jpg'
        },
        imgAlt: 'ChatWork 4'
      }
    ]
  },
  // AMS
  {
    id: 'ams-armada',
    name: 'AMS Armada',
    color: '#1FB4E7',
    shortDescription: 'Dashboards to manage hybrid-electric buildings.',
    gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/ams-armada/grid-thumbnail.jpg',
    heading: 'Advanced Microgrid Solutions’ energy storage systems lower costs for consumers and provide clean, instant load reduction to electric utilities. Redshift designed and built the software that powers these systems.',
    content: [
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/AMS/AMS1.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/AMS/AMS1_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/AMS/AMS1_mlg.jpg'
        },
        imgAlt: 'AMS 1',
        copy: [
          {

          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/AMS/AMS2.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/AMS/AMS2_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/AMS/AMS2_mlg.jpg'
        },
        imgAlt: 'AMS 2',
        copy: [
          {

          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/AMS/AMS3.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/AMS/AMS3_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/AMS/AMS3_mlg.jpg'
        },
        imgAlt: 'AMS 3',
        copy: [
          {

          }
        ]
      }
    ]
  },
  //NORTON CAMPFIRE
  {
    id: 'norton-campfire',
    name: 'Norton Campfire',
    color: '#FDAF01',
    shortDescription: 'Visualizing sales data for a software giant.',
    gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/norton-campfire/grid-thumbnail.jpg',
    heading: 'Redshift created Campfire – a touchscreen kiosk that provides rich, interactive visualization of live data from Norton’s online store. Winner of 2012 Communicator Award.',
    content: [
      {
        video: {
          id: 'norton',
          url: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/norton_campfire_1024x576.mp4',
          url_sm: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/norton_campfire_1024x576.mp4',
          type: 'no-device'
        }
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/NortonCampfire/NC1.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/NortonCampfire/NC1_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/NortonCampfire/NC1_mlg.jpg'
        },
        imgAlt: 'Norton Campfire 1'
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/NortonCampfire/NC2.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/NortonCampfire/NC2_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/NortonCampfire/NC2_mlg.jpg'
        },
        imgAlt: 'Norton Campfire 2'
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/NortonCampfire/NC3.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/NortonCampfire/NC3_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/NortonCampfire/NC3_mlg.jpg'
        },
        imgAlt: 'Norton Campfire 3'
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/NortonCampfire/NC4.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/NortonCampfire/NC4_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/NortonCampfire/NC4_mlg.jpg'
        },
        imgAlt: 'Norton Campfire 4'
      }
    ]
  },
  // VLOCITY
  {
    id: 'vlocity',
    name: 'Vlocity',
    color: '#1FB4E7',
    shortDescription: 'Designing a suite of cloud based enterprise apps.',
    gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/vlocity/grid-thumbnail.jpg',
    heading: 'Vlocity engaged Redshift to create a flexible design system to support a range of powerful sales products.  ',
    content: [
      {
        video: {
          id: 'vlocity',
          url: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/vlocity_1080x768.mp4',
          url_sm: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/vlocity_1080x768.mp4',
          type: 'laptop'
        },
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'Vlocity products serve a range of clients and user types. Our task was to codify a design system that works across verticals, allowing both consumers and salespeople to select, configure, and manage multiple products in a nonlinear way.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/vlocity/V1.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/vlocity/V1_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/vlocity/V1_mlg.jpg'
        },
        imgAlt: 'Vlocity 1',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'The designs need to accommodate multiple layers of configuration per product. Also, users need to be able to access Vlocity’s proprietary scripts (used to update customer data and modify contracts) in a contextually relevant way. '
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/vlocity/V2.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/vlocity/V2_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/vlocity/V2_mlg.jpg'
        },
        imgAlt: 'Vlocity 2',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'Our team created a card-based design system used across all Vlocity products. By bundling together related information, cards actionable and easy to scan. Their size and shape make them flexible enough to work across products, industries, and devices.'
          }
        ]
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/vlocity/V3.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/vlocity/V3_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/vlocity/V3_mlg.jpg'
        },
        imgAlt: 'Vlocity 3',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'The Vlocity design system distills hundreds of decisions and informs new work. Every new engagement presents an opportunity to stress test and improve upon the patterns our team has created.'
          }
        ]
      }
    ]
  },
  // FANMOUTH
  {
    id: 'fanmouth',
    name: 'Fanmouth',
    color: '#FF3100',
    shortDescription: 'Fantasy sports made easy.',
    gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/fanmouth/grid-thumbnail.jpg',
    heading: 'Fantasy is more than just football. Redshift was challenged with designing a white labeled sports platform to maximize fan engagement for all types and levels of sports activities.',
    content: [
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Fanmouth/FM1.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Fanmouth/FM1_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Fanmouth/FM1_mlg.jpg'
        },
        imgAlt: 'Fanmouth 1'
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Fanmouth/FM2.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Fanmouth/FM2_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Fanmouth/FM2_mlg.jpg'
        },
        imgAlt: 'Fanmouth 2'
      },
      {
        images:
        {
          imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Fanmouth/FM3.jpg',
          imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Fanmouth/FM3_tlg.jpg',
          imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Fanmouth/FM3_mlg.jpg'
        },
        imgAlt: 'Fanmouth 3'
      }
    ]
  }

  // {
  //   id: 'glow',
  //   name: 'Glow Headphones',
  //   color: '#5F2CA1',
  //   shortDescription: 'Introducing the world\'s first laser headphones.',
  //   gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/glow/grid-thumbnail.jpg',
  //   // heading: 'Fantasy is more than just football. Redshift was challenged with designing a white labeled sports platform to maximize fan engagement for all types and levels of sports activities.',
  //   content: [
  //     {
  //       images:
  //       {
  //         imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow1.jpg',
  //         imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow1_tlg.jpg',
  //         imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow1_mlg.jpg'
  //       },
  //       imgAlt: 'Glow 1'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow2.jpg',
  //         imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow2_tlg.jpg',
  //         imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow2_mlg.jpg'
  //       },
  //       imgAlt: 'Glow 2'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow3.jpg',
  //         imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow3_tlg.jpg',
  //         imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow3_mlg.jpg'
  //       },
  //       imgAlt: 'Glow 3'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow4.jpg',
  //         imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow4_tlg.jpg',
  //         imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow4_mlg.jpg'
  //       },
  //       imgAlt: 'Glow 4'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow5.jpg',
  //         imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow5_tlg.jpg',
  //         imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/Glow/glow5_mlg.jpg'
  //       },
  //       imgAlt: 'Glow 5'
  //     }
  //   ]
  // },


  // {
  //   id: 'stemcentrix',
  //   name: 'StemCentrix',
  //   color: '#440F67',
  //   shortDescription: 'Sed posuere consectetur est at lobortis',
  //   gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/stemcentrix/grid-thumbnail.jpg',
  //   heading: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  // },
  // {
  //   id: 'younicos',
  //   name: 'LivSpace Website',
  //   color: '#C0C2C4',
  //   shortDescription: 'Sed posuere consectetur est at lobortis',
  //   gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/livspace/grid-thumbnail.jpg',
  //   heading: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  // },
  // {
  //   id: 'glow',
  //   name: 'Reviver Slate',
  //   color: '#56C3CC',
  //   shortDescription: 'Sed posuere consectetur est at lobortis',
  //   gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/reviver-slate/grid-thumbnail.jpg',
  //   heading: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  // }
  // {
  //   id: 'mypoints',
  //   name: 'myPoints',
  //   color: '#1FB4E7',
  //   shortDescription: 'New experience for online shopping',
  //   gridThumbnail: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/case-studies/ams-armada/grid-thumbnail.jpg',
  //   heading: 'Redshift was tasked by MyPoints – a popular online rewards program – to create a beautiful, immersive shopping experience to appeal to a new younger demographic. Our solution incorporates bold imagery and fun, game-like elements to encourage users to build progress and earn points.'
  //   content: [
  //     {
  //      images:
  //       {
  //         imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/mypoints/MP1.jpg',
  //         imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/mypoints/MP1_tlg.jpg',
  //         imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/archive/mypoints/MP1_mlg.jpg'
  //       },
  //       imgAlt: 'MyPoints',
  //     }
  //   ]
  // },

];
