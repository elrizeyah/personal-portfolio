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
      src: "/images/61.png",
      alt: "Media Banner 1",
      subtitle: "March 2025 | Web Development",
      title: "Initial Attempt / First Five Components",
    },
    {
      src: "/images/71.png",
      alt: "Media Banner 2",
      subtitle: "April 2025 | Web Development",
      title: "Midterm Project",
    },
  ];

  // 🔽 Gallery Cards
  const galleryPosts = [
    {
      img: "81.jpg",
      title: "My Brother's Family",
      date: "May 2024 | Animation",
    },
    {
      img: "91.jpg",
      title: "My School Uniform",
      date: "October 2023 | Animation",
    },
    {
      img: "1011.jpg",
      title: "Bro. Daniel Razon",
      date: "November 2023 | Animation",
    },
  ];

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };
  const skillsData = [
  {
    category: "UI/UX Design",
    title: "Figma, Adobe XD, Wireframing, Prototyping",
    img: "11.png",
  },
  {
    category: "Web Development",
    title: "HTML, CSS, JavaScript, React",
    img: "21.png",
  },
  {
    category: "Backend & Tools",
    title: "PHP, Laravel, MySQL, Git, Python, C#",
    img: "31.png",
  },
  {
    category: "Continuous Learning",
    title: "I continue to improve my skills through hands-on practice and design challenges.",
    img: "41.png",
  },
  {
    category: "Additional Skills",
    title: "Problem Solving, Collaboration, Agile Methodology",
    img: "51.png",
  },
];

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
  style={{ background: "linear-gradient(160deg, #0d0d0d, #575757ff, #000000)" }}

>
  {/* Header: burger button on top-right */}
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
      <span style={{backgroundColor: "#ffffffff"}}></span>
      <span style={{backgroundColor: "#ffffffff"}}></span>
      <span style={{backgroundColor: "#ffffffff"}}></span>
    </button>
  </header>

  {/* NAV OVERLAY */}
  <div id="navOverlay">
    <div className="layer" style={{background:"#ffffffff"}}></div>
    <div className="layer" style={{background:"#5c5c5cff"}}></div>
    <div className="layer"style={{background:"#000000"}}></div>

    {/* Menu content */}
<div className="nav-content" >
  <ul className="list-unstyled" >
    <li className="mb-3">
      <a
        href="#billboard"
        onClick={() => {
          document.getElementById("navOverlay").classList.remove("show");
          document.querySelector(".burger-btn").classList.remove("open");
        }}
        style={{color:"white"}}
      >
        Billboard
      </a>
    </li>
    <li className="mb-3">
      <a
        href="#biography"
        onClick={() => {
          document.getElementById("navOverlay").classList.remove("show");
          document.querySelector(".burger-btn").classList.remove("open");
        }}
        style={{color:"white"}}
      >
        Biography
      </a>
    </li>
    <li className="mb-3">
      <a
        href="#media-gallery"
        onClick={() => {
          document.getElementById("navOverlay").classList.remove("show");
          document.querySelector(".burger-btn").classList.remove("open");
        }}
        style={{color:"white"}}
      >
        Media Gallery
      </a>
    </li>
    <li className="mb-3">
      <a
        href="#featured-projects"
        onClick={() => {
          document.getElementById("navOverlay").classList.remove("show");
          document.querySelector(".burger-btn").classList.remove("open");
        }}
        style={{color:"white"}}
      >
        Featured Projects
      </a>
    </li>

