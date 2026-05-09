function setGreeting() {

  // TARGET ELEMENT
  const greetingElement =
    document.getElementById("greeting-message");

  if (!greetingElement) return;

  // CURRENT HOUR
  const hour =
    new Date().getHours();

  let greeting = "";
  let emoji = "";

  // MORNING
  if (hour >= 5 && hour < 12) {

    greeting = "Good Morning";
    emoji = "☀️";

  }

  // AFTERNOON
  else if (hour >= 12 && hour < 17) {

    greeting = "Good Afternoon";
    emoji = "🌤️";

  }

  // EVENING
  else if (hour >= 17 && hour < 21) {

    greeting = "Good Evening";
    emoji = "🌇";

  }

  // NIGHT
  else {

    greeting = "Good Night";
    emoji = "🌙";

  }

  // UPDATE UI
  greetingElement.textContent =
    `${greeting} ${emoji}`;

}

// INIT
setGreeting();