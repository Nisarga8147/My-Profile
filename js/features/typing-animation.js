function typingEffect() {

  const element =
    document.getElementById("typing-text");

  if (!element) return;

  // ROLES
  const roles = [
    "Full Stack Developer",
    "MERN Stack Enthusiast",
    "Frontend Developer",
    "Competitive Programmer",
    "Tech Explorer"
  ];

  let roleIndex = 0;
  let charIndex = 0;

  let isDeleting = false;

  function type() {

    const currentRole =
      roles[roleIndex];

    // TYPING
    if (!isDeleting) {

      element.textContent =
        currentRole.substring(0, charIndex + 1);

      charIndex++;

      // WORD COMPLETE
      if (charIndex === currentRole.length) {

        isDeleting = true;

        setTimeout(type, 1500);

        return;
      }

    }

    // DELETING
    else {

      element.textContent =
        currentRole.substring(0, charIndex - 1);

      charIndex--;

      // MOVE TO NEXT ROLE
      if (charIndex === 0) {

        isDeleting = false;

        roleIndex =
          (roleIndex + 1) % roles.length;
      }

    }

    // SPEED
    const speed =
      isDeleting ? 50 : 100;

    setTimeout(type, speed);

  }

  // START
  type();

}