// Main UI Logic for Ilham Wahyu Saputro's Portfolio
document.addEventListener("DOMContentLoaded", () => {
  // 1. Render Projects
  const projectsGrid = document.getElementById("projects-grid");

  function getProjectsList() {
    if (typeof projectsData !== "undefined" && Array.isArray(projectsData)) {
      return projectsData;
    }
    if (typeof window !== "undefined" && Array.isArray(window.projectsData)) {
      return window.projectsData;
    }
    return [];
  }

  function renderProjects() {
    if (!projectsGrid) return;
    const list = getProjectsList();

    if (!list || list.length === 0) {
      projectsGrid.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-800/80 text-slate-400 mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h4 class="text-lg font-semibold text-slate-200">No projects found</h4>
        </div>
      `;
      return;
    }

    projectsGrid.innerHTML = list.map(project => {
      const tagsList = project.tags.slice(0, 4).map(t => 
        `<span class="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800/80 text-emerald-300 border border-emerald-500/20">${t}</span>`
      ).join("");

      return `
        <div class="cyber-card rounded-2xl overflow-hidden flex flex-col group h-full">
          <!-- Card Top Accent Header -->
          <div class="h-2 bg-gradient-to-r ${project.imageAccent}"></div>
          
          <div class="p-6 flex-1 flex flex-col">
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-800/90 text-slate-300 border border-slate-700/80">
                ${project.badge}
              </span>
              <span class="text-xs font-mono text-emerald-400">
                ${project.metric}
              </span>
            </div>

            <h3 class="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2 leading-snug">
              ${project.title}
            </h3>

            <p class="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-3">
              ${project.summary}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mb-6 mt-auto">
              ${tagsList}
            </div>

            <!-- Card Bottom Bar -->
            <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3 mt-auto">
              <button onclick="openProjectModal('${project.id}')" 
                      class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/btn">
                <span>View Deep Dive</span>
                <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }



  renderProjects();

  // 2. Project Modal Logic
  window.openProjectModal = function(projectId) {
    const list = getProjectsList();
    const project = list.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById("project-modal");
    const modalContent = document.getElementById("modal-inner-content");
    if (!modal || !modalContent) return;

    const architectureItems = project.architecture.map((step, idx) => `
      <li class="flex items-start gap-3">
        <span class="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono text-xs font-bold">${idx + 1}</span>
        <span class="text-sm text-slate-300 leading-relaxed">${step}</span>
      </li>
    `).join("");

    const highlightsItems = project.highlights.map(item => `
      <li class="flex items-start gap-2 text-sm text-slate-300">
        <span class="text-emerald-400 font-bold mt-0.5 select-none">▹</span>
        <span class="leading-relaxed">${item}</span>
      </li>
    `).join("");

    const tagsHtml = project.tags.map(t => `
      <span class="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800 text-emerald-300 border border-emerald-500/20">${t}</span>
    `).join("");

    modalContent.innerHTML = `
      <!-- Modal Header -->
      <div class="p-6 md:p-8 border-b border-slate-800 relative bg-slate-900/90">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-800 text-emerald-300 border border-emerald-500/30">
            ${project.badge}
          </span>
          <span class="text-xs font-mono text-slate-400">
            ${project.metric}
          </span>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white pr-8">
          ${project.title}
        </h2>
        <p class="text-slate-400 text-sm md:text-base mt-2 leading-relaxed">
          ${project.summary}
        </p>
      </div>

      <!-- Modal Body -->
      <div class="p-6 md:p-8 space-y-8 overflow-y-auto max-h-[70vh]">
        <!-- Problem & Solution Grid -->
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-5 rounded-xl bg-rose-500/5 border border-rose-500/20">
            <h4 class="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              The Challenge / Problem
            </h4>
            <p class="text-xs md:text-sm text-slate-300 leading-relaxed">${project.problem}</p>
          </div>
          <div class="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Engineering Solution
            </h4>
            <p class="text-xs md:text-sm text-slate-300 leading-relaxed">${project.solution}</p>
          </div>
        </div>

        <!-- Architecture Flow -->
        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
            <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
            System Pipeline & Architecture
          </h4>
          <ul class="space-y-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            ${architectureItems}
          </ul>
        </div>

        <!-- Key Contributions -->
        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-2">
            <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            Key Contributions & Technical Highlights
          </h4>
          <ul class="space-y-2.5">
            ${highlightsItems}
          </ul>
        </div>

        <!-- Tech Stack -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
          <div class="flex flex-wrap gap-2">
            ${tagsHtml}
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-6 border-t border-slate-800 bg-slate-900/90 flex items-center justify-end">
        <button onclick="closeProjectModal()" class="px-6 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors">
          Close
        </button>
      </div>
    `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  window.closeProjectModal = function() {
    const modal = document.getElementById("project-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  };

  // Close modal on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") window.closeProjectModal();
  });

  // 3. Copy Email to Clipboard & Toast
  window.copyEmailToClipboard = function(email = "Ilhamwahyu0987@gmail.com") {
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Email copied: ${email}`);
    }).catch(() => {
      showToast("Could not copy automatically. Email: " + email);
    });
  };

  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    const toastMsg = document.getElementById("toast-msg");
    if (toastMsg) toastMsg.textContent = message;

    toast.classList.remove("translate-y-24", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");

    setTimeout(() => {
      toast.classList.remove("translate-y-0", "opacity-100");
      toast.classList.add("translate-y-24", "opacity-0");
    }, 3200);
  }


  // 5. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    // Close mobile menu when a nav link is clicked
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // 6. Back to Top Button
  const backToTopBtn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
      backToTopBtn.classList.add("opacity-100", "translate-y-0");
    } else {
      backToTopBtn.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
      backToTopBtn.classList.remove("opacity-100", "translate-y-0");
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
