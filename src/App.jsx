import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from "@iconify/react";
import "./App.css";


function App() {

  
   const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // 🔼 Top Banner Images with title & subtitle
  const topImages = [
    {
      src: `${import.meta.env.BASE_URL}images/61.png`,
      alt: "Media Banner 1",
      subtitle: "March 2025 | Web Development",
      title: "Initial Attempt / First Five Components",
    },
    {
      src: `${import.meta.env.BASE_URL}images/71.png`,
      alt: "Media Banner 2",
      subtitle: "April 2025 | Web Development",
      title: "Midterm Project",
    },
  ];

 // 🔽 Data Arrays
const galleryPosts = [
  {
    img: `${import.meta.env.BASE_URL}images/81.jpg`,
    title: "My Brother's Family",
    date: "May 2024 | Animation",
  },
  {
    img: `${import.meta.env.BASE_URL}images/91.jpg`,
    title: "My School Uniform",
    date: "October 2023 | Animation",
  },
  {
    img: `${import.meta.env.BASE_URL}images/1011.jpg`,
    title: "Bro. Daniel Razon",
    date: "November 2023 | Animation",
  },
];

const skillsData = [
  {
    category: "UI/UX Design",
    title: "Figma, Adobe XD, Wireframing, Prototyping",
    img: `${import.meta.env.BASE_URL}images/11.jpg`,
  },
  {
    category: "Web Development",
    title: "HTML, CSS, JavaScript, React",
    img: `${import.meta.env.BASE_URL}images/21.jpg`,
  },
  {
    category: "Backend & Tools",
    title: "PHP, Laravel, MySQL, Git, Python, C#",
    img: `${import.meta.env.BASE_URL}images/31.jpg`,
  },
  {
    category: "Continuous Learning",
    title:
      "I continue to improve my skills through hands-on practice and design challenges.",
    img: `${import.meta.env.BASE_URL}images/41.jpg`,
  },
  {
    category: "Additional Skills",
    title: "Problem Solving, Collaboration, Agile Methodology",
    img: `${import.meta.env.BASE_URL}images/51.jpg`,
  },
];

// 🔽 Modal Logic
const openModal = (img) => {
  setSelectedImage(img);
  setModalOpen(true);
};

const closeModal = () => {
  setSelectedImage(null);
  setModalOpen(false);
};


 const [scrollIndex, setScrollIndex] = useState(0);
  const visibleCards = 3;
  const maxIndex = Math.max(0, skillsData.length - visibleCards);

  const handleScroll = (direction) => {
    setScrollIndex((prev) => {
      if (direction === "left") return Math.max(prev - 1, 0);
      if (direction === "right") return Math.min(prev + 1, maxIndex);
      return prev;
    });
  };


  const [activeIndex, setActiveIndex] = useState(0);

const testimonials = [
  {
    name: "Ellissea Montes",
    title: "UI/UX Designer & Frontend Developer | Taguig City",
    text: " Hi! I’m Ellissea. I’m passionate about crafting user-friendly digital experiences that are both creative and functional. I enjoy tackling challenges, learning new skills, and constantly improving my design and development abilities.",
  },
  {
    name: "3rd Year \n BSIS Student",
    title: "Education",
    text: " I am currently pursuing a degree in Information Systems at LVCC. Through my studies, I’ve strengthened my technical knowledge while developing my problem-solving and creative thinking skills. I enjoy projects that challenge me to think differently and find innovative solutions.",
  },
  {
    name: "Design & Development Expertise",
    title: "Skills",
    text: "Design: Figma, Wireframing & Prototyping \n\n  Development: HTML, CSS, JavaScript, React, Responsive Web Design \n\n Collaboration & Tools: Git/GitHub, Teamwork, Version Control",
  },
  {
    name: "Professional Growth & Impact",
    title: "Vision",
    text: "My goal is to grow as a UI/UX designer and frontend developer, creating experiences that are intuitive, engaging, and meaningful. I aim to collaborate with teams that value creativity, innovation, and user-centered design.",
  },
  {
    name: "Creativity Beyond Work",
    title: "Hobbies & Passions",
    text: "Outside of design, I love singing, dancing, drawing anime, painting, and watching films or series. These hobbies help me stay inspired, sharpen my creativity, and bring fresh ideas into my projects.",
  },
  {
    name: "Projects & Achievements",
    title: "Highlights",
    text: "I’ve contributed to projects such as portfolio websites, mobile app redesigns, and interactive web prototypes. Participating in design challenges and real-world projects has strengthened my problem-solving abilities and creative thinking.",
  },
  {
    name: "Designing With Purpose",
    title: "Approach",
    text: "I believe that design is most effective when it balances creativity, usability, and empathy. Every project I work on focuses on solving problems, enhancing experiences, and creating meaningful connections with users.",
  },
];

  const projectsRowRef = useRef(null); // <-- moved here
  const [offset, setOffset] = useState(0); // <-- moved here

  const scrollRow = (direction) => {
    const row = projectsRowRef.current;
    if (!row) return;

    const itemWidth = row.children[0].offsetWidth + 16; // card width + gap
    const totalItems = row.children.length;
    const visibleItems = 4; // number of cards visible at once
    const maxOffset = -(itemWidth * (totalItems - visibleItems));

    
    let newOffset = offset;
    if (direction === "right") {
      newOffset -= itemWidth;
      if (newOffset < maxOffset) newOffset = 0; // loop back
    } else {
      newOffset += itemWidth;
      if (newOffset > 0) newOffset = maxOffset; // loop to end
    }

    setOffset(newOffset);
    row.style.transform = `translateX(${newOffset}px)`;
  };

  const [showOverlay, setShowOverlay] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timer = setTimeout(() => setFadeOut(true), 500);
    const removeTimer = setTimeout(() => setShowOverlay(false), 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }}>
     
      {/* OVERLAY LOADER */}
      {showOverlay && (
        <div
          id="overlayer"
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "#fff",
            zIndex: 9999,
            opacity: fadeOut ? 0 : 1,
          }}
        >
          <span className="loader">
            <span className="loader-inner"></span>
          </span>
        </div>
      )}

     {/* BILLBOARD / HERO */}
