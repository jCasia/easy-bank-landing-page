import apiIcon from './images/icon-api.svg';
import budgetingIcon from './images/icon-budgeting.svg';
import onboardingIcon from './images/icon-onboarding.svg';
import onlineIcon from './images/icon-online.svg';

import currency from './images/image-currency.jpg';
import restaurant from './images/image-restaurant.jpg';
import plane from './images/image-plane.jpg';
import confetti from './images/image-confetti.jpg';

import facebook from './images/icon-facebook.svg';
import youtube from './images/icon-youtube.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
import instagram from './images/icon-instagram.svg';

export const servicesData = [
  {
    heading: 'Online Banking',
    text: 'Our modern web and mobile application allow you to keep track of your inances wherever you are in the world.',
    image: onlineIcon,
  },
  {
    heading: 'Simple Budgeting',
    text: "See exactly where your money goes each month. Receive notification when you're close to your hitting limits.",
    image: budgetingIcon,
  },
  {
    heading: 'Fast Onboarding',
    text: "We don't do branches. Open your account in minutes and start taking control of your finances right away.",
    image: onboardingIcon,
  },
  {
    heading: 'Open API',
    text: 'Manage your savings, investments,pensions, and much more from one account. TRacking your money has never been easier.',
    image: apiIcon,
  },
];

export const articleData = [
  {
    image: currency,
    heading: 'Recieve money in any currency with no fees',
    author: 'Claire Robinson',
    text: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
  },
  {
    image: restaurant,
    heading: 'Treat yourself without worrying abou money',
    author: 'Wilson Hutton',
    text: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...',
  },
  {
    image: plane,
    heading: 'Take your Easybank card wherever you go',
    author: 'Wilson Hutton',
    text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
  },
  {
    image: confetti,
    heading: 'Our invite-only Beta accounts are now live',
    author: 'Claire Robinson',
    text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
  },
];

export const links = ['Home', 'About', 'Contact', 'Blog', 'Careers'];
export const footerLinks = [
  'About Us',
  'Contact',
  'Blog',
  'Careers',
  'Support',
  'Privacy Policy',
];
export const socials = [facebook, youtube, twitter, pinterest, instagram];
