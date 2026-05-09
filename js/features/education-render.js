function renderEducation() {

  const container =
    document.getElementById("education-container");

  container.innerHTML = "";

  educationsData.forEach((edu) => {

    const card = document.createElement("div");

    card.className = `
      bg-white
      dark:bg-slate-900

      border border-slate-200
      dark:border-white/10

      rounded-3xl
      p-8

      shadow-lg
      hover:-translate-y-2
      hover:shadow-2xl

      transition-all duration-500
    `;

    card.innerHTML = `

      <!-- TOP BORDER -->
      <div class="
        w-full h-1 mb-6 rounded-full

        bg-gradient-to-r
        from-indigo-500
        to-purple-500
      "></div>

      <!-- BOARD -->
      <p class="
        inline-block
        px-4 py-1
        rounded-full

        bg-indigo-100
        dark:bg-indigo-500/10

        text-indigo-600
        dark:text-indigo-300

        text-sm
        mb-4
      ">
        ${edu.board}
      </p>

      <!-- COURSE -->
      <h3 class="
        text-2xl font-bold

        text-slate-900
        dark:text-white

        mb-2
      ">
        ${edu.course}
      </h3>

      <!-- COLLEGE -->
      <p class="
        text-slate-600
        dark:text-slate-300

        text-lg
        mb-2
      ">
        ${edu.college}
      </p>

      <!-- FOOTER -->
      <div class="
        flex flex-wrap
        items-center
        gap-4
        mt-4
      ">

        <!-- YEAR -->
        <span class="
          px-4 py-2
          rounded-xl

          bg-slate-100
          dark:bg-white/5

          text-slate-600
          dark:text-slate-300

          text-sm
        ">
          📅 ${edu.year}
        </span>

        <!-- PERCENTAGE -->
        <span class="
          px-4 py-2
          rounded-xl

          bg-emerald-100
          dark:bg-emerald-500/10

          text-emerald-600
          dark:text-emerald-300

          text-sm font-semibold
        ">
          🎓 ${edu.percentage}
        </span>

      </div>
    `;

    container.appendChild(card);

  });

}