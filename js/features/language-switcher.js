function setupLanguageSwitcher() {

  const languageSwitcher =
    document.getElementById("language-switcher");

  // TRANSLATIONS
  const translations = {

    en: {
      myname: "Nisarga DC",
      projects: "My Projects",
      contact: "Contact Me",
      education: "Education & Experience",
      skills: "Skills"
    },

    kn: {
      myname: "ನಿಸರ್ಗ ಡಿ ಸಿ",
      projects: "ನನ್ನ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು",
      contact: "ನನ್ನನ್ನು ಸಂಪರ್ಕಿಸಿ",
      education: "ಶಿಕ್ಷಣ ಮತ್ತು ಅನುಭವ",
      skills: "ಕೌಶಲ್ಯಗಳು"
    }

  };

  // CHANGE EVENT
  languageSwitcher.addEventListener("change", function () {

    const lang = this.value;

    // UPDATE TEXT
    document.getElementById("my-name").textContent =
      translations[lang].myname;

    document.getElementById("project-name").textContent =
      translations[lang].projects;

    document.getElementById("contact-name").textContent =
      translations[lang].contact;

    document.getElementById("education-name").textContent =
      translations[lang].education;

    document.getElementById("skill-name").textContent =
      translations[lang].skills;

  });

}