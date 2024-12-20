import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="nav">
          <img
            src="https://cdn.worldvectorlogo.com/logos/realme-realme-logo-1.svg"
            alt=""
          />
          <ul>
            <li>
              <a href="#">realme Smartphone</a>
            </li>
            <li>
              <a href="#">narzo smartphone</a>
            </li>
            <li>
              <a href="#">Audio</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
          </ul>
        </div>

        <div className="otherNav">
          <ul>
            <li>
              <a href="#">Brand</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
