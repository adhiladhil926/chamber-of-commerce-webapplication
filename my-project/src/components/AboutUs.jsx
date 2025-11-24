import React, { useState, useEffect } from "react";
import "./AboutUs.css";
// imgs
import event2 from "../assets/event2.jpg";
import event1 from "../assets/event1.jpg";
import events from "../assets/events.jpg";
import event3 from "../assets/event4.jpg";
import banner from "../assets/theme.jpg";
import meeting1 from "../assets/events.jpg";
import meeting2 from "../assets/event10.jpg";
import meeting3 from "../assets/we.jpg";
import meeting4 from "../assets/gallery.jpg";
import meeting5 from "../assets/download.jpg";
import meeting6 from "../assets/event6.jpg";
import meeting7 from "../assets/event7.jpg";
import meeting8 from "../assets/event8.jpg";
import meeting9 from "../assets/event10.jpg";
import meeting10 from "../assets/event5.jpg";
import meeting11 from "../assets/chaat.jpg";

import img15 from "../assets/event11.jpg";
import img16 from "../assets/event12.jpg";
import img17 from "../assets/event13.jpg";
import img18 from "../assets/event14.jpg";
import img19 from "../assets/event15.jpg";
import img20 from "../assets/event16.jpg";
import img21 from "../assets/event17.jpg";
import img22 from "../assets/event18.jpg";
import img23 from "../assets/event19.jpg";
import img24 from "../assets/event20.jpg";
import img25 from "../assets/event21.jpg";
import img26 from "../assets/event22.jpg";
import img28 from "../assets/event24.jpg";
import img29 from "../assets/event25.jpg";
import img30 from "../assets/event26.jpg";
import img31 from "../assets/event27.jpg";




