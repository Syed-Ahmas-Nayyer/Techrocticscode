import React from "react";
import About from "./About";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href={{ About }}>about us</a>
                </li>
                <li>
                  <a href="/diplomaT">our services</a>
                </li>
                <li>
                  <a href="/diplomaT">affiliate program</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="/applynow">program description</a>
                </li>
                <li>
                  <a href="/applynow">course outline</a>
                </li>
                <li>
                  <a href="/paymentcard">payment options</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>address</h4>
              <ul>
                <li>
                  <a href="https://www.google.com/search?client=opera-gx&hs=Nl7&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AJOqlzVutzSHXeuvbDCe8DzTdqqC2HJvDg:1677843020318&q=the+techrotics+lab&rflfq=1&num=10&rldimm=16420363838181903358&ved=2ahUKEwiyttup1L_9AhVoh_0HHTCKBQgQu9QIegQIFhAK#rlfi=hd:;si:16420363838181903358;mv:[[24.9006865,67.1150279],[24.9003485,67.1125777]]">
                    A-11, Railway Housing Society, Block C, Besides Millennium
                    Mall, Block C Gulshan e Jamal, Karachi, Sindh 75260
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col" style={{ paddingLeft: "55px" }}>
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/TheTechroticslabandConsultancy/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/thetechroticslab/?hl=en">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/the-techrotics-lab/?originalSubdomain=pk">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
