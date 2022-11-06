import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header1">
          <img
            src="https://digipplus.com/static/homepage/imgs/digipplus-logo-70x70.38a25d5cef0d.png"
            alt=""
            className="logo"
          ></img>
          <h3 className="name1">DIGI</h3>
          <h3 className="name2">PPLUS</h3>
        </div>
        <ul className="navigation">
          <li><a href="/" >HOME</a></li>
          <li><a href="/my-job" >My Jobs</a></li>
          <li><a href="/my-payment" >My Payment</a></li>
          <li><a href="/my-offerlatter" >My Offerletter</a></li>
          <li><a href="/my-certificate" >My Certificate</a></li>
        </ul>

        <img
          className="user"
          src="https://github.com/Junaid1240651/images/blob/main/user.png?raw=true"
          alt=""
        />
      </header>
    </div>
  );
};

export default Header;
