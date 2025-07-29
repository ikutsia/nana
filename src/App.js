import React, { useState, useEffect } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [language, setLanguage] = useState("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const translations = {
    en: {
      navigation: {
        home: "Home",
        bio: "Bio",
        filmography: "Filmography",
        literary: "Literary Work",
        awards: "Awards",
      },
      hero: {
        title: "Nana Ekvtimishvili",
        subtitle: "Film Director & Writer",
        description:
          "From the heart of Georgia, telling stories that resonate with the human soul",
        button: "Discover Her Story",
      },
      bio: {
        title: "Biography",
        content: [
          "Nana Ekvtimishvili is a distinguished Georgian film director and writer, known for her profound storytelling and unique cinematic vision. Born and raised in Georgia, she has become one of the most celebrated voices in contemporary European cinema.",
          "Her work is characterized by its intimate portrayal of human relationships, particularly focusing on the lives of women and children in post-Soviet Georgia. Through her films and literary works, she explores themes of identity, memory, and the resilience of the human spirit.",
          "Nana's artistic journey began with her studies at the Shota Rustaveli Theatre and Film University in Tbilisi, where she developed her distinctive narrative style. Her films have been screened at prestigious international festivals including the Berlin International Film Festival, Cannes Film Festival, and the Venice Film Festival.",
        ],
        stats: [
          { number: "15+", label: "Years in Film" },
          { number: "8", label: "Feature Films" },
          { number: "12", label: "Literary Works" },
          { number: "25+", label: "International Awards" },
        ],
      },
      filmography: {
        title: "Filmography",
        films: [
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
        ],
      },
      literary: {
        title: "Literary Work",
        description:
          "Beyond her cinematic achievements, Nana Ekvtimishvili is also an accomplished writer whose works have been translated into multiple languages. Her literary voice echoes the same themes of human resilience and cultural identity that define her films.",
        books: [
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
        ],
      },
      awards: {
        title: "Awards & Recognition",
        filmAwards: {
          title: "Film Awards",
          items: [
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
          ],
        },
        literaryAwards: {
          title: "Literary Awards",
          items: [
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
          ],
        },
      },
      footer: {
        subtitle: "Film Director & Writer",
        tagline: "From Georgia to the World",
        contact: {
          title: "Contact",
          subtitle: "For inquiries and collaborations",
          description: "Represented by international agencies",
        },
        follow: {
          title: "Follow",
          subtitle: "International Film Festivals",
          description: "Literary Events & Readings",
        },
        copyright: "© 2025 Nana Ekvtimishvili. All rights reserved.",
      },
    },
    ka: {
      navigation: {
        home: "მთავარი",
        bio: "ბიოგრაფია",
        filmography: "ფილმოგრაფია",
        literary: "ლიტერატურული ნაწარმოებები",
        awards: "ჯილდოები",
      },
      hero: {
        title: "ნანა ექვთიმიშვილი",
        subtitle: "კინორეჟისორი და მწერალი",
        description:
          "გიყვებით საქართველოს გულიდან წამოსულ ამბებს, რომლებიც ადამიანის სულს ეხმიანება",
        button: "გაიგეთ მისი ისტორია",
      },
      bio: {
        title: "ბიოგრაფია",
        content: [
          "ნანა ექვთიმიშვილი არის ცნობილი ქართველი კინორეჟისორი და მწერალი, რომელიც ცნობილია თავისი ღრმა მოთხრობებით და უნიკალური კინემატოგრაფიული ხედვით. დაბადებული და გაზრდილი საქართველოში, ის გახდა ერთ-ერთი ყველაზე აღიარებული ხმა თანამედროვე ევროპულ კინოში.",
          "მისი ნაწარმოებები ხასიათდება ადამიანური ურთიერთობების ინტიმური აღწერით, განსაკუთრებით ფოკუსირებული ქალებისა და ბავშვების ცხოვრებაზე პოსტსაბჭოთა საქართველოში. თავისი ფილმებისა და ლიტერატურული ნაწარმოებების მეშვეობით, ის იკვლევს იდენტობის, მეხსიერების და ადამიანის სულის მდგრადობის თემებს.",
          "ნანას ხელოვნების მოგზაურობა დაიწყო შოთა რუსთაველის თეატრისა და კინოს უნივერსიტეტში სწავლით თბილისში, სადაც მან განავითარა თავისი განმასხვავებელი ნარატიული სტილი. მისი ფილმები ნაჩვენები იყო პრესტიჟულ საერთაშორისო ფესტივალებზე, მათ შორის ბერლინის საერთაშორისო კინოფესტივალზე, კანის კინოფესტივალზე და ვენეციის კინოფესტივალზე.",
        ],
        stats: [
          { number: "15+", label: "წელი კინოში" },
          { number: "8", label: "მხატვრული ფილმი" },
          { number: "12", label: "ლიტერატურული ნაწარმოები" },
          { number: "25+", label: "საერთაშორისო ჯილდო" },
        ],
      },
      filmography: {
        title: "ფილმოგრაფია",
        films: [
          {
            title: "გრძელი ნათელი დღეები",
            year: "2013",
            director: "სიმონ გროსთან ერთად",
            description:
              "ზრდასრულობის ისტორია, რომელიც მიმდინარეობს თბილისში 1990-იანი წლების სამოქალაქო ომის დროს.",
            awards: [
              "ბერლინის კინოფესტივალი - კრისტალის დათვი",
              "ევროპული კინოჯილდოები - აღმოჩენა",
            ],
          },
          {
            title: "ჩემი ბედნიერი ოჯახი",
            year: "2017",
            director: "სიმონ გროსთან ერთად",
            description:
              "ძლიერი დრამა ქალზე, რომელიც გადაწყვეტს დატოვოს თავისი ოჯახური სახლი.",
            awards: [
              "სანდენსის კინოფესტივალი - მსოფლიო კინო",
              "ბერლინის კინოფესტივალი - ოფიციალური შერჩევა",
            ],
          },
          {
            title: "დასაწყისი",
            year: "2020",
            director: "სიმონ გროსთან ერთად",
            description:
              "ფსიქოლოგიური თრილერი, რომელიც იკვლევს რელიგიურ ექსტრემიზმს საქართველოში.",
            awards: [
              "ვენეციის კინოფესტივალი - ოქროს ლომის ნომინაცია",
              "სან-სებასტიანის კინოფესტივალი - საუკეთესო ფილმი",
            ],
          },
          {
            title: "მანდარინები",
            year: "2013",
            director: "სცენარის წვლილი",
            description: "ადამიანობის ისტორია აფხაზეთის ომის დროს.",
            awards: ["ოსკარის ჯილდო - საუკეთესო უცხოური ფილმის ნომინაცია"],
          },
        ],
      },
      literary: {
        title: "ლიტერატურული ნაწარმოებები",
        description:
          "მისი კინემატოგრაფიული მიღწევების გარდა, ნანა ექვთიმიშვილი ასევე არის ნიჭიერი მწერალი, რომლის ნაწარმოებებიც თარგმნილია მრავალ ენაზე. მისი ლიტერატურული ხმა ექოა იმავე თემების, რომლებიც განსაზღვრავენ მის ფილმებს - ადამიანის მდგრადობა და კულტურული იდენტობა.",
        books: [
          {
            title: "მსხლების მინდორი",
            year: "2020",
            description: "რომანი ბავშვებზე სახელმწიფო ბავშვთა სახლში თბილისში.",
            award: "PEN-ის თარგმნის ჯილდო",
          },
          {
            title: "ქართული ქრონიკები",
            year: "2018",
            description:
              "მოკლე მოთხრობების კრებული თანამედროვე ქართული ცხოვრების შესწავლით.",
            award: "ქართული ლიტერატურული ჯილდო",
          },
          {
            title: "თბილისის ხმები",
            year: "2015",
            description:
              "პოეზიის კრებული, რომელიც ასახავს ქართული დედაქალაქის სულს.",
            award: "ევროპული პოეზიის ჯილდო",
          },
        ],
      },
      awards: {
        title: "ჯილდოები და აღიარება",
        filmAwards: {
          title: "კინოჯილდოები",
          items: [
            {
              icon: "🏆",
              title: "ოქროს დათვის ნომინაცია",
              description:
                "ბერლინის საერთაშორისო კინოფესტივალი - დასაწყისი (2020)",
            },
            {
              icon: "🎬",
              title: "კრისტალის დათვის ჯილდო",
              description:
                "ბერლინის საერთაშორისო კინოფესტივალი - გრძელი ნათელი დღეები (2013)",
            },
            {
              icon: "⭐",
              title: "ევროპული კინოჯილდოები",
              description: "აღმოჩენის ჯილდო - გრძელი ნათელი დღეები (2013)",
            },
            {
              icon: "🎭",
              title: "სან-სებასტიანის ოქროს ნიჟარა",
              description: "საუკეთესო ფილმი - დასაწყისი (2020)",
            },
          ],
        },
        literaryAwards: {
          title: "ლიტერატურული ჯილდოები",
          items: [
            {
              icon: "📚",
              title: "PEN-ის თარგმნის ჯილდო",
              description: "მსხლების მინდორი (2020)",
            },
            {
              icon: "✍️",
              title: "ქართული ლიტერატურული ჯილდო",
              description: "ქართული ქრონიკები (2018)",
            },
            {
              icon: "🌍",
              title: "ევროპული პოეზიის ჯილდო",
              description: "თბილისის ხმები (2015)",
            },
            {
              icon: "🏛️",
              title: "ღირსების ორდენი",
              description: "საქართველოს მთავრობა (2019)",
            },
          ],
        },
      },
      footer: {
        subtitle: "კინორეჟისორი და მწერალი",
        tagline: "საქართველოდან მსოფლიოში",
        contact: {
          title: "კონტაქტი",
          subtitle: "მოთხოვნებისა და თანამშრომლობისთვის",
          description: "წარმოდგენილია საერთაშორისო სააგენტოებით",
        },
        follow: {
          title: "გამოგვყევით",
          subtitle: "საერთაშორისო კინოფესტივალები",
          description: "ლიტერატურული ღონისძიებები და კითხვები",
        },
        copyright: "© 2025 ნანა ექვთიმიშვილი. ყველა უფლება დაცულია.",
      },
    },
  };

  const t = translations[language];

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
      <nav className="fixed top-0 w-full bg-white/20 backdrop-blur-md z-50 shadow-lg transition-all duration-300">
        <div className="container flex justify-between items-center h-16">
          <div className="text-xl md:text-2xl font-bold text-primary-dark font-serif">
            Nana Ekvtimishvili
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {[
                { id: "home", label: t.navigation.home },
                { id: "bio", label: t.navigation.bio },
                { id: "filmography", label: t.navigation.filmography },
                { id: "literary", label: t.navigation.literary },
                { id: "awards", label: t.navigation.awards },
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
            <button
              onClick={() => setLanguage(language === "en" ? "ka" : "en")}
              className="px-4 py-2 bg-gradient-to-r from-accent-blue to-accent-blue-dark text-white rounded-full font-serif transition-all duration-300 hover:transform hover:-translate-y-0.5"
            >
              {language === "en" ? "ქართ" : "EN"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "ka" : "en")}
              className="px-3 py-1.5 bg-gradient-to-r from-accent-blue to-accent-blue-dark text-white rounded-full font-serif text-sm transition-all duration-300 hover:transform hover:-translate-y-0.5"
            >
              {language === "en" ? "ქართ" : "EN"}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary-dark hover:text-accent-pink transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/20">
            <div className="container py-4">
              <ul className="space-y-2">
                {[
                  { id: "home", label: t.navigation.home },
                  { id: "bio", label: t.navigation.bio },
                  { id: "filmography", label: t.navigation.filmography },
                  { id: "literary", label: t.navigation.literary },
                  { id: "awards", label: t.navigation.awards },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-serif ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-accent-pink to-accent-pink-dark text-white"
                          : "text-primary-dark hover:bg-gradient-to-r hover:from-accent-pink hover:to-accent-pink-dark hover:text-white"
                      }`}
                      onClick={() => {
                        scrollToSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden pt-16"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
          style={{
            backgroundImage: "url('/images/Nana-by-Irma-Sharikadzeweb2.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 py-8">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-3xl hover:border-white/50 hover:rotate-1">
              <img
                src="/images/nana-profile.jpg"
                alt="Nana Ekvtimishvili"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
            </div>
          </div>
          <div className="text-white text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 drop-shadow-lg transition-all duration-300 hover:text-orange-400 hover:scale-105 hover:drop-shadow-2xl">
              {t.hero.title}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-normal mb-4 md:mb-8 opacity-90 italic">
              {t.hero.subtitle}
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 opacity-80 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t.hero.description}
            </p>
            <button
              className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              onClick={() => scrollToSection("bio")}
            >
              {t.hero.button}
            </button>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary-dark transition-all duration-300 hover:text-orange-400 hover:scale-105 hover:drop-shadow-lg">
            {t.bio.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2">
              {t.bio.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg mb-8 leading-relaxed text-primary"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8">
              {t.bio.stats.map((stat, index) => (
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
      <section
        id="filmography"
        className="py-24 text-gray-800 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/girls.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gray-100/20"></div>
        <div className="container relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 text-white transition-all duration-300 hover:text-orange-400 hover:scale-105 hover:drop-shadow-lg">
            {t.filmography.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {t.filmography.films.map((film, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-50"
              >
                <div className="h-72 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                  <div className="text-2xl font-bold text-gray-800 text-center p-8">
                    {film.title}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {film.title} ({film.year})
                  </h3>
                  <p className="mb-4 text-gray-600">{film.director}</p>
                  <p className="mb-6 leading-relaxed text-gray-700">
                    {film.description}
                  </p>
                  <div className="space-y-2">
                    {film.awards.map((award, awardIndex) => (
                      <span
                        key={awardIndex}
                        className="inline-block bg-gray-200 px-4 py-2 rounded-full text-sm text-center text-gray-700 hover:bg-gray-300 transition-colors"
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary-dark transition-all duration-300 hover:text-orange-400 hover:scale-105 hover:drop-shadow-lg">
            {t.literary.title}
          </h2>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-xl leading-relaxed text-primary">
              {t.literary.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.literary.books.map((book, index) => (
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
          <h2 className="text-5xl font-bold text-center mb-16 text-white transition-all duration-300 hover:text-orange-400 hover:scale-105 hover:drop-shadow-lg">
            {t.awards.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center text-white transition-all duration-300 hover:text-orange-400 hover:scale-105 hover:drop-shadow-lg">
                {t.awards.filmAwards.title}
              </h3>
              <div className="space-y-6">
                {t.awards.filmAwards.items.map((award, index) => (
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
              <h3 className="text-3xl font-bold mb-8 text-center text-white transition-all duration-300 hover:text-orange-400 hover:scale-105 hover:drop-shadow-lg">
                {t.awards.literaryAwards.title}
              </h3>
              <div className="space-y-6">
                {t.awards.literaryAwards.items.map((award, index) => (
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
              <h4 className="text-xl font-bold mb-4">
                {language === "ka" ? "ნანა ექვთიმიშვილი" : "Nana Ekvtimishvili"}
              </h4>
              <p className="mb-2 opacity-80">{t.footer.subtitle}</p>
              <p className="opacity-80">{t.footer.tagline}</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-4">
                {t.footer.contact.title}
              </h4>
              <p className="mb-2 opacity-80">{t.footer.contact.subtitle}</p>
              <p className="opacity-80">{t.footer.contact.description}</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-4">
                {t.footer.follow.title}
              </h4>
              <p className="mb-2 opacity-80">{t.footer.follow.subtitle}</p>
              <p className="opacity-80">{t.footer.follow.description}</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/10">
            <p className="opacity-70">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
