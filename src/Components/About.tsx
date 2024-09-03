import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <div className="about-content">
        <section className="about-section">
          <article>
            <h2>Our History</h2>
            <img src={require("./little-lemon1.png")} alt="Our History" className="about-image" />
            <p className="paragraph">
              Little Lemon is a restaurant that specializes in Mediterranean cuisine. It is located in the heart of the city and is known for its delicious food and friendly staff.
            </p>
          </article>
        </section>
        <section className="about-section">
          <article>
            <h2>Our Team</h2>
            <p className="paragraph">
              Our team is made up of experienced chefs and servers who are passionate about food and hospitality.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
