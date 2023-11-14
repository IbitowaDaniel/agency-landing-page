import { BannerThumb, DropBox, Google, Paypal, FeatureAward, FeatureGift, FeatureMarketplace, BusinessProfit, KnowledgeThumb, ClientThumb, SupportThumb } from "../assets";
import { FaFacebookF, FaFacebook, FaTwitter, FaInstagram, FaGithubAlt, FaDribbble, } from 'react-icons/fa';


export const Navigation = [
  { name: 'Home', path: "home" },
  { name: 'Features', path: 'features' },
  { name: 'Feedback', path: 'feedback' },
  { name: 'Support', path: 'support' },
];


export const SocialLinks = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    icon: <FaGithubAlt />,
  },
  {
    path: '/',
    icon: <FaDribbble />,
  },
];

export const SponsorsData = [
  {
    id: 1,
    path: '#',
    image: Paypal,
    title: 'paypal',
  },
  {
    id: 2,
    path: '#',
    image: Google,
    title: 'google',
  },
  {
    id: 3,
    path: '#',
    image: DropBox,
    title: 'dropbox',
  },
];

export const FeaturesData = [
  {
    heading: 'Go Beyond unlimited features',
    headingText: 'Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format.',
    items: [
      {
        id: 1,
        img: FeatureMarketplace,
        title: 'Trusted marketplace',
        text: 'Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.',
      },
      {
        id: 2,
        img: FeatureGift,
        title: 'Customer Gift vouchers',
        text: 'Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.',
      },
      {
        id: 2,
        img: FeatureAward,
        title: 'Multiple Awards wins',
        text: 'Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.',
      },
    ]
  }
];

export const BoostData = [
  {
    heading: 'We help you to boost your business profitable with our talent marketer',
    headingText: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
    lists: [
      {
        id: 1,
        text: 'Unlimited design possibility',
      },
      {
        id: 2,
        text: 'Completely responsive features',
      },
    ],
    btnText: 'Explore Details',
    img: BusinessProfit,
    altText: "Business Profit",
  },
];

export const CommitmentData = [
  {
    heading: 'We are committed to using fact-based knowledge to our customers',
    headingText: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.',
    btnText: 'Explore Details',
    img: KnowledgeThumb,
    altText: "Knowledge Thumb"
  },
];

export const UsersData = [
  {
    heading: 'More than thousand of user we have worldwide with happy feedback',
    headingText: 'Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format.',
    img: ClientThumb,
    altText: "Client Thumb",
  }
];

export const NumberedFunctionsData = [
  {
    heading: "Let's meet how its work",
    headingText: 'Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format.',
    items: [
      {
        id: 1,
        title: 'Connect with support',
        text: 'Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.',
      },
      {
        id: 2,
        title: 'Explain you business idea',
        text: 'Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.',
      },
      {
        id: 3,
        title: 'Be partner & earn money',
        text: 'Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.',
      },
    ],
  },
];

export const SupportData = [
  {
    heading: 'Meet our support team who always work hardly behind the scenes',
    headingText: 'Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format.',
    img: SupportThumb,
    altText: "Support Team Thumb",
  }
];

export const FooterData = [
  {
    id: 1,
    header: 'About Us',
    items: [
      {
        path: '/',
        label: 'Support Center',
      },
      {
        path: '/',
        label: 'Customer Support',
      },
      {
        path: '/',
        label: 'About Us',
      },
      {
        path: '/',
        label: 'Copyright',
      },
    ],
  },
  {
    id: 2,
    header: 'Our Information',
    items: [
      {
        path: '/',
        label: 'Return Policy ',
      },
      {
        path: '/',
        label: 'Privacy Policy',
      },
      {
        path: '/',
        label: 'Terms & Conditions',
      },
      {
        path: '/',
        label: 'Site Map',
      },
    ],
  },
  {
    id: 3,
    header: 'My Account',
    items: [
      {
        path: '/',
        label: 'Press inquiries',
      },
      {
        path: '/',
        label: 'Social media ',
      },
      {
        path: '/',
        label: 'directories',
      },
      {
        path: '/',
        label: 'Images & B-roll',
      },
    ],
  },
  {
    id: 4,
    header: 'Contact',
    items: [
      {
        path: '/',
        label: 'Facebook',
        media: <FaFacebook />,
        btnColor: 'text-[#3B5998]',
      },
      {
        path: '/',
        label: 'Twitter',
        media: <FaTwitter />,
        btnColor: "text-[#55ACEE]",
      },
      {
        path: '/',
        label: 'Instagram',
        media: <FaInstagram />,
        btnColor: 'text-[#e4405f]',
      },
      {
        path: '/',
        label: 'Dribbble',
        media: <FaDribbble />,
        btnColor: 'text-[#E74D89]',
      },
    ],
  }
];
