// =========================================
// 1. DATA KEAHLIAN (MY STACK) DARI CV ALFAN
// =========================================
const stackItems = [
  {
    name: "Laravel",
    category: "Backend Framework",
    logo: "https://cdn.simpleicons.org/laravel",
    description:
      "Experienced in building and maintaining RESTful APIs with Laravel 12 during an internship as a Backend Developer at CV FlyHigh Sinergi Indonesia, including AuthController, ConnectionController, PostController, and AdminLokerController."
  },
  {
    name: "Node.js & Express.js",
    category: "Backend Runtime",
    logo: "https://cdn.simpleicons.org/nodedotjs",
    description:
      "Skilled in designing Node.js and Express.js backend services and RESTful APIs for user authentication, data history management, and cloud integration in the Money Tracker application and Catascan Capstone Project."
  },
  {
    name: "Google Cloud Platform",
    category: "Cloud Infrastructure",
    logo: "https://cdn.simpleicons.org/googlecloud",
    description:
      "Graduated from Bangkit Academy 2024 (Cloud Computing Cohort) with hands-on experience in GCP services such as Compute Engine, Cloud Run, Kubernetes Engine (GKE), Cloud Functions, Cloud Storage, Cloud SQL, BigQuery, and IAM."
  },
  {
    name: "MySQL & Cloud SQL",
    category: "Database Management",
    logo: "https://cdn.simpleicons.org/mysql",
    description:
      "Proficient in designing relational database schemas, managing queries, and integrating MySQL and Google Cloud SQL with Laravel and Node.js backend applications."
  },
  {
    name: "PHP & JavaScript",
    category: "Programming Languages",
    logo: "https://cdn.simpleicons.org/php",
    description:
      "Strong foundation in server-side programming with PHP and modern JavaScript, supported by a Junior Web Programmer competency certification from BNSP."
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    logo: "https://cdn.simpleicons.org/git",
    description:
      "Experienced in using Git and GitHub for repository management, branching workflows, code reviews, and cross-team collaboration with frontend, mobile, and machine learning developers."
  },
  {
    name: "Postman",
    category: "API Testing",
    logo: "https://cdn.simpleicons.org/postman",
    description:
      "Uses Postman to test RESTful API endpoints, validate JSON responses, manage environments, and prepare API contract documentation with frontend teams."
  },
  {
    name: "Microsoft Word & Office",
    category: "Productivity & Documentation",
    logo: "assets/microsoft-word.png",
    description:
      "Proficient in Microsoft Word and office software for preparing API technical documentation, system development reports, and structured analysis documents."
  }
];

const stackGrid = document.getElementById("stackGrid");
const spotlightPlaceholder = document.getElementById("spotlightPlaceholder");
const spotlightActive = document.getElementById("spotlightActive");
const spotlightCategory = document.getElementById("spotlightCategory");
const spotlightTitle = document.getElementById("spotlightTitle");
const spotlightDesc = document.getElementById("spotlightDesc");
const spotlightClose = document.getElementById("spotlightClose");

let activeIndex = null;

function selectSkill(index) {
  const allCards = document.querySelectorAll(".stack-card");

  if (activeIndex === index) {
    // Close if the same card is clicked again
    activeIndex = null;
    allCards.forEach((c) => c.classList.remove("active"));
    spotlightActive.classList.add("hidden");
    spotlightPlaceholder.classList.remove("hidden");
    return;
  }

  activeIndex = index;
  const skill = stackItems[index];

  allCards.forEach((c, idx) => {
    c.classList.toggle("active", idx === index);
  });

  spotlightCategory.textContent = skill.category;
  spotlightTitle.textContent = skill.name;
  spotlightDesc.textContent = skill.description;

  spotlightPlaceholder.classList.add("hidden");
  spotlightActive.classList.remove("hidden");
}

stackItems.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "stack-card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");

  card.innerHTML = `
    <div class="stack-logo">
        <img src="${item.logo}" alt="${item.name} logo" loading="lazy" />
    </div>
    <div class="stack-card-info">
        <h3>${item.name}</h3>
        <span>Click to view details</span>
    </div>
    `;

  card.addEventListener("click", () => selectSkill(index));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectSkill(index);
    }
  });

  stackGrid.appendChild(card);
});

spotlightClose.addEventListener("click", () => {
  if (activeIndex !== null) {
    selectSkill(activeIndex);
  }
});

// =========================================
// 2. MOBILE MENU & ACTIVE NAV SCROLL
// =========================================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section, footer");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

window.addEventListener("scroll", () => {
  let currentId = "home";
  const scrollPosition = window.scrollY + 200;

  sections.forEach((sec) => {
    if (scrollPosition >= sec.offsetTop) {
      currentId = sec.getAttribute("id");
    }
  });

  // Activate Contact when the page reaches the bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 40) {
    currentId = "contact";
  }

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === currentId);
  });
});