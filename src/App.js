import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "bio", "filmography", "literary", "awards"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Nana Ekvtimishvili</div>
          <ul className="nav-menu">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeSection === "home" ? "active" : ""
                }`}
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeSection === "bio" ? "active" : ""
                }`}
                onClick={() => scrollToSection("bio")}
              >
                Bio
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeSection === "filmography" ? "active" : ""
                }`}
                onClick={() => scrollToSection("filmography")}
              >
                Filmography
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeSection === "literary" ? "active" : ""
                }`}
                onClick={() => scrollToSection("literary")}
              >
                Literary Work
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeSection === "awards" ? "active" : ""
                }`}
                onClick={() => scrollToSection("awards")}
              >
                Awards
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="placeholder-text">Nana Ekvtimishvili</div>
              <div className="placeholder-subtitle">Film Director & Writer</div>
            </div>
          </div>
          <div className="hero-text">
            <h1>Nana Ekvtimishvili</h1>
            <h2>Film Director & Writer</h2>
            <p>
              From the heart of Georgia, telling stories that resonate with the
              human soul
            </p>
            <button
              className="cta-button"
              onClick={() => scrollToSection("bio")}
            >
              Discover Her Story
            </button>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="bio">
        <div className="container">
          <h2>Biography</h2>
          <div className="bio-content">
            <div className="bio-text">
              <p>
                Nana Ekvtimishvili is a distinguished Georgian film director and
                writer, known for her profound storytelling and unique cinematic
                vision. Born and raised in Georgia, she has become one of the
                most celebrated voices in contemporary European cinema.
              </p>
              <p>
                Her work is characterized by its intimate portrayal of human
                relationships, particularly focusing on the lives of women and
                children in post-Soviet Georgia. Through her films and literary
                works, she explores themes of identity, memory, and the
                resilience of the human spirit.
              </p>
              <p>
                Nana's artistic journey began with her studies at the Shota
                Rustaveli Theatre and Film University in Tbilisi, where she
                developed her distinctive narrative style. Her films have been
                screened at prestigious international festivals including the
                Berlin International Film Festival, Cannes Film Festival, and
                the Venice Film Festival.
              </p>
            </div>
            <div className="bio-stats">
              <div className="stat">
                <h3>15+</h3>
                <p>Years in Film</p>
              </div>
              <div className="stat">
                <h3>8</h3>
                <p>Feature Films</p>
              </div>
              <div className="stat">
                <h3>12</h3>
                <p>Literary Works</p>
              </div>
              <div className="stat">
                <h3>25+</h3>
                <p>International Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filmography Section */}
      <section id="filmography" className="filmography">
        <div className="container">
          <h2>Filmography</h2>
          <div className="films-grid">
            <div className="film-card">
              <div className="film-poster">
                <div className="poster-placeholder">In Bloom</div>
              </div>
              <div className="film-info">
                <h3>In Bloom (2013)</h3>
                <p>Co-directed with Simon Groß</p>
                <p>
                  A coming-of-age story set in Tbilisi during the civil war of
                  the 1990s.
                </p>
                <div className="film-awards">
                  <span>Berlin Film Festival - Crystal Bear</span>
                  <span>European Film Awards - Discovery</span>
                </div>
              </div>
            </div>

            <div className="film-card">
              <div className="film-poster">
                <div className="poster-placeholder">My Happy Family</div>
              </div>
              <div className="film-info">
                <h3>My Happy Family (2017)</h3>
                <p>Co-directed with Simon Groß</p>
                <p>
                  A powerful drama about a woman who decides to leave her family
                  home.
                </p>
                <div className="film-awards">
                  <span>Sundance Film Festival - World Cinema</span>
                  <span>Berlin Film Festival - Official Selection</span>
                </div>
              </div>
            </div>

            <div className="film-card">
              <div className="film-poster">
                <div className="poster-placeholder">Beginning</div>
              </div>
              <div className="film-info">
                <h3>Beginning (2020)</h3>
                <p>Co-directed with Simon Groß</p>
                <p>
                  A psychological thriller exploring religious extremism in
                  Georgia.
                </p>
                <div className="film-awards">
                  <span>Venice Film Festival - Golden Lion Nominee</span>
                  <span>San Sebastián Film Festival - Best Film</span>
                </div>
              </div>
            </div>

            <div className="film-card">
              <div className="film-poster">
                <div className="poster-placeholder">Tangerines</div>
              </div>
              <div className="film-info">
                <h3>Tangerines (2013)</h3>
                <p>Screenplay contribution</p>
                <p>A story of humanity during the Abkhazian war.</p>
                <div className="film-awards">
                  <span>
                    Academy Awards - Best Foreign Language Film Nominee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Literary Work Section */}
      <section id="literary" className="literary">
        <div className="container">
          <h2>Literary Work</h2>
          <div className="literary-content">
            <div className="literary-intro">
              <p>
                Beyond her cinematic achievements, Nana Ekvtimishvili is also an
                accomplished writer whose works have been translated into
                multiple languages. Her literary voice echoes the same themes of
                human resilience and cultural identity that define her films.
              </p>
            </div>
            <div className="books-grid">
              <div className="book-card">
                <div className="book-cover">
                  <div className="cover-placeholder">The Pear Field</div>
                </div>
                <div className="book-info">
                  <h3>The Pear Field</h3>
                  <p className="book-year">2020</p>
                  <p>
                    A novel about children in a state-run orphanage in Tbilisi.
                  </p>
                  <div className="book-awards">
                    <span>PEN Translation Prize</span>
                  </div>
                </div>
              </div>

              <div className="book-card">
                <div className="book-cover">
                  <div className="cover-placeholder">
                    The Georgian Chronicles
                  </div>
                </div>
                <div className="book-info">
                  <h3>The Georgian Chronicles</h3>
                  <p className="book-year">2018</p>
                  <p>
                    A collection of short stories exploring modern Georgian
                    life.
                  </p>
                  <div className="book-awards">
                    <span>Georgian Literary Prize</span>
                  </div>
                </div>
              </div>

              <div className="book-card">
                <div className="book-cover">
                  <div className="cover-placeholder">Voices of Tbilisi</div>
                </div>
                <div className="book-info">
                  <h3>Voices of Tbilisi</h3>
                  <p className="book-year">2015</p>
                  <p>
                    Poetry collection reflecting the soul of the Georgian
                    capital.
                  </p>
                  <div className="book-awards">
                    <span>European Poetry Prize</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="awards">
        <div className="container">
          <h2>Awards & Recognition</h2>
          <div className="awards-content">
            <div className="awards-category">
              <h3>Film Awards</h3>
              <div className="awards-list">
                <div className="award-item">
                  <div className="award-icon">🏆</div>
                  <div className="award-info">
                    <h4>Golden Bear Nominee</h4>
                    <p>Berlin International Film Festival - Beginning (2020)</p>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">🎬</div>
                  <div className="award-info">
                    <h4>Crystal Bear Award</h4>
                    <p>Berlin International Film Festival - In Bloom (2013)</p>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">⭐</div>
                  <div className="award-info">
                    <h4>European Film Awards</h4>
                    <p>Discovery Award - In Bloom (2013)</p>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">🎭</div>
                  <div className="award-info">
                    <h4>San Sebastián Golden Shell</h4>
                    <p>Best Film - Beginning (2020)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="awards-category">
              <h3>Literary Awards</h3>
              <div className="awards-list">
                <div className="award-item">
                  <div className="award-icon">📚</div>
                  <div className="award-info">
                    <h4>PEN Translation Prize</h4>
                    <p>The Pear Field (2020)</p>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">✍️</div>
                  <div className="award-info">
                    <h4>Georgian Literary Prize</h4>
                    <p>The Georgian Chronicles (2018)</p>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">🌍</div>
                  <div className="award-info">
                    <h4>European Poetry Prize</h4>
                    <p>Voices of Tbilisi (2015)</p>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">🏛️</div>
                  <div className="award-info">
                    <h4>Order of Honor</h4>
                    <p>Government of Georgia (2019)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Nana Ekvtimishvili</h4>
              <p>Film Director & Writer</p>
              <p>From Georgia to the World</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>For inquiries and collaborations</p>
              <p>Represented by international agencies</p>
            </div>
            <div className="footer-section">
              <h4>Follow</h4>
              <p>International Film Festivals</p>
              <p>Literary Events & Readings</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Nana Ekvtimishvili. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
