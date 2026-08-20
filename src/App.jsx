import { useEffect, useRef } from "react";
import "./index.css";

export default function App() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let frameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform =
        `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;

      ring.style.transform =
        `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      frameId = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    frameId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="app">

      {/* CURSOR */}
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />

      {/* BACKGROUND */}
      <div className="background">
        <div className="glow glow-one" />
        <div className="glow glow-two" />
        <div className="glow glow-three" />
        <div className="grid" />
      </div>

      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="logo">
          SR<span>.</span>
        </div>

        <div className="nav-links">
          <button onClick={() => scrollTo("home")}>
            Home
          </button>

          <button onClick={() => scrollTo("about")}>
            About
          </button>

          <button onClick={() => scrollTo("skills")}>
            Skills
          </button>

          <button onClick={() => scrollTo("projects")}>
            Projects
          </button>

          <button onClick={() => scrollTo("experience")}>
            Experience
          </button>

          <button onClick={() => scrollTo("contact")}>
            Contact
          </button>
        </div>

        <button
          className="talk-btn"
          onClick={() => scrollTo("contact")}
        >
          Let's Talk
        </button>
      </nav>

      <main>

        {/* HERO */}
        <section id="home" className="hero">

          <div className="hero-content">

            <div className="status">
              <span />
              Available for opportunities
            </div>

            <p className="eyebrow">
              COMPUTER SCIENCE ENGINEERING STUDENT
            </p>

            <h1>
              Hi, I'm
              <br />

              <span className="gradient-text">
                Sandeep
              </span>

              <br />

              <span className="gradient-text">
                Reddy.
              </span>
            </h1>

            <h2>
              I build things
              <br />
              for the web.
            </h2>

            <p className="hero-description">
              I'm a Computer Science Engineering student passionate
              about building modern web applications, exploring
              technology and creating real-world digital products.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-btn"
                onClick={() => scrollTo("projects")}
              >
                View My Work →
              </button>

              <button
                className="secondary-btn"
                onClick={() => scrollTo("contact")}
              >
                Contact Me
              </button>

            </div>

            <div className="socials">
              <span>GitHub</span>
              <span>LinkedIn</span>
              <span>Instagram</span>
            </div>

          </div>

          {/* ORBIT */}
          <div className="orbit-area">

            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />
            <div className="orbit orbit-3" />

            <div className="orbit-center">
              <span>SR</span>
            </div>

            <div className="orbit-dot dot-one" />
            <div className="orbit-dot dot-two" />
            <div className="orbit-dot dot-three" />

            <div className="info-card card-one">
              <strong>3rd Year</strong>
              <small>CSE Student</small>
            </div>

            <div className="info-card card-two">
              <strong>2+</strong>
              <small>Years Trading</small>
            </div>

            <div className="info-card card-three">
              <strong>10+</strong>
              <small>Projects</small>
            </div>

          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="content-section">

          <p className="section-label">
            01 — ABOUT ME
          </p>

          <h2>
            More than just code.
          </h2>

          <p className="large-text">
            I'm Sandeep Reddy, a Computer Science Engineering student
            at KL University. I enjoy turning ideas into useful digital
            experiences while continuously learning and improving.
          </p>

          <div className="about-grid">

            <div className="glass-card">
              <span className="card-number">01</span>

              <h3>Education</h3>

              <p>B.Tech — CSE</p>

              <small>
                KL University
              </small>
            </div>

            <div className="glass-card">
              <span className="card-number">02</span>

              <h3>Development</h3>

              <p>Web Developer</p>

              <small>
                React · JavaScript · Modern UI
              </small>
            </div>

            <div className="glass-card">
              <span className="card-number">03</span>

              <h3>Trading</h3>

              <p>Price Action Trader</p>

              <small>
                2+ years of market experience
              </small>
            </div>

          </div>

        </section>

        {/* SKILLS */}
        <section id="skills" className="content-section">

          <p className="section-label">
            02 — SKILLS
          </p>

          <h2>
            What I work with.
          </h2>

          <div className="skills">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">Node.js</div>
            <div className="skill">Java</div>
            <div className="skill">SQL</div>
            <div className="skill">Git</div>
          </div>

        </section>

        {/* PROJECTS */}
        <section id="projects" className="content-section">

          <p className="section-label">
            03 — PROJECTS
          </p>

          <h2>
            Things I've built.
          </h2>

          <div className="projects">

            <div className="project-card">
              <span>01</span>

              <h3>
                Career Guidance Platform
              </h3>

              <p>
                A platform designed to help students explore careers,
                mentors and useful resources.
              </p>

              <div className="tags">
                React · Node.js · PostgreSQL
              </div>
            </div>

            <div className="project-card">
              <span>02</span>

              <h3>
                Trading Journal
              </h3>

              <p>
                A personal trading journal for tracking trades,
                performance and trading statistics.
              </p>

              <div className="tags">
                React · JavaScript · Charts
              </div>
            </div>

            <div className="project-card">
              <span>03</span>

              <h3>
                Portfolio Website
              </h3>

              <p>
                This portfolio website showcasing my development,
                projects and experience.
              </p>

              <div className="tags">
                React · CSS · Vite
              </div>
            </div>

          </div>

        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="content-section">

          <p className="section-label">
            04 — EXPERIENCE
          </p>

          <h2>
            My journey.
          </h2>

          <div className="timeline">

            <div className="timeline-item">
              <span>
                2025 — Present
              </span>

              <h3>
                Computer Science Student
              </h3>

              <p>
                KL University · B.Tech CSE
              </p>
            </div>

            <div className="timeline-item">
              <span>
                2025 — Present
              </span>

              <h3>
                Price Action Trader
              </h3>

              <p>
                Studying and practicing market structure,
                price action and risk management.
              </p>
            </div>

            <div className="timeline-item">
              <span>
                Present
              </span>

              <h3>
                Web Developer
              </h3>

              <p>
                Building modern web applications and experimenting
                with new technologies.
              </p>
            </div>

          </div>

        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">

          <p className="section-label">
            05 — CONTACT
          </p>

          <h2>
            Let's build something.
          </h2>

          <p>
            Have an idea, project or opportunity?
            Let's talk.
          </p>

          <button
            className="primary-btn"
            onClick={() => {
              window.location.href =
                "mailto:your-email@example.com";
            }}
          >
            Contact Me →
          </button>

          <div className="resume-box">
  <span>📄</span>

  <div>
    <strong>Resume</strong>
    <small>View my latest resume</small>
  </div>

  <a
    href="/Sandeep-Reddy-Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-btn"
  >
    View Resume →
  </a>
</div>
        </section>

      </main>

      <footer>
        <span>
          © 2026 Sandeep Reddy
        </span>

        <span>
          Built with React
        </span>
      </footer>

    </div>
  );
}