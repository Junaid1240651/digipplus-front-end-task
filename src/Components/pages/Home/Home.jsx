import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <div className="img">
        <img
          src="https://digipplus.com/static/homepage/imgs/digipplus-logo-70x70.38a25d5cef0d.png"
          alt=""
        ></img>
      </div>
      <div>
        <h1 className="para">Welcome To Digipplus</h1>
      </div>
      <div className="anouncement">
        <h2>Anouncement📢</h2>
      </div>
      <div className="anounc">
        <p>We are working on adding Project and International Details, so just fill up profile only</p>
      </div>
      <div className="work">
        <h3 >Work Action</h3>
      </div>
      <div className="view1">
        <button className="view">View Intern Data</button>
      </div>
      <div className="intern">
        <h3 >Internships</h3>
      </div>
      <div className="formm">
        <form >
          <h3 className="formm1">Solution Writing</h3>
          <textarea rows="4" cols="20" className="form2" placeholder="Write Solution"></textarea>
          </form>
      </div>
    </div>
  );
};

export default Home;
