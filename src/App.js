import React, { useState, useEffect } from "react";

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
    <div className="min-h-screen bg-gradient-to-br from-background-light to-background-light-blue">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg transition-all duration-300">
        <div className="container flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-primary-dark font-serif">
            Nana Ekvtimishvili
          </div>
          <ul className="flex gap-8">
            {[
              { id: "home", label: "Home" },
              { id: "bio", label: "Bio" },
              { id: "filmography", label: "Filmography" },
              { id: "literary", label: "Literary Work" },
              { id: "awards", label: "Awards" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  className={`px-4 py-2 rounded-full transition-all duration-300 font-serif ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-accent-pink to-accent-pink-dark text-white transform -translate-y-0.5"
                      : "text-primary-dark hover:bg-gradient-to-r hover:from-accent-pink hover:to-accent-pink-dark hover:text-white hover:transform hover:-translate-y-0.5"
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center gradient-bg-dark relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-96 bg-white/20 backdrop-blur-md rounded-2xl border-2 border-white/30 shadow-2xl flex flex-col justify-center items-center">
              <div className="text-3xl font-bold text-white text-center mb-4 drop-shadow-lg">
                Nana Ekvtimishvili
              </div>
              <div className="text-xl text-white/90 text-center italic">
                Film Director & Writer
              </div>
            </div>
          </div>
          <div className="text-white text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              Nana Ekvtimishvili
            </h1>
            <h2 className="text-2xl font-normal mb-8 opacity-90 italic">
              Film Director & Writer
            </h2>
            <p className="text-xl mb-12 opacity-80 leading-relaxed">
              From the heart of Georgia, telling stories that resonate with the
              human soul
            </p>
            <button
              className="btn-primary"
              onClick={() => scrollToSection("bio")}
            >
              Discover Her Story
            </button>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-24 bg-white">
        <div className="container">
          <h2 className="section-title">Biography</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2">
              <p className="text-lg mb-8 leading-relaxed text-primary">
                Nana Ekvtimishvili is a distinguished Georgian film director and
                writer, known for her profound storytelling and unique cinematic
                vision. Born and raised in Georgia, she has become one of the
                most celebrated voices in contemporary European cinema.
              </p>
              <p className="text-lg mb-8 leading-relaxed text-primary">
                Her work is characterized by its intimate portrayal of human
                relationships, particularly focusing on the lives of women and
                children in post-Soviet Georgia. Through her films and literary
                works, she explores themes of identity, memory, and the
                resilience of the human spirit.
              </p>
              <p className="text-lg mb-8 leading-relaxed text-primary">
                Nana's artistic journey began with her studies at the Shota
                Rustaveli Theatre and Film University in Tbilisi, where she
                developed her distinctive narrative style. Her films have been
                screened at prestigious international festivals including the
                Berlin International Film Festival, Cannes Film Festival, and
                the Venice Film Festival.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { number: "15+", label: "Years in Film" },
                { number: "8", label: "Feature Films" },
                { number: "12", label: "Literary Works" },
                { number: "25+", label: "International Awards" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-accent-blue to-accent-blue-dark rounded-2xl text-white shadow-lg"
                >
                  <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-sm opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filmography Section */}
      <section id="filmography" className="py-24 gradient-bg-purple text-white">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-16">Filmography</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "In Bloom",
                year: "2013",
                director: "Co-directed with Simon Groß",
                description:
                  "A coming-of-age story set in Tbilisi during the civil war of the 1990s.",
                awards: [
                  "Berlin Film Festival - Crystal Bear",
                  "European Film Awards - Discovery",
                ],
              },
              {
                title: "My Happy Family",
                year: "2017",
                director: "Co-directed with Simon Groß",
                description:
                  "A powerful drama about a woman who decides to leave her family home.",
                awards: [
                  "Sundance Film Festival - World Cinema",
                  "Berlin Film Festival - Official Selection",
                ],
              },
              {
                title: "Beginning",
                year: "2020",
                director: "Co-directed with Simon Groß",
                description:
                  "A psychological thriller exploring religious extremism in Georgia.",
                awards: [
                  "Venice Film Festival - Golden Lion Nominee",
                  "San Sebastián Film Festival - Best Film",
                ],
              },
              {
                title: "Tangerines",
                year: "2013",
                director: "Screenplay contribution",
                description: "A story of humanity during the Abkhazian war.",
                awards: ["Academy Awards - Best Foreign Language Film Nominee"],
              },
            ].map((film, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-72 bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                  <div className="text-2xl font-bold text-white text-center p-8">
                    {film.title}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">
                    {film.title} ({film.year})
                  </h3>
                  <p className="mb-4 opacity-90">{film.director}</p>
                  <p className="mb-6 leading-relaxed">{film.description}</p>
                  <div className="space-y-2">
                    {film.awards.map((award, awardIndex) => (
                      <span
                        key={awardIndex}
                        className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm text-center"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Literary Work Section */}
      <section id="literary" className="py-24 bg-white">
        <div className="container">
          <h2 className="section-title">Literary Work</h2>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-xl leading-relaxed text-primary">
              Beyond her cinematic achievements, Nana Ekvtimishvili is also an
              accomplished writer whose works have been translated into multiple
              languages. Her literary voice echoes the same themes of human
              resilience and cultural identity that define her films.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "The Pear Field",
                year: "2020",
                description:
                  "A novel about children in a state-run orphanage in Tbilisi.",
                award: "PEN Translation Prize",
              },
              {
                title: "The Georgian Chronicles",
                year: "2018",
                description:
                  "A collection of short stories exploring modern Georgian life.",
                award: "Georgian Literary Prize",
              },
              {
                title: "Voices of Tbilisi",
                year: "2015",
                description:
                  "Poetry collection reflecting the soul of the Georgian capital.",
                award: "European Poetry Prize",
              },
            ].map((book, index) => (
              <div key={index} className="card">
                <div className="h-64 bg-gradient-to-br from-accent-red to-accent-red-dark flex items-center justify-center">
                  <div className="text-xl font-bold text-white text-center p-8">
                    {book.title}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-primary-dark">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 italic mb-4">{book.year}</p>
                  <p className="mb-6 leading-relaxed text-primary">
                    {book.description}
                  </p>
                  <span className="inline-block bg-gradient-to-r from-accent-blue to-accent-blue-dark text-white px-4 py-2 rounded-full text-sm">
                    {book.award}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-24 gradient-bg-dark text-white">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-16">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">
                Film Awards
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "🏆",
                    title: "Golden Bear Nominee",
                    description:
                      "Berlin International Film Festival - Beginning (2020)",
                  },
                  {
                    icon: "🎬",
                    title: "Crystal Bear Award",
                    description:
                      "Berlin International Film Festival - In Bloom (2013)",
                  },
                  {
                    icon: "⭐",
                    title: "European Film Awards",
                    description: "Discovery Award - In Bloom (2013)",
                  },
                  {
                    icon: "🎭",
                    title: "San Sebastián Golden Shell",
                    description: "Best Film - Beginning (2020)",
                  },
                ].map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 transition-all duration-300 hover:transform hover:translate-x-2 hover:bg-white/20"
                  >
                    <div className="text-3xl min-w-[50px] text-center">
                      {award.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{award.title}</h4>
                      <p className="opacity-90">{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">
                Literary Awards
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "📚",
                    title: "PEN Translation Prize",
                    description: "The Pear Field (2020)",
                  },
                  {
                    icon: "✍️",
                    title: "Georgian Literary Prize",
                    description: "The Georgian Chronicles (2018)",
                  },
                  {
                    icon: "🌍",
                    title: "European Poetry Prize",
                    description: "Voices of Tbilisi (2015)",
                  },
                  {
                    icon: "🏛️",
                    title: "Order of Honor",
                    description: "Government of Georgia (2019)",
                  },
                ].map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 transition-all duration-300 hover:transform hover:translate-x-2 hover:bg-white/20"
                  >
                    <div className="text-3xl min-w-[50px] text-center">
                      {award.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{award.title}</h4>
                      <p className="opacity-90">{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-4">Nana Ekvtimishvili</h4>
              <p className="mb-2 opacity-80">Film Director & Writer</p>
              <p className="opacity-80">From Georgia to the World</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <p className="mb-2 opacity-80">
                For inquiries and collaborations
              </p>
              <p className="opacity-80">
                Represented by international agencies
              </p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-4">Follow</h4>
              <p className="mb-2 opacity-80">International Film Festivals</p>
              <p className="opacity-80">Literary Events & Readings</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/10">
            <p className="opacity-70">
              &copy; 2025 Nana Ekvtimishvili. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
