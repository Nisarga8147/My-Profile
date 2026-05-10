
function renderProjects(filteredProjects = projectsData) {

  const container =
    document.getElementById("projects-container");

  container.innerHTML = "";

  filteredProjects.forEach((project) => {

    const card = document.createElement("div");

    let statusColor = "";

    switch (project.status.toLowerCase()) {

      case "completed":
        statusColor =
          "bg-emerald-500 text-white";
        break;

      case "live":
        statusColor =
          "bg-indigo-600 text-white";
        break;

      default:
        statusColor =
          "bg-amber-500 text-white";
    }

    // TECHNOLOGY TAGS
    const techList = project.technologies.map((tech) => `
      <span class="
        px-3 py-1
        rounded-full
        bg-slate-100
        dark:bg-white/10
        border border-slate-200
        dark:border-white/10
        text-slate-800
        dark:text-white
        text-xs
        font-bold
        tracking-wide
      ">
        ${tech}
      </span>
    `).join("");

    // CARD
    card.className = `
      relative
      bg-white
      dark:bg-slate-900

      border border-slate-200
      dark:border-white/10

      rounded-3xl
      p-7

      shadow-lg
      hover:-translate-y-3
      hover:shadow-2xl

      transition-all duration-500
      flex flex-col
      h-full
    `;

    card.innerHTML = `

      <!-- STATUS -->
      <div class="
        absolute top-5 right-5
        px-4 py-1.5
        rounded-full
        text-xs font-bold
        uppercase
        tracking-wider
        shadow-lg
        ${statusColor}
      ">
        ${project.status}
      </div>

      <!-- CATEGORY -->
      <p class="
        inline-block w-fit
        px-4 py-1
        rounded-full

        bg-indigo-100
        dark:bg-indigo-500/10

        text-indigo-600
        dark:text-indigo-300

        text-xs
        font-semibold

        mb-5
      ">
        ${project.category}
      </p>

      <!-- PROJECT TITLE -->
      <h3 class="
        text-2xl font-bold
        text-slate-900
        dark:text-white
        mb-4
        pr-24
      ">
        ${project.name}
      </h3>

      <!-- DESCRIPTION -->
      <p class="
        text-slate-600
        dark:text-slate-300
        leading-relaxed
        text-sm
        mb-6
      ">
        ${project.description}
      </p>

      <!-- TECHNOLOGIES -->
      <div class="
        flex flex-wrap gap-3
        mt-auto
      ">
        ${techList}
      </div>
    `;

    container.appendChild(card);

  });

}


// SEARCH
function setupProjectSearch() {

  const searchInput =
    document.getElementById("project-search");

  if (!searchInput) return;

  searchInput.addEventListener("input", () => {

    const value =
      searchInput.value.toLowerCase().trim();

    const filteredProjects =
      projectsData.filter((project) => {

        return (
          project.name.toLowerCase().includes(value) ||
          project.category.toLowerCase().includes(value) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(value)
          )
        );

      });

    renderProjects(filteredProjects);

  });

}