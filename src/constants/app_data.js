import neuwly1 from "../images/Neuwly_group.png";
import teampics from "../images/Teampics_group.png";
import cuiseek from "../images/Cuiseek_group.png";
import jumpbox from "../images/Jumpbox_group.png";
import medpass from "../images/Medpass_group.png";
import mafia from "../images/Mafia_group.png";
import localodge from "../images/Localodge_group.png";
import devssocial from "../images/DevsSocial_group.png";
import fitnessTackler from "../images/FitnessTackler_group.png";
import ne2chat from "../images/ne2chat_group.png";

import mobileTeampics from "../images/mobile_teampics.png";
import mobileJumpbox from "../images/mobile_jumpbox.png";
import mobileMedpass from "../images/mobile_medpass.png";
import mobileNeuwly from "../images/mobile_neuwly.png";
import mobileDevssocial from "../images/mobile_devssocial.png";
import mobileLocalodge from "../images/mobile_localodge.png";
import mobileCuiseek from "../images/mobile_cuiseek.png";
import mobileMafia from "../images/mobile_mafia.png";
import mobileFitnesstackler from "../images/mobile_fitnesstackler.png";
import mobileNe2Chat from "../images/mobile_ne2chat.png";

export const linkedInUrl = "https://www.linkedin.com/in/christilyn-arjona/";
export const githubUrl = "https://github.com/xtilyn";
export const stackOverflowUrl =
  "https://stackoverflow.com/users/7881446/christilyn";
export const sourceCodeUrl = "https://github.com/xtilyn/portfolio-react";

export const description =
  "A Software Developer currently specializing in Native Android App Development, UI/UX Design, with experience in Full Stack Web Development.";

export const about1 =
  "Likes working with native android app development (primarily with Kotlin). Experience in deploying serverless apps with Google Cloud and Firebase. Also familiar with UI/UX design and full stack web development.";

export const about2 = 
  "Interested in the mobile development world and have played with various cross-platform technologies such as Flutter, Xamarin, and React Native."

export const about3 =
  "Love to work on ambitious projects, learn new technologies, design and implement mobile applications."

class PortfolioItem {
  constructor(
    title,
    type,
    description,
    imagePath,
    tags,
    url,

    year,
    projectLength,
    associatedWith,
    companyUrl,

    mobileImagePath
  ) {
    this.title = title;
    this.type = type;
    this.description = description;
    this.imagePath = imagePath;
    this.tags = tags;
    this.url = url;

    this.year = year;
    this.projectLength = projectLength;
    this.associatedWith = associatedWith;
    this.companyUrl = companyUrl;

    this.mobileImagePath = mobileImagePath;
  }
}

