// src/i18n.js
"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Keep last chosen language (optional)
const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // --- Header ---
        header: {
        home: "Home",
        portfolio: "About",
        services: "Journey",
        about: "skills",  
        contact: "Contact",
        },

        // --- Home ---
        home: {
          hi: "Hi, I'm Anass Sibbi",
          role: "Full Stack Developer",
          text: "I love turning data into smart solutions",
          hire: "Hire Me",
          talk: "Let's Talk",
          download: "Download CV",
        },

        // --- About ---
        about: {
          title: "About",
          titleSpan: "Me",
          role: "Fullstack Developer!",
          text:
            "I am a 20-year-old aspiring professional from Settat, Morocco. With a passion for technology and digital development, I strive to expand my skills and contribute to innovative projects. I love creating smooth, responsive user interfaces that provide meaningful experiences.",
          readMore: "Read More",
        },

        // --- Skills ---
        skills: {
          my: "My",
          titleSpan: "Skills",
          backend: "Back-end",
          frontend: "Front-end",
          php: "PHP",
          sql: "SQL",
          laravel: "Laravel",
          mongodb: "MongoDB",
          html: "HTML",
          css: "CSS - Bootstrap",
          js: "JavaScript",
          react: "React",
        },

        // --- Journey ---
        journey: {
          my: "My",
          titleSpan: "Journey",
          education: "Education",
          experience: "Professional Experience",

          edu1: {
            date: "Sep 2024 – Jun 2025 (in progress)",
            title: "Bachelor of Excellence in Digital Security and Law",
            subtitle: "Université Hassan 1er, Settat – Morocco",
            items: [
              "Personal data protection",
              "E-Government administration",
              "Information systems security",
              "Digital contractual practices",
            ],
          },
          edu2: {
            date: "Sep 2022 – Jul 2024",
            title: "Specialized Technician in Digital Development",
            subtitle: "ISTA 2, Settat – Morocco",
            items: [
              "Front-end and back-end development",
              "Data management",
              "Agile approach",
            ],
          },
          edu3: {
            date: "Sep 2021 – Jun 2022",
            title: "Baccalaureate in Life and Earth Sciences",
            subtitle: "Lycée Al Amal, Settat – Morocco",
            items: [
              "Physics",
              "Mathematics",
              "Life and earth sciences",
              "English, French",
            ],
          },

          exp1: {
            date: "Dec 2024 – Apr 2025",
            title: "Freelance Web Developer",
            subtitle: "",
            items: [
              "Design, development, and maintenance of websites in React",
              "Use of Git and GitHub for versioning",
            ],
          },
          exp2: {
            date: "Apr 2024 – May 2024",
            title: "Web Development Internship",
            subtitle: "Batihold GmbH, Casablanca – Morocco",
            items: [
              "Website development with Laravel",
              "Version control and maintenance",
            ],
          },
          exp3: {
  date: "Jui 2025 –  Now",
  title: "Customer Support at Shein.de",
  subtitle: "Outsourcia, Casablanca – Morocco",
  items: [
    "Enhanced communication skills and improved proficiency in the German language",
    "Handled customer inquiries and provided appropriate solutions",
  ],
},

        },

        // --- Contact form ---
        sendEmail: "Send Email",
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Submit",
        sending: "Sending...",
        success: "Message sent — thank you.",
        error: "Failed to send: {{error}}",
      },
    },

    de: {
      translation: {
        // --- Header ---
            header: {
      home: "Startseite",
      portfolio: "Über mich", 
      services: "Werdegang",   
      about: "Fähigkeiten",    
      contact: "Kontakt",
    },
        // --- Home ---
        home: {
          hi: "Hallo, ich bin Anass Sibbi",
          role: "Full-Stack Developer",
          text: "Ich liebe es, Daten in intelligente Lösungen zu verwandeln",
          hire: "Einstellen",
          talk: "Lass uns reden",
          download: "Lebenslauf herunterladen",
        },

        // --- Über mich ---
        about: {
          title: "Über",
          titleSpan: "Mich",
          role: "Fullstack-Entwickler!",
          text:
            "Ich bin ein 20-jähriger angehender Fachmann aus Settat, Marokko. Mit einer Leidenschaft für Technologie und digitale Entwicklung möchte ich meine Fähigkeiten erweitern und zu innovativen Projekten beitragen. Ich liebe es, flüssige, responsive Benutzeroberflächen zu erstellen, die bedeutungsvolle Erlebnisse bieten.",
          readMore: "Mehr erfahren",
        },

        // --- Fähigkeiten ---
        skills: {
          my: "Meine",
          titleSpan: "Fähigkeiten",
          backend: "Back-end",
          frontend: "Front-end",
          php: "PHP",
          sql: "SQL",
          laravel: "Laravel",
          mongodb: "MongoDB",
          html: "HTML",
          css: "CSS - Bootstrap",
          js: "JavaScript",
          react: "React",
        },

        // --- Werdegang ---
        journey: {
          my: "Mein",
          titleSpan: "Werdegang",
          education: "Ausbildung",
          experience: "Berufserfahrung",

          edu1: {
            date: "Sep 2024 – Jun 2025 (laufend)",
            title: "Lizenz für Exzellenz in Digitaler Sicherheit und Recht",
            subtitle: "Université Hassan 1er, Settat – Marokko",
            items: [
              "Schutz personenbezogener Daten",
              "Elektronische Verwaltung",
              "Sicherheit von Informationssystemen",
              "Digitale Vertragspraktiken",
            ],
          },
          edu2: {
            date: "Sep 2022 – Jul 2024",
            title: "Fachtechniker in Digitaler Entwicklung",
            subtitle: "ISTA 2, Settat – Marokko",
            items: [
              "Front- und Back-End-Entwicklung",
              "Datenverwaltung",
              "Agile Methoden",
            ],
          },
          edu3: {
            date: "Sep 2021 – Jun 2022",
            title: "Abitur in Naturwissenschaften",
            subtitle: "Lycée Al Amal, Settat – Marokko",
            items: [
              "Physik",
              "Mathematik",
              "Naturwissenschaften",
              "Englisch, Französisch",
            ],
          },

          exp1: {
            date: "Dez 2024 – Apr 2025",
            title: "Freiberuflicher Webentwickler",
            subtitle: "",
            items: [
              "Konzeption, Entwicklung und Pflege von Websites mit React",
              "Verwendung von Git und GitHub für Versionierung",
            ],
          },
          exp2: {
            date: "Apr 2024 – Mai 2024",
            title: "Praktikum Webentwicklung",
            subtitle: "Batihold GmbH, Casablanca – Marokko",
            items: [
              "Website-Entwicklung mit Laravel",
              "Versionskontrolle und Wartung",
            ],
          },
          exp3: {
  date: "Jui 2025 – Jetzt",
  title: "Kundenbetreuung bei Shein.de",
  subtitle: "Outsourcia, Casablanca – Marokko",
  items: [
    "Vertiefung und Verbesserung der Kommunikationsfähigkeiten sowie der deutschen Sprache",
    "Bearbeitung von Kundenanfragen und Anbieten passender Lösungen",
  ],
},

        },

        // --- Kontaktformular ---
        sendEmail: "E-Mail senden",
        name: "Name",
        email: "E-Mail",
        message: "Nachricht",
        submit: "Absenden",
        sending: "Senden...",
        success: "Nachricht gesendet — vielen Dank.",
        error: "Senden fehlgeschlagen: {{error}}",
      },
    },
  },
  lng: stored || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

// Persist language change
i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem("lang", lng);
  } catch {}
});

export default i18n;