const AboutUs = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const highlights = [
    {
      id: 1,
      title: "Start-Up & Compliance",
      description: [
        "Company Formation & Registration",
        "Project Report & DPR Preparation",
        "Single Window Clearances",
        "GST, License, & Permit Assistance",
      ],
    },
    {
      id: 2,
      title: "Finance & Growth",
      description: [
        "Loan Access Facilitation with Banks & Financial Institutions",
        "Guidance on Government Schemes & Assistances",
        "B2B Facilitation, Branding, and Marketing Backing",
        "Exploring International Export Opportunities",
      ],
    },
    {
      id: 3,
      title: "Knowledge & Empowerment",
      description: [
        "Training Programs for Employees & Workers",
        "Seminars by Industry Experts",
        "Introduction to New Innovations & Technology Adoption",
      ],
    },
    {
      id: 4,
      title: "Liasoning with Government Bodies",
      description: [
        "Various clearances / licenses/permits from Village Office",
        "Panchayat, Municipal Office, Pollution Control Board, Electricity Board, District Industrial Board etc",
      ],
    },
  ];

  //Chamber Events & Highlights
  const images = [
     img28,img29,img30,img31,
    img15, img16, img17, img18,
    img19, img20, img21, img22,
    img23, img25, img24, img26,
  
  ];

  const IMAGES_PER_PAGE = 4;
  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  const startIndex = currentIndex * IMAGES_PER_PAGE;
  const visibleImages = images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const nextImages = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImages = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`activity-wrapper ${animate ? "page-enter" : ""}`}>
      <section
        className="about-hero1"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay">
          <h1>About Us</h1>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <div className="about-images">
            <div className="image-collage">

              {/* Our journey */}
              <img src={img22} alt="Event 1" className="img img-1" />
          <img src={meeting10} alt="Event 2" className="img img-2" />
              <img src={meeting11} alt="Event 3" className="img img-3" />
            </div>
          </div>

          <div className="about-text">
            <h2 className="vision">Our journey</h2>

            <h3>Why Partner with the MSME Chamber?</h3>
            <p>
              The Chamber stands as the definitive representative of the MSME business community, eloquently presenting your requirements and aspirations to the government to secure favourable outcomes and shape conducive legislation. The Chamber serve as the harbinger of opportunity, decoding the directives of national and international commerce. In an economy where 90% of enterprises are MSMEs, we are the vital bridge connecting your ambition with Kerala's economic development.
            </p>

            <h3>A Resolute Partnership</h3>
            <p>
              The Chamber of Commerce and Industry for MSME is envisaged as a pivotal force dedicated to steering the industrial and commercial sectors of Kerala towards a prosperous future. In Kerala's unique economic landscape, MSMEs are the key drivers of comprehensive development. The Chamber acts as a catalyst, providing support and a powerful voice for the business community.
            </p>

            <h3>Empowering Kerala's Industrial Renaissance</h3>
            <p>
              In the unique and vibrant economic tapestry of Kerala, the small and medium enterprise stands as a beacon of immense potential. Yet, the path of the entrepreneur is often lined with challenges. It is with this understanding that the Chamber of Commerce and Industry for MSME emerges. We are a collective of visionaries, united by the mission to infuse Kerala's industrial landscape with dynamism.
            </p>
          </div>
        </div>
      </section>

      <div className="gallery-section">
        <h3>Our Gallery</h3>
        <h2>Chamber Events & Highlights</h2>

        <div className="gallery-controls">
          <button
            onClick={prevImages}
            disabled={currentIndex === 0}
            className="arrow-btn"
          >
            &#8592;
          </button>

          <div className="gallery-grid">
            {visibleImages.map((img, index) => (
              <div
                key={index}
                className="gallery-card"
              >
                <img src={img} alt={`Event ${index}`} />
              </div>
            ))}
          </div>

          <button
            onClick={nextImages}
            disabled={currentIndex === totalPages - 1}
            className="arrow-btn"
          >
            &#8594;
          </button>
        </div>

        <p className="gallery-page">
          Page {currentIndex + 1} of {totalPages}
        </p>

        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Expanded" />
              <button
                className="close-btn"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Reversed About Section */}
      <section className="about-section-2 reverse">
        <div className="about-content-2">
          <div className="about-image-2">
            {/* Revival-img */}
            <img src={img21} alt="Chamber Event" />
          </div>

          <div className="about-text-2">

            <h2 className="vision">Revival, Vision & Innovation</h2>

            <h3 className='head' >Why Partner with the MSME Chamber?</h3>
            <p>
              We see businesses struggling through no fault of their own and new entrepreneurs hesitant to begin. Our Chamber acts as a reliable partner for both. For established firms, we provide a lifeline by connecting them with financial help and technical support for revival. For newcomers, we offer clear guidance on viable industries and simplify access to funds and technology. We also open doors to new markets, both locally and for international exports. Through this dedicated support, we turn challenges into growth opportunities. Our goal is to ensure that every enterprise in Kerala thrives.
            </p>

            <h3>Our Vision</h3>
            <p>
              To be the leading catalyst for the sustainable and comprehensive growth of MSMEs in Kerala, elevating them to international standards and contributing significantly to the state's economic prosperity.
            </p>

            <h3>Our Mission</h3>
            <p>
              To handhold entrepreneurs at every stage of their journey, from conception to global expansion, by providing integrated support, advocacy, and access to essential resources, thereby creating a thriving industrial environment in Kerala.
            </p>
          </div>
        </div>
      </section>

      <section
        className="highlights-section"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="highlights-overlay">
          <div className="highlights-header">
            <h5>Chamber Activities – Our Vital Services</h5>
            <h2>We will be offering comprehensive suite of services designed to streamline your business operations and fuel your growth, including:
            </h2>
          </div>

          <div className="highlights-grid">
            {highlights.map((item) => (
              <div key={item.id} className="highlight-card">
                <div className="highlight-number">{item.id}</div>
                <h3>{item.title}</h3>
                {Array.isArray(item.description) ? (
                  <ul>
                    {item.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
