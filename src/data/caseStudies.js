// norton images
import norton1 from 'routes/Home/Norton/norton1.jpg';
import norton2 from 'routes/Home/Norton/norton2.jpg';
import norton4 from 'routes/Home/Norton/norton4.jpg';
import NortonImage from 'routes/Home/Norton/norton-scene-bg.jpg';
import NortonTLGImage from 'routes/Home/Norton/norton-scene-bg-tlg.jpg';
import NortonMLGImage from 'routes/Home/Norton/norton-scene-bg-mlg.jpg';
import NortonMobileImage from 'routes/Home/Norton/norton-scene-bg-mobile.jpg';

// yumavore images
import yumavore1 from 'routes/Home/Yumavore/yumavore1.jpg';
import yumavore2 from 'routes/Home/Yumavore/yumavore2.jpg';
import yumavore3 from 'routes/Home/Yumavore/yumavore3.jpg';
import yumavore4 from 'routes/Home/Yumavore/yumavore4.jpg';
import yumavore5 from 'routes/Home/Yumavore/yumavore5.jpg';
import yumavore6 from 'routes/Home/Yumavore/yumavore6.jpg';
import YumavoreImage from 'routes/Home/Yumavore/yumavore-scene-bg.jpg';
import YumavoreTLGImage from 'routes/Home/Yumavore/yumavore-scene-bg-tlg.jpg';
import YumavoreMLGImage from 'routes/Home/Yumavore/yumavore-scene-bg-mlg.jpg';
import YumavoreMobileImage from 'routes/Home/Yumavore/yumavore-scene-bg-mobile.jpg';

// nexus images
import nexus1 from 'routes/Home/Nexus/nexus1.jpg';
import nexus2 from 'routes/Home/Nexus/nexus2.jpg';
import nexus3 from 'routes/Home/Nexus/nexus3.jpg';
import nexus4 from 'routes/Home/Nexus/nexus4.jpg';
import NexusImage from 'routes/Home/Nexus/nexus-scene-bg.jpg';
import NexusTLGImage from 'routes/Home/Nexus/nexus-scene-bg-tlg.jpg';
import NexusMLGImage from 'routes/Home/Nexus/nexus-scene-bg-mlg.jpg';
import NexusMobileImage from 'routes/Home/Nexus/nexus-scene-bg-mobile.jpg';

// five images
import five1 from 'routes/Home/Five/five1.jpg';
import five2 from 'routes/Home/Five/five2.jpg';
import five3 from 'routes/Home/Five/five3.jpg';
import FiveImage from 'routes/Home/Five/five-scene-bg.jpg';
import FiveTLGImage from 'routes/Home/Five/five-scene-bg-tlg.jpg';
import FiveMLGImage from 'routes/Home/Five/five-scene-bg-mlg.jpg';
import FiveMobileImage from 'routes/Home/Five/five-scene-bg-mobile.jpg';

