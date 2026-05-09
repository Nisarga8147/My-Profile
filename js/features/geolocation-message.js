async function setupGeolocationMessage() {

  const greeting = document.getElementById("greeting-message");

  // LOADING STATE
  greeting.innerHTML = `
    <span class="
      inline-flex items-center gap-2
      px-4 py-2 rounded-full
      bg-white/5 border border-white/10
      text-slate-300 text-sm
      backdrop-blur-md
    ">
      🌍 Detecting your location...
    </span>
  `;

  // GEOLOCATION NOT SUPPORTED
  if (!navigator.geolocation) {

    greeting.innerHTML = `
      <span class="
        inline-flex items-center gap-2
        px-4 py-2 rounded-full
        bg-white/5 border border-white/10
        text-slate-300 text-sm
      ">
        ✨ Welcome to my portfolio
      </span>
    `;

    return;
  }

  navigator.geolocation.getCurrentPosition(

    // SUCCESS
    async (position) => {

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      try {

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
        );

        const data = await response.json();

        const city =
          data?.address?.city ||
          data?.address?.town ||
          data?.address?.village ||
          data?.address?.state ||
          "your area";

        const country =
          data?.address?.country || "";

        greeting.innerHTML = `
          <span class="
            inline-flex items-center gap-2
            px-5 py-2.5
            rounded-full
            bg-indigo-500/10
            border border-indigo-500/20
            text-indigo-300
            text-sm md:text-base
            shadow-lg
            backdrop-blur-lg
          ">
            📍 Visiting from
            <span class="font-semibold text-white">
              ${city}, ${country}
            </span>
          </span>
        `;

      }

      catch (error) {

        greeting.innerHTML = `
          <span class="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-white/5 border border-white/10
            text-slate-300 text-sm
          ">
            ✨ Welcome to my portfolio
          </span>
        `;
      }
    },

    // ERROR
    () => {

      greeting.innerHTML = `
        <span class="
          inline-flex items-center gap-2
          px-4 py-2 rounded-full
          bg-amber-500/10 border border-amber-500/20
          text-amber-300 text-sm
        ">
          📍 Location access denied
        </span>
      `;
    }

  );

}