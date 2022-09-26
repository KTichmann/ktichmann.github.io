import React from "react"

import Layout from "../../components/layout"
import WorkSection from "../../components/WorkSection"
import SEO from "../../components/seo"
import imageOne from "../../images/work/outdoor-3.png"
import imageTwo from "../../images/work/outdoor-2.png"
import imageThree from "../../images/work/outdoor-1.png"

import cakeImg from "../../images/cakephp-logo.png"
import vueImg from "../../images/vue.png"
import jsImg from "../../images/javascript.png"
import scssImg from "../../images/scss.png"
import mysqlImg from "../../images/mysql.png"

// Components
import Footer from "../../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Kerwin | Outdoor Warehouse Project" />
    <WorkSection
      title="Outdoor Warehouse Website Build & Maintenance"
      sectionContent={[
        {
          para: `
            <div class="text-center w-100">
            <a href="https://www.outdoorwarehouse.co.za" rel="nofollow" target="_blank">The Website</a>
            <br>
            <strong>Project Start Date:</strong> June 2020
            <br>
            <strong>Go-Live Date:</strong> October 2020
            </div>
            `,
        },
        {
          para: `
            <strong>What's the website?</strong>
            <br><br>
            A custom CMS built using the company's CakePHP e-commerce skeleton as a starting point.
            The main components of the site include product view and listing pages, user and auth management, a checkout flow, and blog pages.
            <br><br>
            `,
          imageSrc: imageOne,
        },
        {
          para: `
            <strong>What was my contribution?</strong>
            <br><br>
            I worked with a team of developers (some more senior, and some juniors) to re-build the website. 
            I was tasked with both backend and frontend functionality, including styling web pages based off of 
            Invision designs, handling checkout flows, and communicating with the client's ERP software to sync 
            products and send orders.
            `,
          imageSrc: imageTwo,
        },
        {
          para: `
            <strong>Some Interesting Aspects of the Build</strong>
            <br><br>
            <strong>Data Import & Export</strong><br>
            One of the major challenges of the rebuild was interfacing with the client's ERP software through an XML interface.
            <br><br> 
            With limited documentation and few external resources for figuring out the API, I was forced to be resourceful, 
            and look through the previous implementation, meet with project managers who understood the system, and look through the data.
            <br><br>
            Stock management was another important aspect of the build that involved ensuring that products and skus were synced 
            correctly, and that all orders were sent to the API. Effective error logging, and alerts for when something went wrong were 
            integral in ensuring that any errors with importing or exporting data were picked up quickly.
            <br><br>
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
