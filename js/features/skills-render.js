

function renderSkills() {

  const container =
    document.getElementById("skills-container");

  container.innerHTML = "";

  // =========================
  // FONT AWESOME ICONS
  // =========================
  const skillIcons = {

    // FRONTEND
    "HTML5": "fa-brands fa-html5",
    "CSS3": "fa-brands fa-css3-alt",
    "JavaScript": "fa-brands fa-js",
    "React.js": "fa-brands fa-react",
    "Tailwind CSS": "fa-solid fa-wind",

    // BACKEND
    "Node.js": "fa-brands fa-node-js",
    "Express.js": "fa-solid fa-server",
    "MongoDB": "fa-solid fa-database",

    // PROGRAMMING
    "Python": "fa-brands fa-python",
    "Java": "fa-brands fa-java",

    // AI
    "Artificial Intelligence": "fa-solid fa-robot",
    "OpenCV": "fa-solid fa-camera",
    "NLP": "fa-solid fa-brain",

    // TOOLS
    "Git": "fa-brands fa-git-alt",
    "GitHub": "fa-brands fa-github",
    "VS Code": "fa-solid fa-code"
  };

  // =========================
  // GROUP SKILLS
  // =========================
  const groupedSkills = {};

  skillsData.forEach((skill) => {

    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }

    groupedSkills[skill.category].push(skill);

  });

  // =========================
  // RENDER SKILLS
  // =========================
  for (const category in groupedSkills) {

    const section = document.createElement("div");

    section.className = "w-full mb-16";

    section.innerHTML = `

      <!-- CATEGORY TITLE -->
      <div class="flex items-center gap-4 mb-8">

        <div class="
          h-[2px] w-12
          bg-gradient-to-r
          from-cyan-400
          to-indigo-500
        "></div>

        <h3 class="
          text-3xl font-bold
          text-slate-900
          dark:text-white
        ">
          ${category}
        </h3>

      </div>

      <!-- SKILLS GRID -->
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
            relative overflow-hidden

            bg-white
            dark:bg-slate-900

            border border-slate-200
            dark:border-cyan-400/30

            rounded-3xl
            p-7

            shadow-lg
            hover:-translate-y-3
            hover:shadow-cyan-500/20
            hover:shadow-2xl

            transition-all duration-500
            group
          ">

            <!-- TOP RIGHT CIRCLE -->
            <div class="
              absolute -top-10 -right-10
              w-32 h-32
              rounded-full
              bg-cyan-400/10
            "></div>

            <!-- ICON -->
            <div class="
              relative z-10

              w-20 h-20
              flex items-center justify-center

              rounded-2xl

              bg-gradient-to-r
              from-cyan-400
              to-indigo-500

              text-white
              text-4xl

              mb-6

              shadow-lg
              shadow-cyan-500/20

              group-hover:scale-110
              transition
            ">
              <i class="${skillIcons[skill.name] || 'fa-solid fa-code'}"></i>
            </div>

            <!-- SKILL NAME -->
            <h4 class="
              relative z-10

              text-2xl font-bold

              text-slate-900
              dark:text-white

              mb-3
            ">
              ${skill.name}
            </h4>

            <!-- DESCRIPTION -->
            <p class="
              relative z-10

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