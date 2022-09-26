import React from "react"

import Layout from "../../components/layout"
import WorkSection from "../../components/WorkSection"
import SEO from "../../components/seo"
import imageOne from "../../images/work/spur-1.png"
import imageTwo from "../../images/work/spur-2.png"
import imageThree from "../../images/work/spur-3.png"

import cakeImg from "../../images/cakephp-logo.png"
import vueImg from "../../images/vue.png"
import jsImg from "../../images/javascript.png"
import scssImg from "../../images/scss.png"
import mysqlImg from "../../images/mysql.png"

// Components
import Footer from "../../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Kerwin | Spur Project" />
    <WorkSection
      title="Spur Steak Ranches Website Build & Maintenance"
      sectionContent={[
        {
          para: `
            <div class="text-center w-100">
            <a href="https://spursteakranches.com" rel="nofollow" target="_blank">The Website</a>
            <br>
            <strong>Project Start Date:</strong> March 2020
            <br>
            <strong>Go-Live Date:</strong> June 2020
            </div>
            `,
        },
        {
          para: `
            <strong>What's the website?</strong>
            <br><br>
            A custom CMS system built from scratch using CakePHP with an admin dashboard that allows admin users to edit content on the site. 
            It's a multi-page site with support for localization, and content CRUD for nearly all content 
            (including images, videos, text etc.). The site also interfaces with an external api for certain content.
            <br><br>
            `,
          imageSrc: imageOne,
        },
        {
          para: `
            <strong>What was my contribution?</strong>
            <br><br>
              As a fullstack web developer at Lima Bean, I was responsible for the frontend components, 
              and much of the backend build for the spur website rebuild.
              <br>
              <br>
              The groundwork for the project was started by a senior developer on the team 
              (including adding the initial database tables, some file/folder structuring, and a project skeleton). 
              I then took over the project, working on building frontend layouts from Invision designs, and backend 
              functionality using Cakephp's MVC architecture.
            `,
          imageSrc: imageTwo,
        },
        {
          para: `
            <strong>Some Interesting Aspects of the Build</strong>
            <br><br>
            <strong>Localization</strong><br>
            The website needed to have language & country localization support, since the client operates in over 15 countries worldwide. This was added using Cakephp's i18n library to track and set the locale, and database fields to keep track of which content to display for each country. The i18n content needed to live in the database because it had to be dynamic (the client wanted to be able to update most of the content on the site themselves).
            <br><br>
            <strong>API Integration</strong><br>
            The client had an external api that I needed to interface with to get information about menu items, stores, etc. I needed to add support for regularly syncing this data from the api to our database.
            `,
          imageSrc: imageThree,
        },
        {
          para: `
          <div class="text-center w-100 mb-1">
            <strong>Main Tech</strong>
          </div>
          <div class="flex justify-between logos">
            <div><img alt="cakePHP" width="50" src="${cakeImg}"></div>
            <div><img alt="VueJs" width="50" src="${vueImg}"></div>
            <div><img alt="JavaScript" width="50" src="${jsImg}"></div>
            <div><img alt="SCSS" width="50" src="${scssImg}"></div>
            <div><img alt="MySQL" width="50" src="${mysqlImg}"></div>
          </div>
          `
        },
      ]}
    ></WorkSection>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
