import React, { useEffect, useState } from "react";
import "./Vision.css";
import banner from "../assets/theme.webp";
import weLogo from "../assets/event18.webp"; 
import we2 from "../assets/event17.webp";
import we3 from "../assets/event25.webp";
import we4 from "../assets/event23.webp";
import we5 from "../assets/event22.webp";
import img38 from "../assets/i7.webp";

function Vision() {
 const [animate, setAnimate] = useState(false);

 useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
     <div className={`activity-wrapper ${animate ? "page-enter" : ""}`}>
    
                 <section
                   className="about-hero1"
                   style={{ backgroundImage: `url(${banner})` }}
                 >
       <div className="hero-overlay">
         <h1>Vision And Mission</h1>
        </div>
        
      </section>
       </div>
      <div className="activity-page">
<section className="about-section-2 reverse">
  <div className="about-content-2">
    <div className="about-image-2">
      {/* revival img */}
      <img src={we2} alt="Chamber Event" />
    </div>
    <div className="about-text-2">
   
      <h2 >Revival, Vision & Innovation</h2>
      
      <h3>Why Partner with the MSME Chamber?</h3>
      <p>We see businesses struggling through no fault of their own and new entrepreneurs hesitant to begin. Our Chamber acts as a reliable partner for both. For established firms, we provide a lifeline by connecting them with financial help and technical support for revival. For newcomers, we offer clear guidance on viable industries and simplify access to funds and technology. We also open doors to new markets, both locally and for international exports. Through this dedicated support, we turn challenges into growth opportunities. Our goal is to ensure that every enterprise in Kerala thrives.</p>
      
      <h3>Our Vision</h3>
      <p>To be the leading catalyst for the sustainable and comprehensive growth of MSMEs in Kerala, elevating them to international standards and contributing significantly to the state's economic prosperity.</p>

      <h3>Our Mission</h3>
      <p>To handhold entrepreneurs at every stage of their journey, from conception to global expansion, by providing integrated support, advocacy, and access to essential resources, thereby creating a thriving industrial environment in Kerala.</p>
    </div>
  </div>
</section>

  <div className="forums-section">
        <h3>Our Forums</h3>
        <h2>Connecting Businesses, Empowering Communities</h2>
        <div className="forums-container">
          <div className="forum-card">
            <img src={img38} alt="YES" loading="lazy"/>
            <h3>Industrial Loan Mela</h3>
            <p>
           The Industrial Loan Mela conducted by the Ministry of Micro, Small and Medium Enterprises (MSME) is an initiative aimed at promoting entrepreneurship and strengthening the industrial sector.
            </p>
          </div>
          <div className="forum-card">
            <img src={we3} alt="YES" loading="lazy"/>
            <h3>Guided Inception</h3>
            <p>
             We assist aspiring entrepreneurs in identifying viable industries, 
             securing financial and technical help, and understanding market potential.
            </p>
          </div>
          <div className="forum-card">
            <img src={we4} alt="ChaAT" loading="lazy"/>
            <h3>Voice of Support</h3>
            <p>We represent the MSME sector's interests to the government, influencing favourable policies and legislation.</p>
          </div>
          <div className="forum-card">
            <img src={we5} alt="WE" loading="lazy"/>
            <h3>Reviving Industries</h3>
            <p>We assist struggling enterprises by facilitating connections with financial institutions and offering technical and marketing support to recover and grow.</p>
          </div>
           <div className="forum-card">
            <img src={weLogo} alt="WE" loading="lazy"/>
            <h3>NRI Focus</h3>
            <p>Delivering dedicated, unified support for returning NRIs, helping them transition their global experience into successful, stable enterprises in Kerala.</p>
          </div>
        </div>
      </div>
      </div>
   </>
  );
 }

 export default Vision;