function initScrollProgress() {

  const scrollBar =
    document.getElementById("scroll-bar");

  if (!scrollBar) {
    console.error("Scroll bar element not found");
    return;
  }

  // UPDATE PROGRESS
  function updateScrollProgress() {

    const scrollTop =
      window.scrollY;

    const documentHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const scrollPercent =
      (scrollTop / documentHeight) * 100;

    scrollBar.style.width =
      `${scrollPercent}%`;
  }

  // LISTENER
  window.addEventListener(
    "scroll",
    updateScrollProgress
  );

  // INITIAL LOAD
  updateScrollProgress();

  console.log("Scroll progress initialized");

}

// INIT
initScrollProgress();