<section
  id="billboard"
  className="position-relative d-flex align-items-center"
  style={{
    background: "linear-gradient(160deg, #0d0d0d, #575757ff, #000000)",
    overflow: "hidden",
  }}
>
  {/* === Header: Burger Button (UNCHANGED) === */}
  <header
    className="position-absolute"
    style={{
      top: "55px",
      right: "45px",
      zIndex: 30,
    }}
  >
    <button
      className="burger-btn"
      type="button"
      onClick={() => {
        const nav = document.getElementById("navOverlay");
        const btn = document.querySelector(".burger-btn");
        nav.classList.toggle("show");
        btn.classList.toggle("open");
      }}
      aria-label="Toggle menu"
    >
      <span style={{ backgroundColor: "#ffffffff" }}></span>
      <span style={{ backgroundColor: "#ffffffff" }}></span>
      <span style={{ backgroundColor: "#ffffffff" }}></span>
    </button>
  </header>

  {/* === NAV OVERLAY (UNCHANGED) === */}
  <div id="navOverlay">
    <div className="layer" style={{ background: "#ffffffff" }}></div>
    <div className="layer" style={{ background: "#5c5c5cff" }}></div>
    <div className="layer" style={{ background: "#000000" }}></div>

    <div className="nav-content">
      <ul className="list-unstyled">
        {[
          ["#billboard", "Billboard"],
          ["#biography", "Biography"],
          ["#gallery", "Gallery"],
          ["#projects", "Projects"],
          ["#resume", "Resume Section"],
          ["#skills", "Skills/Technical Expertise"],
        ].map(([href, label]) => (
          <li key={label} className="mb-3">
            <a
              href={href}
              onClick={() => {
                document.getElementById("navOverlay").classList.remove("show");
                document.querySelector(".burger-btn").classList.remove("open");
              }}
              style={{ color: "white" }}
            >
              {label}
            </a>
          </li>
        ))}
        <li className="mb-3">
          <a
            href="https://templatesjungle.gumroad.com/l/aurora"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            Get PRO Version
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* === MAIN HERO CONTENT === */}
  <div className="container-fluid px-4 px-md-5 py-5">
    <div className="row align-items-center flex-column-reverse flex-lg-row text-center text-lg-start">
      {/* LEFT: Text */}
      <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start mt-4 mt-lg-0">
        <h2
          style={{
            color: "#ffffff",
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "0.3rem",
          }}
        >
          Elle / Seya
        </h2>

        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            color: "#000000ff",
            lineHeight: "1.2",
          }}
          data-aos="zoom-in-up"
        >
          Ellissea Montes
        </h1>

        <h3
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            color: "#1b1a1aff",
            marginBottom: "1rem",
            
          }}
          data-aos="zoom-in-up"
        >
          UI/UX Designer
        </h3>

        <p
          className="fs-5"
          style={{
            maxWidth: "600px",
            lineHeight: "1.6",
            color: "#a79f9fff",
            marginBottom: "1.5rem",
          }}
          data-aos="zoom-in-up"
        >
          A driven and creative individual dedicated to achieving goals through
          innovative design and thoughtful solutions.
        </p>

        <a
          href="#"
          className="btn"
          style={{
            backgroundColor: "#000000",
            color: "#ffffffff",
            border: "none",
            borderRadius: "6px",
            padding: "1rem 2.5rem",
            fontSize: "1rem",
            transition: "0.3s ease",
          }}
          data-aos="zoom-in-up"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#ffffffff";
            e.currentTarget.style.color = "#000000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#000000";
            e.currentTarget.style.color = "#ffffffff";
          }}
        >
          Let’s Collaborate!
        </a>
      </div>

      {/* RIGHT: Image */}
      <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
        <img
          src={`${import.meta.env.BASE_URL}images/111.png`}
          alt="Ellissea portrait"
          className="img-fluid rounded-3"
          style={{
            width: "100%",
            maxWidth: "480px",
            height: "auto",
          }}
          data-aos="zoom-in-up"
        />
      </div>
    </div>
  </div>

  {/* === RESPONSIVE STYLES === */}
  <style>{`
    @media (max-width: 992px) {
      #billboard h1 {
        font-size: 2.8rem;
      }
      #billboard h2 {
        font-size: 2rem;
      }
      #billboard h3 {
        font-size: 1.5rem;
      }
      #billboard p {
        font-size: 1rem;
        max-width: 500px;
      }
      #billboard .btn {
        font-size: 0.95rem;
        padding: 0.8rem 1.8rem;
      }
    }

    @media (max-width: 576px) {
      #billboard {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
      }
      #billboard h1 {
        font-size: 2rem;
        line-height: 1.2;
      }
      #billboard h2 {
        font-size: 1.4rem;
      }
      #billboard h3 {
        font-size: 1.1rem;
      }
      #billboard p {
        font-size: 0.95rem;
        max-width: 90%;
      }
      #billboard img {
        max-width: 300px;
      }
    }
  `}</style>
