// ===== CONFIGURAÇÕES E DADOS =====
const STORAGE_KEY = "study-plan-progress-v2";
const THEME_KEY = "study-plan-theme";
const THEME_MODE_KEY = "study-plan-theme-mode"; // 'auto' ou 'manual'

const studyPlan = [
  {
    month: 1,
    title: "HTML e CSS básico",
    emoji: "🧱",
    weeks: [
      {
        title: "Semana 1 - Fundamentos de HTML",
        description: "Tags básicas, estrutura de um documento, textos, links e imagens.",
        links: [
          { label: "📹 Curso em Vídeo - HTML Completo", url: "https://www.youtube.com/watch?v=Ejkb_YpuHWs", type: "video" },
          { label: "📖 MDN Web Docs - HTML", url: "https://developer.mozilla.org/pt-BR/docs/Learn/HTML", type: "docs" }
        ]
      },
      {
        title: "Semana 2 - Estruturação de páginas",
        description: "Listas, tabelas, semântica básica e boas práticas.",
        links: [
          { label: "W3Schools - HTML", url: "https://www.w3schools.com/html/" },
          { label: "Rocketseat - HTML semântico", url: "https://www.youtube.com/watch?v=4dQtz1PpY9A" }
        ]
      },
      {
        title: "Semana 3 - Introdução ao CSS",
        description: "Seletores, cores, fontes, box model.",
        links: [
          { label: "Curso em Vídeo - CSS", url: "https://www.youtube.com/watch?v=E6CdIawPTh0" },
          { label: "freeCodeCamp - CSS", url: "https://www.freecodecamp.org/learn/responsive-web-design/" }
        ]
      },
      {
        title: "Semana 4 - Layout simples",
        description: "Display, margin, padding, criação de um layout simples.",
        links: [
          { label: "Rocketseat - Guia CSS", url: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" }
        ]
      }
    ]
  },
  {
    month: 2,
    title: "CSS avançado: Flexbox & Grid",
    emoji: "🎯",
    weeks: [
      {
        title: "Semana 1 - Flexbox básico",
        description: "Eixos, alinhamento, distribuição de espaço.",
        links: [
          { label: "Origamid - Flexbox", url: "https://origamid.com/projetos/flexbox-guia-completo/" }
        ]
      },
      {
        title: "Semana 2 - Flexbox na prática",
        description: "Criando layouts responsivos com Flexbox.",
        links: [
          { label: "Flexbox Froggy", url: "https://flexboxfroggy.com/#pt-br" }
        ]
      },
      {
        title: "Semana 3 - CSS Grid básico",
        description: "Grid container, linhas, colunas e áreas.",
        links: [
          { label: "CSS-Tricks - Guia Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" }
        ]
      },
      {
        title: "Semana 4 - Layout avançado com Grid",
        description: "Grid + Flexbox, layout completo de página.",
        links: [
          { label: "FreeCodeCamp - Grid", url: "https://www.youtube.com/watch?v=9zBsdzdE4sM" }
        ]
      }
    ]
  },
  {
    month: 3,
    title: "JavaScript básico",
    emoji: "📜",
    weeks: [
      {
        title: "Semana 1 - Fundamentos JS",
        description: "Variáveis, tipos, operadores, condicionais.",
        links: [
          { label: "Curso em Vídeo - JS", url: "https://www.youtube.com/watch?v=BXqUH86F-kA" }
        ]
      },
      {
        title: "Semana 2 - Funções e escopo",
        description: "Declaração de funções, parâmetros e retorno.",
        links: [
          { label: "MDN - Funções JS", url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions" }
        ]
      },
      {
        title: "Semana 3 - Arrays e objetos",
        description: "Estruturas de dados básicas.",
        links: [
          { label: "FreeCodeCamp - JS Básico", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" }
        ]
      },
      {
        title: "Semana 4 - Lógica e exercícios",
        description: "Exercícios de lógica usando os conceitos aprendidos.",
        links: [
          { label: "BeeCrowd / URI", url: "https://www.beecrowd.com.br/judge/pt/login/" }
        ]
      }
    ]
  },
  {
    month: 4,
    title: "JavaScript DOM",
    emoji: "🧩",
    weeks: [
      {
        title: "Semana 1 - DOM e seletores",
        description: "Selecionar elementos e alterar conteúdo/estilos.",
        links: [
          { label: "MDN - DOM Intro", url: "https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction" }
        ]
      },
      {
        title: "Semana 2 - Eventos",
        description: "Eventos de clique, teclado e formulários.",
        links: [
          { label: "Rocketseat - DOM e Eventos", url: "https://www.youtube.com/watch?v=iLEbGQXsg3k" }
        ]
      },
      {
        title: "Semana 3 - Manipulação de elementos",
        description: "Criar, remover e atualizar elementos via JS.",
        links: [
          { label: "W3Schools - DOM", url: "https://www.w3schools.com/js/js_htmldom.asp" }
        ]
      },
      {
        title: "Semana 4 - Mini projetos com DOM",
        description: "To-do list, contador, modal simples.",
        links: [
          { label: "Projetos DOM no YouTube", url: "https://www.youtube.com/results?search_query=projetos+javascript+dom" }
        ]
      }
    ]
  },
  {
    month: 5,
    title: "Git + Projetos práticos",
    emoji: "🌱",
    weeks: [
      {
        title: "Semana 1 - Git básico",
        description: "Commits, branches, clone, push, pull.",
        links: [
          { label: "Curso em Vídeo - Git & GitHub", url: "https://www.youtube.com/watch?v=UBAX-13g8OM" }
        ]
      },
      {
        title: "Semana 2 - GitHub e fluxo de trabalho",
        description: "Pull requests, issues, colaboração.",
        links: [
          { label: "Guia GitHub", url: "https://docs.github.com/pt/get-started/start-your-journey" }
        ]
      },
      {
        title: "Semana 3 - Projeto estático 1",
        description: "Landing page completa usando HTML e CSS.",
        links: [
          { label: "Inspiração de landing pages", url: "https://www.youtube.com/results?search_query=landing+page+html+css" }
        ]
      },
      {
        title: "Semana 4 - Projeto estático 2",
        description: "Página de portfólio pessoal simples.",
        links: [
          { label: "Portfólio dev no YouTube", url: "https://www.youtube.com/results?search_query=portfolio+dev+html+css" }
        ]
      }
    ]
  },
  {
    month: 6,
    title: "APIs e Async JS",
    emoji: "🌐",
    weeks: [
      {
        title: "Semana 1 - Fetch API",
        description: "Requisições GET/POST e JSON.",
        links: [
          { label: "MDN - Fetch", url: "https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch" }
        ]
      },
      {
        title: "Semana 2 - Async/Await",
        description: "Promessas, async/await, tratamento de erros.",
        links: [
          { label: "Rocketseat - Async JS", url: "https://www.youtube.com/watch?v=SHiUyM_fFME" }
        ]
      },
      {
        title: "Semana 3 - Consumindo APIs públicas",
        description: "Criar páginas que consomem APIs (ex.: Github, PokéAPI).",
        links: [
          { label: "APIs públicas", url: "https://github.com/public-apis/public-apis" }
        ]
      },
      {
        title: "Semana 4 - Mini projeto com API",
        description: "App simples consumindo uma API com interface bonitinha.",
        links: [
          { label: "Projetos com API - YouTube", url: "https://www.youtube.com/results?search_query=javascript+api+project" }
        ]
      }
    ]
  },
  {
    month: 7,
    title: "React básico",
    emoji: "⚛️",
    weeks: [
      {
        title: "Semana 1 - Fundamentos React",
        description: "Componentes, props e JSX.",
        links: [
          { label: "Rocketseat - React", url: "https://www.youtube.com/watch?v=sBws8MSXN7A" }
        ]
      },
      {
        title: "Semana 2 - Estado e eventos",
        description: "useState, eventos e formulários.",
        links: [
          { label: "DevMedia - React", url: "https://www.devmedia.com.br/react/" }
        ]
      },
      {
        title: "Semana 3 - Efeitos e chamadas de API",
        description: "useEffect e consumo de API no React.",
        links: [
          { label: "React Docs - Efeitos", url: "https://react.dev/reference/react/useEffect" }
        ]
      },
      {
        title: "Semana 4 - Pequeno projeto em React",
        description: "Criar uma aplicação simples (ex.: to-do, lista de repositórios).",
        links: [
          { label: "Projetos React iniciantes", url: "https://www.youtube.com/results?search_query=react+js+beginner+projects" }
        ]
      }
    ]
  },
  {
    month: 8,
    title: "Projeto final completo",
    emoji: "🚀",
    weeks: [
      {
        title: "Semana 1 - Planejamento",
        description: "Definir ideia, funcionalidades e layout do projeto final.",
        links: [
          { label: "Planejamento de projetos", url: "https://www.youtube.com/results?search_query=planejamento+projeto+front+end" }
        ]
      },
      {
        title: "Semana 2 - Desenvolvimento do layout",
        description: "Criar estrutura e estilo (HTML, CSS/React).",
        links: [
          { label: "UI Inspiration", url: "https://dribbble.com/tags/dashboard" }
        ]
      },
      {
        title: "Semana 3 - Funcionalidades",
        description: "Adicionar lógica, consumo de API e interações.",
        links: [
          { label: "Funcionalidades JS/React", url: "https://www.youtube.com/results?search_query=front+end+project+with+api" }
        ]
      },
      {
        title: "Semana 4 - Refinos e deploy",
        description: "Responsividade, ajustes finais e deploy (Netlify, Vercel, etc.).",
        links: [
          { label: "Deploy front-end", url: "https://www.youtube.com/results?search_query=deploy+site+netlify+vercel" }
        ]
      }
    ]
  }
];

// ===== ESTADO GLOBAL =====
let completedWeeks = new Set();
let currentFilter = null;
let searchQuery = '';

// ===== FUNÇÕES DE ARMAZENAMENTO =====
function saveProgress() {
  const data = Array.from(completedWeeks);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      completedWeeks = new Set(JSON.parse(data));
    }
  } catch (e) {
    console.error("Erro ao carregar progresso:", e);
  }
}

function getTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

function getAutoTheme() {
  const hour = new Date().getHours();
  // Dark mode: 18h (6 PM) até 06h (6 AM)
  return (hour >= 18 || hour < 6) ? 'dark' : 'light';
}

function getThemeMode() {
  const mode = localStorage.getItem(THEME_MODE_KEY);
  return mode || 'auto'; // default é automático
}

function saveThemeMode(mode) {
  localStorage.setItem(THEME_MODE_KEY, mode);
}

function getCurrentTheme() {
  const mode = getThemeMode();
  if (mode === 'auto') {
    return getAutoTheme();
  }
  return getTheme();
}

// ===== GERADORES DE IDs =====
function getWeekId(monthIdx, weekIdx) {
  return `${monthIdx}-${weekIdx}`;
}

// ===== RENDERIZAÇÃO =====
function renderPlan(filteredMonths = studyPlan) {
  const container = document.getElementById("months-container");
  container.innerHTML = '';

  filteredMonths.forEach((month, monthIdx) => {
    const monthCard = document.createElement('article');
    monthCard.className = 'month-card';
    monthCard.dataset.month = month.month;

    // Usar índice real no studyPlan
    const actualMonthIdx = studyPlan.indexOf(month);
    monthCard.dataset.monthIdx = actualMonthIdx;

    // Header do mês
    const header = document.createElement('div');
    header.className = 'month-header';

    const title = document.createElement('div');
    title.className = 'month-title';

    const emoji = document.createElement('span');
    emoji.className = 'emoji';
    emoji.textContent = month.emoji;

    const titleTexts = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = `Mês ${month.month} - ${month.title}`;
    const subtitle = document.createElement('p');
    subtitle.className = 'month-subtitle';
    subtitle.textContent = `${month.weeks.length} semanas de aprendizado focado e prático`;

    titleTexts.appendChild(h2);
    titleTexts.appendChild(subtitle);
    title.appendChild(emoji);
    title.appendChild(titleTexts);
    header.appendChild(title);

    // Mini progress ou badge
    const monthCompleted = month.weeks.filter((_, weekIdx) => {
      return completedWeeks.has(getWeekId(actualMonthIdx, weekIdx));
    }).length;

    if (monthCompleted === month.weeks.length && month.weeks.length > 0) {
      const badge = document.createElement('span');
      badge.className = 'month-badge-complete';
      badge.innerHTML = '🏆 Completo!';
      header.appendChild(badge);
    } else {
      const progressText = document.createElement('span');
      progressText.className = 'month-progress-mini';
      progressText.textContent = `${monthCompleted}/${month.weeks.length}`;
      header.appendChild(progressText);
    }

    monthCard.appendChild(header);

    // Barra de progresso visual
    const monthProgressBar = document.createElement('div');
    monthProgressBar.className = 'month-progress-bar';
    const monthProgressFill = document.createElement('div');
    monthProgressFill.className = 'month-progress-bar-fill';
    const percentage = month.weeks.length > 0 ? (monthCompleted / month.weeks.length) * 100 : 0;
    monthProgressFill.style.width = `${percentage}%`;
    monthProgressBar.appendChild(monthProgressFill);
    monthCard.appendChild(monthProgressBar);

    // Lista de semanas
    const weeksList = document.createElement('ul');
    weeksList.className = 'weeks-list';

    month.weeks.forEach((week, weekIdx) => {
      if (searchQuery && !matchesSearch(week, searchQuery)) return;

      const weekId = getWeekId(actualMonthIdx, weekIdx);
      const isCompleted = completedWeeks.has(weekId);

      const weekItem = document.createElement('li');
      weekItem.className = `week-item${isCompleted ? ' completed' : ''}`;
      weekItem.dataset.weekId = weekId;

      // Conteúdo principal
      const weekMain = document.createElement('div');
      weekMain.className = 'week-main';

      const titleRow = document.createElement('div');
      titleRow.className = 'week-title-row';

      const weekTitle = document.createElement('h3');
      weekTitle.className = 'week-title';
      weekTitle.textContent = week.title;

      const statusPill = document.createElement('span');
      statusPill.className = 'status-pill';
      statusPill.textContent = isCompleted ? '✓ Concluída' : 'Pendente';

      titleRow.appendChild(weekTitle);
      titleRow.appendChild(statusPill);

      const desc = document.createElement('p');
      desc.className = 'week-description';
      desc.textContent = week.description;

      const linksWrapper = document.createElement('div');
      linksWrapper.className = 'week-links';
      week.links.forEach(link => {
        const a = document.createElement('a');
        a.className = 'link-pill';
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = link.label;
        a.title = `Abrir: ${link.label}`;

        // Adicionar classe de tipo
        if (link.type === 'video') {
          a.classList.add('link-video');
        } else if (link.type === 'docs') {
          a.classList.add('link-docs');
        } else if (link.type === 'interactive') {
          a.classList.add('link-interactive');
        }

        linksWrapper.appendChild(a);
      });

      weekMain.appendChild(titleRow);
      weekMain.appendChild(desc);
      weekMain.appendChild(linksWrapper);

      // Botão de ação
      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'btn toggle-btn';
      toggleBtn.textContent = isCompleted ? '↻ Desfazer' : '✓ Concluir';
      toggleBtn.title = isCompleted ? 'Marcar como pendente' : 'Marcar como concluída';

      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleWeek(weekId, weekItem, statusPill, toggleBtn);
      });

      weekItem.addEventListener('mousedown', (e) => {
        if (!e.target.closest('.link-pill') && !e.target.closest('.toggle-btn')) {
          toggleWeek(weekId, weekItem, statusPill, toggleBtn);
        }
      });

      weekMain.appendChild(toggleBtn);
      weekItem.appendChild(weekMain);
      weeksList.appendChild(weekItem);
    });

    if (weeksList.children.length > 0) {
      monthCard.appendChild(weeksList);
      container.appendChild(monthCard);
    }
  });

  if (container.children.length === 0) {
    const noResults = document.createElement('div');
    noResults.style.gridColumn = '1 / -1';
    noResults.style.textAlign = 'center';
    noResults.style.padding = '2rem';
    noResults.style.color = 'var(--text-muted)';
    noResults.innerHTML = '<p>📭 Nenhum resultado encontrado</p>';
    container.appendChild(noResults);
  }
}

