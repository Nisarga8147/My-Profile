function initModal() {

  // ELEMENTS
  const modal =
    document.getElementById("contact-modal");

  const modalContent =
    document.getElementById("modal-content");

  const modalTrigger =
    document.getElementById("modal-trigger");

  const modalClose =
    document.getElementById("modal-close");

  const formCancel =
    document.getElementById("form-cancel");

  // CHECK ELEMENTS
  if (
    !modal ||
    !modalContent ||
    !modalTrigger ||
    !modalClose ||
    !formCancel
  ) {
    console.error("Modal elements not found");
    return;
  }

  // OPEN MODAL
  function openModal() {

    modal.classList.remove("hidden");

    document.body.classList.add("overflow-hidden");

    setTimeout(() => {

      modal.classList.add("opacity-100");

      modalContent.classList.remove(
        "scale-95",
        "opacity-0",
        "translate-y-5"
      );

      modalContent.classList.add(
        "scale-100",
        "opacity-100",
        "translate-y-0"
      );

    }, 10);
  }

  // CLOSE MODAL
  function closeModal() {

    modal.classList.remove("opacity-100");

    modalContent.classList.remove(
      "scale-100",
      "opacity-100",
      "translate-y-0"
    );

    modalContent.classList.add(
      "scale-95",
      "opacity-0",
      "translate-y-5"
    );

    setTimeout(() => {

      modal.classList.add("hidden");

      document.body.classList.remove("overflow-hidden");

    }, 300);
  }

  // OPEN
  modalTrigger.addEventListener("click", openModal);

  // CLOSE
  modalClose.addEventListener("click", closeModal);

  formCancel.addEventListener("click", closeModal);

  // BACKDROP CLOSE
  modal.addEventListener("click", (event) => {

    if (event.target === modal) {
      closeModal();
    }

  });

  // ESC KEY CLOSE
  document.addEventListener("keydown", (event) => {

    if (
      event.key === "Escape" &&
      !modal.classList.contains("hidden")
    ) {
      closeModal();
    }

  });

  console.log("Modal initialized successfully");

}