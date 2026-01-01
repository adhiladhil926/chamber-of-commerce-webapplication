import React, { useState, useEffect } from "react";
import "../components/HomeSection.css";
import apj from "../assets/sir.png";
import chaatLogo from "../assets/chaat.jpg";
import weLogo from "../assets/event5.jpg";
import img2 from "../assets/event4.jpg";
import img3 from "../assets/event5.jpg";
import img4 from "../assets/event6.jpg";
import img5 from "../assets/event7.jpg";
import img6 from "../assets/event8.jpg";
import event11 from "../assets/event11.jpg";
import img16 from "../assets/event12.jpg";
import img17 from "../assets/event13.jpg";
import img18 from "../assets/event14.jpg";
import img19 from "../assets/event15.jpg";
import img20 from "../assets/event16.jpg";
import img21 from "../assets/event17.jpg";
import img22 from "../assets/event18.jpg";
import img23 from "../assets/event19.jpg";
import img24 from "../assets/event22.jpg";
import img27 from "../assets/event23.jpg";
import img28 from "../assets/event24.jpg";
import img29 from "../assets/event25.webp";
import img30 from "../assets/event26.jpg";
import img31 from "../assets/event27.jpg";

const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [whoIndex, setWhoIndex] = useState(0);
  const [revival, setRevival] = useState(0);

  //growth section
  const galleryImages = [
    { thumbnail: event11, large: event11, alt: "Business Event 1" },
    { thumbnail: weLogo, large: weLogo, alt: "Business Event 2" },
    { thumbnail: img16, large: img16, alt: "Business Event 4" },
  ];
  //gallery section
  const images = [
    img28,img29,img30,img31,img27,
    img18,img19,img20,img21,img22,img23,
    event11, img17, img16, 
    img2, img3,
    img4, img5,
    img6,

  ];
  //who section
  const whoImages = [img3, chaatLogo, img4];
  //rivival section
  const revivalImg = [img22,img19, img24];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);


  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWhoIndex((prev) => (prev + 1) % whoImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevival((prev) => (prev + 1) % revivalImg.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={`home-wrapper ${animate ? "page-enter" : ""}`}>
        {/* HERO / BANNER SECTION */}
        <div className="hero-section">
          <img src={img29} alt="Banner" className="hero-image" loading="lazy" />
        </div>
        {/* INFO SECTION */}
        <div className="info-section">
          <div className="info-left">
            <img src={whoImages[whoIndex]} alt="Who We Are" className={`info-image fade-in`} />

          </div>
          <div className="info-right">
            <h3>Welcome to CCIMSME
            </h3>
            <h2>Who We Are</h2>
            <p>
              "To lead entrepreneurs through a well-trodden path. To make the comprehensive development of Kerala possible and take enterprises to the level of international exports."
            </p>
            <p>
              Chamber of Commerce and Industry for MSME is an entity that was established with the noble aim of providing new directions and guidelines to the industrial
              and commercial sectors in Kerala. The Chamber is a grouping of individuals involved in Kerala’s varied industrial and commercial aspects. The aim of the
              Chamber is to assist those involved in these sectors in Kerala and to be a hand-holding to the new entrants in to this field and to lead them forward.
              Dynamic industrial expansion is an indispensable requirement for Kerala’s comprehensive growth. It can be seen that small scale industries are suited
              for Kerala’s unique landscape. Small scale industries are the backbone of the nation’s economy. Keeping in account the changing circumstances, as per
              the MSME law of 2020, business or industries having an investment of Rs.1 crore to Rs.50 crores or having a turnover of Rs.5 crore to Rs.250 crores
              are listed as small-scale industries. Accordingly, there has been proclamation of 11 financial and technical schemes have been declared. In this
              context, groupings like the Chamber are inevitable for the comprehensive growth and progress of the small-scale industrial sector.
            </p>
          </div>
        </div>

        <section >
          <div className="info-section">
            <div className="info-left">
              <img src={revivalImg[revival]} alt="Who We Are" className={`info-image fade-in`} loading="lazy" />
            </div>

            <div className="info-right">
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



        {/* FEATURES SECTION */}
        <div className="features-section">
          <h3>Our Key Features</h3>
          <h2>Driving Growth, Building Connections</h2>
          <div className="features-stats">
            <div className="stat">
              <h2>9+</h2>
              <p>Forums</p>
            </div>
            <div className="stat">
              <h2>100+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h2>200+</h2>
              <p>Affiliated Bodies</p>
            </div>
            <div className="stat">
              <h2>10,000+</h2>
              <p>Members</p>
            </div>
          </div>
        </div>

        <div className="info-section1">
          <div className="info-left1">

            <h2>Leadership at the Helm</h2>
            <h3 className="lead-small">The Chamber is guided by the visionary leadership of
              <br /> Shri. N. A. Muhammed Kutty (Mammuty)
              Chairman, CCIMSME
            </h3>
            <p>
              The Chamber is honoured to be guided by the sagacious leadership of Shri. N. A. Muhammed Kutty (Mammutty), a name synonymous with progressive reform and entrepreneurial success. As a stalwart in industry and commerce, he brings a wealth of experience and an unwavering commitment to the comprehensive development of our state's industrial segment.
              Shri. Mammootty is a progressive social reformist, educational activist, and a successful entrepreneur with diverse interests in Logistics, Education, Tourism, and Trading. Under his stewardship we can be assured that our Chamber is not just a facilitator, but a force for transformative growth.

              Chief Patron & Director:
              Vidyabharathi Group of Institutions
              Managing Director:
              Falcon Infrastructures Ltd.
            </p>
            <p>
              "To lead entrepreneurs through a well-trodden path. To make the comprehensive development of Kerala possible and take enterprises to the level of international exports."</p>
            <button className="read-more">
              <a href="https://mammuty.me/" target="_blank" rel="noopener noreferrer">
                READ MORE
              </a>
            </button>
          </div>
          <div className="info-right1">
            <img src={apj} alt="Our Mission" className="info-image1" />
          </div>
        </div>
        {/* FORUMS SECTION */}
        <div className="forums-section">
          <h3>Our Forums</h3>
          <h2>Connecting Businesses, Empowering Communities</h2>
          <div className="forums-container">
            <div className="forum-card">
              <img src={event11} alt="YES" />
              <h3>Guided Inception</h3>
              <p>
                We assist aspiring entrepreneurs in identifying viable industries,
                securing financial and technical help, and understanding market potential.
              </p>
            </div>
            <div className="forum-card">
              <img src={chaatLogo} alt="ChaAT" />
              <h3>Voice of Support</h3>
              <p>We represent the MSME sector's interests to the government, influencing favourable policies and legislation.</p>
            </div>
            <div className="forum-card">
              <img src={weLogo} alt="WE" />
              <h3>Reviving Industries</h3>
              <p>We assist struggling enterprises by facilitating connections with financial institutions and offering technical and marketing support to recover and grow.</p>
            </div>
            <div className="forum-card">
              <img src={img30} alt="WE" />
              <h3>NRI Focus</h3>
              <p>Delivering dedicated, unified support for returning NRIs, helping them transition their global experience into successful, stable enterprises in Kerala.</p>
            </div>
          </div>
        </div>
        {/* GROWTH SECTION */}
        <div className="growth-section">
          <div className="growth-text">
            <h1>Growth of Trade & Industry - Our Objectives</h1>

            <p>It is indisputable that the Chamber will be able to present the requirements of the existing industries and business community to the government and achieve favourable results. Not only that, there is no doubt that the collective has a significant role as the representative that will able to exert major influence on legislations that effect the business community, without direct involvement.</p>
            <p>The Chamber will be able to become a representative of the business community in the economic development activities of Kerala. Especially since about 90% of the enterprises fall under the MSME sector. The Chamber enables the dissemination of directives of national and international Chambers of Commerce and in implementing them.</p>
            <p>The Chamber has opportunities to represent the business community in the government's educational-cultural-industrial initiatives and involve in it as a representative which can resolve issues in these areas as an intermediary to inform the business community of the new opportunities and governments policies regarding industry and commerce.</p>
            <p>Not only that, the Chamber is ever willing to play a role in enabling appropriate technical and technological help for their products and facilitate marketing. Through this there is no doubt that it can lead to the growth of industries. By understanding the requirements of the coming age, numerous developments including automation will have to be undertaken.</p>
            <p>There will be many apprehensions and reservations before new entrants into the field of industry. It is also the task of the Chamber to mitigate such doubts. The Chamber will be a facilitator that will assist new entrepreneurs in finding answers to questions like what are the industries that are possible in Kerala, the access to financial and technical help and the extend of market possibilities. The Chamber will also reveal the opportunities of exports abroad.</p>
            <p>The Chamber members will also be able to explore the vast possibilities of business expansion through trade exhibitions in keeping with the times for existing and new enterprises. The Chamber aims at the growth of its region and that of itself through such efforts.</p>
          </div>

          <div className="growth-gallery">
            <div className="gallery-main1">
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img.large}
                  alt={img.alt}
                  className={`fade-only-image ${index === currentIndex ? "active" : ""}`} />
              ))}
            </div>

            <div className="gallery-thumbs">
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img.thumbnail}
                  alt={img.alt}
                  className={index === currentIndex ? "active" : ""}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* GALLERY SECTION */}
        <div className="gallery-section">
          <h3>Our Gallery</h3>
          <h2>Chamber Events & Highlights</h2>
          <div className="gallery-grid">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Event ${index}`}
              // onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {selectedImage && (
            <div className="lightbox" onClick={() => setSelectedImage(null)}>
              <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <img src={selectedImage} alt="Expanded" />
                <button className="close-btn" onClick={() => setSelectedImage(null)}>
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );

};

export default HomeSection;