function matchesSearch(week, query) {
  const q = query.toLowerCase();
  return week.title.toLowerCase().includes(q) ||
    week.description.toLowerCase().includes(q) ||
    week.links.some(link => link.label.toLowerCase().includes(q));
}

function toggleWeek(weekId, weekItem, statusPill, toggleBtn) {
  const isCompleted = completedWeeks.has(weekId);

  if (isCompleted) {
    completedWeeks.delete(weekId);
    weekItem.classList.remove('completed');
    statusPill.textContent = 'Pendente';
    toggleBtn.textContent = '✓ Concluir';
  } else {
    completedWeeks.add(weekId);
    weekItem.classList.add('completed');
    statusPill.textContent = '✓ Concluída';
    toggleBtn.textContent = '↻ Desfazer';

    // Animação de celebração
    weekItem.style.animation = 'none';
    setTimeout(() => {
      weekItem.style.animation = 'fadeIn 0.6s ease';
    }, 10);
  }

  saveProgress();

  // Update month bar badge and progress
  const monthIdx = parseInt(weekId.split('-')[0]);
  updateMonthBar(monthIdx);

  updateProgressBar();
  updateStats();
  markCurrentWeek(); // Update indicator after toggling
}

function updateProgressBar() {
  const totalWeeks = studyPlan.reduce((sum, m) => sum + m.weeks.length, 0);
  const percentage = totalWeeks > 0 ? Math.round((completedWeeks.size / totalWeeks) * 100) : 0;

  const fill = document.getElementById('progress-fill');
  const text = document.getElementById('progress-text');

  fill.style.width = `${percentage}%`;
  text.textContent = `Progresso: ${percentage}% concluído (${completedWeeks.size}/${totalWeeks})`;
}

