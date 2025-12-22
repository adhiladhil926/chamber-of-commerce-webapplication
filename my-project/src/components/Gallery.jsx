import React, { useState, useEffect } from "react";
import "./Gallery.css";
import banner from "../assets/theme.jpg";

import img9 from "../assets/event4.jpg";
import img10 from "../assets/event5.jpg";
import img11 from "../assets/event6.jpg";
import img12 from "../assets/event7.jpg";
import img13 from "../assets/event8.jpg";
import img15 from "../assets/event11.jpg";
import img16 from "../assets/event12.jpg";
import img18 from "../assets/event14.jpg";
import img19 from "../assets/event15.jpg";
import img20 from "../assets/event16.jpg";
import img21 from "../assets/event17.jpg";
import img22 from "../assets/event18.jpg";
import img23 from "../assets/event19.jpg";
import img24 from "../assets/event20.jpg";
import img25 from "../assets/event21.jpg";
import img26 from "../assets/event22.jpg";
import img27 from "../assets/event23.jpg";
import img28 from "../assets/event24.jpg";
import img29 from "../assets/event25.jpg";
import img30 from "../assets/event26.jpg";
import img31 from "../assets/event27.jpg";
import img32 from "../assets/i1.webp";
import img33 from "../assets/i2.webp";
import img34 from "../assets/i3.webp";
import img35 from "../assets/i4.webp";
import img36 from "../assets/i5.webp";
import img37 from "../assets/i6.webp";
import img38 from "../assets/i7.webp";


const Gallery = () => {
  const [animate, setAnimate] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  const images = [
    img32, img33, img34, img35, img36,
    img37, img38,
    img28, img29, img30, img31,
    img15, img16, img18, img19,
    img20, img21, img22, img23,
    img25, img24, img26, img27,
    img9, img10, img11, img12, img13
  ];

  const videos = [
    "https://youtu.be/MTjFZm6t7oc?si=ZYI0O-feg4S2LuXm",
    "https://youtu.be/jLZ06leBbK8?si=WK7exqhkO59ye4sd",
    "https://youtu.be/8cQ4NVcHykg?si=v3FgTwwVyFErsI-k",
    "https://youtu.be/1_O7XhFYVSs?si=zBdRhlGFL52xgjwr",
    "https://youtu.be/WYq11Zb1S5o?si=-eSvCA4IabUL92vN",
    
    "https://youtu.be/ivxepdPe4gM?si=8yfgHWWfXGoPhQWA",
    "https://youtu.be/Shy35rNcWq0?si=x1kA7ntObtRAHm4u",
  ];

  const getYouTubeID = (url) => {
    if (!url) return null;
    try {
      const parsed = new URL(url);
      const idFromV = parsed.searchParams.get("v");
      if (idFromV) return idFromV;
      if (parsed.hostname === "youtu.be") {
        return parsed.pathname.replace("/", "").split("?")[0];
      }
      return null;
    } catch {
      return null;
    }
  };

  const mixedGallery = [];
  let imgIndex = 0;
  let videoIndex = 0;

  while (imgIndex < images.length) {
    mixedGallery.push({ type: "img", src: images[imgIndex++] });
    mixedGallery.push({ type: "img", src: images[imgIndex++] });
    mixedGallery.push({ type: "img", src: images[imgIndex++] });

    if (videos[videoIndex]) {
      mixedGallery.push({ type: "video", url: videos[videoIndex++] });
    }
  }

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <>
      <div className={`activity-wrapper ${animate ? "page-enter" : ""}`}>
        
        <section
          className="about-hero1"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="hero-overlay">
            <h1>Gallery</h1>
          </div>
        </section>

        {/* HEADINGS ROW */}
        <div className="heading-row">
          <span className="photos-heading">Photos</span>
          <span className="videos-heading">Videos</span>
        </div>

        {/* GALLERY GRID */}
        <div className="gallery-grid">
          {mixedGallery.map((item, index) => {
            if (item.type === "img") {
              return (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => setLightboxIndex(images.indexOf(item.src))}
                >
                  <img src={item.src} alt="" loading="lazy" />
                </div>
              );
            }

            if (item.type === "video") {
              const videoID = getYouTubeID(item.url);
              return (
                <div
                  key={index}
                  className="gallery-item youtube-box"
                  onClick={() => setVideoUrl(item.url)}
                >
                  <img src={`https://img.youtube.com/vi/${videoID}/hqdefault.jpg`} loading="lazy" />
                  <span className="youtube-play-btn">▶</span>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>

      {/* IMAGE LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <span className="lightbox-close">×</span>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[lightboxIndex]} alt="" />
          </div>
        </div>
      )}

      {/* VIDEO LIGHTBOX */}
      {videoUrl && (
        <div className="lightbox" onClick={() => setVideoUrl(null)}>
          <span className="lightbox-close">×</span>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="700px"
              src={`https://www.youtube.com/embed/${getYouTubeID(videoUrl)}?autoplay=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
