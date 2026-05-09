window.addEventListener("DOMContentLoaded", () => {

  console.log("Portfolio initialized 🚀");

  // PROJECTS
  renderProjects();
  setupProjectSearch();

  // SKILLS
  renderSkills();

  // EDUCATION
  renderEducation();

  // CONTACT MODAL
  setupContactModal();

  // HERO SECTION
  setGreeting();
  typingEffect();
  setupGeolocationMessage();

  // THEME
  setupThemeToggle();

  // SCROLL PROGRESS
  initScrollProgress();

  // LANGUAGE SWITCHER
  if (
    typeof setupLanguageSwitcher === "function"
  ) {
    setupLanguageSwitcher();
  }

});