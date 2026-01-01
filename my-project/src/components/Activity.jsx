import "./Activity.css";
import banner from "../assets/theme.webp"; 
import React, { useEffect, useState } from "react";


import meeting1 from "../assets/event21.jpg";
import meeting2 from "../assets/event22.jpg";
import meeting3 from "../assets/event17.jpg";
import meeting4 from "../assets/event4.jpg";

function Activity() {
  const [animate, setAnimate] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const activities = [
    {
      title: "Business Meetings",
      description: "Regular meetings to discuss industry trends and opportunities",
    },
    {
      title: "Trade Shows",
      description: "Annual exhibitions showcasing local businesses and products",
    },
    {
      title: "Workshops",
      description: "Skill development and training programs for entrepreneurs",
    },
    {
      title: "Policy Advocacy",
      description: "Representing business interests to government bodies",
    },
    {
      title: "Networking Events",
      description: "Connecting MSMEs with investors and collaborators",
    },
    {
      title: "Mentorship Programs",
      description: "Guiding startups and new entrepreneurs to success",
    },
  ];

  const galleryImages = [
    { thumbnail: meeting1, large: meeting1, alt: "Business Event 1" },
    { thumbnail: meeting3, large: meeting3, alt: "Business Event 2" },
    { thumbnail: meeting4, large: meeting4, alt: "Business Event 3" },
    { thumbnail: meeting2, large: meeting2, alt: "Business Event 4" },
  ];

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className={`activity-wrapper ${animate ? "page-enter" : ""}`}>
 
      <section
        className="about-hero1"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay">
          <h1>Activities</h1>
        </div>
      </section>
      <div className="activity-page">
        <h2>Chamber Activities</h2>
        <div className="activity-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GROWTH SECTION */}
      <div className="growth-section1">
        <div className="growth-text1">
         <h1>Growth of Trade & Industry - Our Objectives</h1>
         
                     <p>It is indisputable that the Chamber will be able to present the requirements of the existing industries and business community to the government and achieve favourable results. Not only that, there is no doubt that the collective has a significant role as the representative that will able to exert major influence on legislations that effect the business community, without direct involvement.</p>     
                     <p>The Chamber will be able to become a representative of the business community in the economic development activities of Kerala. Especially since about 90% of the enterprises fall under the MSME sector. The Chamber enables the dissemination of directives of national and international Chambers of Commerce and in implementing them.</p>
                     <p>The Chamber has opportunities to represent the business community in the government's educational-cultural-industrial initiatives and involve in it as a representative which can resolve issues in these areas as an intermediary to inform the business community of the new opportunities and governments policies regarding industry and commerce.</p>
                     <p>Not only that, the Chamber is ever willing to play a role in enabling appropriate technical and technological help for their products and facilitate marketing. Through this there is no doubt that it can lead to the growth of industries. By understanding the requirements of the coming age, numerous developments including automation will have to be undertaken.</p>
                     <p>There will be many apprehensions and reservations before new entrants into the field of industry. It is also the task of the Chamber to mitigate such doubts. The Chamber will be a facilitator that will assist new entrepreneurs in finding answers to questions like what are the industries that are possible in Kerala, the access to financial and technical help and the extend of market possibilities. The Chamber will also reveal the opportunities of exports abroad.</p>
                     <p>The Chamber members will also be able to explore the vast possibilities of business expansion through trade exhibitions in keeping with the times for existing and new enterprises. The Chamber aims at the growth of its region and that of itself through such efforts.</p>
        </div>

        <div className="growth-gallery">
          <div className="gallery-main">
            {galleryImages.map((img, index) => (
              <img
              loading="lazy"
                key={index}
                src={img.large}
                alt={img.alt}
                className={`fade-only-image ${
                  index === currentIndex ? "active" : ""
                }`}
              />
            ))}
          </div>

          <div className="gallery-thumbs">
            {galleryImages.map((img, index) => (
              <img
              loading="lazy"
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
    </div>
  );
}

export default Activity;
