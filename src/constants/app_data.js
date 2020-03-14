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
           "A social media application that features in-app messaging, augmented reality, event booking, text and media posts among users, and geo search.",
           "assets/apps/neuwly/neuwly_1.webp",
           [
             "Firebase",
             "Kotlin",
             "Algolia",
             "ARCore",
             "Room",
             "Dagger",
             "RxJava",
             "Google Places API",
             "Android Jetpack"
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
           "A kiosk and management software for photographers. Built while working for Lattice Studios. Made with Kotlin, Firebase, and Room using MVVM design architecture.",
           "assets/apps/teampics/teampics_1.webp",
           ["Firebase", "Kotlin", "Algolia"],
           "https://play.google.com/store/apps/details?id=com.latticestudios.teampicsmobile",
           "2019",
           "4 months",
           "Lattice Studios",
           "https://www.latticestudios.com/"
         ),
         new PortfolioItem(
           "Jumpbox",
           "Cross Platform",
           "",
           "assets/image_01.png",
           ["Firebase", "Kotlin", "Algolia"],
           "",
           "2019",
           "4 months",
           "CS 441 - Computer Networks \nUniversity Of Calgary",
           "https://www.ucalgary.ca/"
         ),
         new PortfolioItem(
           "Devs Social",
           "Android App",
           "A social media platform that provides networking and collaborative space for developers. Features include in-app messaging, personalized portfolio, notifications, projects showcase, and more.",
           "assets/image_02.jpg",
           ["Firebase", "Kotlin", "Algolia"],
           "https://www.devssocial.com/",
           "2017",
           "2 years",
           "Personal Project",
           ""
         ),
         new PortfolioItem(
           "Fitness TACKLer",
           "Android App",
           "A fitness app geared towards power lifting. Developed with Xamarin and C#, built with emphasis on UI and User Experience design.",
           "assets/image_03.jpg",
           ["Firebase", "Kotlin", "Algolia"],
           "",
           "2018",
           "4 months",
           "CS 481 - Human Computers Interaction \nUniversity Of Calgary",
           "https://www.ucalgary.ca/"
         ),
         new PortfolioItem(
           "Cuiseek",
           "Android App",
           "Worked on several social media features for the app using Java and Firebase",
           "assets/image_04.jpg",
           ["Firebase", "Kotlin", "Algolia"],
           "https://play.google.com/store/apps/details?id=com.cuiseek.android",
           "2018",
           "4 months",
           "Personal Internship @ Cuiseek",
           "http://cuiseek.com/"
         ),
         new PortfolioItem(
           "Mafia",
           "Cross Platform",
           "A java application based on the popular Mafia party game.",
           "assets/image_04.jpg",
           ["Firebase", "Kotlin", "Algolia"],
           "",
           "2017",
           "6 months",
           "Personal Project",
           ""
         ),
         new PortfolioItem(
           "Localodge",
           "Android App",
           "A local classifieds app",
           "assets/image_04.jpg",
           ["Firebase", "Kotlin", "Algolia"],
           "",
           "2019",
           "Ongoing",
           "Personal Project",
           ""
         ),
         new PortfolioItem(
           "MEDPass",
           "Web Application",
           "An appointment scheduling system built for practitioners, patients, and admins. Developed with CSS, HTML, PHP and MySQL.",
           "assets/apps/neuwly/neuwly_1.webp",
           ["HTML", "CSS", "AJAX", "PHP", "MySQL"],
           "https://github.com/HiroOfHyrule/MedPASS_Team4",
           "2018",
           "4 months",
           "CS 471 - Data Base Management Systems \nUniversity Of Calgary",
           ""
         )
       ];