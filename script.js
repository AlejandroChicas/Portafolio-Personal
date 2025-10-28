// Traducciones
const translations = {
  es: {
    "portfolio-title": "Mi Portafolio Personal",
    "nav-home": "Inicio",
    "nav-about": "Sobre mí",
    "nav-projects": "Proyectos",
    "nav-personal-brand": "Marca Personal",
    "nav-contact": "Contacto",
    "greeting": "Hola, Soy Josué Chicas",
    "interest-areas": "Rol:",
    "mobile-dev": "Diseñador UI/UX",
    "about-me": "Sobre mí",
    "about-me-text": "Soy estudiante de Técnico en Ingeniería y Sistemas Informáticas. Me encanta aprender cosas nuevas y trabajar en proyectos que resuelvan problemas reales. Soy una persona comprometida, responsable y disciplinada, con gran capacidad de organización y adaptación. Me caracterizo por la honestidad, la integridad y la confianza, lo que guía mi actuar diario. Tengo una actitud proactiva, aporto soluciones creativas e innovadoras, y disfruto del trabajo en equipo fomentando la comunicación y el respeto. También poseo habilidades de liderazgo y mantengo una mentalidad de mejora continua, siempre en busca de nuevos conocimientos para aportar al éxito colectivo.",
    "download-cv": "Descargar CV",
    "programming-languages": "Lenguajes de Programación Desarrollados",
    "skills": "Habilidades",
    "strong-skills": "Habilidades Fuertes",
    "soft-skills": "Habilidades Blandas",
    "skill-1": "Uso de Android Studio para el desarrollo de aplicaciones móviles",
    "skill-2": "Creación de interfaces gráficas intuitivas y funcionales",
    "skill-3": "Prueba y depuración de aplicaciones en dispositivos físicos y emuladores",
    "skill-4": "Participación en proyectos académicos y personales para reforzar la práctica",
    "soft-skill-1": "Responsable y comprometido con los objetivos",
    "soft-skill-2": "Comunicación clara y efectiva",
    "soft-skill-3": "Capacidad de análisis y resolución de problemas",
    "soft-skill-4": "Colaboración en equipo multidisciplinario",
    "soft-skill-5": "Sociabilidad y empatía en el entorno laboral",
    "soft-skill-6": "Adaptabilidad frente a nuevos desafíos",
    "projects": "Proyectos",
    "project-1-title": "Adopta a un amigo",
    "project-1-desc": "Página Web para adopción de mascotas (Rol:Diseñador UI/UX)",
    "project-2-title": "Artesania Conchita",
    "project-2-desc": "Prototipo (Rol: Programador)",
    "project-3-title": "Página Web Artesania Conchita",
    "project-3-desc": "Página Web donde se pueden ver las artesanías (Rol: Diseñador UI/UX)",
    "project-4-title": "Task Planner",
    "project-4-desc": "Aplicación Android para organizar tareas (Rol:Diseñador UI/UX)",
    "view-code": "Ver Código",
    "view-image": "Ver Imagen",
    "personal-brand": "Marca Personal",
    "brand-title": "Josué Chicas “JCH”",
    "brand-phrase": "Corre hacia el futuro donde la tecnología y la humanidad avanzan juntas.",
    "contact": "Contacto",
    "rights": "Todos los derechos reservados"
  },
  en: {
    "portfolio-title": "My Personal Portfolio",
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-projects": "Projects",
    "nav-personal-brand": "Personal Brand",
    "nav-contact": "Contact",
    "greeting": "Hello, I'm Josué Chicas",
    "interest-areas": "Role:",
    "mobile-dev": "UI/UX Designer",
    "about-me": "About me",
    "about-me-text": "I am a student of Computer Engineering and Information Systems. I love learning new things and working on projects that solve real problems. I am a committed, responsible, and disciplined person, with great organizational and adaptation skills. I am characterized by honesty, integrity, and trust, which guides my daily actions. I have a proactive attitude, provide creative and innovative solutions, and enjoy teamwork by fostering communication and respect. I also have leadership skills and maintain a continuous improvement mindset, always seeking new knowledge to contribute to collective success.",
    "download-cv": "Download CV",
    "programming-languages": "Developed Programming Languages",
    "skills": "Skills",
    "strong-skills": "Strong Skills",
    "soft-skills": "Soft Skills",
    "skill-1": "Use of Android Studio for mobile application development",
    "skill-2": "Creation of intuitive and functional graphical interfaces",
    "skill-3": "Testing and debugging applications on physical devices and emulators",
    "skill-4": "Participation in academic and personal projects to reinforce practice",
    "soft-skill-1": "Responsible and committed to objectives",
    "soft-skill-2": "Clear and effective communication",
    "soft-skill-3": "Analytical and problem-solving skills",
    "soft-skill-4": "Collaboration in multidisciplinary teams",
    "soft-skill-5": "Sociability and empathy in the work environment",
    "soft-skill-6": "Adaptability to new challenges",
    "projects": "Projects",
    "project-1-title": "Adopt a Friend",
    "project-1-desc": "Website for pet adoption (Role: UI/UX Designer)",
    "project-2-title": "Conchita Crafts",
    "project-2-desc": "Prototype (Role:Programmer)",
    "project-3-title": "Conchita Crafts Website",
    "project-3-desc": "Website where you can see the crafts (Role: UI/UX Designer)",
    "project-4-title": "Task Planner",
    "project-4-desc": "Android application to organize tasks (Role: UI/UX Designer)",
    "view-code": "View Code",
    "view-image": "View Image",
    "personal-brand": "Personal Brand",
    "brand-title": "Josué Chicas “JCH”",
    "brand-phrase": "Race into the future where technology and humanity advance together.",
    "contact": "Contact",
    "rights": "All rights reserved"
  }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
  document.querySelectorAll('.language-selector select').forEach(select => {
    select.value = lang;
  });

  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      // Usamos innerHTML solo si contiene etiquetas HTML
      if (translations[lang][key].includes("<") || translations[lang][key].includes("&")) {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  localStorage.setItem('preferred-language', lang);
}

// Función para alternar el tema
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('preferred-theme', newTheme);

  const themeIcon = document.querySelector('.theme-icon');
  themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.language-selector select').forEach(select => {
    select.addEventListener('change', function() {
      changeLanguage(this.value);
    });
  });

  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', toggleTheme);

  const savedLanguage = localStorage.getItem('preferred-language') || 'es';
  changeLanguage(savedLanguage);

  const savedTheme = localStorage.getItem('preferred-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const themeIcon = document.querySelector('.theme-icon');
  themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
});