export const portfolioItems = [
  new PortfolioItem(
    "Neuwly",
    "Android App",
    "A social media application that features realtime chat messaging, augmented reality, event booking, instant search, text and multi media posts with geo capabilities.",
    neuwly1,
    [
      "Android App",
      "Web App",
      "Firebase",
      "Kotlin",
      "ReactJS",
      "Algolia",
      "ARCore",
      "Room",
      "Retrofit",
      "Dagger",
      "OnSched",
      "RxJava",
      "Stripe",
      "Google Places API",
      "Android Jetpack",
      "MVVM",
    ],
    "https://play.google.com/store/apps/details?id=com.latticestudios.neuwly",
    "2019",
    "7 months",
    "Lattice Studios",
    "https://www.latticestudios.com/",
    mobileNeuwly
  ),
  new PortfolioItem(
    "TeamPics",
    "Android App",
    "A kiosk and management software for photographers. You can organize your picture subjects, allow users to purchase photo packages, and manage your photography events all in one app.",
    teampics,
    [
      "Android App",
      "Firebase",
      "Kotlin",
      "Stripe",
      "Room",
      "Android Jetpack",
      "MVVM",
    ],
    "https://play.google.com/store/apps/details?id=com.latticestudios.teampicsmobile",
    "2019",
    "4 months",
    "Lattice Studios",
    "https://www.latticestudios.com/",
    mobileTeampics
  ),
  new PortfolioItem(
    "Devs Social",
    "Android App",
    "A social media platform that provides networking and collaborative space for developers. Features include in-app messaging, personalized portfolio, notifications, projects showcase, and more.",
    devssocial,
    [
      "Android App",
      "Landing Page Website",
      "Firebase",
      "Java",
      "ButterKnife",
      "Realm",
      "ReactJS",
      "ES6",
    ],
    "https://www.devssocial.com/",
    "2017",
    "2 years",
    "Personal Project",
    "",
    mobileDevssocial
  ),
  new PortfolioItem(
    "Cuiseek",
    "Android App",
    "A food and dining companion to help you discover new places around you. You can filter results according to your preferences, view restaurant details and reviews, and choose a place to stop and eat.",
    cuiseek,
    ["Android App", "Firebase", "Java", "Material Design", "Google Places API"],
    "https://play.google.com/store/apps/details?id=com.cuiseek.android",
    "2018",
    "4 months",
    "Personal Internship @ Cuiseek",
    "http://cuiseek.com/",
    mobileCuiseek
  ),
  new PortfolioItem(
    "NE2 Chat",
    "Android & iOS",
    "Powered by open source chat platform Rocket.Chat, NE2 Chat is a communication platform built for NE2 Group, featuring real-time voice, video, and text messages.",
    ne2chat,
    ["Android App", "iOS App", "MongoDB", "Jitsi Meet", "Rocket.Chat"],
    "https://play.google.com/store/apps/details?id=chat.rocket.ne2.reactnative",
    "2020",
    "Ongoing",
    "NE2 Group",
    "https://www.ne2group.com/",
    mobileNe2Chat
  ),
  new PortfolioItem(
    "MEDPass",
    "Web Application",
    "A Computer Science project implementation of an appointment scheduling system built for practitioners, patients, and admins. Developed with CSS, HTML, PHP and MySQL.",
    medpass,
    ["Web Application", "HTML", "CSS", "AJAX", "PHP", "MySQL"],
    "https://github.com/xtilyn/MedPASS_Team4",
    "2018",
    "4 months",
    "CS 471 - Data Base Management Systems \nUniversity Of Calgary",
    "",
    mobileMedpass
  ),
  new PortfolioItem(
    "Localodge",
    "Android App",
    "A simple local classifieds app made with Kotlin and Firebase. This project uses Elastic Search integrated using GCP, Stripe, and Google Pay for payment options.",
    localodge,
    [
      "Android App",
      "Firebase",
      "Kotlin",
      "Elastic Search",
      "Room",
      "RxJava",
      "MVVM",
      "Google Pay",
      "Stripe",
    ],
    "https://github.com/xtilyn/Localodge",
    "2019",
    "Ongoing",
    "Personal Project",
    "",
    mobileLocalodge
  ),
  new PortfolioItem(
    "Mafia",
    "Cross Platform",
    "A Computer Science project implementation of a java application based on the popular multi-player Mafia party game. Implemented using MVC architecture.",
    mafia,
    ["Desktop App", "Java", "JavaFx", "MVC"],
    "https://github.com/xtilyn/MafiaApplication",
    "2017",
    "6 months",
    "Personal Project",
    "",
    mobileMafia
  ),
  new PortfolioItem(
    "Fitness Tackler",
    "Android App",
    "A Computer Science project implementation of a fitness app geared towards power lifting. Developed with Xamarin and C#, built with emphasis on UI and User Experience design.",
    fitnessTackler,
    ["Android App", "C#", "Xamarin"],
    "https://github.com/Be-bo/FitnessTACKer",
    "2018",
    "4 months",
    "CS 481 - Human Computers Interaction \nUniversity Of Calgary",
    "https://www.ucalgary.ca/",
    mobileFitnesstackler
  ),
  new PortfolioItem(
    "Jumpbox",
    "Desktop App",
    "A Computer Science project implementation of a multiplayer drawing and guessing game implemented over TCP using client-server model.",
    jumpbox,
    ["Desktop App", "Java", "JavaFx"],
    "https://github.com/xtilyn/Jumpbox",
    "2019",
    "4 months",
    "CS 441 - Computer Networks \nUniversity Of Calgary",
    "https://www.ucalgary.ca/",
    mobileJumpbox
  ),
];

export const getTotalProjectsByType = (type) => {
  let count = 0;
  portfolioItems.forEach((portfolioItem) => {
    for (let i = 0; i < portfolioItem.tags.length; i++) {
      const tag = portfolioItem.tags[i];
      if (tag.toLowerCase().includes(type)) {
        count++;
        break;
      }
    };
  });
  return count;
}
