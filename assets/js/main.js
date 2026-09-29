// Portfolio Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProjects('all');
  setupProjectFilters();
  setupModal();
  setupCopyButtons();
  setupMobileMenu();
  setupNavScrollHighlight();
  setupContactForm();
});

// Theme Management
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const mobileToggleBtn = document.getElementById('theme-toggle-mobile');
  
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  const toggleAction = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  if (toggleBtn) toggleBtn.addEventListener('click', toggleAction);
  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', toggleAction);
}

// Icon mapper helper
function getIconSvg(name) {
  const icons = {
    'eye': `<svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`,
    'hand': `<svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path></svg>`,
    'shield-check': `<svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
    'activity': `<svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
    'file-text': `<svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`,
    'globe': `<svg class="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>`
  };
  return icons[name] || icons['globe'];
}

// Render Projects
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter || (filter === 'ai' && (p.category === 'ai' || p.category === 'ai-web')));

  container.innerHTML = filtered.map(project => `
    <article class="group relative rounded-2xl p-6 glass-panel card-hover flex flex-col justify-between cursor-pointer border transition-all duration-300 hover:border-indigo-500/50 hover:shadow-xl dark:hover:shadow-indigo-500/5" onclick="openProjectModal('${project.id}')">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 inline-flex items-center justify-center shadow-sm">
            ${getIconSvg(project.icon)}
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            ${project.categoryLabel}
          </span>
        </div>

        <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          ${project.title}
        </h3>
        
        <p class="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-1 mb-3">
          ${project.subtitle}
        </p>

        <p class="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
          ${project.summary}
        </p>
      </div>

      <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${project.tags.slice(0, 4).map(tag => `
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50">
              ${tag}
            </span>
          `).join('')}
          ${project.tags.length > 4 ? `
            <span class="text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800/70 text-slate-500 dark:text-slate-400">
              +${project.tags.length - 4}
            </span>
          ` : ''}
        </div>

        <div class="flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform">
          <span>View case study details</span>
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </div>
      </div>
    </article>
  `).join('');
}

// Project Category Filtering
function setupProjectFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-500/20');
        b.classList.add('bg-transparent', 'text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
      });
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-500/20');
      btn.classList.remove('bg-transparent', 'text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
      
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

// Project Modal Logic
function setupModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');
  const backdrop = document.getElementById('modal-backdrop');

  const closeModal = () => {
    if (modal) modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

window.openProjectModal = function(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const title = document.getElementById('modal-title');
  const subtitle = document.getElementById('modal-subtitle');
  const categoryBadge = document.getElementById('modal-category');
  const summary = document.getElementById('modal-summary');
  const methodology = document.getElementById('modal-methodology');
  const results = document.getElementById('modal-results');
  const tagsContainer = document.getElementById('modal-tags');
  const linksContainer = document.getElementById('modal-links');

  if (title) title.textContent = project.title;
  if (subtitle) subtitle.textContent = project.subtitle;
  if (categoryBadge) categoryBadge.textContent = project.categoryLabel;
  if (summary) summary.textContent = project.summary;
  if (methodology) methodology.textContent = project.methodology;
  if (results) results.textContent = project.results;

  if (tagsContainer) {
    tagsContainer.innerHTML = project.tags.map(tag => `
      <span class="text-xs font-mono px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
        ${tag}
      </span>
    `).join('');
  }

  if (linksContainer) {
    let linksHtml = '';
    if (project.live) {
      linksHtml += `
        <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          Live Demo
        </a>
      `;
    }
    if (project.github) {
      linksHtml += `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub Repository
        </a>
      `;
    }
    linksContainer.innerHTML = linksHtml;
  }

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
};

// Clipboard copy with feedback
function setupCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = button.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = `
          <svg class="w-4 h-4 text-emerald-500 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          <span class="text-emerald-500 font-medium">Copied!</span>
        `;
        setTimeout(() => {
          button.innerHTML = originalText;
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text', err);
      });
    });
  });
}

// Mobile Menu
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
    });
  });
}

// Active Nav Indicator
function setupNavScrollHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-indigo-600', 'dark:text-indigo-400', 'font-semibold');
        link.classList.remove('text-slate-600', 'dark:text-slate-300');
      } else {
        link.classList.remove('text-indigo-600', 'dark:text-indigo-400', 'font-semibold');
        link.classList.add('text-slate-600', 'dark:text-slate-300');
      }
    });
  });
}

// Contact Form
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#sender-name').value;
    const email = form.querySelector('#sender-email').value;
    const subject = form.querySelector('#sender-subject').value;
    const message = form.querySelector('#sender-message').value;

    // Prepare mailto link
    const mailtoUri = `mailto:Ilhamwahyu0987@gmail.com?subject=${encodeURIComponent(subject + ' - via Portfolio from ' + name)}&body=${encodeURIComponent(message + '\n\nSender Contact: ' + email)}`;
    
    if (feedback) {
      feedback.classList.remove('hidden');
      feedback.innerHTML = `
        <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm">
          <p class="font-semibold mb-1">Opening your email client...</p>
          <p class="text-xs">If your mail app does not open automatically, <a href="${mailtoUri}" class="underline font-bold">click here to send message</a> or email directly to <strong>Ilhamwahyu0987@gmail.com</strong>.</p>
        </div>
      `;
    }

    setTimeout(() => {
      window.location.href = mailtoUri;
    }, 400);
  });
}