function findNextIncompleteWeek() {
  for (let m = 0; m < studyPlan.length; m++) {
    const month = studyPlan[m];
    for (let w = 0; w < month.weeks.length; w++) {
      const weekId = `${m}-${w}`;
      if (!completedWeeks.has(weekId)) {
        return { monthIdx: m, weekIdx: w };
      }
    }
  }
  return null;
}

function updateMonthBar(monthIdx) {
  const monthCard = document.querySelector(`[data-month-idx="${monthIdx}"]`);
  if (!monthCard) return;

  const month = studyPlan[monthIdx];
  let monthCompleted = 0;
  let wasCompleted = false;

  // Check if was already complete
  const badge = monthCard.querySelector('.month-badge-complete');
  wasCompleted = badge && badge.style.display === 'inline-block';

  for (let w = 0; w < month.weeks.length; w++) {
    if (completedWeeks.has(`${monthIdx}-${w}`)) monthCompleted++;
  }

  const progressFill = monthCard.querySelector('.month-progress-bar-fill');
  if (progressFill) {
    const percentage = (monthCompleted / month.weeks.length) * 100;
    progressFill.style.width = percentage + '%';
  }

  const progressBar = monthCard.querySelector('.month-progress-bar');

  if (monthCompleted === month.weeks.length && month.weeks.length > 0) {
    // Just completed the month
    if (!wasCompleted) {
      showConfetti();
    }
    if (progressBar) progressBar.style.display = 'none';
    if (badge) badge.style.display = 'inline-block';
  } else {
    if (progressBar) progressBar.style.display = 'block';
    if (badge) badge.style.display = 'none';
  }
}