<li className="mb-3">
      <a
        href="#resume"
        onClick={() => {
          document.getElementById("navOverlay").classList.remove("show");
          document.querySelector(".burger-btn").classList.remove("open");
        }}
        style={{color:"white"}}
      >
        Resume Section
      </a>
    </li>

    <li className="mb-3">
      <a
        href="#skills"
        onClick={() => {
          document.getElementById("navOverlay").classList.remove("show");
          document.querySelector(".burger-btn").classList.remove("open");
        }}
        style={{color:"white"}}
      >
        Skills/Technical Expertise
      </a>
    </li>

        
        <li className="mb-3">
          <a
            href="https://templatesjungle.gumroad.com/l/aurora"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              document.getElementById("navOverlay").classList.remove("show");
              document.querySelector(".burger-btn").classList.remove("open");
            }}
            style={{color:"white"}}
          >
            Get PRO Version
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Banner Content inside the background */}

  <div className="container-fluid px-5 py-0">
    <div className="row align-items-center">
      {/* Left Column: Text */}
      <div className="col-sm-12 col-lg-6 d-flex flex-column align-items-start">
        <div
          style={{
            color: "#ffffffff",
            fontSize: "3.3rem",
            margin: 1,
            padding: 0,
            lineHeight: "3",
            fontWeight: "bold",
            marginBottom: "-1.1rem",
            marginTop:"-12rem",
            marginLeft:"-0.5rem"
          }}
        >
          Elle/Seya
        </div>

        <h1
          className="fw-bold display-2"
          style={{
            lineHeight: "0",
            margin: 0,
            paddingLeft: "4rem",
            color: "#000000ff",
          }}
          data-aos="zoom-in-up"
        >
          Ellissea Montes
        </h1>

        <h1
          className="fw-bold display-3"
          style={{
            lineHeight: "2",
            margin: 0,
            paddingLeft: "4rem",
            color: "#1b1a1aff"
          }}
          
        >
          UI/UX Designer
        </h1>

        <p
          className="fs-5"
          style={{
            maxWidth: "800px",
            marginTop: "-1rem",
            marginBottom: "1rem",
            lineHeight: "1.5",
            paddingLeft: "4rem",
            textAlign: "left",
            color:"#a79f9fff"
            
          }}
          data-aos="zoom-in-up"
        >
          A driven and creative individual dedicated to achieving goals through innovative design and thoughtful solutions.
        </p>

        <a
          href="#"
          className="btn"
          style={{
            backgroundColor: "#000000",
            color:"#ffffffff",
            border: "none",
            borderRadius: "6px",
            padding: "1rem 2.5rem",
            fontSize: "1rem",
            marginLeft: "4rem",
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
          Let's Collaborate!
        </a>
      </div>

      {/* Right Column: Image */}
      <div
        className="col-sm-12 d-flex justify-content-center align-items-start"
        style={{
          flex: "0 0 45.8333%",
          maxWidth: "45.8333%",
          
  
        }}
      >
        <img
          src="/images/111.png"
          alt="Ellissea portrait"
          className="img-fluid rounded-3"
          style={{ maxWidth: "105%", height: "600px", marginTop:"1rem" }}
          data-aos="zoom-in-up"
        />
      </div>
    </div>
  </div>
</section>

{/* Testimonials */}
<section id="biography" className="py-5" style={{ backgroundColor: "#5c5c5cff" }}>
  <div className="container-fluid px-5">
    <p
      style={{
        color: "#a7a3a0ff",
        marginBottom: "5px",
        textAlign: "left",
        paddingLeft: "4rem"
      }}
    >
      A Glimpse Into My Journey
    </p>
    <h2
      className="mb-5 text-start"
      style={{ fontSize: "3rem", fontWeight: "bold",paddingLeft: "4rem", color:"black" }}
    >
      Biography
    </h2>

    {/* Testimonial Slider */}
    <div
      style={{
        position: "relative",
        margin: "0 auto",
        maxWidth: "1100px",
        width: "100%",
      }}
    >
      <div
        className="d-flex overflow-hidden"
        style={{
          width: "100%",
        }}
      >
        <div
          className="d-flex"
          style={{
            transform: `translateX(-${activeIndex * (100 / 0.95)}%)`,
            transition: "transform .5s ease-in-out",
            width: "31.3%",
            gap: ".5rem",
            height: "430px",
          }}
        >
          {[...Array(7)].map((_, i) => {
            const testimonial = testimonials[i % testimonials.length];
            return (
              <div
                key={i}
                className="card shadow-sm p-5 text-start"
                style={{
                  borderRadius: "10px",
                  minWidth: "105%",
                  boxSizing: "border-box",
                  whiteSpace: "pre-line" 
                }}
              >
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "#807676ff",
                    whiteSpace: "pre-line" 
                  }}

                >
                  {testimonial.text}
                </p>
                <h3 className="mt-0">{testimonial.name}</h3>
                <span style={{ color: "#575250ff" }}>{testimonial.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="d-flex justify-content-center mt-3">
        {[...Array(5)].map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              margin: "0 4px",
              cursor: "pointer",
            }}
            aria-label={`Go to testimonial ${i + 1}`}
          >
            <span
              style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: i === activeIndex ? "#000000ff" : "#ccc",
              }}
            ></span>
          </button>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Media Gallery */}
 <section id="media-gallery" className="latest-news py-5">
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
                  backgroundImage: `url(/images/${post.img})`,
                  height: "600px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "0.25rem",
                  cursor: "pointer",
                }}
                onClick={() => openModal(`/images/${post.img}`)}
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


