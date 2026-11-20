// ─────────────────────────────────────────────────────────────
//  ВЕСЬ ТЕКСТ САЙТА ЗДЕСЬ. Меняй этот файл — сайт обновится сам.
//  ALL SITE TEXT LIVES HERE. Edit this file to update the site.
//
//  Каждое поле с переводом выглядит так: { en: '...', ru: '...' }
//  Картинки клади в папку public/images/ и указывай путь '/images/имя.jpg'
//  Пустая ссылка ('') — кнопка просто не покажется.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Aidana Shynbulatova',
  firstName: { en: 'Aidana', ru: 'Айдана' },
  lastName: { en: 'Shynbulatova', ru: 'Шынбулатова' },
  role: { en: 'Junior Python Backend Developer', ru: 'Junior Python Backend-разработчица' },
  location: { en: 'Almaty, Kazakhstan', ru: 'Алматы, Казахстан' },
  photo: '/images/aidana.jpg',
  openToWork: true,
  tagline: {
    en: 'I build backends that are reliable, readable and quietly elegant — APIs, data models and the logic behind real products.',
    ru: 'Создаю надёжный и понятный backend — API, модели данных и логику, на которых держатся настоящие продукты.',
  },
}

export const contacts = {
  email: 'aidana15042019@gmail.com',
  telegram: 'https://t.me/shnbltv5',
  github: 'https://github.com/shnbltv5',
  linkedin: '', // ← вставь сюда ссылку на LinkedIn, например 'https://www.linkedin.com/in/...'
}

export const about = {
  paragraphs: {
    en: [
      "I'm Aidana, a final-year Information Systems student at KBTU (Kazakh-British Technical University), based in Almaty.",
      'I focus on backend development with Python and Django: application architecture, databases and APIs. I care about building useful products where technology, functionality and good design come together.',
      "I'm also interested in artificial intelligence and in bringing ML into real-world projects.",
    ],
    ru: [
      'Я — Айдана, студентка выпускного курса KBTU (Kazakh-British Technical University), специальность Information Systems. Живу в Алматы.',
      'Развиваюсь в backend-разработке на Python и Django: архитектура приложений, базы данных и API. Мне нравится создавать полезные продукты, в которых сочетаются технологии, функциональность и хороший дизайн.',
      'Также интересуюсь искусственным интеллектом и интеграцией ML в реальные проекты.',
    ],
  },
  facts: [
    { label: { en: 'Education', ru: 'Образование' }, value: { en: 'KBTU — Information Systems', ru: 'KBTU — Information Systems' } },
    { label: { en: 'Focus', ru: 'Фокус' }, value: { en: 'Python · Django · PostgreSQL', ru: 'Python · Django · PostgreSQL' } },
    { label: { en: 'Interests', ru: 'Интересы' }, value: { en: 'AI / ML integration, product design', ru: 'Интеграция AI / ML, продуктовый дизайн' } },
    { label: { en: 'Based in', ru: 'Город' }, value: { en: 'Almaty, Kazakhstan', ru: 'Алматы, Казахстан' } },
  ],
}