function updateStats() {
  const totalWeeks = studyPlan.reduce((sum, m) => sum + m.weeks.length, 0);
  const completed = completedWeeks.size;
  const pending = totalWeeks - completed;

  document.getElementById('total-weeks').textContent = totalWeeks;
  document.getElementById('completed-count').textContent = completed;
  document.getElementById('pending-count').textContent = pending;

  const avgPerMonth = totalWeeks > 0 ? Math.round((completed / (totalWeeks / 8)) * 100) : 0;
  document.getElementById('avg-per-month').textContent = `${avgPerMonth}%`;

  // Streak (simplificado - últimas ações)
  const streak = completedWeeks.size > 0 ? '7+ dias 🔥' : '0 dias 🚀';
  document.getElementById('current-streak').textContent = streak;

  // Update next week recommendation
  const nextWeek = findNextIncompleteWeek();
  const nextWeekLabel = document.getElementById('next-week-label');
  if (nextWeekLabel) {
    if (nextWeek) {
      const { monthIdx, weekIdx } = nextWeek;
      const month = studyPlan[monthIdx];
      const week = month.weeks[weekIdx];
      nextWeekLabel.textContent = `${month.emoji} Semana ${weekIdx + 1} - ${week.title}`;
      nextWeekLabel.style.display = 'block';
    } else {
      nextWeekLabel.textContent = '🎉 Parabéns! Você completou todos os tópicos!';
      nextWeekLabel.style.display = 'block';
    }
  }

  // Mark current week indicator
  markCurrentWeek();
}

function showConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  const colors = ['#38bdf8', '#4ade80', '#fbbf24', '#f97373', '#a855f7', '#ec4899'];
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';

    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.backgroundColor = color;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '-10px';
    particle.style.width = Math.random() * 8 + 5 + 'px';
    particle.style.height = particle.style.width;
    particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    particle.style.animation = `confettiFall ${2 + Math.random() * 1}s linear forwards`;
    particle.style.delay = Math.random() * 0.1 + 's';

    container.appendChild(particle);
  }

  setTimeout(() => container.remove(), 3500);
}

function markCurrentWeek() {
  // Remove all current indicators
  document.querySelectorAll('.week-item.week-current').forEach(el => {
    el.classList.remove('week-current');
  });

  // Find and mark the next incomplete week
  const nextWeek = findNextIncompleteWeek();
  if (nextWeek) {
    const { monthIdx, weekIdx } = nextWeek;
    const weekId = `${monthIdx}-${weekIdx}`;
    const weekItem = document.querySelector(`[data-week-id="${weekId}"]`);
    if (weekItem) {
      weekItem.classList.add('week-current');
      // Auto-scroll to it if not in view
      weekItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Only if not typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const activeWeek = document.querySelector('.week-item.week-current');
    if (!activeWeek) return;

    // Enter or Space to toggle current week
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const toggleBtn = activeWeek.querySelector('.toggle-btn');
      if (toggleBtn) {
        toggleBtn.click();
      }
    }

    // Arrow Down to move to next week
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const allWeeks = Array.from(document.querySelectorAll('.week-item'));
      const currentIdx = allWeeks.indexOf(activeWeek);
      if (currentIdx < allWeeks.length - 1) {
        allWeeks[currentIdx + 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    // Arrow Up to move to previous week
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const allWeeks = Array.from(document.querySelectorAll('.week-item'));
      const currentIdx = allWeeks.indexOf(activeWeek);
      if (currentIdx > 0) {
        allWeeks[currentIdx - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  });
}

function applyFilter(monthNum) {
  currentFilter = monthNum;

  // Atualizar botões
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.month === String(monthNum) || (monthNum === null && btn.id === 'filter-all')) {
      btn.classList.add('active');
    }
  });

  // Filtrar e renderizar
  const filtered = monthNum === null ? studyPlan : studyPlan.filter(m => m.month === monthNum);
  renderPlan(filtered);
}

