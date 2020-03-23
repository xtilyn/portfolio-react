import neuwly1 from "../images/Neuwly_group.png";
import teampics from "../images/Teampics_group.png";
import cuiseek from "../images/Cuiseek_group.png";
import jumpbox from "../images/Jumpbox_group.png";
import medpass from "../images/Medpass_group.png";
import mafia from "../images/Mafia_group.png";
import localodge from "../images/Localodge_group.png";
import devssocial from "../images/DevsSocial_group.png";

export const linkedInUrl = "https://www.linkedin.com/in/christilyn-arjona/";
export const githubUrl = "https://github.com/xtilyn";
export const stackOverflowUrl = "https://stackoverflow.com/users/7881446/christilyn";

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
        companyUrl
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
             "Firebase",
             "Kotlin",
             "Algolia",
             "ARCore",
             "Room",
             "Retrofit",
             "Dagger",
             "OnSched",
             "REST",
             "RxJava",
             "Stripe",
             "Google Places API",
             "Android Jetpack",
             "MVVM"
           ],
           "https://play.google.com/store/apps/details?id=com.latticestudios.neuwly",
           "2019",
           "7 months",
           "Lattice Studios",
           "https://www.latticestudios.com/"
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
             "MVVM"
           ],
           "https://play.google.com/store/apps/details?id=com.latticestudios.teampicsmobile",
           "2019",
           "4 months",
           "Lattice Studios",
           "https://www.latticestudios.com/"
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
             "ES6"
           ],
           "https://www.devssocial.com/",
           "2017",
           "2 years",
           "Personal Project",
           ""
         ),
         new PortfolioItem(
           "Cuiseek",
           "Android App",
           "A food and dining companion to help you discover new places around you. You can filter results according to your preferences, view restaurant details and reviews, and choose a place to stop and eat.",
           cuiseek,
           ["Android App", "Firebase", "Java", "Material Design"],
           "https://play.google.com/store/apps/details?id=com.cuiseek.android",
           "2018",
           "4 months",
           "Personal Internship @ Cuiseek",
           "http://cuiseek.com/"
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
           ""
         ),
         new PortfolioItem(
           "Localodge",
           "Android App",
           "An android UI template for a local classifieds app. This is an ongoing project that hopes to provide a back-bone for local classifieds applications that uses Kotlin and Firebase.",
           localodge,
           [
             "Android App",
             "Firebase",
             "Kotlin",
             "Elastic Search",
             "Room",
             "RxJava",
             "MVVM"
           ],
           "",
           "2019",
           "Ongoing",
           "Personal Project",
           ""
         ),
         new PortfolioItem(
           "Mafia",
           "Cross Platform",
           "A java application based on the popular Mafia party game. Implemented using MVC architecture.",
           mafia,
           ["Desktop App", "Java", "JavaFx", "MVC"],
           "https://github.com/xtilyn/MafiaApplication",
           "2017",
           "6 months",
           "Personal Project",
           ""
         ),
         new PortfolioItem(
           "Fitness TACKLer",
           "Android App",
           "A Computer Science project implementation of a fitness app geared towards power lifting. Developed with Xamarin and C#, built with emphasis on UI and User Experience design.",
           "assets/image_03.jpg",
           ["Android App", "C#", "Xamarin"],
           "https://github.com/Be-bo/FitnessTACKer",
           "2018",
           "4 months",
           "CS 481 - Human Computers Interaction \nUniversity Of Calgary",
           "https://www.ucalgary.ca/"
         ),
         new PortfolioItem(
           "Jumpbox",
           "Desktop App",
           "A Computer Science project implementation of a multiplayer drawing and guessing game implemented using Transmission Control Protocol in which players are connected through single-server model.",
           jumpbox,
           ["Desktop App", "Java", "JavaFx", "Socket Programming", "TCP/IP"],
           "https://github.com/xtilyn/Jumpbox",
           "2019",
           "4 months",
           "CS 441 - Computer Networks \nUniversity Of Calgary",
           "https://www.ucalgary.ca/"
         )
       ];