export const caseStudies = [
  // Kaiser Permanente
  {
    id: 'kaiser',
    name: 'Kaiser Permanente',
    color: '#1FB4E7',
    device: {
      shadow: require('assets/img/case-studies/kaiser/kaiser_shadow.svg'),
      body: require('assets/img/case-studies/kaiser/kaiser_body.svg'),
      overlay: require('assets/img/case-studies/kaiser/kaiser_overlay.png'),
      overlaytlg: require('assets/img/case-studies/kaiser/kaiser_overlay_tlg.png'),
      overlaymlg: require('assets/img/case-studies/kaiser/kaiser_overlay_mlg.png')
    },
    heading: 'Kaiser Permanente has partnered with Redshift to create an entirely new digital healthcare experience—one that puts the patient in charge.',
    content: [
      {
        images:
        {
          imgDef: require('assets/img/home/KP/kp4.jpg'),
          imgTlg: require('assets/img/home/KP/kp4_tlg.jpg'),
          imgMlg: require('assets/img/home/KP/kp4_mlg.jpg')
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
          imgDef: require('assets/img/home/KP/kp5.jpg'),
          imgTlg: require('assets/img/home/KP/kp5_tlg.jpg'),
          imgMlg: require('assets/img/home/KP/kp5_mlg.jpg')
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
          imgDef: require('assets/img/home/KP/kp6.jpg'),
          imgTlg: require('assets/img/home/KP/kp6_tlg.jpg'),
          imgMlg: require('assets/img/home/KP/kp6_mlg.jpg')
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
          imgDef: require('assets/img/home/KP/kp3.jpg'),
          imgTlg: require('assets/img/home/KP/kp3_tlg.jpg'),
          imgMlg: require('assets/img/home/KP/kp3_mlg.jpg')
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
          imgDef: require('assets/img/home/KP/kp7.jpg'),
          imgTlg: require('assets/img/home/KP/kp7_tlg.jpg'),
          imgMlg: require('assets/img/home/KP/kp7_mlg.jpg')
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
    images: {
      def: require('assets/img/home/KP/kp-scene-bg.jpg'),
      tlg: require('assets/img/home/KP/kp-scene-bg.jpg'),
      mlg: require('assets/img/home/KP/kp-scene-bg.jpg'),
      msm: require('assets/img/home/KP/kp-scene-bg-mobile.jpg'),
      alt: 'Norton creative design'
    },
    caption: ['Reimagining the', 'Future of Healthcare'],
    anchor: true,
    featured: true
  },
  // Norton Antivirus
  {
    id: 'norton',
    name: 'Norton Online',
    color: '#FFC300',
    device: {
      shadow: require('assets/img/case-studies/norton/norton_shadow.svg'),
      body: require('assets/img/case-studies/norton/norton_body.svg'),
      overlay: require('assets/img/case-studies/norton/norton_overlay.png'),
      overlaymlg: require('assets/img/case-studies/norton/norton_overlay_mlg.png')
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
          maxWidth: '71.4%',
          videoImage: require('assets/img/case-studies/laptop.png'),
          videoPadding: '7.6% 0 10.7%',
          videoPoster: require('assets/img/home/Norton/norton-video-arrow.jpg')
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
          imgDef: require('assets/img/home/Norton/norton6.jpg'),
          imgTlg: require('assets/img/home/Norton/norton6_tlg.jpg'),
          imgMlg: require('assets/img/home/Norton/norton6_mlg.jpg')
        },
        imgAlt: 'Norton Online 7',
        copy: [
          {
            classes: 'casestudy__text typ--h3 pb7',
            text: 'In the past, each Norton product had its own separate interface, which made it very awkward to use multiple products together. The new solution lets users control and protect all their devices—from any device. For example, Mom can use her smartphone to remotely change Online Family settings for the home PC.'
          }
        ]
      },
      {
        images:
        {
          imgDef: require('assets/img/home/Norton/norton1.jpg'),
          imgTlg: require('assets/img/home/Norton/norton1_tlg.jpg'),
          imgMlg: require('assets/img/home/Norton/norton1_mlg.jpg')
        },
        copy: [
          {
            classes: 'casestudy__text typ--h3 pb7',
            text: 'The look and feel we created was a departure for Norton, whose software has usually employed a dark, “high-tech” look. We wanted the new console to feel light, modern, and approachable. Simple icons, ample whitespace, and bright splashes of color make a powerful product feel easy to use.'
          }
        ]
      },
      {
        images:
        {
          imgDef: require('assets/img/home/Norton/norton8.jpg'),
          imgTlg: require('assets/img/home/Norton/norton8_tlg.jpg'),
          imgMlg: require('assets/img/home/Norton/norton8_mlg.jpg')
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
    device: {
      shadow: require('assets/img/case-studies/nexus/nexus_shadow.svg'),
      body: require('assets/img/case-studies/nexus/nexus_body.svg'),
      overlay: require('assets/img/case-studies/nexus/nexus_overlay.png'),
      // shadowmlg: require('assets/img/case-studies/nexus/nexus_shadow-mlg.svg'),
      // bodymlg: require('assets/img/case-studies/nexus/nexus_body-mlg.svg'),
      overlaytlg: require('assets/img/case-studies/nexus/nexus_overlay_tlg.png'),
      overlaymlg: require('assets/img/case-studies/nexus/nexus_overlay_mlg.png')
    },
    caption: ['A new home', 'for Google Nexus'],
    featured: true,
    heading: 'Google asked Redshift to reinvent the way their customers experience Nexus products online.',
    content: [
      {
        video: {
          id: 'nexus',
          url: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/nexus_n7_950x624.mp4',
          url_sm: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/nexus_n7_950x624.mp4_sm',
          maxWidth: '71.9%',
          videoImage: require('assets/img/case-studies/laptop.png'),
          videoPadding: '7.6% 0 10.7%',
          videoPoster: require('assets/img/home/Nexus/nexus-video-arrow.jpg')
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
          imgDef: require('assets/img/home/Nexus/nexus6.jpg'),
          imgTlg: require('assets/img/home/Nexus/nexus6_tlg.jpg'),
          imgMlg: require('assets/img/home/Nexus/nexus6_mlg.jpg')
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
          imgDef: require('assets/img/home/Nexus/nexus7.jpg'),
          imgTlg: require('assets/img/home/Nexus/nexus7_tlg.jpg'),
          imgMlg: require('assets/img/home/Nexus/nexus7_mlg.jpg')
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
          imgDef: require('assets/img/home/Nexus/nexus8.jpg'),
          imgTlg: require('assets/img/home/Nexus/nexus8_tlg.jpg'),
          imgMlg: require('assets/img/home/Nexus/nexus8_mlg.jpg')
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
    device: {
      shadow: require('assets/img/case-studies/yumavore/yumavore_shadow.svg'),
      body: require('assets/img/case-studies/yumavore/yumavore_body.svg'),
      overlay: require('assets/img/case-studies/yumavore/yumavore_overlay.png'),
      overlaytlg: require('assets/img/case-studies/yumavore/yumavore_overlay_tlg.png'),
      overlaymlg: require('assets/img/case-studies/yumavore/yumavore_overlay_mlg.png')
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
          maxWidth: '44%',
          videoImage: require('assets/img/case-studies/ipad.png'),
          videoPadding: '11% 0',
          videoPoster: require('assets/img/home/Yumavore/yumavore-video-arrow.jpg')
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
          imgDef: require('assets/img/home/Yumavore/yumavore7.jpg'),
          imgTlg: require('assets/img/home/Yumavore/yumavore7_tlg.jpg'),
          imgMlg: require('assets/img/home/Yumavore/yumavore7_mlg.jpg')
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
          imgDef: require('assets/img/home/Yumavore/yumavore8.jpg'),
          imgTlg: require('assets/img/home/Yumavore/yumavore8_tlg.jpg'),
          imgMlg: require('assets/img/home/Yumavore/yumavore8_mlg.jpg')
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
          imgDef: require('assets/img/home/Yumavore/yumavore4.jpg'),
          imgTlg: require('assets/img/home/Yumavore/yumavore4_tlg.jpg'),
          imgMlg: require('assets/img/home/Yumavore/yumavore4_mlg.jpg')
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
          imgDef: require('assets/img/home/Yumavore/yumavore5.jpg'),
          imgTlg: require('assets/img/home/Yumavore/yumavore5.jpg'),
          imgMlg: require('assets/img/home/Yumavore/yumavore5.jpg')
        }
      },
      {
        containerClass: 'typ--center',
        copy: [{
          src: require('assets/img/home/Yumavore/yumavore6.jpg'),
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
    device: {
      shadow: require('assets/img/case-studies/five/five_shadow.svg'),
      body: require('assets/img/case-studies/five/five_body.svg'),
      overlay: require('assets/img/case-studies/five/five_overlay.png'),
      overlaymlg: require('assets/img/case-studies/five/five_overlay_mlg.png')
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
          maxWidth: '28.5%',
          videoImage: require('assets/img/case-studies/iphone.png'),
          videoPadding: '17% 0 15.3%',
          videoMargin: '-10.6%',
          videoPoster: require('assets/img/home/Five/five-video-arrow.jpg')
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
          imgDef: require('assets/img/home/Five/five1.jpg'),
          imgTlg: require('assets/img/home/Five/five1_tlg.jpg'),
          imgMlg: require('assets/img/home/Five/five1_mlg.jpg')
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
          maxWidth: '28.5%',
          videoImage: require('assets/img/case-studies/iphone.png'),
          videoPadding: '17% 0 15.3%',
          videoMargin: '-10.6%',
          videoPoster: require('assets/img/home/Five/five-video-arrow.jpg')
        },
        copy: [
          {
            classes: 'casestudy__text typ--h3 pb7',
            text: 'The first version of Five included a drafts feature for saving incomplete lists, but most users never got around to finishing them. So we eliminated the drafts, and allowed other users to fill in the unfinished lists. Losing the feature solved the problem—and made the app much more engaging in the process.'
          }
        ]
      },
      {
        images:
        {
          imgDef: require('assets/img/home/Five/five4.jpg'),
          imgTlg: require('assets/img/home/Five/five4_tlg.jpg'),
          imgMlg: require('assets/img/home/Five/five4_mlg.jpg')
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
          src: require('assets/img/home/Five/five5.jpg'),
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

  // norton campfire
  // {
  //   id: 'nortonCampfire',
  //   name: 'Norton Campfire',
  //   thumb: require('assets/img/home/archive/norton/campfire_thumb.jpg'),
  //   heading: 'Redshift created Campfire, a touchscreen kiosk providing a rich, interactive visualization of live data from Norton\'s online store. Winner of the 2012 Communicator Award.',
  //   sidebar: true,
  //   content: [
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/norton/campfire_1.jpg'),
  //         imgTlg: require('assets/img/home/archive/norton/campfire_1_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/norton/campfire_1_mlg.jpg')
  //       },
  //       imgAlt: 'Norton Campfire 1'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/norton/campfire_2.jpg'),
  //         imgTlg: require('assets/img/home/archive/norton/campfire_2_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/norton/campfire_2_mlg.jpg')
  //       },
  //       imgAlt: 'Norton Campfire 2'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/norton/campfire_3.jpg'),
  //         imgTlg: require('assets/img/home/archive/norton/campfire_3_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/norton/campfire_3_mlg.jpg')
  //       },
  //       imgAlt: 'Norton Campfire 3'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/norton/campfire_4.jpg'),
  //         imgTlg: require('assets/img/home/archive/norton/campfire_4_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/norton/campfire_4_mlg.jpg')
  //       },
  //       imgAlt: 'Norton Campfire 4'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/norton/campfire_5.jpg'),
  //         imgTlg: require('assets/img/home/archive/norton/campfire_5_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/norton/campfire_5_mlg.jpg')
  //       },
  //       imgAlt: 'Norton Campfire 5'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/norton/campfire_6.jpg'),
  //         imgTlg: require('assets/img/home/archive/norton/campfire_6_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/norton/campfire_6_mlg.jpg')
  //       },
  //       imgAlt: 'Norton Campfire 6'
  //     }
  //   ]
  // },
  // {
  //   id: 'googleFiber',
  //   name: 'Google Fiber',
  //   thumb: require('assets/img/home/archive/google/fiber_thumb.jpg'),
  //   heading: 'Redshift was tasked with creating a personal mobile experience to support the Google Fiber retail spaces. It helped visitors get the most out of the Google Fiber space while also allowing them to experience the delight that only Google can provide.',
  //   sidebar: true,
  //   content: [
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/google/fiber_1.jpg'),
  //         imgTlg: require('assets/img/home/archive/google/fiber_1_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/google/fiber_1_mlg.jpg')
  //       },
  //       imgAlt: 'Google Fiber 1'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/google/fiber_2.jpg'),
  //         imgTlg: require('assets/img/home/archive/google/fiber_2_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/google/fiber_2_mlg.jpg')
  //       },
  //       imgAlt: 'Google Fiber 2'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/google/fiber_3.jpg'),
  //         imgTlg: require('assets/img/home/archive/google/fiber_3_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/google/fiber_3_mlg.jpg')
  //       },
  //       imgAlt: 'Google Fiber 3'
  //     }
  //   ]
  // },
  // {
  //   id: 'openTable',
  //   name: 'Opentable',
  //   thumb: require('assets/img/home/archive/opentable/open_thumb.jpg'),
  //   heading: 'Redshift designed the “Places I’ve Eaten” Facebook app that allows diners to share their restaurant experiences with friends. It marked the first collaboration between Facebook and OpenTable.',
  //   sidebar: true,
  //   content: [
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/opentable/open_1.jpg'),
  //         imgTlg: require('assets/img/home/archive/opentable/open_1_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/opentable/open_1_mlg.jpg')
  //       },
  //       imgAlt: 'Opentable 1'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/opentable/open_2.jpg'),
  //         imgTlg: require('assets/img/home/archive/opentable/open_2_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/opentable/open_2_mlg.jpg')
  //       },
  //       imgAlt: 'Opentable 2'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/opentable/open_3.jpg'),
  //         imgTlg: require('assets/img/home/archive/opentable/open_3_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/opentable/open_3_mlg.jpg')
  //       },
  //       imgAlt: 'Opentable 3'
  //     }
  //   ]
  // },
  // {
  //   id: 'reviver',
  //   name: 'Reviver',
  //   thumb: require('assets/img/home/archive/slate/slate_thumb.jpg'),
  //   heading: 'Reviver came to Redshift to design the interface for Slate, the world’s first digital license plate. The web app helps small businesses manage fleets as well as communicate with customers through an on-board messaging platform.',
  //   sidebar: true,
  //   content: [
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/slate/slate_1.jpg'),
  //         imgTlg: require('assets/img/home/archive/slate/slate_1_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/slate/slate_1_mlg.jpg')
  //       },
  //       imgAlt: 'Reviver 1'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/slate/slate_2.jpg'),
  //         imgTlg: require('assets/img/home/archive/slate/slate_2_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/slate/slate_2_mlg.jpg')
  //       },
  //       imgAlt: 'Reviver 2'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/slate/slate_3.jpg'),
  //         imgTlg: require('assets/img/home/archive/slate/slate_3_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/slate/slate_3_mlg.jpg')
  //       },
  //       imgAlt: 'Reviver 3'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/archive/slate/slate_4.jpg'),
  //         imgTlg: require('assets/img/home/archive/slate/slate_4_tlg.jpg'),
  //         imgMlg: require('assets/img/home/archive/slate/slate_4_mlg.jpg')
  //       },
  //       imgAlt: 'Reviver 4'
  //     }
  //   ]
  // },

];