export const caseStudies = [
  // Norton Antivirus
  {
    id: 'norton',
    name: 'Norton Antivirus',
    heading: 'We were chosen by Symantec to design a cloud-based solution which allows customers to discover, buy and manage the entire suite of Norton products.',
    content: [
      {
        img: norton1,
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'All your protected devices are connected in a single, simple interface.'
          }
        ]
      },
      {
        img: norton2,
        copy: [
          {
            classes: 'casestudy__text typ--h3 pb7',
            text: 'One central interface gives users access to Norton’s entire product lineup with one-click installation.'
          },
          {
            classes: 'casestudy__text typ--h3',
            text: 'Discover and deploy Norton on all your connected devices, from anywhere.'
          }
        ]
      },
      {
        img: norton4,
        copy: [
          {
            classes: 'casestudy__text typ--h4',
            text: 'Winner of a 2012 Communicator Award and shortlisted for a 2012 Design Week Award. Norton employees can easily explore patterns in critical data driving the business with one touch.'
          }
        ]
      }
    ],
    homepageImage: NortonImage,
    homepageTLGImage: NortonTLGImage,
    homepageMLGImage: NortonMLGImage,
    homepageMobileImage: NortonMobileImage,
    imageAlt: 'Norton creative design',
    caption: ['A single interface', 'for all things Norton'],
    anchor: true
  },

  // Yumavore
  {
    id: 'yumavore',
    name: 'Yumavore',
    heading: 'Working with celebrity chef Tyler Florence, we designed a publishing platform that allows anyone to create and share beautiful recipes with the world.',
    content: [
      {
        img: yumavore1,
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'We reimagined the recipe format for mobile devices, showing the ingredients you need for each step.'
          },
          {
            classes: 'btn btn--ghost mt5 typ--yumavore',
            text: 'download the app',
            url: 'https://itunes.apple.com/us/app/yumavore/id1043281685?mt=8:'
          }
        ]
      },
      {
        img: yumavore2,
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'Capture photos, choose ingredients, and format your recipe with a simple drag and drop.'
          }
        ]
      },
      {
        img: yumavore3,
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'Yumavore makes shopping easy by collecting multiple recipes into an intelligent list which can be viewed by store aisle.'
          }
        ]
      },
      {
        img: yumavore4,
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'Redshift also designed Yumavore’s logo and visual identity.'
          }
        ]
      },
      {
        pad: false,
        copy: [{ src: yumavore5 }]
      },
      {
        copy: [{ src: yumavore6 }]
      }
    ],
    homepageImage: YumavoreImage,
    homepageTLGImage: YumavoreTLGImage,
    homepageMLGImage: YumavoreMLGImage,
    homepageMobileImage: YumavoreMobileImage,
    imageAlt: 'Yumavore app design',
    caption: ['A new way to create', 'and share recipes']
  },

  // Google Nexus
  {
    id: 'nexus',
    name: 'Google Nexus',
    heading: 'We partnered with Autofuss and Unit9 to redesign the product site for the Google Nexus family of phones and tablets.',
    content: [
      {
        img: nexus1,
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'Instead of focusing on product specs, we designed rich, interactive moments which let customers experience new features, and understand how the device will help them in their real life.'
          }
        ]
      },
      {
        img: nexus2,
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'To highlight the Nexus 7’s HDR camera, we let users take before and after photos which show the technology at work. It’s the next best thing to holding the device in your hand.'
          }
        ]
      },
      {
        img: nexus3,
        classes: 'mb10'
      },
      {
        img: nexus4,
        classes: 'mt5'
      }
    ],
    homepageImage: NexusImage,
    homepageTLGImage: NexusTLGImage,
    homepageMLGImage: NexusMLGImage,
    homepageMobileImage: NexusMobileImage,
    imageAlt: 'Nexus product website',
    caption: ['A new home', 'for Google Nexus']
  },

  // Five
  {
    id: 'five',
    name: 'Five',
    heading: 'We develop our own products, too. FIVE lets you share your favorite things in a simple and catchy format – the top five list.',
    content: [
      {
        img: five1,
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'A fun, interesting twist on the social media platform. Our gesture-driven interface puts the content front and center.'
          }
        ]
      },
      {
        img: five2,
        copy: [
          {
            classes: 'casestudy__text typ--h3',
            text: 'Creating a FIVE is easy too. The app seamlessly integrates with Google Images to bring your lists to life.'
          },
          {
            classes: 'btn btn--ghost mt5 mb10 typ--five',
            text: 'coming soon'
          },
          {
            classes: 'casestudy__text typ--h3 mt10',
            text: 'You can share, comment, or even add suggestions to other lists.'
          }
        ]
      },
      {
        img: five3,
        copy: [
          {
            classes: 'casestudy__text typ--h3 pb7',
            text: 'Heavy prototyping and testing was done throughout the process.'
          },
          {
            classes: 'casestudy__text typ--h3 pb8',
            text: 'Look for it in the App Store starting September 2016'
          }
        ]
      }
    ],
    homepageImage: FiveImage,
    homepageTLGImage: FiveTLGImage,
    homepageMLGImage: FiveMLGImage,
    homepageMobileImage: FiveMobileImage,
    imageAlt: 'Redshift Five App',
    caption: ['Share and compare', 'your top 5 of anything']
  }
];
