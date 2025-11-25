
import React, { useState, useEffect } from "react";
import "./Membership.css"
import banner from "../assets/theme.jpg";
// import { useNavigate } from "react-router-dom"

const Membership = () => {
  const [animate, setAnimate] = useState(false);
  // const navigate = useNavigate();
  const handleBuy = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSf3IpAiWu1dJzKRT_7d3MTKWQJzS-_OAQ3zF5ScWoL_GmCwbw/viewform?usp=preview", "_blank");
  };

  const plans = [
    {
      "name": "life",
      "price": "Rs.1,00,000 ",

      "features": [
        "✔️ Lifetime validity",
        "✔️ No renewal fees",
        "✔️ 10 Life Members will represent the Board"
      ]
    },


    {
      "name": "platinum  ",
      "price": "Rs.25,000",

      "features": [
        "✔️ Renewal fee applicable",
        "✔️ 10 members will represent  the Board",
         "✔️ 20members only"
      ]
    },
    {
      "name": "gold",
      "price": "Rs.10,000",
      "gst": "  gst Included (18%) ",
      "features": [
        "✔️ Renewal fee applicable.",
        "✔️ 5 members will represent the Board",

      ]
    },
    {
      "name": "silver",
      "price": "Rs. 500",

      "features": [
        "✔️ General category (No voting rights)",
        "✔️ Validity: 1 year"
      ]
    },

  ];
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={`activity-wrapper ${animate ? "page-enter" : ""}`}>
        <section
          className="about-hero1"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="hero-overlay">
            <h1>MemberShip</h1>
          </div>
        </section>
        <div className="membership-page">
          <div className="plans-container">
            {plans.map((plan, index) => (<div className={`plan-box ${plan.name.toLowerCase()}`} key={index}>
              <div className="plan-content">
                <h2>{plan.name}</h2>
                <h3 className="price">{plan.price}</h3>
                <hr />
                <ul className="features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button className="buy-btn" onClick={() => handleBuy(plan)}>REGISTER</button>
             
            </div>))}
          </div>
<div className="key-features-box">
  <h2 className="key-features-title">Key Features</h2>

  <ul className="key-features-list">
    <li>All official publications of the Chamber will be send to members.</li>
    <li>Right to participate in all programms conducted by the Chamber.</li>
    <li>Concessional rates applicable for training programmes.</li>
    <li>Regular updates and information shared from time to time.</li>
    <li>Right to receive guidance,support and assistance from the Chanber.</li>
  </ul>
</div>

        </div>

      </div>
    </>
  )
}
export default Membership;