</section >

{/* ====== TESTIMONIALS / BIOGRAPHY SLIDER ====== */}
<div id="biography" style={{ backgroundColor: "#5c5c5cff", padding: "3rem 1rem" }}>
  <p style={{ color: "#a7a3a0ff", marginBottom: "5px", textAlign: "left", paddingLeft: "2rem" }}>
    A Glimpse Into My Journey
  </p>
  <h2 style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "left",paddingLeft: "2rem", color: "white", marginBottom: "2rem" }}>
    Biography
  </h2>

  {/* Slider */}
  <div className="slider-container">
    <div
      className="testimonials-wrapper"
      style={{ transform: `translateX(-${(activeIndex * (100 / 1.5))}%)` }} // 3 cards visible
    >
      {testimonials.map((t, i) => (
        <div key={i} className="card">
          <p style={{ color: "#807676ff", fontSize: "1rem", lineHeight: "1.6" }}>{t.text}</p>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#000" }}>{t.name}</h3>
          <span style={{ color: "#575250ff", fontSize: "0.95rem" }}>{t.title}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Dots */}
  <div className="dots-container">
    {Array.from({ length: Math.max(testimonials.length - 3 + 1, 0) }).map((_, i) => (
      <button key={i} onClick={() => setActiveIndex(i)}>
        <span className={i === activeIndex ? "active" : ""}></span>
      </button>
    ))}
  </div>
</div>

{/* Media Gallery */}
 <section id="gallery" className="latest-news py-5">
      <div className="container-fluid px-5">
        {/* Header */}
        <h2
          className="mb-1 text-start"
          style={{
            paddingLeft: "4rem",
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          Work Collection
        </h2>
        <p className="news-subtitle text-start" style={{ paddingLeft: "4rem" }}>
          Snapshots of innovation and artistry.
        </p>

        {/* 🔼 Top 2 Banner Images with Subtitle & Title */}
        <div className="container mb-5">
          <div className="row">
            {topImages.map((img, index) => (
              <div
                className="col-12 col-md-6 d-flex flex-column align-items-center"
                style={{ minHeight: "450px" }}
                key={index}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="img-fluid rounded-3"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "350px",
                    marginTop: "4rem",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  onClick={() => openModal(img.src)} 
                />
                <div
                  style={{
                    marginTop: "auto",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "1rem",
                      color: "#666",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {img.subtitle}
                  </p>
                  <h4
                    style={{
                      fontWeight: "700",
                      color: "#333",
                      marginTop: 0,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔽 Gallery Cards with Click-to-Preview */}
<div className="row">
  {galleryPosts.map((post, i) => (
    <div className="col-sm-6 col-lg-4 mb-4" key={i}>
      <div
        className="card blog-card text-white"
        style={{
          backgroundImage: `url(${post.img})`,
          height: "600px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "0.25rem",
          cursor: "pointer",
        }}
        onClick={() => openModal(post.img)}
      >
        <div
          className="overlay d-flex flex-column justify-content-end p-3"
          style={{
            height: "100%",
            background: "rgba(0, 0, 0, 0.4)",
            borderRadius: "0.25rem",
          }}
        >
          <small className="blog-date">{post.date}</small>
          <h4 className="card-title">{post.title}</h4>
        </div>
      </div>
    </div>
  ))}
</div>

{/* 🔍 Fullscreen Image Modal */}
{modalOpen && selectedImage && (
  <div
    className="modal-backdrop"
    onClick={closeModal}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}
  >
    <img
      src={selectedImage}
      alt="Preview"
      style={{
        maxHeight: "90%",
        maxWidth: "90%",
        borderRadius: "10px",
      }}
      onClick={(e) => e.stopPropagation()}
    />
    <button
      onClick={closeModal}
      style={{
        position: "absolute",
        top: "20px",
        right: "30px",
        fontSize: "2rem",
        color: "#fff",
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
    >
      &times;
    </button>
  </div>
)}
</div>
</section>

{/* Projects */}
<section
  id="projects"
  className="py-5"
  style={{ color: "black", backgroundColor: "#5c5c5cff" }}
>
  <div className="container px-4 px-md-5">
    <p className="fp-subtitle">Showcasing a selection of my most significant work.</p>

    <h1 style={{color:"white"}} className="mb-5 text-start fp-title">Featured Projects</h1>

    <div className="row gy-4 gx-4">
      {[
        { name: "Turning Concepts into Real Work", title: "Bringing Ideas to Life", description: "Every project is a chance for me to put my ideas into practice. I focus on creativity while keeping clear goals in mind, so the work reflects both my skills and my passions." },
        { name: "Laptop & Mobile Development", title: "Tools I Rely On", description: "I develop and test projects on both my laptop and mobile devices. This helps me make sure everything works smoothly for different users." },
        { name: "GitHub & Live Demos", title: "Sharing My Work", description: "I upload my projects to GitHub Pages and include repository and live demo links. It’s important for me that others can see and interact with my work." },
        { name: "Overcoming Challenges", title: "Learning on My Own", description: "Working independently has its challenges, especially since I’m naturally shy. I’ve learned to take things step by step and trust my own learning process." },
        { name: "Patience & Consistency", title: "Staying Focused", description: "I sometimes struggle to stay focused or remember steps, but I’ve learned that patience, careful attention, and consistent practice really make a difference." },
        { name: "Trial, Error, and Growth", title: "Learning by Doing", description: "Making mistakes is part of learning. By experimenting, reflecting, and adjusting, I’ve become more confident and capable in my skills." }
      ].map((award, i) => (
        <div
          className="col-12 col-md-6 col-lg-4 d-flex"
          key={i}
          data-aos="zoom-in-up"
          data-aos-delay={i * 120}
        >
          <article className="featured-card card flex-fill shadow-sm">
            <header className="card-top">
              <span className="card-tag">{award.name}</span>
              <h5 className="card-title">{award.title}</h5>
            </header>

            {/* flexible body: grows and scrolls if content is long */}
            <div className="card-body fp-card-body">
              <p className="text-muted mb-0">{award.description}</p>
            </div>

            {/* optional footer (keeps card heights consistent) */}
            <footer className="card-footer mt-3" aria-hidden="true" />
          </article>
        </div>
      ))}
    </div>
  </div>
</section>


{/* resume */}
<section id="resume" className="py-5" style={{ backgroundColor: "#fff" }}>
  <div className="container text-center">
    <h2 className="mb-3" style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
      Resume Section
    </h2>
    <p className="mb-4" style={{ fontSize: "1.1rem", color: "#555" }}>
      Download my resume to learn more about my experience, education, and skills.
    </p>

    <a
  href={`${import.meta.env.BASE_URL}pdf/Resume2.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  download="Ellissea_Montes_Resume.pdf"
  className="btn px-5 py-3"
  style={{
    fontSize: "1rem",
    borderRadius: "6px",
    transition: "0.3s ease",
    backgroundColor: "black",
    color: "white",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#727272";
    e.currentTarget.style.color = "black";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#000";
    e.currentTarget.style.color = "white";
  }}
>
  <i className="fas fa-download me-2"></i> Download Resume (PDF)
</a>

  </div>
</section>


<section id="skills" className="py-5" style={{ backgroundColor: "#fff" }}>
  <div className="container px-5">
    <h2
      className="text-center mb-5"
      style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#111" }}
    >
      Skills / Technical Expertise
    </h2>

    <div className="row text-center g-4">
      {/* --- Skill 1 --- */}
      <div className="col-md-4 col-sm-6">
        <div className="p-4 border rounded-4 shadow-sm h-100">
          <i className="fab fa-figma fa-3x mb-3"></i>
          <h5 className="fw-bold">Figma</h5>
          <p className="text-muted small">UI/UX Design, Wireframes, Prototyping</p>
        </div>
      </div>

      {/* --- Skill 2 --- */}
      <div className="col-md-4 col-sm-6">
        <div className="p-4 border rounded-4 shadow-sm h-100">
          <i className="fab fa-html5 fa-3x mb-3 text-danger"></i>
          <h5 className="fw-bold">HTML5</h5>
          <p className="text-muted small">Semantic and Accessible Structure</p>
        </div>
      </div>

      {/* --- Skill 3 --- */}
      <div className="col-md-4 col-sm-6">
        <div className="p-4 border rounded-4 shadow-sm h-100">
          <i className="fab fa-css3-alt fa-3x mb-3 text-primary"></i>
          <h5 className="fw-bold">CSS3</h5>
          <p className="text-muted small">Responsive Design, Flexbox, Grid</p>
        </div>
      </div>

      {/* --- Skill 4 --- */}
      <div className="col-md-4 col-sm-6">
        <div className="p-4 border rounded-4 shadow-sm h-100">
          <i className="fab fa-js-square fa-3x mb-3 text-warning"></i>
          <h5 className="fw-bold">JavaScript</h5>
          <p className="text-muted small">Dynamic UI and Interactivity</p>
        </div>
      </div>

      {/* --- Skill 5 --- */}
      <div className="col-md-4 col-sm-6">
        <div className="p-4 border rounded-4 shadow-sm h-100">
          <i className="fab fa-react fa-3x mb-3 text-info"></i>
          <h5 className="fw-bold">React</h5>
          <p className="text-muted small">Component-Based Frontend Framework</p>
        </div>
      </div>

      {/* --- Skill 6 --- */}
      <div className="col-md-4 col-sm-6">
        <div className="p-4 border rounded-4 shadow-sm h-100">
          <i className="fab fa-github fa-3x mb-3"></i>
          <h5 className="fw-bold">GitHub</h5>
          <p className="text-muted small">Version Control and Collaboration</p>
        </div>
      </div>
    </div>
  </div>
</section>

      

{/* FOOTER */}
<footer
  id="footer"
  className="padding-large"
  style={{
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "left",
    padding: "60px 20px",
  }}
>
  <div className="container">
    <div
      className="row"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "40px 20px",
      }}
    >
      {/* Left: Logo and Contact */}
      <div className="col-md-4" style={{ flex: "1 1 250px" }}>
        <h1
          className="footer-logo mb-0"
          style={{
            fontSize: "3rem",
            cursor: "pointer",
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Elle/Seya
        </h1>
        <p style={{ marginTop: "1rem" }}>
          Just feel free to contact if you wanna collaborate with me,
          or simply have a conversation.
        </p>
        <a
          href="mailto:montes.ellissea.pasillos@gmail.com"
          className="fs-6 text-decoration-underline"
          style={{ color: "#fff", wordBreak: "break-all" }}
        >
          montes.ellissea.pasillos@gmail.com
        </a>
      </div>

      {/* Center Menu 1 */}
      <div className="col-md-3" style={{ flex: "1 1 150px" }}>
        <ul className="list-unstyled">
          {[
            "Billboard",
            "Biography",
            "Gallery",
            "Projects",
            "Resume",
            "Skills",
          ].map((item, i) => (
            <li key={i} style={{ marginBottom: "8px" }}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#ccc")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#fff")
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Subscribe */}
      <div
        className="col-md-4"
        style={{
          flex: "1 1 300px",
          textAlign: "center",
        }}
      >
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          Feel free to reach out for freelance work, design help, or feedback.
        </p>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Write Your Email Address"
          style={{
            maxWidth: "100%",
            borderRadius: "6px",
            padding: "10px",
            textAlign: "center",
            margin: "0 auto",
          }}
        />
        <button
          className="fw-bold border-0"
          style={{
            backgroundColor: "#252729",
            color: "#FFFFFF",
            transition: "0.3s ease",
            padding: "10px 20px",
            borderRadius: "6px",
            width: "100%",
            maxWidth: "100%",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#393a3b")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#252729")
          }
          onClick={() => {
            window.open(
              "https://mail.google.com/mail/u/0/#inbox?compose=VpCqJKkMvWBtdMNTpQhjtdDjKpWNkSwnNtgSxzFMzkhpWPmKZJQXgHlQhZhMVzmlMgWLwNG",
              "_blank"
            );
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  </div>
</footer>

{/* FOOTER BOTTOM */}
<div
  style={{
    marginTop: "1px",
    padding: "20px 10px",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
    textAlign: "center",
  }}
>
  {/* Social Icons */}
  <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
    {[
      { icon: "facebook-f", link: "https://www.facebook.com/crizella7" },
      { icon: "instagram", link: "https://www.instagram.com/miiikasae/" },
      { icon: "figma", link: "https://www.figma.com/@ellisseamontes" },
      { icon: "github", link: "https://github.com/elrizeyah" },
      {
        icon: "linkedin-in",
        link: "https://www.linkedin.com/in/ellissea-montes-66b31b301/",
      },
      {
        icon: "udemy",
        link: "https://www.udemy.com/user/ellissea-pasillos-montes-2/",
      },
    ].map((social, i) => (
      <a
        key={i}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#fff", fontSize: "18px" }}
      >
        <i className={`fab fa-${social.icon}`}></i>
      </a>
    ))}
  </div>

  {/* Credit */}
  <p style={{ margin: 0, fontSize: "0.9rem" }}>
    HTML Template by:{" "}
    <a
      href="https://templatesjungle.com"
      target="_blank"
      rel="noreferrer"
      style={{ color: "#DCCDBC", textDecoration: "underline" }}
    >
      TemplatesJungle
    </a>
  </p>

      </div>
    </div>
  );
}

export default App;