{/* Featured Projects*/}
      <section id="featured-projects" className="py-5" style={{ color:"black", backgroundColor: "#5c5c5cff" }}>
  <div className="container-fluid px-5">
    <p
      style={{
        color: "#a7a3a0ff",
        marginBottom: "5px",
        textAlign: "left",
        fontWeight: "1",
        paddingLeft: "4rem"
      }}
    >
      Showcasing a selection of our most significant work.
    </p>

    <h1
      className="mb-5 text-start"
      style={{ fontSize: "3rem", fontWeight: "bold",paddingLeft: "4rem" }}
    >
      Featured Projects
    </h1>

    <div className="row gy-3 gx-4">
      {[
        {
          name: "Turning Concepts into Real Work",
          title: "Bringing Ideas to Life",
          description: "Every project is a chance for me to put my ideas into practice. I focus on creativity while keeping clear goals in mind, so the work reflects both my skills and my passions.",
        },
        {
          name: "Laptop & Mobile Development",
          title: "Tools I Rely On",
          description: "I develop and test projects on both my laptop and mobile devices. This helps me make sure everything works smoothly for different users.",
        },
        {
          name: "GitHub & Live Demos",
          title: "Sharing My Work",
          description: "I upload my projects to GitHub Pages and include repository and live demo links. It’s important for me that others can see and interact with my work.",
        },
        {
          name: "Overcoming Challenges",
          title: "Learning on My Own",
          description: "Working independently has its challenges, especially since I’m naturally shy. I’ve learned to take things step by step and trust my own learning process.",
        },
        {
          name: "Patience & Consistency",
          title: "Staying Focused",
          description: " sometimes struggle to stay focused or remember steps, but I’ve learned that patience, careful attention, and consistent practice really make a difference.",
        },
        {
          name: "Trial, Error, and Growth",
          title: "Learning by Doing",
          description: "Making mistakes is part of learning. By experimenting, reflecting, and adjusting, I’ve become more confident and capable in my skills.",
        },
      ].map((award, i) => (
        <div className="col-4 md-4 mb-2" key={i}>
          <div
            className="card h-100 text-start p-4 shadow-sm"
            data-aos="zoom-in-up"
            data-aos-delay={i * 200}
            style={{
              borderRadius: "20px",
              marginInlineStart:"4rem",
              
            }}
          >
            <span
              style={{
                color: "#a7a3a0ff",
                fontSize: "1rem",
                marginBottom: "-1rem",
                
              }}
            >
              {award.name}
            </span>
            <h5
              className="mt-3"
              style={{
                fontSize: "25px",
              }}
            >
              {award.title}
            </h5>
            <p className="text-muted mb-0" style={{height:"100px"}}>{award.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="resume" className="py-5" style={{ backgroundColor: "#ffffffff" }}>
  <div className="container text-center">
    <h2 className="mb-3" style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
      Resume Section
    </h2>
    <p className="mb-4" style={{ fontSize: "1.1rem", color: "#555" }}>
      Download my resume to learn more about my experience, education, and skills.
    </p>

    <a
      href="/pdf/Resume.pdf" // <-- replace with your actual PDF path
      download
      className="btn px-5 py-3"
      style={{
        fontSize: "1rem",
        borderRadius: "6px",
        transition: "0.3s ease",
        backgroundColor:"black",
        color:"white",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#727272ff";
        e.target.style.color = "black";
        
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#000";
        e.target.style.color = "white";
        
      }}
    >
      <i className="fas fa-download me-2"></i> Download Resume (PDF)
    </a>
  </div>
</section>


{/* Skills */}
<section id="skills" className="py-5">
        <div className="container-fluid px-5" >
          <div 
            className="d-flex justify-content-between align-items-center mb-4 flex-wrap"
            style={{ paddingLeft: "4rem", paddingRight: "4rem", color:"black"}}
          >
            <div className="d-flex align-items-center gap-3 flex-wrap"
            style={{ paddingLeft: "4rem", paddingRight: "4rem", color:"black"}}>
              <h2
                className="mb-0"
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                }}
              >
                Skills/Technical Expertise
              </h2>
            </div>

            <div className="d-flex gap-2">
              <button style={{color:"black"}}
                className="btn btn-outline-secondary rounded-circle"
                type="button"
                onClick={() => handleScroll("left")}
                disabled={scrollIndex === 0}
              >
                &larr;
              </button>
              <button style={{color:"black"}}
                className="btn btn-outline-secondary rounded-circle"
                type="button"
                onClick={() => handleScroll("right")}
                disabled={scrollIndex >= maxIndex}
              >
                &rarr;
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="d-flex"
              style={{
                transition: "transform 0.5s ease-in-out",
                transform: `translateX(-${(scrollIndex * 100) / visibleCards}%)`,
                
              }}
            >
              {skillsData.map((skill, i) => (
                <div
                  key={i}
                  style={{
                    minWidth: `${100 / visibleCards}%`,
                    boxSizing: "border-box",
                    padding: "1rem",
                  }}
                >
                  <div className="card border-0 shadow-sm h-100">
                    <img
                      src={`/images/${skill.img}`}
                      alt={skill.category}
                      className="card-img-top"
                      style={{ maxHeight: "150px", objectFit: "contain" }}
                    />
                    <div className="card-body text-start">
                      <h6
                        style={{
                          color: "#808080ff",
                          fontSize: "0.9rem",
                          marginBottom: "0.5rem",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {skill.category}
                      </h6>
                      <p className="card-text" style={{ fontSize: "1.1rem" }}>
                        {skill.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      


      {/* FOOTER */}
<footer
  id="footer"
  className="padding-large"
  style={{
    backgroundColor: "#000000",
    color: "#ffffffff",
    textAlign: "left", // all text left-aligned by default
  }}
>
  <div className="container-lg">
    <div className="row align-items-start">
      {/* Left: Logo and Contact */}
      <div className="footer-menu col-md-4 mb-4 mb-md-0">
        <div className="footer-intro">
  <h1 className="footer-logo mb-0" style={{fontSize:"5rem", cursor: "pointer",}} onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth", 
            })
          }
        >Elle/Seya</h1>
</div>
        <div className="footer-address mt-3">
          <p>
            Just feel free to contact if you wanna collaborate with me,
            or simply have a conversation.
          </p>
          <div className="mail-address">
  <a
    
    className="fs-2 text-decoration-underline"
    style={{ color: "#ffffffff" }}
  >
    montes.ellissea.pasillos@gmail.com
  </a>
</div>
        </div>
      </div>

      
   
      
       {/* Center: Menu 2 */}
      
      <div className="footer-menu col-6 col-md-1 mb-4 mb-md-0">
        <ul className="list-unstyled m-0">
          {[""].map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{ color: "#ffffffff", marginLeft:"2rem", textDecoration: "none" }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      
          {/* Center: Menu 1 */}
      
      <div className="footer-menu col-6 col-md-3 mb-4 mb-md-0">
        <ul className="list-unstyled m-0">
          {["Billboard", "Biography", "Media Gallery", "Featured Projects", "Resume","Skills"].map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{ color: "#ffffffff", marginLeft:"2rem", textDecoration: "none" }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

     

      <div className="footer-menu col-md-4 text-center">
  <div className="subscribe">
    <p className="text-start">
      Feel free to reach out for freelance work, design help, or feedback.
    </p>
    <input
      className="rounded-2 form-control mb-2 text-center"
      type="text"
      name="email"
      placeholder="Write Your Email Address"
      style={{ maxWidth: "100%" }}
    />
    <button
      className="fw-bold border-0 w-100"
      style={{
        backgroundColor: "#252729ff", // dark gray
        color: "#FFFFFF",
        transition: "0.3s ease",
        padding: "10px",
        borderRadius: "6px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#393a3bff"; // lighter gray
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#252729ff"; // back to dark gray
      }}
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
  </div>
</footer>

{/* FOOTER BOTTOM WITH SOCIAL ICONS LEFT AND CREDIT RIGHT */}
      <div
        style={{
          marginTop: "1px",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "#000000",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 15px",
            flexWrap: "wrap",
          }}
        >
          {/* Left: Social Icons */}
<div style={{ display: "flex", gap: "30px" }}>
  <a
    href="https://www.facebook.com/crizella7"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#ffffff", fontSize: "18px" }}
  >
    <i className="fab fa-facebook-f"></i>
  </a>

  <a
    href="https://www.instagram.com/miiikasae/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#ffffff", fontSize: "18px" }}
  >
    <i className="fab fa-instagram"></i>
  </a>

  <a
    href="https://www.figma.com/@ellisseamontes"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#ffffff", fontSize: "18px" }}
  >
    <i className="fab fa-figma"></i>
  </a>

  <a
    href="https://github.com/elrizeyah"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#ffffff", fontSize: "18px" }}
  >
    <i className="fab fa-github"></i>
  </a>

  <a
    href="https://www.linkedin.com/in/ellissea-montes-66b31b301/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#ffffff", fontSize: "18px" }}
  >
    <i className="fab fa-linkedin-in"></i>
  </a>

  <a
    href="https://www.udemy.com/user/ellissea-pasillos-montes-2/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#ffffff", fontSize: "18px" }}
  >
    <i className="fab fa-udemy"></i>
  </a>
</div>


          {/* Right: HTML Template Credit */}
          <p style={{ margin: 0 }}>
            HTML Template by:{" "}
            <a
              href="https://templatesjungle.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#DCCDBC", textDecoration: "underline"}}
            >
              TemplatesJungle
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