function setupSearch() {
  const input = document.getElementById('search-input');
  const countDisplay = document.getElementById('search-count');

  input.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();

    if (searchQuery) {
      const filtered = currentFilter === null
        ? studyPlan
        : studyPlan.filter(m => m.month === currentFilter);

      let matchCount = 0;
      filtered.forEach(month => {
        matchCount += month.weeks.filter(w => matchesSearch(w, searchQuery)).length;
      });

      countDisplay.textContent = matchCount > 0 ? `${matchCount} resultado${matchCount !== 1 ? 's' : ''}` : 'Nenhum';
    } else {
      countDisplay.textContent = '';
    }

    applyFilter(currentFilter);
  });
}

function setupFilters() {
  const container = document.getElementById('filter-buttons');
  const allBtn = document.getElementById('filter-all');

  studyPlan.forEach(month => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.month = month.month;
    btn.textContent = `${month.emoji} Mês ${month.month}`;
    btn.addEventListener('click', () => applyFilter(month.month));
    container.appendChild(btn);
  });

  allBtn.addEventListener('click', () => applyFilter(null));
}

function setupTheme() {
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle.querySelector('.theme-icon');

  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
      icon.textContent = '🌙';
    } else {
      document.body.classList.remove('light-mode');
      icon.textContent = '☀️';
    }
  }

  const currentTheme = getCurrentTheme();
  applyTheme(currentTheme);

  toggle.addEventListener('click', () => {
    // Mudar para modo manual quando o usuário clica
    saveThemeMode('manual');

    const newTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
    saveTheme(newTheme);
    applyTheme(newTheme);
    updateAutoThemeIndicator();
  });

  // Setup auto theme scheduler
  setupAutoThemeScheduler(applyTheme);
  updateAutoThemeIndicator();
}

