import React from "react";
// import ApplyNowArray from "./ApplyNowArray";
import styles from "./ApplyNow.module.css";
import { useLocation } from "react-router-dom";
import Paymentcard from "./Paymentcard";
import ApplyNowArray from "./ApplyNowArray";

const ApplyNow = ({ data }) => {
  const location = useLocation();
  const cardState = location.state.key;
  console.log("card", cardState);

  if (cardState == "0") {
    return (
      <>
        <div></div>



        <div className={styles.hero_benefits}>
          <div className={styles.content_row} row flex no-flex-sm>
            <div className={styles.content} col-lg-7>
              <h1>
                Amazon FBA Wholesale <br />
                In USA
              </h1>
              <div className={styles.duration} row>
                <div className={styles.img_user} col>
                  <img
                    // src="https://tinyjpg.com/images/social/website.jpg"
                    alt=""
                    className={styles.click}
                  />
                  <div>
                    <h3 style={{ marginLeft: "-70px", marginTop: "18px" }}>
                      Instructor Name
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sticky_wrapper} row>
          <div className={styles.sticky_cont} col-lg-8>
            <div className={styles.bnf_desc} id="about_course">
              <div className="container">
                <div className={styles.row}>
                  <div className={styles.content_center} col-12>
                    <h2 style={{ paddingTop: "40px" }}>Objective</h2>
                    <p className={styles.paragraph}>
                      Having an Amazon Ecommerce store in the United States
                      allows a Pakistani to make dollars and send cash home.
                      This movement has the potential to improve Pakistani
                      people's quality of life and make international travel
                      relatively convenient. You will learn about essential
                      aspects of running the business from live examples and
                      case studies and adopt a realistic approach.
                    </p>
                    <br />
                    <h2>Course Structure</h2>
                    <p className={styles.paragraph2}>
                      An Amazon FBA Wholesale course is designed to teach
                      individuals how to sell products on Amazon through the FBA
                      (Fulfillment by Amazon) program. The course structure
                      typically covers a range of topics related to the process
                      of starting and growing a successful Amazon FBA Wholesale
                      business. The course starts with an introduction to Amazon
                      FBA Wholesale, which provides an overview of the business
                      model and the benefits of using it for selling products on
                      Amazon. This is followed by a section on product research,
                      which teaches techniques for finding profitable wholesale
                      products and evaluating their potential for success on
                      Amazon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" style={{ display: "flex", marginBottom: "50px" }}>
              <div style={{ width: "48%" }}>
                <div className={styles.content_center} >
                  {/* <h1 className="sky" style={{ paddingTop: "20px" }}>
                  Coming from Card 1
                </h1> */}
                  <h2 style={{ paddingTop: "15px" }}>Course Outline</h2>
                </div>
                <br />
                <div
                  className="default_accord ec-faqs-section"
                  id="trainings-faqs"
                >
                  <div
                    className="row justify-content-start aos-init aos-animate"
                    data-aos="zoom-in"
                    id="accordion"
                  >
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item" style={{ width: "115%" }}>
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <b>Module 1: Introduction</b>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            1. Introduction to FBA wholesale business.<br />
                            2. FBA wholesale business setup requirements.<br />
                            3. Terms used in FBA wholesale business.<br />
                            4. Understanding the capital requirement and how to assess personal goals against it.<br />
                            5. What categories are suggested for newbies.<br />
                            6. Difference between gated and ungated categories and high-level explanation of how to get a category ungated.<br />
                            7. FBA vs FBM sellers
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <b>Module 2 : Product Hunting</b>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. FBA wholesale product hunting techniques, mandatory tools, and plugins
                               training.<br />
                              2. Products search using reverse sourcing golden products criteria
                              identification.<br />
                              3. Manual product hun􀆟ng using categories and subcategories method.<br />
                              4. Product search through keepa, helium 10. <br />
                              5. Profitable product list finilization. <br />
                              6. Product selec􀆟on criteria to pass or reject the shortlisted product.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <b>Module 3 : Brand / Distributor Communication</b>
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Techniques to find correct contact details of the brand.<br />
                              2. Finalization of contact list professional email drafting professional and call
                              script.<br />
                              3. Live email communication with brands i.e., Live skype calls with brands.<br />
                              4. Live filling of wholesale application forms, responding to emails and
                                 learning the art of brand negotiations.<br />
                              5. How to convince brands to allow selling on Amazon.<br />
                              Things to do once wholesale account is approved.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              <b>Module 4 : Price List Analysis</b>
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Introduction to scan unlimited and Amz analyzer. <br />
                              2. How to setup them (MWS KEYS) – How to Scan a sheet? <br />
                              3. How to clean the pricelists received from the brands to use with
                              scanning tools. <br />
                              4. Live brand price list analysis and relevant filters to apply on scanning tools.<br />
                              5. Profitable products selec􀆟on from the scanned sheets.<br />
                              6. Further analyzing the profitable products found from the scanned sheets.<br />
                              7. How to find profitable products from the suppliers’ website if product
                              sheet is not available.<br />
                              8. How to confirm the correct product is selected. Use UPC, model number
                              and images matching criteria.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              <b>Module 5 : Prep - Centers & Shipment Rates</b>
                            </button>
                          </h2>
                          <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. What are prep - centers and their services?<br />
                              2. How to select a prep center? How to communicate with them before
                              sending an inventory?<br />
                              3, Prep - center services quotation analysis and inventory shipment rates
                              analysis.<br />
                              4. Brand / distributor warehouse to amazon warehouse rates brand /
                              distributor warehouse to prep center, warehouse rates prep center.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSix">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                            >
                              <b>Module 6 : Live Sourcing</b>
                            </button>
                          </h2>
                          <div
                            id="collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSix"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Determining your first order quantity.<br />
                              2. Finalized profitable products margin analysis.<br />
                              3. Understanding MOA, MOQ.<br />
                              4. Obtaining freight quote for the finalized order – How to get free
                              shipping.<br />
                              5. Introduction to LPO (local purchase order) and how it is used.<br />
                              6. Preparing an LPO with the finalized quan􀆟ty using supplier’s SKU
                              number.
                              7. How to negotiate for more discounts? (EOL, END
                              STOCKS, Deals).<br />
                              8. Discussing various payment methods and which one to use
                              to pay to suppliers (Credit card, ACH, Zelle).<br />
                              9. Record keeping of supplier invoices.<br />
                              10. Understanding the difference between seller ra􀆟ng and product
                              reviews.<br />
                              11. How to improve seller ratings and why it is important in wholesale FBA.<br />
                              12. How to remove negative seller feedback?<br />
                              13. Importance of performance tab in seller central and how to track
                              performance measures.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSeven">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSeven"
                              aria-expanded="false"
                              aria-controls="collapseSeven"
                            >
                              <b>Module 7 : Live Inventory Shipment</b>
                            </button>
                          </h2>
                          <div
                            id="collapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSeven"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Live inventory shipment to prep - center for prep services.<br />
                              2. Demonstrating live on Amazon seller how to MeToo a listing.<br />
                              3. Explaining and showing live what are SKU numbers and how to
                              generate item labels.<br />
                              4. Live demonstration of LTL vs SPD shipment cost benefit analysis.<br />
                              5. Live amazon shipment plan creation and box labels creation.<br />
                              6. Live tracking of shipment of inventory to amazon warehouse and what
                              different stages in a shipment journey mean.<br />
                              8. What to do if shipment is damaged in transit or lost by Amazon.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingEight">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseEight"
                              aria-expanded="false"
                              aria-controls="collapseEight"
                            >
                              <b>Module 8 : Amazon Seller Central Management</b>
                            </button>
                          </h2>
                          <div
                            id="collapseEight"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEight"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Live buy box management buy box winning strategies.<br />
                              2. Live daily sales analysis of profitable products.<br />
                              3. What is Sellerboard and why it is important to track profitability.<br />
                              4. How to setup Sellerboard using 2 months free trial
                              (www.sunnyali.com/sellerboard)<br />
                              5. Maintaining product costs in Sellerboard.<br />
                              6. Extracting reports and representing data in the meaningful
                              format to clients.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingNine">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseNine"
                              aria-expanded="false"
                              aria-controls="collapseNine"
                            >
                              <b>Module 9 : Repricing Software</b>
                            </button>
                          </h2>
                          <div
                            id="collapseNine"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingNine"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. What is a repricing software?<br />
                              2. How to setup Amazon’s repricing rules.<br />
                              3. What 3rd party repricing tools are available in the market?<br />
                              4. What is Informed.co?<br />
                              5. Pricing rules to setup in Informed.co.<br />
                              6. Min - max pricing identification.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingten">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseten"
                              aria-expanded="false"
                              aria-controls="collapseten"
                            >
                              <b>Module 10 : Inventory Management</b>
                            </button>
                          </h2>
                          <div
                            id="collapseten"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingten"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Inventory types 3.<br />
                              2. Inventory management sheet analysis and define reordering time.<br />
                              3. How to avoid out-of-stock conditions.<br />
                              4. How to handle refund and returns.<br />
                              5. How to claim reimbursement from Amazon.<br />
                              6. Disposal rules setup in Amazon seller central.<br />
                              7. Issuing manual refunds for customer satisfaction in FBM.<br />
                              8. Keeping track of IPI score and how to improve it.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingEleven">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseEleven"
                              aria-expanded="false"
                              aria-controls="collapseEleven"
                            >
                              <b>Module 11 : Learning Outcomes</b>
                            </button>
                          </h2>
                          <div
                            id="collapseEleven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEleven"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Develop your own FBA wholesale business.<br />
                              2. How to provide VA services for FBA wholesale.<br />
                              3. What services to sell and how to earn freelancing income from
                              FBA WHOLESALE?<br />
                              4. How to prepare FBA wholesale proposals attendees’ skill analysis.<br />
                              5. Training feedback.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwelve">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwelve"
                              aria-expanded="false"
                              aria-controls="collapseTwelve"
                            >
                              <b>Module 12: Taxation</b>
                            </button>
                          </h2>
                          <div
                            id="collapseTwelve"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwelve"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. What is sales tax exemption?<br />
                              2. How to apply for the resale certificate.<br />
                              3. Understanding VAT and its implication.<br />
                              4. How to obtain sales tax exemption certificate.<br />
                              5. Settings to do in seller central for the sales tax exemption before you start
                              selling.<br />
                              6. When to register for VAT (UK) and how to do it.<br />
                              7. Understanding VAT for EU countries.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: "48%", paddingLeft: "210px" }}>
                <div className={styles.content_center}  >
                  {/* <h1 className="sky" style={{ paddingTop: "20px" }}>
                  Coming from Card 1
                </h1> */}
                  <h2 style={{ paddingTop: "15px", fontWeight: "bold" }}>Payment Plan</h2>
                </div>
                <br />
                <Paymentcard />
              </div>
            </div>
          </div>
        </div>
      </>
    );


  } else if (cardState == "1") {
    return (
      <>
        <div className={styles.hero_benefits}>
          <div className={styles.content_row} row flex no-flex-sm>
            <div className={styles.content} col-lg-7>
              <h1>Rapid Fire Amazon FBA Wholesale</h1>
              <div className={styles.duration} row>
                <div className={styles.img_user} col>
                  <img
                    // src="https://tinyjpg.com/images/social/website.jpg"
                    alt=""
                    className={styles.click}
                  />
                  <div>
                    <h3 style={{ marginLeft: "-70px", marginTop: "18px" }}>
                      Instructor Name
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sticky_wrapper} row>
          <div className={styles.sticky_cont} col-lg-8>
            <div className={styles.bnf_desc} id="about_course">
              <div className="container">
                <div className={styles.row}>
                  <div className={styles.content_center} col-12>
                    <h2 style={{ paddingTop: "40px" }}>Program Overview</h2>
                    <p className={styles.paragraph}>
                    Having an Amazon Ecommerce store in the United States allows a Pakistani to make dollars and send cash home. This movement has the potential to improve Pakistani people's quality of life and make international travel relatively convenient. You will learn about essential aspects of running the business from live examples and case studies and adopt a realistic approach.
                    </p>
                    <br />
                    <h2>Learning Objectives</h2>
                    <p className={styles.paragraph2}>
                    An Amazon FBA Wholesale course is designed to teach individuals how to sell products on Amazon through the FBA (Fulfillment by Amazon) program. The course structure typically covers a range of topics related to the process of starting and growing a successful Amazon FBA Wholesale business. The course starts with an introduction to Amazon FBA Wholesale, which provides an overview of the business model and the benefits of using it for selling products on Amazon. This is followed by a section on product research, which teaches techniques for finding profitable wholesale products and evaluating their potential for success on Amazon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" style={{ display: "flex", marginBottom: "50px" }}>
              <div style={{ width: "48%" }}>
                <div className={styles.content_center} >
                  {/* <h1 className="sky" style={{ paddingTop: "20px" }}>
                  Coming from Card 1
                </h1> */}
                  <h2 style={{ paddingTop: "15px" }}>Course Outline</h2>
                </div>
                <br />
                <div
                  className="default_accord ec-faqs-section"
                  id="trainings-faqs"
                >
                  <div
                    className="row justify-content-start aos-init aos-animate"
                    data-aos="zoom-in"
                    id="accordion"
                  >
                    <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={{ width: "115%" }}>
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <b>Module 1: Introduction</b>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            1. Introduction to FBA wholesale business.<br />
                            2. FBA wholesale business setup requirements.<br />
                            3. Terms used in FBA wholesale business.<br />
                            4. Understanding the capital requirement and how to assess personal goals against it.<br />
                            5. What categories are suggested for newbies.<br />
                            6. Difference between gated and ungated categories and high-level explanation of how to get a category ungated.<br />
                            7. FBA vs FBM sellers
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <b>Module 2 : Product Hunting</b>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. FBA wholesale product hunting techniques, mandatory tools, and plugins
                               training.<br />
                              2. Products search using reverse sourcing golden products criteria
                              identification.<br />
                              3. Manual product hun􀆟ng using categories and subcategories method.<br />
                              4. Product search through keepa, helium 10. <br />
                              5. Profitable product list finilization. <br />
                              6. Product selec􀆟on criteria to pass or reject the shortlisted product.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <b>Module 3 : Brand / Distributor Communication</b>
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Techniques to find correct contact details of the brand.<br />
                              2. Finalization of contact list professional email drafting professional and call
                              script.<br />
                              3. Live email communication with brands i.e., Live skype calls with brands.<br />
                              4. Live filling of wholesale application forms, responding to emails and
                              5. learning the art of brand negotiations.<br />
                              6. How to convince brands to allow selling on Amazon.<br />
                              Things to do once wholesale account is approved.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              <b>Module 4 : Price List Analysis</b>
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Introduction to scan unlimited and Amz analyzer. <br />
                              2. How to setup them (MWS KEYS) – How to Scan a sheet? <br />
                              3. How to clean the pricelists received from the brands to use with
                              scanning tools. <br />
                              4. Live brand price list analysis and relevant filters to apply on scanning tools.<br />
                              5. Profitable products selec􀆟on from the scanned sheets.<br />
                              6. Further analyzing the profitable products found from the scanned sheets.<br />
                              7. How to find profitable products from the suppliers’ website if product
                              sheet is not available.<br />
                              8. How to confirm the correct product is selected. Use UPC, model number
                              and images matching criteria.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              <b>Module 5 : Prep - Centers & Shipment Rates</b>
                            </button>
                          </h2>
                          <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. What are prep - centers and their services?<br />
                              2. How to select a prep center? How to communicate with them before
                              sending an inventory?<br />
                              3, Prep - center services quotation analysis and inventory shipment rates
                              analysis.<br />
                              4. Brand / distributor warehouse to amazon warehouse rates brand /
                              distributor warehouse to prep center, warehouse rates prep center.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSix">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                            >
                              <b>Module 6 : Live Sourcing</b>
                            </button>
                          </h2>
                          <div
                            id="collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSix"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Determining your first order quantity.<br />
                              2. Finalized profitable products margin analysis.<br />
                              3. Understanding MOA, MOQ.<br />
                              4. Obtaining freight quote for the finalized order – How to get free
                              shipping.<br />
                              5. Introduction to LPO (local purchase order) and how it is used.<br />
                              6. Preparing an LPO with the finalized quan􀆟ty using supplier’s SKU
                              number.
                              7. How to negotiate for more discounts? (EOL, END
                              STOCKS, Deals).<br />
                              8. Discussing various payment methods and which one to use
                              to pay to suppliers (Credit card, ACH, Zelle).<br />
                              9. Record keeping of supplier invoices.<br />
                              10. Understanding the difference between seller ra􀆟ng and product
                              reviews.<br />
                              11. How to improve seller ratings and why it is important in wholesale FBA.<br />
                              12. How to remove negative seller feedback?<br />
                              13. Importance of performance tab in seller central and how to track
                              performance measures.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSeven">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSeven"
                              aria-expanded="false"
                              aria-controls="collapseSeven"
                            >
                              <b>Module 7 : Live Inventory Shipment</b>
                            </button>
                          </h2>
                          <div
                            id="collapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSeven"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Live inventory shipment to prep - center for prep services.<br />
                              2. Demonstrating live on Amazon seller how to MeToo a listing.<br />
                              3. Explaining and showing live what are SKU numbers and how to
                              generate item labels.<br />
                              4. Live demonstration of LTL vs SPD shipment cost benefit analysis.<br />
                              5. Live amazon shipment plan creation and box labels creation.<br />
                              6. Live tracking of shipment of inventory to amazon warehouse and what
                              different stages in a shipment journey mean.<br />
                              8. What to do if shipment is damaged in transit or lost by Amazon.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingEight">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseEight"
                              aria-expanded="false"
                              aria-controls="collapseEight"
                            >
                              <b>Module 8 : Amazon Seller Central Management</b>
                            </button>
                          </h2>
                          <div
                            id="collapseEight"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEight"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Live buy box management buy box winning strategies.<br />
                              2. Live daily sales analysis of profitable products.<br />
                              3. What is Sellerboard and why it is important to track profitability.<br />
                              4. How to setup Sellerboard using 2 months free trial
                              (www.sunnyali.com/sellerboard)<br />
                              5. Maintaining product costs in Sellerboard.<br />
                              6. Extracting reports and representing data in the meaningful
                              format to clients.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingNine">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseNine"
                              aria-expanded="false"
                              aria-controls="collapseNine"
                            >
                              <b>Module 9 : Repricing Software</b>
                            </button>
                          </h2>
                          <div
                            id="collapseNine"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingNine"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. What is a repricing software?<br />
                              2. How to setup Amazon’s repricing rules.<br />
                              3. What 3rd party repricing tools are available in the market?<br />
                              4. What is Informed.co?<br />
                              5. Pricing rules to setup in Informed.co.<br />
                              6. Min - max pricing identification.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingten">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseten"
                              aria-expanded="false"
                              aria-controls="collapseten"
                            >
                              <b>Module 10 : Inventory Management</b>
                            </button>
                          </h2>
                          <div
                            id="collapseten"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingten"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Inventory types 3.<br />
                              2. Inventory management sheet analysis and define reordering time.<br />
                              3. How to avoid out-of-stock conditions.<br />
                              4. How to handle refund and returns.<br />
                              5. How to claim reimbursement from Amazon.<br />
                              6. Disposal rules setup in Amazon seller central.<br />
                              7. Issuing manual refunds for customer satisfaction in FBM.<br />
                              8. Keeping track of IPI score and how to improve it.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingEleven">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseEleven"
                              aria-expanded="false"
                              aria-controls="collapseEleven"
                            >
                              <b>Module 11 : Learning Outcomes</b>
                            </button>
                          </h2>
                          <div
                            id="collapseEleven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEleven"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Develop your own FBA wholesale business.<br />
                              2. How to provide VA services for FBA wholesale.<br />
                              3. What services to sell and how to earn freelancing income from
                              FBA WHOLESALE?<br />
                              4. How to prepare FBA wholesale proposals attendees’ skill analysis.<br />
                              5. Training feedback.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwelve">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwelve"
                              aria-expanded="false"
                              aria-controls="collapseTwelve"
                            >
                              <b>Module 12: Taxation</b>
                            </button>
                          </h2>
                          <div
                            id="collapseTwelve"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwelve"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. What is sales tax exemption?<br />
                              2. How to apply for the resale certificate.<br />
                              3. Understanding VAT and its implication.<br />
                              4. How to obtain sales tax exemption certificate.<br />
                              5. Settings to do in seller central for the sales tax exemption before you start
                              selling.<br />
                              6. When to register for VAT (UK) and how to do it.<br />
                              7. Understanding VAT for EU countries.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: "48%", paddingLeft: "210px" }}>
                <div className={styles.content_center}>
                  {/* <h1 className="sky" style={{ paddingTop: "20px" }}>
                  Coming from Card 1
                </h1> */}
                  <h2 style={{ paddingTop: "15px", fontWeight: "bold" }}>Payment Plan</h2>
                </div>
                <br />
                <Paymentcard />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } 
  else if (cardState == "2") {
    return (
      <>
        <div className={styles.hero_benefits}>
          <div className={styles.content_row} row flex no-flex-sm>
            <div className={styles.content} col-lg-7>
              <h1>Amazon Virtual Assistant</h1>
              <div className={styles.duration} row>
                <div className={styles.img_user} col>
                  <img
                    // src="https://tinyjpg.com/images/social/website.jpg"
                    alt=""
                    className={styles.click}
                  />
                  <div>
                    <h3 style={{ marginLeft: "-70px", marginTop: "18px" }}>
                      Instructor Name
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sticky_wrapper} row>
          <div className={styles.sticky_cont} col-lg-8>
            <div className={styles.bnf_desc} id="about_course">
              <div className="container">
                <div className={styles.row}>
                  <div className={styles.content_center} col-12>
                    <h2 style={{ paddingTop: "40px" }}>Program Overview</h2>
                    <p className={styles.paragraph}>
                    As a virtual assistant, you will be the primary point of contact for Amazon customers seeking assistance through various communication channels, including phone, email, and chat. Your responsibilities will include responding to customer inquiries, resolving customer issues, and offering product recommendations
                    </p>
                    <br />
                    <h2>Learning Objectives</h2>
                    <p className={styles.paragraph2}>
                      This program will help students to learn how to work from home as an Amazon Virtual Assistant, taking tasks from clients and performing other duties as assigned. Upon completion of this course, the trainees will be able to handle all administrative and customer service issues linked to Amazon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" style={{ display: "flex", marginBottom: "50px" }}>
              <div style={{ width: "48%" }}>
                <div className={styles.content_center} >
                  {/* <h1 className="sky" style={{ paddingTop: "20px" }}>
                  Coming from Card 1
                </h1> */}
                  <h2 style={{ paddingTop: "15px" }}>Course Outline</h2>
                </div>
                <br />
                <div
                  className="default_accord ec-faqs-section"
                  id="trainings-faqs"
                >
                  <div
                    className="row justify-content-start aos-init aos-animate"
                    data-aos="zoom-in"
                    id="accordion"
                  >
                    <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={{ width: "115%" }}>
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <b>Module 1: Introduction</b>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            1. Introduction to FBA wholesale business.<br />
                            2. FBA wholesale business setup requirements.<br />
                            3. Terms used in FBA wholesale business.<br />
                            4. Understanding the capital requirement and how to assess personal goals against it.<br />
                            5. What categories are suggested for newbies.<br />
                            6. Difference between gated and ungated categories and high-level explanation of how to get a category ungated.<br />
                            7. FBA vs FBM sellers
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <b>Module 2 : Product Hunting</b>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. FBA wholesale product hunting techniques, mandatory tools, and plugins
                               training.<br />
                              2. Products search using reverse sourcing golden products criteria
                              identification.<br />
                              3. Manual product hun􀆟ng using categories and subcategories method.<br />
                              4. Product search through keepa, helium 10. <br />
                              5. Profitable product list finilization. <br />
                              6. Product selec􀆟on criteria to pass or reject the shortlisted product.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <b>Module 3 : Brand / Distributor Communication</b>
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Techniques to find correct contact details of the brand.<br />
                              2. Finalization of contact list professional email drafting professional and call
                              script.<br />
                              3. Live email communication with brands i.e., Live skype calls with brands.<br />
                              4. Live filling of wholesale application forms, responding to emails and
                              5. learning the art of brand negotiations.<br />
                              6. How to convince brands to allow selling on Amazon.<br />
                              Things to do once wholesale account is approved.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              <b>Module 4 : Price List Analysis</b>
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Introduction to scan unlimited and Amz analyzer. <br />
                              2. How to setup them (MWS KEYS) – How to Scan a sheet? <br />
                              3. How to clean the pricelists received from the brands to use with
                              scanning tools. <br />
                              4. Live brand price list analysis and relevant filters to apply on scanning tools.<br />
                              5. Profitable products selec􀆟on from the scanned sheets.<br />
                              6. Further analyzing the profitable products found from the scanned sheets.<br />
                              7. How to find profitable products from the suppliers’ website if product
                              sheet is not available.<br />
                              8. How to confirm the correct product is selected. Use UPC, model number
                              and images matching criteria.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              <b>Module 5 : Prep - Centers & Shipment Rates</b>
                            </button>
                          </h2>
                          <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. What are prep - centers and their services?<br />
                              2. How to select a prep center? How to communicate with them before
                              sending an inventory?<br />
                              3, Prep - center services quotation analysis and inventory shipment rates
                              analysis.<br />
                              4. Brand / distributor warehouse to amazon warehouse rates brand /
                              distributor warehouse to prep center, warehouse rates prep center.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSix">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                            >
                              <b>Module 6 : Live Sourcing</b>
                            </button>
                          </h2>
                          <div
                            id="collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSix"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Determining your first order quantity.<br />
                              2. Finalized profitable products margin analysis.<br />
                              3. Understanding MOA, MOQ.<br />
                              4. Obtaining freight quote for the finalized order – How to get free
                              shipping.<br />
                              5. Introduction to LPO (local purchase order) and how it is used.<br />
                              6. Preparing an LPO with the finalized quan􀆟ty using supplier’s SKU
                              number.
                              7. How to negotiate for more discounts? (EOL, END
                              STOCKS, Deals).<br />
                              8. Discussing various payment methods and which one to use
                              to pay to suppliers (Credit card, ACH, Zelle).<br />
                              9. Record keeping of supplier invoices.<br />
                              10. Understanding the difference between seller ra􀆟ng and product
                              reviews.<br />
                              11. How to improve seller ratings and why it is important in wholesale FBA.<br />
                              12. How to remove negative seller feedback?<br />
                              13. Importance of performance tab in seller central and how to track
                              performance measures.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSeven">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSeven"
                              aria-expanded="false"
                              aria-controls="collapseSeven"
                            >
                              <b>Module 7 : Live Inventory Shipment</b>
                            </button>
                          </h2>
                          <div
                            id="collapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSeven"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Live inventory shipment to prep - center for prep services.<br />
                              2. Demonstrating live on Amazon seller how to MeToo a listing.<br />
                              3. Explaining and showing live what are SKU numbers and how to
                              generate item labels.<br />
                              4. Live demonstration of LTL vs SPD shipment cost benefit analysis.<br />
                              5. Live amazon shipment plan creation and box labels creation.<br />
                              6. Live tracking of shipment of inventory to amazon warehouse and what
                              different stages in a shipment journey mean.<br />
                              8. What to do if shipment is damaged in transit or lost by Amazon.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingEight">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseEight"
                              aria-expanded="false"
                              aria-controls="collapseEight"
                            >
                              <b>Module 8 : Amazon Seller Central Management</b>
                            </button>
                          </h2>
                          <div
                            id="collapseEight"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEight"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Live buy box management buy box winning strategies.<br />
                              2. Live daily sales analysis of profitable products.<br />
                              3. What is Sellerboard and why it is important to track profitability.<br />
                              4. How to setup Sellerboard using 2 months free trial
                              (www.sunnyali.com/sellerboard)<br />
                              5. Maintaining product costs in Sellerboard.<br />
                              6. Extracting reports and representing data in the meaningful
                              format to clients.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingNine">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseNine"
                              aria-expanded="false"
                              aria-controls="collapseNine"
                            >
                              <b>Module 9 : Repricing Software</b>
                            </button>
                          </h2>
                          <div
                            id="collapseNine"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingNine"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. What is a repricing software?<br />
                              2. How to setup Amazon’s repricing rules.<br />
                              3. What 3rd party repricing tools are available in the market?<br />
                              4. What is Informed.co?<br />
                              5. Pricing rules to setup in Informed.co.<br />
                              6. Min - max pricing identification.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingten">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseten"
                              aria-expanded="false"
                              aria-controls="collapseten"
                            >
                              <b>Module 10 : Inventory Management</b>
                            </button>
                          </h2>
                          <div
                            id="collapseten"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingten"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Inventory types 3.<br />
                              2. Inventory management sheet analysis and define reordering time.<br />
                              3. How to avoid out-of-stock conditions.<br />
                              4. How to handle refund and returns.<br />
                              5. How to claim reimbursement from Amazon.<br />
                              6. Disposal rules setup in Amazon seller central.<br />
                              7. Issuing manual refunds for customer satisfaction in FBM.<br />
                              8. Keeping track of IPI score and how to improve it.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingEleven">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseEleven"
                              aria-expanded="false"
                              aria-controls="collapseEleven"
                            >
                              <b>Module 11 : Learning Outcomes</b>
                            </button>
                          </h2>
                          <div
                            id="collapseEleven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEleven"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Develop your own FBA wholesale business.<br />
                              2. How to provide VA services for FBA wholesale.<br />
                              3. What services to sell and how to earn freelancing income from
                              FBA WHOLESALE?<br />
                              4. How to prepare FBA wholesale proposals attendees’ skill analysis.<br />
                              5. Training feedback.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwelve">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwelve"
                              aria-expanded="false"
                              aria-controls="collapseTwelve"
                            >
                              <b>Module 12: Taxation</b>
                            </button>
                          </h2>
                          <div
                            id="collapseTwelve"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwelve"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. What is sales tax exemption?<br />
                              2. How to apply for the resale certificate.<br />
                              3. Understanding VAT and its implication.<br />
                              4. How to obtain sales tax exemption certificate.<br />
                              5. Settings to do in seller central for the sales tax exemption before you start
                              selling.<br />
                              6. When to register for VAT (UK) and how to do it.<br />
                              7. Understanding VAT for EU countries.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: "48%", paddingLeft: "210px" }}>
                <div className={styles.content_center}>
                  {/* <h1 className="sky" style={{ paddingTop: "20px" }}>
                  Coming from Card 1
                </h1> */}
                  <h2 style={{ paddingTop: "15px", fontWeight: "bold" }}>Payment Plan</h2>
                </div>
                <br />
                <Paymentcard />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } 

  else if (cardState == "3") {
    return (
      <>
        <div className={styles.hero_benefits}>
          <div className={styles.content_row} row flex no-flex-sm>
            <div className={styles.content} col-lg-7>
              <h1>Amazon Private Label</h1>
              <div className={styles.duration} row>
                <div className={styles.img_user} col>
                  <img
                    // src="https://tinyjpg.com/images/social/website.jpg"
                    alt=""
                    className={styles.click}
                  />
                  <div>
                    <h3 style={{ marginLeft: "-70px", marginTop: "18px" }}>
                      Instructor Name
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sticky_wrapper} row>
          <div className={styles.sticky_cont} col-lg-8>
            <div className={styles.bnf_desc} id="about_course">
              <div className="container">
                <div className={styles.row}>
                  <div className={styles.content_center} col-12>
                    <h2 style={{ paddingTop: "40px" }}>Program Overview</h2>
                    <p className={styles.paragraph}>
                    Amazon Private Label is a program that allows third-party sellers to create and sell their own branded products on the Amazon marketplace. With this program, sellers can use Amazon's fulfillment network to store, pack, and ship their products to customers, as well as take advantage of Amazon's marketing and promotional tools to reach a wider audience.
                    </p>
                    <br />
                    <h2>Learning Objectives</h2>
                    <p className={styles.paragraph2}>
                      This program will help students build their own Amazon Private Label Store, Equipped with the right marketing
                      strategies and the art of Private Label, Students will be
                      able to develop their profitable Amazon's stores and
                      help clients launch and scale their businesses on Amazon.
                      Furthermore, Private Label members can sell their services
                      online as this course will provide them with multiple
                      subset skills, valued very high on the freelancing market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" style={{ display: "flex", marginBottom: "50px" }}>
              <div style={{ width: "48%" }}>
                <div className={styles.content_center} >
                  {/* <h1 className="sky" style={{ paddingTop: "20px" }}>
                  Coming from Card 1
                </h1> */}
                  <h2 style={{ paddingTop: "15px" }}>Course Outline</h2>
                </div>
                <br />
                <div
                  className="default_accord ec-faqs-section"
                  id="trainings-faqs"
                >
                  <div
                    className="row justify-content-start aos-init aos-animate"
                    data-aos="zoom-in"
                    id="accordion"
                  >
                    <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={{ width: "115%" }}>
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <b>Module 1: Introduction to Amazon and Private label</b>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            1. Introduction to Ecommerce.<br />
                            2. Difference between Private label & Wholesale.<br />
                            3. Difference between FBA & FBM.<br />
                            4. Brand Registry Importance in PL.<br />
                            5. Market Selection for PL.<br />
                            6. Private label FBA.<br />
                            7. Category Ungating on Amazon
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <b>Module 2 : Account Creation on Amazon</b>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Market to start with.<br />
                              2. Creation of UK LTD.<br />
                              3. Amazon Hybrid accounts from Pakistan.<br />
                              4. Amazon Business account in US. <br />
                              5. Amazon store set up. <br />
                              6. Amazon Secondary Account access.<br/>
                              7. Maintain Amazon Seller account Heath <br/>
                              8. Access your account without VPS/VPN <br/>
                              9. Necessary settings for Seller central<br/>
                              10. Purchase Virtual address<br/>
                              11. Account upgrade and Down Grade<br/>
                              12. How to change details from amazon Individual to Business on professional Plan.  
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <b>Module 3 : Legal & Tax Matters</b>
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. What is VAT.<br />
                              2. VAT Registration.<br />
                              3. UK VAT 7.5% or 20%.<br />
                              4. VAT Exemptions.<br/>
                              5. How to get VAT Invoices.<br />
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              <b>Module 4 : Product Hunting</b>
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Market analysis. <br />
                              2. Keyword Science. <br />
                              3. Golden keywords. <br />
                              4. Best seller Rank and importance.<br />
                              5. Permitted and Restricted products.<br />
                              6. Seasonal products and their importance.<br />
                              7. Product Hunting Criteria.<br />
                              8. Product Hunting for PL in UK Market.<br/>
                              9. Product Hunting for PL in US Market.<br/>
                              10. Product eligibility to sell.<br/>
                              11. Product Limitations.<br/>
                              12. Product Tiers and weight.<br/>
                              13. Excel Sheet data filling for hunted Product.<br/>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              <b>Module 5 : Product Hunting Tools</b>
                            </button>
                          </h2>
                          <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              1. Amazon Product Research Tools<br />
                              2. Jungle Scout JS <br />
                              3. How jungle scout extension works.<br />
                              4. Product Hunting Via Jungle scout product finder tool.<br/>
                              5. Helium 10.<br/>
                              6. Product Hunting via Helium 10 Black box.<br/>
                              7. Product ideas through Merchant words.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSix">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                            >
                              <b>Module 6 : Product Sourcing</b>
                            </button>
                          </h2>
                          <div
                            id="collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSix"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                            1. How to check Product patent <br />
                            2. Competitor analysis <br />
                            3. Pre Budget-Calculation for sourcing <br />
                            4. Product samples <br />
                            5. Inspection report <br />
                            6. How to negotiate with supplier <br />
                            7. Lead time & inventory management <br />
                            8. How to calculate the final cost of product <br />
                            9. Reverse Sourcing through helium 10 <br />
                            10.Product labels <br />
                            11.UPC/FNSKU <br />
                            12.How to calculate volumetric weight gross weight <br />
                            13.Sourcing Templates <br />
                            14.Request for Quotation <br />
                            15.Alibaba account creation <br />
                            16.Trade assurance and verified suppliers searching <br />
                            17.Sourcing from 1688/Made in China <br />
                            18.Freight Forwarder Rates <br />
                            19.Shipment Terms DDP/DOP/DDU <br />
                            20.Shipment label creation 
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSeven">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSeven"
                              aria-expanded="false"
                              aria-controls="collapseSeven"
                            >
                              <b>Module 7 : Listing Creation & Optimiztion</b>
                            </button>
                          </h2>
                          <div
                            id="collapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSeven"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <ul>
                              •	Amazon listing <br />
                              •	How to create listing on amazon <br />
                              •	Listing quality score <br />
                              •	Listing variations <br />
                              •	Parent child relation <br />
                              •	Listing optimization <br />
                              •	Front end optimization <br />
                              •	Back-end optimization <br />
                              •	PDP images <br />
                              •	Amazon FBA listing <br />
                              •	Amazon FBM listing <br />
                              •	How to add first product on amazon <br />
                              •	Key word selection <br />
                              •	For product listing <br />
                              •	How to fix error 5665 <br />
                              •	Strategies to choose right key word to rank <br />
                              •	Search term importance <br />
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingEight">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseEight"
                              aria-expanded="false"
                              aria-controls="collapseEight"
                            >
                              <b>Module 8 : Shipment Plane Creation on Amazon</b>
                            </button>
                          </h2>
                          <div
                            id="collapseEight"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEight"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                            •	Amazon FBA labels <br />
                            •	UPC/FNSKU/SHIPMENT LEVEL <br />
                            •	How to create shipment level <br />
                            •	Shipment through third party <br />
                            •	Amazon shipping partners <br />
                            •	Uploading tracking numbers 
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingNine">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseNine"
                              aria-expanded="false"
                              aria-controls="collapseNine"
                            >
                              <b>Module 9 : Amazon Product launch</b>
                            </button>
                          </h2>
                          <div
                            id="collapseNine"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingNine"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                            •	Product launch with give aways <br />
                            •	Product launch with Facebook Ads <br />
                            •	Product lounge with Insta, Pinterest, Many chat <br />
                            •	Super URL and how its work <br />
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingten">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseten"
                              aria-expanded="false"
                              aria-controls="collapseten"
                            >
                              <b>Module 10 : Amazon Product Launch with PPC</b>
                            </button>
                          </h2>
                          <div
                            id="collapseten"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingten"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                            •	Introduction to PPC <br />
                            •	Importance of PPC <br />
                            •	Pre-requisites of amazon PPC <br />
                            •	What is key word performance indexes <br />
                            •	CTR/CR/ACOS/ROAS/TACOS Impressions <br />
                            •	Amazon PPC campaign <br />
                            •	Campaign strategics <br />
                            •	How to run campaign <br />
                            •	Auto & manual campaign <br />
                            •	PPC in details <br />
                            •	Sponsored display Ads <br />
                            •	Sponsored brand PPC <br />
                            •	ASIN targeting <br />
                            •	How to extract reports <br />
                            •	Brand awareness <br />
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingEleven">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseEleven"
                              aria-expanded="false"
                              aria-controls="collapseEleven"
                            >
                              <b>Module 11 : Reviews Stargates</b>
                            </button>
                          </h2>
                          <div
                            id="collapseEleven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEleven"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                            •	How to get reviews safely <br />
                            •	Social Media marketing <br />
                            •	Listing promotors <br />
                            •	How to use listing promotors <br />
                            •	Reviews through helium 10 extension New <br />
                            •	What is SABO (search & buy orders) <br />
                            •	How to use SABO <br />
                            •	What is super URL & how it works <br />
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwelve">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwelve"
                              aria-expanded="false"
                              aria-controls="collapseTwelve"
                            >
                              <b>Module 12: Coupons, Deals, Promotions</b>
                            </button>
                          </h2>
                          <div
                            id="collapseTwelve"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwelve"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                            •	What is coupon <br />
                            •	How to generate coupon <br />
                            •	Coupon code with promotional tab <br />
                            •	What are deals and how its work <br />
                            •	Amazon promotions <br />
                            •	Vine program
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThirteen">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThirteen"
                              aria-expanded="false"
                              aria-controls="collapseThirteen"
                            >
                              <b>Module 13: Pre launching Activates</b>
                            </button>
                          </h2>
                          <div
                            id="collapseThirteen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThirteen"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                            •	Budgets calculation for PL product launch <br />
                            •	Ranking strategies <br />
                            •	Targeting the right key words <br />
                            •	How to finding the long tail key words <br /> 
                            •	How to improve conversions <br />
                            •	Brand analytics and how to utilize it <br />
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFourteen">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFourteen"
                              aria-expanded="false"
                              aria-controls="collapseFourteen"
                            >
                              <b>Module 14: Amazon Account Help</b>
                            </button>
                          </h2>
                          <div
                            id="collapseFourteen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFourteen"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                            •	General account health management <br />
                            •	Amazon violations <br />
                            •	Amazon performances indexes <br />
                            •	Accounts suspension/deactivation <br />
                            •	Amazon Plan of actions (POA) <br />
                            •	Account re-instatement <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: "48%", paddingLeft: "210px" }}>
                <div className={styles.content_center}>
                  {/* <h1 className="sky" style={{ paddingTop: "20px" }}>
                  Coming from Card 1
                </h1> */}
                  <h2 style={{ paddingTop: "15px", fontWeight: "bold" }}>Payment Plan</h2>
                </div>
                <br />
                <Paymentcard />
              </div>
            </div>            
          </div>
        </div>
      </>
    );
  }   
  
};

export default ApplyNow;
