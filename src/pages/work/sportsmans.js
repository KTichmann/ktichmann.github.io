import React from "react"

import Layout from "../../components/layout"
import WorkSection from "../../components/WorkSection"
import SEO from "../../components/seo"
import imageOne from "../../images/work/sportsmans-3.png"
import imageTwo from "../../images/work/sportsmans-2.png"
import imageThree from "../../images/work/sportsmans-4.png"

import cakeImg from "../../images/cakephp-logo.png"
import vueImg from "../../images/vue.png"
import jsImg from "../../images/javascript.png"
import scssImg from "../../images/scss.png"
import mysqlImg from "../../images/mysql.png"

// Components
import Footer from "../../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Kerwin | Sportsman's Warehouse Project" />
    <WorkSection
      title="Sportsman's Warehouse Website Build & Maintenance"
      sectionContent={[
        {
          para: `
            <div class="text-center w-100">
            <a href="https://sportsmanswarehouse.co.za" rel="nofollow" target="_blank">The Website</a>
            <br>
            <strong>Project Start Date:</strong> October 2020
            <br>
            <strong>Go-Live Date:</strong> March 2021
            </div>
            `,
        },
        {
          para: `
            <strong>What's the website?</strong>
            <br><br>
            A custom CMS built using the company's CakePHP skeleton for e-commerce websites as a starting point. The site has many facets including:
            <ul>
              <li>
                Thousands of products.
              </li>
              <li>
                A checkout flow interfacing with PayU, IPay and Tutuka for payment.
              </li>
              <li>
                Complex deals and promotions, including combo deals.
              </li>
              <li>
                Gift Card Purchasing and Redemption.
              </li>
              <li>
                Interfacing with multiple third-party API's including Nosto, Google Analytics, Facebook Analytics, and Yotpo.
              </li>
              <li>
                Blogs and Expert Advice articles with adjustable layouts.
              </li>
              <li>
                Custom landing pages for brands and categories that allow superusers to create landing pages at will.
              </li>
            </ul>
            `,
          imageSrc: imageOne,
        },
        {
          para: `
            <strong>What was my contribution?</strong>
            <br><br>
            I worked with a team of mostly junior developers to re-build the e-commerce site.
            <br><br>
            I was tasked with creating the db structure, interfacing with the client's ERP, 
            and styling multiple frontend components and pages. The project also required me to interface 
            with many external APIs and payment providers.
            <br><br>
            After the project was live, I continued to provide maintenance support and add additional features requested by the client.
            `,
          imageSrc: imageTwo,
        },
        {
          para: `
            <strong>Some Interesting Aspects of the Build</strong>
            <br>
            <strong>Scalability</strong>
            <br>
            One of my main challenges for this project was considering scalability, and trying to write code that was as performant as possible.
            <br><br>
            The website has thousands of products that need to be synced and updated regularly, as well as hundreds of orders a day to be exported to the external order managing system. 
            It was important to organize this so that importing and exporting data would not be slow. 
            I had to take steps to improve and optimize my code, including reducing the number of database queries on 
            import, and removing or reworking unnecessary sections that were slowing down the import.
            <br><br>
            <strong>Kiosk</strong><br>
            I was also involved in the kiosk build for swh stores. This included building a subsite to be used on kiosks in-store.
            <br><br>
            Since the subsite pulled product information from the same endpoint as the main site, it was built as an offshoot of the main site. The Kiosk, however, required a different checkout flow, styling, and order export data as well as new rules for product statuses, listings, and stock calculations.
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
