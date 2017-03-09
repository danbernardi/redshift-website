export const caseStudies = [
  // Norton Antivirus
  {
    id: 'norton',
    name: 'Norton Online',
    color: '#FFC300',
    device: {
      shadow: require('assets/img/case-studies/norton/norton_shadow.svg'),
      body: require('assets/img/case-studies/norton/norton_body.svg'),
      overlay: require('assets/img/case-studies/norton/norton_overlay.png')
    },
    caption: ['A single interface', 'for all things Norton'],
    featured: true,
    heading: 'The world’s fourth largest software company approached Redshift with a critical challenge: How can we get more Norton on more devices?',
    content: [
      {
        images:
        {
          imgDef: require('assets/img/home/Norton/norton1.jpg'),
          imgTlg: require('assets/img/home/Norton/norton1_tlg.jpg'),
          imgMlg: require('assets/img/home/Norton/norton1_mlg.jpg')
        },
        imgAlt: 'Norton Online 1',
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'Norton’s security software is ubiquitous on desktop PCs, but the modern home contains Macs, smartphones, tablets, smart TVs, and other connected devices. We proposed a system that unites all of these connected devices in a single, simple interface.'
          }
        ]
      },
      {
        images:
        {
          imgDef: require('assets/img/home/Norton/norton2.jpg'),
          imgTlg: require('assets/img/home/Norton/norton2_tlg.jpg'),
          imgMlg: require('assets/img/home/Norton/norton2_mlg.jpg')
        },
        imgAlt: 'Norton Online 2',
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
          imgDef: require('assets/img/home/Norton/norton4.jpg'),
          imgTlg: require('assets/img/home/Norton/norton4_tlg.jpg'),
          imgMlg: require('assets/img/home/Norton/norton4_mlg.jpg')
        },
        imgAlt: 'Norton Online 3',
        copy: [
          {
            classes: 'casestudy__text typ--h3 pb7',
            text: 'In the past, each Norton product had its own separate interface, which made it very awkward to use multiple products together. The new solution lets users control and protect all their devices—from any device. For example, Mom can use her smartphone to remotely change Online Family settings for the home PC.'
          },
          {
            classes: 'casestudy__text typ--h3 pb7',
            text: 'The look and feel we created was a departure for Norton, whose software has usually employed a dark, “high-tech” look. We wanted the new console to feel light, modern, and approachable. Simple icons, ample whitespace, and bright splashes of color make a powerful product feel easy to use.'
          },
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
      shadowmlg: require('assets/img/case-studies/nexus/nexus_shadow-mlg.svg'),
      bodymlg: require('assets/img/case-studies/nexus/nexus_body-mlg.svg'),
      overlaymlg: require('assets/img/case-studies/nexus/nexus_overlay-mlg.png')
    },
    caption: ['A new home', 'for Google Nexus'],
    featured: true,
    heading: 'Google asked Redshift to reinvent the way their customers experience Nexus products online.',
    content: [
      {
        images:
        {
          imgDef: require('assets/img/home/Nexus/nexus1.jpg'),
          imgTlg: require('assets/img/home/Nexus/nexus1_tlg.jpg'),
          imgMlg: require('assets/img/home/Nexus/nexus1_mlg.jpg')
        },
        imgAlt: 'Google Nexus 1',
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
          imgDef: require('assets/img/home/Nexus/nexus2.jpg'),
          imgTlg: require('assets/img/home/Nexus/nexus2_tlg.jpg'),
          imgMlg: require('assets/img/home/Nexus/nexus2_mlg.jpg')
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
          imgDef: require('assets/img/home/Nexus/nexus3.jpg'),
          imgTlg: require('assets/img/home/Nexus/nexus3_tlg.jpg'),
          imgMlg: require('assets/img/home/Nexus/nexus3_mlg.jpg')
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
          imgDef: require('assets/img/home/Nexus/nexus4.jpg'),
          imgTlg: require('assets/img/home/Nexus/nexus4_tlg.jpg'),
          imgMlg: require('assets/img/home/Nexus/nexus4_mlg.jpg')
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
      overlay: require('assets/img/case-studies/yumavore/yumavore_overlay.png')
    },
    caption: ['A new way to create', 'and share recipes'],
    featured: true,
    heading: 'Working with celebrity chef Tyler Florence, Redshift designed a publishing platform that allows anyone to share beautiful recipes with food lovers everywhere.',
    content: [
      {
        video: {
          url: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/yumavore_768x1024.mp4',
          maxWidth: '44%',
          videoImage: require('assets/img/case-studies/ipad.png'),
          videoPadding: '11% 0'
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
            text: 'Yumavore is available in the app store, featuring user-created content from thousands of professional and home chefs.'
          }
        ]
      },
      {
        pad: false,
        copy: [{ src: require('assets/img/home/Yumavore/yumavore5.jpg') }]
      },
      {
        containerClass: 'typ--center',
        copy: [{ src: require('assets/img/home/Yumavore/yumavore6.jpg') },
          {
            classes: 'btn btn--ghost mt5 typ--yumavore',
            text: 'download the app',
            url: 'https://itunes.apple.com/us/app/yumavore/id1043281685?mt=8:'
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
      overlay: require('assets/img/case-studies/five/five_overlay.png')
    },
    caption: ['Share and compare', 'your top 5 of anything'],
    featured: true,
    heading: 'Redshift’s first product, Five, is a social app that lets you share and compare your top five of everything.',
    content: [
      {
        video: {
          url: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/five_374x666.mp4',
          maxWidth: '31%',
          videoImage: require('assets/img/case-studies/iphone.png'),
          videoPadding: '14.4% 0px 12.3%'
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
        video: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/five_374x666.mp4',
        maxWidth: '31%',
        videoImage: require('assets/img/case-studies/iphone.png'),
        videoPadding: '14.3% 0px 12.5%',

        imgAlt: 'Five 3',
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
  }

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
  // Kaiser Permanente
  // {
  //   id: 'kaiser',
  //   name: 'Kaiser Permanente',
  //   color: '#1FB4E7',
  //   device: {
  //     shadow: require('assets/img/case-studies/kaiser/kaiser_shadow.png'),
  //     body: require('assets/img/case-studies/kaiser/kaiser_body.png'),
  //     overlay: require('assets/img/case-studies/kaiser/kaiser_overlay.png')
  //   },
  //   heading: 'Kaiser Permanente worked with Redshift to pioneer the healthcare space by creating an entirely new digital experience – one that puts the patient in charge.',
  //   content: [
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/KP/kp1.jpg'),
  //         imgTlg: require('assets/img/home/KP/kp1_tlg.jpg'),
  //         imgMlg: require('assets/img/home/KP/kp1_mlg.jpg')
  //       },
  //       imgAlt: 'Kaiser Permanente 1',
  //       copy: [
  //         {
  //           classes: 'casestudy__text typ--h3',
  //           text: 'We conducted hundreds of interviews and determined a universal approach to the design was vital – we needed to create a satisfying experience for millions of prospective and existing KP members of different ages, languages, backgrounds and ethnicities.'
  //         }
  //       ]
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/KP/kp2.jpg'),
  //         imgTlg: require('assets/img/home/KP/kp2_tlg.jpg'),
  //         imgMlg: require('assets/img/home/KP/kp2_mlg.jpg')
  //       },
  //       imgAlt: 'Kaiser Permanente 2'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/KP/kp3.jpg'),
  //         imgTlg: require('assets/img/home/KP/kp3_tlg.jpg'),
  //         imgMlg: require('assets/img/home/KP/kp3_mlg.jpg')
  //       },
  //       imgAlt: 'Kaiser Permanente 3',
  //       copy: [
  //         {
  //           classes: 'casestudy__text typ--h4',
  //           text: 'We questioned every aspect of the traditional healthcare system – from the exam room to the smartphone.'
  //         }
  //       ]
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/KP/kp4.jpg'),
  //         imgTlg: require('assets/img/home/KP/kp4_tlg.jpg'),
  //         imgMlg: require('assets/img/home/KP/kp4_mlg.jpg')
  //       },
  //       imgAlt: 'Kaiser Permanente 4',
  //       copy: [
  //         {
  //           classes: 'casestudy__text typ--h4',
  //           text: 'To create a digital experience as innovative and modern as Kaiser’s approach to medicine, we chose to focus on a patient-driven, mobile-first design, allowing users to access their healthcare anytime, anywhere.'
  //         }
  //       ]
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/KP/kp5.jpg'),
  //         imgTlg: require('assets/img/home/KP/kp5_tlg.jpg'),
  //         imgMlg: require('assets/img/home/KP/kp5_mlg.jpg')
  //       },
  //       imgAlt: 'Kaiser Permanente 5'
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/KP/kp6.jpg'),
  //         imgTlg: require('assets/img/home/KP/kp6_tlg.jpg'),
  //         imgMlg: require('assets/img/home/KP/kp6_mlg.jpg')
  //       },
  //       imgAlt: 'Kaiser Permanente 6',
  //       copy: [
  //         {
  //           classes: 'casestudy__text typ--h4',
  //           text: 'Redshift worked with Kaiser to pull over 200 existing websites into a single, simple, more modern and more personalized website experience. We focused on warm, friendly messaging, rich imagery and clear calls-to-action.'
  //         }
  //       ]
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/KP/kp7.jpg'),
  //         imgTlg: require('assets/img/home/KP/kp7_tlg.jpg'),
  //         imgMlg: require('assets/img/home/KP/kp7_mlg.jpg')
  //       },
  //       imgAlt: 'Kaiser Permanente 7',
  //       copy: [
  //         {
  //           classes: 'casestudy__text typ--h4',
  //           text: 'We designed new tools to help KP doctors and patients communicate and share information, and to provide more transparency around healthcare costs.'
  //         }
  //       ]
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/KP/kp8.jpg'),
  //         imgTlg: require('assets/img/home/KP/kp8_tlg.jpg'),
  //         imgMlg: require('assets/img/home/KP/kp8_mlg.jpg')
  //       },
  //       imgAlt: 'Kaiser Permanente 8',
  //       copy: [
  //         {
  //           classes: 'casestudy__text typ--h4',
  //           text: 'We also designed new ways for patients to manage their healthcare online. Whether it’s keeping track of prescriptions, managing a medical condition, accessing medical records or monitoring the health of their entire family, KP members have the tools to take charge and live a healthy life.'
  //         }
  //       ]
  //     },
  //     {
  //       images:
  //       {
  //         imgDef: require('assets/img/home/KP/kp9.jpg'),
  //         imgTlg: require('assets/img/home/KP/kp9_tlg.jpg'),
  //         imgMlg: require('assets/img/home/KP/kp9_mlg.jpg')
  //       },
  //       imgAlt: 'Kaiser Permanente 9',
  //       copy: [
  //         {
  //           classes: 'casestudy__text typ--h4',
  //           text: 'The release of the new home page is the first of many steps in an ambitious series Redshift and Kaiser Permanente have launched to revamp all the organization’s digital touch points.'
  //         }
  //       ]
  //     }
  //   ],
  //   images: {
  //     def: require('assets/img/home/KP/kp-scene-bg.jpg'),
  //     tlg: require('assets/img/home/KP/kp-scene-bg.jpg'),
  //     mlg: require('assets/img/home/KP/kp-scene-bg.jpg'),
  //     msm: require('assets/img/home/KP/kp-scene-bg-mobile.jpg'),
  //     alt: 'Norton creative design'
  //   },
  //   caption: ['Reimagining the', 'Future of Healthcare'],
  //   anchor: true,
  //   featured: true
  // },
];