// primary: true — выделяется как основной стек
export const stack = [
  {
    title: { en: 'Languages', ru: 'Языки' },
    items: [
      { name: 'Python', primary: true },
      { name: 'SQL', primary: true },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'C++' },
      { name: 'HTML / CSS' },
    ],
  },
  {
    title: { en: 'Frameworks', ru: 'Фреймворки' },
    items: [
      { name: 'Django', primary: true },
      { name: 'Django REST Framework', primary: true },
      { name: 'Flask' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: { en: 'Data', ru: 'Данные' },
    items: [{ name: 'PostgreSQL', primary: true }, { name: 'SQLite' }, { name: 'MySQL' }],
  },
  {
    title: { en: 'Tools', ru: 'Инструменты' },
    items: [
      { name: 'Git / GitHub' },
      { name: 'Docker' },
      { name: 'REST API', primary: true },
      { name: 'JWT' },
      { name: 'Postman' },
      { name: 'Swagger' },
      { name: 'Figma' },
      { name: 'VS Code' },
    ],
  },
]

// Фильтры над проектами. id используется в поле category у проекта.
export const categories = [
  { id: 'all', label: { en: 'All', ru: 'Все' } },
  { id: 'backend', label: { en: 'Backend', ru: 'Backend' } },
  { id: 'fullstack', label: { en: 'Full-stack', ru: 'Full-stack' } },
  { id: 'frontend', label: { en: 'Frontend', ru: 'Frontend' } },
]

// Порядок в массиве = порядок на сайте. featured: true — широкая карточка на всю строку (лучше одна).
// status: 'progress' | 'team' | 'done' | 'private'  (можно несколько через массив)
export const projects = [
  {
    title: 'KelBet',
    subtitle: { en: 'AI Wardrobe Assistant', ru: 'AI-ассистент гардероба' },
    year: '2026',
    category: ['fullstack'],
    status: ['progress', 'private'],
    featured: true,
    image: '',
    description: {
      en: 'An AI app that creates outfits from clothes already in the user’s wardrobe. It considers weather, location, mood, personal preferences and the occasion, and recognises clothing items from photos.',
      ru: 'AI-приложение, которое составляет образы из одежды, уже имеющейся в гардеробе. Учитывает погоду, местоположение, настроение, личные предпочтения и ситуацию, а также распознаёт одежду по фотографиям.',
    },
    tech: ['Python', 'Django', 'React', 'PostgreSQL', 'Machine Learning', 'Computer Vision'],
    links: { github: '', demo: '' },
  },
  {
    title: 'Asar',
    subtitle: { en: 'Emergency Assistance Platform', ru: 'Платформа экстренной помощи' },
    year: '2026',
    category: ['fullstack'],
    status: ['team'],
    image: '',
    description: {
      en: 'A web platform for finding emergency resources and help: an interactive map of useful resources, SOS requests, applications with filters, an admin panel and a Telegram bot.',
      ru: 'Веб-платформа для поиска экстренных ресурсов и помощи: интерактивная карта полезных ресурсов, SOS-заявки, заявки с фильтрами, админ-панель и Telegram-бот.',
    },
    tech: ['Next.js', 'TypeScript', 'Flask', 'PostgreSQL', 'Docker', 'Leaflet', 'OpenStreetMap', 'Swagger'],
    links: { github: 'https://github.com/runasaiii/ESG', demo: '' },
  },
  {
    title: 'Blog API',
    subtitle: { en: 'Django REST API with JWT', ru: 'Django REST API с JWT' },
    year: '2026',
    category: ['backend'],
    status: ['done'],
    image: '/images/blog-api.jpg',
    description: {
      en: 'REST API for a blog: custom email-based user model, JWT auth, posts with categories, tags, comments and draft/published status. Includes a Faker seed command, 50 ORM query exercises and an admin dashboard built with Django Unfold.',
      ru: 'REST API для блога: кастомная модель пользователя по email, JWT-аутентификация, посты с категориями, тегами, комментариями и статусами draft/published. Есть seed-команда на Faker, 50 ORM-запросов и админ-дашборд на Django Unfold.',
    },
    tech: ['Python', 'Django', 'DRF', 'SimpleJWT', 'PostgreSQL', 'Django Unfold'],
    links: { github: 'https://github.com/shnbltv5/blog-api', demo: '' },
  },
  {
    title: 'EduConnect',
    subtitle: { en: 'Online learning platform', ru: 'Платформа онлайн-обучения' },
    year: '2026',
    category: ['fullstack'],
    status: ['team'],
    image: '',
    description: {
      en: 'Students browse and enroll in courses, teachers create and manage their own. Role-based registration, JWT with refresh tokens, an HTTP interceptor and route guards on the Angular side.',
      ru: 'Студенты записываются на курсы, преподаватели создают и редактируют свои. Регистрация с ролями, JWT с refresh-токенами, HTTP-интерсептор и защита маршрутов на стороне Angular.',
    },
    tech: ['Django', 'DRF', 'JWT', 'Angular', 'TypeScript', 'RxJS', 'Bootstrap'],
    links: { github: 'https://github.com/shnbltv5/Linko', demo: '' },
  },
  {
    title: 'Quest Board',
    subtitle: { en: 'React SPA → PWA', ru: 'React SPA → PWA' },
    year: '2026',
    category: ['frontend'],
    status: ['done'],
    image: '/images/quest-board.jpg',
    description: {
      en: 'A React app for browsing and posting quests, grown step by step: search, filters, sorting and pagination, React Router with lazy pages, Firebase Auth with protected routes, caching and an offline-ready PWA.',
      ru: 'React-приложение для просмотра и публикации квестов, развивалось по шагам: поиск, фильтры, сортировка и пагинация, React Router с lazy-страницами, Firebase Auth с защищёнными маршрутами, кэш и PWA с офлайн-режимом.',
    },
    tech: ['React', 'React Router', 'Firebase Auth', 'Vite', 'Service Worker'],
    links: {
      github: 'https://github.com/shnbltv5/JS-Framework.-React',
      demo: 'https://shnbltv5.github.io/JS-Framework.-React/task5/',
    },
  },
  {
    title: 'CollabHub',
    subtitle: { en: 'Businesses × bloggers', ru: 'Бизнес × блогеры' },
    year: '2026',
    category: ['backend'],
    status: ['team', 'progress'],
    image: '',
    description: {
      en: 'A Django platform where small and medium businesses find bloggers for advertising: campaigns, applications, contracts and deliverables. I’m responsible for the collaborations module.',
      ru: 'Платформа на Django, где малый и средний бизнес находит блогеров для рекламы: кампании, отклики, контракты и публикации. Я отвечаю за модуль collaborations.',
    },
    tech: ['Python', 'Django', 'PostgreSQL'],
    links: { github: 'https://github.com/mubarakkkova/collabhub', demo: '' },
  },
  {
    title: 'MetaCheck',
    subtitle: { en: 'Health monitoring system', ru: 'Система мониторинга здоровья' },
    year: '2026',
    category: ['fullstack'],
    status: ['done'],
    image: '',
    description: {
      en: 'Metabolic syndrome monitoring: measurement entry with validation, filtered history, period averages, JSON web services, XML reference ranges and an auto-refreshing patient dashboard.',
      ru: 'Мониторинг метаболического синдрома: ввод показателей с валидацией, история с фильтрами, средние за период, JSON веб-сервисы, референсные диапазоны в XML и дашборд пациентов с автообновлением.',
    },
    tech: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'JSON', 'XML'],
    links: { github: '', demo: '' },
  },
  {
    title: 'Unity Project',
    subtitle: { en: 'Game development', ru: 'Разработка игры' },
    year: '2025',
    category: ['frontend'],
    status: ['team'],
    image: '',
    description: {
      // TODO: допиши, что именно делала ты: механики, уровни, скрипты или UI
      en: 'A team game project built in Unity with C#: gameplay scripting and scene work in a shared codebase.',
      ru: 'Командный игровой проект на Unity и C#: скрипты геймплея и работа со сценами в общей кодовой базе.',
    },
    tech: ['Unity', 'C#'],
    links: { github: 'https://github.com/shnbltv5/Unity-proj', demo: '' },
  },
]

