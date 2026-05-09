function renderSkills() {

  const container =
    document.getElementById("skills-container");

  container.innerHTML = "";

  // FONT AWESOME ICONS
  const skillIcons = {
    "JavaScript": "fa-brands fa-js",
    "React": "fa-brands fa-react",
    "Tailwind CSS": "fa-solid fa-wind",
    "Node.js": "fa-brands fa-node-js",
    "MongoDB": "fa-solid fa-database"
  };

  // GROUP SKILLS
  const groupedSkills = {};

  skillsData.forEach((skill) => {

    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }

    groupedSkills[skill.category].push(skill);

  });

  // RENDER
  for (const category in groupedSkills) {

    const section = document.createElement("div");

    section.className = "w-full mb-16";

    section.innerHTML = `

      <!-- CATEGORY -->
      <div class="flex items-center gap-4 mb-8">

        <div class="
          h-[2px] w-12
          bg-gradient-to-r
          from-indigo-500
          to-purple-500
        "></div>

        <h3 class="
          text-3xl font-bold
          text-slate-900
          dark:text-white
        ">
          ${category}
        </h3>

      </div>

      <!-- GRID -->
      <div class="
        grid
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      ">

        ${groupedSkills[category]
          .map((skill) => `

          <div class="
            bg-white
            dark:bg-slate-900

            border border-slate-200
            dark:border-white/10

            rounded-3xl
            p-6

            shadow-lg
            hover:-translate-y-3
            hover:shadow-2xl

            transition-all duration-500
          ">

            <!-- ICON -->
            <div class="
              w-16 h-16
              flex items-center justify-center
              rounded-2xl

              bg-gradient-to-r
              from-indigo-500
              to-purple-500

              text-white
              text-3xl

              mb-5
              shadow-lg
            ">
              <i class="${skillIcons[skill.name] || 'fa-solid fa-code'}"></i>
            </div>

            <!-- NAME -->
            <h4 class="
              text-2xl font-bold
              text-slate-900
              dark:text-white
              mb-3
            ">
              ${skill.name}
            </h4>

            <!-- DESCRIPTION -->
            <p class="
              text-slate-600
              dark:text-slate-300
              leading-relaxed
              text-sm
            ">
              ${skill.description}
            </p>

          </div>

        `).join("")}

      </div>
    `;

    container.appendChild(section);

  }

}