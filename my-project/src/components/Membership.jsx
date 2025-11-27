import React, { useState, useEffect } from "react";
import "./Membership.css";
import banner from "../assets/theme.jpg";

// Images for plans
import goldImg from "../assets/gold.jpg";
import silverImg from "../assets/silver.jpg";
import platinumImg from "../assets/platinum.jpg";
import lifeImg from "../assets/life.jpg";

const Membership = () => {
  const [animate, setAnimate] = useState(false);

  const handleBuy = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSf3IpAiWu1dJzKRT_7d3MTKWQJzS-_OAQ3zF5ScWoL_GmCwbw/viewform?usp=preview",
      "_blank"
    );
  };

  const plans = [
    {
      name: "Life",
      img: lifeImg,
      price: "Rs.1,00,000",
      gst: "+ GST (18%)",
      features: [
        "✔️ Lifetime validity",
        "✔️ No renewal fees",
        "✔️ 10 Life Members will represent the Board",
        "✔️ All monthly Publications / magazines will be sent to the members",
        "✔️ Keralanadham E-paper Subscription (⭐One year)",
        "✔️ All official publications of the Chamber will be send to members.",
        "✔️ Right to participate in all programs conducted by the Chamber.",
        "✔️ Concessional rates applicable for training programmes.",
        "✔️ Regular updates and information shared from time to time.",
        "✔️ Right to receive guidance, support and assistance",
      ],
    },

    {
      name: "Platinum",
      img: platinumImg,
      price: "Rs.25,000",
      gst: "+ GST (18%)",
      features: [
        "✔️ Renewal fee applicable",
        "✔️ 10 members will represent the Board",
        "✔️ 20 members only",
        "✔️ All monthly Publications / magazines will be sent to the members",
        "✔️ Keralanadham E-paper Subscription (⭐6 Months)",
        "✔️ All official publications of the Chamber will be send to members.",
        "✔️ Right to participate in all programms conducted by the Chamber.",
        "✔️  Concessional rates applicable for training programmes.",
        "✔️ Regular updates and information shared from time to time.",
        "✔️ Right to receive guidance,support and assistance from the Chanber.",
      ],
    },

    {
      name: "Gold",
      img: goldImg,
      price: "Rs.10,000",
      gst: "+ GST (18%)",
      features: [
        "✔️ Renewal fee applicable",
        "✔️ 5 members will represent the Board",
        "✔️ All monthly Publications/magazines will be send to the members",
        "✔️ Keralanadham E-paper Subscription (⭐3 Months)",
        "✔️ All official publications of the Chamber will be send to members.",
        "✔️ Right to participate in all programms conducted by the Chamber.",
        "✔️ Concessional rates applicable for training programmes.",
        "✔️  Regular updates and information shared from time to time.",
        "✔️ Right to receive guidance,support and assistance from the Chanber.",
      ],
    },

    {
      name: "Silver",
      img: silverImg,
      price: "Rs.500",
      gst: "+ GST (18%)",
      features: [
        "✔️ General category (No voting rights)",
        "✔️ Validity: 1 year",
        "✔️ All monthly Publications/magazines will be send to the members through online",
        "✔️  All official publications of the Chamber will be send to members.",
        "✔️ Right to participate in all programms conducted by the Chamber.",
        "✔️ Concessional rates applicable for training programmes.",
        "✔️  Regular updates and information shared from time to time.",
        "✔️ Right to receive guidance,support and assistance from the Chanber.",
        "❌ Keralanadham E-paper Subscription",
      ],
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
            <h1>Membership</h1>
          </div>
        </section>

        <div className="membership-page">
          <div className="plans-container">
            {plans.map((plan, index) => (
              <div
                className={`plan-box ${plan.name.toLowerCase()}`}
                key={index}
              >
                {/* ⭐ IMAGE HEADER */}
               <div className="plan-header-img">
  <img src={plan.img} alt={plan.name} className="plan-img" />
</div>
                {/* CONTENT */}
                <div className="plan-content">                
                  <hr />

                  <ul className="features">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <button className="buy-btn" onClick={() => handleBuy(plan)}>
                  REGISTER
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