// Все надписи интерфейса
export const ui = {
  nav: {
    about: { en: 'About', ru: 'Обо мне' },
    stack: { en: 'Stack', ru: 'Стек' },
    work: { en: 'Work', ru: 'Проекты' },
    contact: { en: 'Contact', ru: 'Контакты' },
  },
  hero: {
    issue: { en: 'Portfolio — Vol. 01', ru: 'Портфолио — Том 01' },
    viewWork: { en: 'View work', ru: 'Смотреть проекты' },
    contact: { en: 'Get in touch', ru: 'Связаться' },
    open: { en: 'Open to internships & junior roles', ru: 'Открыта к стажировкам и junior-позициям' },
    scroll: { en: 'Scroll', ru: 'Листайте' },
  },
  sections: {
    about: { en: 'About', ru: 'Обо мне' },
    aboutTitle: { en: 'Code with a sense of form.', ru: 'Код с чувством формы.' },
    stack: { en: 'Stack', ru: 'Стек' },
    stackTitle: { en: 'Tools of the trade.', ru: 'Чем я работаю.' },
    stackNote: {
      en: 'Main direction — Python backend: Django and PostgreSQL. React and JavaScript for the frontend.',
      ru: 'Основное направление — Python backend: Django и PostgreSQL. React и JavaScript — для frontend.',
    },
    work: { en: 'Selected work', ru: 'Избранные проекты' },
    workTitle: { en: 'Things I’ve built.', ru: 'Что я создала.' },
    contact: { en: 'Contact', ru: 'Контакты' },
    contactTitle: { en: 'Let’s build something useful.', ru: 'Давайте создадим что-то полезное.' },
    contactText: {
      en: 'Open to internships, junior backend roles, hackathons and interesting collaborations.',
      ru: 'Открыта к стажировкам, junior backend-позициям, хакатонам и интересным коллаборациям.',
    },
  },
  status: {
    progress: { en: 'In progress', ru: 'В работе' },
    team: { en: 'Team project', ru: 'Командный' },
    done: { en: 'Completed', ru: 'Готов' },
    private: { en: 'Private repo', ru: 'Приватный' },
  },
  links: {
    github: { en: 'Code', ru: 'Код' },
    demo: { en: 'Live demo', ru: 'Демо' },
    more: { en: 'More on GitHub', ru: 'Ещё на GitHub' },
  },
  copy: { en: 'Copy', ru: 'Копировать' },
  copied: { en: 'Copied', ru: 'Скопировано' },
  footer: { en: 'Designed & built with React', ru: 'Дизайн и разработка — на React' },
  backToTop: { en: 'Back to top', ru: 'Наверх' },
}
