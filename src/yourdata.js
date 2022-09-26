// Skills Icons

import cakephp from "./images/cakephp.png"
import docker from "./images/docker.png"
import flutter from "./images/flutter.jpg"
import gcp from "./images/gcp.png"
import vue from "./images/vue.png"
import scss from "./images/scss.png"
import git from "./images/git.png"
import jira from "./images/jira.png"
import elasticsearch from "./images/elasticsearch.png"
import mysql from "./images/mysql.png"

// Notable Work Images
import sportsmansImage from "./images/sportsmans.png"
import outdoorImage from "./images/outdoor.png"
import spurImage from "./images/spur.png"

// About / Contact Images
import me from "./images/me.jpg"
import linkedin from "./images/linkedin.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Kerwin",
  headerTagline: [
    //Line 1 For Header
    "A Full-Stack Web",
    //Line 2 For Header
    "and App Developer",
    // Line 3 For Header
    "in Cape Town"
  ],
  //   Header Paragraph
  headerParagraph:
    "I'm a fullstack web and app developer based in Cape Town with 4 years of experience building scalable, functional, and beautiful e-commerce websites and apps. As a self-taught developer, I'm always seeking to improve my knowledge and skills.",
  //Contact Email
  contactEmail: "ktichmann@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Spur Steak Ranches",
      para: "Built out the majority of frontend functionality for the new Spur website, splicing pages and adding custom CMS functionality.",
      imageSrc: spurImage,
      url: "/work/spur",
    },
    {
      title: "Outdoor Warehouse",
      para: "I was one of the lead developers building out frontend and backend functionality for the Outdoor Warehouse website, including integrating with the ERP system.",
      imageSrc: outdoorImage, //Project URL - Add Your Project Url Here
      url: "/work/outdoor",
    },
    {
      title: "Sportsman's Warehouse",
      para: "I was one of three lead developers for the Sportsman's Warehouse rebuild, managing both frontend and backend functionality. I've also worked on the new app build.",
      imageSrc: sportsmansImage,
      //Project URL - Add Your Project Url Here
      url: "/work/sportsmans",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne: "I'm a fullstack web developer building scalable websites, apps, and APIs. At work, I work mostly with PHP (CakePHP) and Vue for website development, and Flutter for mobile development.",
  
  aboutParaTwo: "As a self-taught developer I'm always looking to improve my knowledge and skills through taking online courses and learning new technologies. My interest in programming began when I came across CS50x,Harvard’s Introduction to Computer Science on edX. This course gave me an intriguing overview of computer science and, after completing it, I moved on to other courses, learning as much as I could about programming in my free time.",

  aboutParaThree: "In my current position, I work on building scalable, dynamic websites that see thousands of visits a day. I've recently begun working on Flutter (mobile app) projects at work, building both the app functionality, and the backend API that the app connects to.",

  aboutImage: me,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: cakephp,
      para: "CakePHP",
    },
    {
      img: vue,
      para: "Vue.js",
    },
    {
      img: flutter,
      para: "Flutter",
    },
    {
      img: scss,
      para: "SCSS",
    },
    {
      img: gcp,
      para: "Google Cloud Platform",
    },
    {
      img: docker,
      para: "Docker",
    },
    {
      img: git,
      para: "Git",
    },
    {
      img: jira,
      para: "Jira",
    },
    {
      img: elasticsearch,
      para: "Elasticsearch",
    },
    {
      img: mysql,
      para: "MySQL",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   ""
   // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Send me an email at:",
  social: [
    { img: linkedin, url: "https://www.linkedin.com/in/kerwin-tichmann/" },
  ],

  // End Contact Section ---------------
}
