function setupContactModal() {

  const openBtn =
    document.getElementById("contact-btn");

  const modal =
    document.getElementById("contact-modal");

  const modalContent =
    document.getElementById("modal-content");

  const closeBtn =
    document.getElementById("close-modal");

  const cancelBtn =
    document.getElementById("cancel-btn");

  const form =
    document.getElementById("contact-form");

  // OPEN MODAL
  function openModal() {

    modal.classList.remove("hidden");
    modal.classList.add("flex");

    setTimeout(() => {

      modalContent.classList.remove(
        "scale-95",
        "opacity-0"
      );

    }, 10);

  }

  // CLOSE MODAL
  function closeModal() {

    modalContent.classList.add(
      "scale-95",
      "opacity-0"
    );

    setTimeout(() => {

      modal.classList.add("hidden");
      modal.classList.remove("flex");

    }, 300);

  }

  // EVENTS
  openBtn.addEventListener("click", openModal);

  closeBtn.addEventListener("click", closeModal);

  cancelBtn.addEventListener("click", closeModal);

  // CLICK OUTSIDE
  modal.addEventListener("click", (e) => {

    if (e.target === modal) {
      closeModal();
    }

  });

  // FORMSPREE SUBMIT
  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name =
      document.getElementById("name").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const message =
      document.getElementById("message").value.trim();

    if (!name || !email || !message) {

      alert("Please fill all fields");
      return;

    }

    try {

      const response = await fetch(
        "https://formspree.io/f/mvzlblga",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            message
          })
        }
      );

      if (response.ok) {

        alert("Message Sent Successfully 🚀");

        form.reset();

        closeModal();

      } else {

        alert("Failed to send message ❌");

      }

    } catch (error) {

      alert("Something went wrong ❌");

    }

  });

}