function setupAutoThemeScheduler(applyThemeFn) {
  // Verificar a cada minuto se o tema automático mudou (próximo ao horário 6 AM ou 6 PM)
  setInterval(() => {
    const mode = getThemeMode();
    if (mode === 'auto') {
      const currentTheme = getAutoTheme();
      const isLight = document.body.classList.contains('light-mode');
      const currentMode = isLight ? 'light' : 'dark';

      if (currentTheme !== currentMode) {
        applyThemeFn(currentTheme);
      }
    }
  }, 60000); // Verificar a cada 1 minuto
}

function updateAutoThemeIndicator() {
  const mode = getThemeMode();
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle.querySelector('.theme-icon');

  // Adicionar/remover atributo para indicar se está em modo automático
  if (mode === 'auto') {
    toggle.setAttribute('data-auto', 'true');
    toggle.title = '🤖 Modo Automático (baseado na hora do dia)\nClique para mudar manualmente';
  } else {
    toggle.removeAttribute('data-auto');
    toggle.title = '⚙️ Modo Manual\nClique para alternar';
  }
}

function resetProgress() {
  if (confirm('⚠️ Tem certeza? Isso vai resetar todo o progresso!')) {
    completedWeeks.clear();
    localStorage.removeItem(STORAGE_KEY);
    renderPlan();
    updateProgressBar();
    updateStats();
  }
}

// ===== INICIALIZAÇÃO =====
function init() {
  loadProgress();
  setupTheme();
  setupFilters();
  setupSearch();
  renderPlan();
  updateProgressBar();
  updateStats();
  markCurrentWeek();
  setupKeyboardShortcuts();

  document.getElementById('reset-btn').addEventListener('click', resetProgress);
}

document.addEventListener('DOMContentLoaded', init);
