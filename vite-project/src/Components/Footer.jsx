import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Recommended</h3>
          <ul>
            <li>realme C75</li>
            <li>realme 13+ 5G</li>
            <li>realme Note 60</li>
            <li>realme C61</li>
            <li>realme C65</li>
            <li>realme 12</li>
            <li>realme 12+ 5G</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>FAQ</li>
            <li>Troubleshooting</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About realme</h3>
          <ul>
            <li>Our Brand</li>
            <li>Newsroom</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact realme</h3>
          <ul>
            <li>Whatsapp</li>
            <li>service.pk@realme.com</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>04238048018</h3>
          <p>09:30 - 18:00, MON - SAT</p>
          <p>Exclude Holidays</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Pakistan ( English / PKR )</p>
        <p>© 2019-2024 realme. All Rights Reserved.</p>
        <ul>
          <li>User Agreement</li>
          <li>Privacy Policy</li>
          <li>Terms of Sales</li>
          <li>Warranty Terms</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
