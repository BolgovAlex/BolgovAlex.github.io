// custom.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const languageToggleBtn = document.getElementById('language-toggle');
    const body = document.body;
  
    // Объекты с переводами
    const translations = {
      en: {
        "Верхняя строчка | Должность": "Top Line | Position",
        "Вкратце обо мне": "About Me",
        "Мой опыт работы": "My Work Experience",
        "Сотрудничество": "Collaboration",
        "GitHub": "GitHub",
        "Написать мне": "Contact Me",
        "Привет! Я Александр Болгов": "Hello! I'm Alexander Bolgov",
        "Я — студент Высшей Школы Экономики, ФКН ПМИ. Учусь отлично и мечтаю начать ходить на все лекции (шучу, конечно!).":
          "I am a student at the Higher School of Economics, FKN PMI. Studying excellently and dreaming of attending all lectures (just kidding, of course!).",
        "Обо мне": "About Me",
        "Я — обычный студент, который не получил нервный срыв, но, кажется, все прошло нормально. В общем, никто не заметил, что я иногда пропускаю лекции...":
          "I am an ordinary student who didn't have a nervous breakdown, but it seems everything went fine. In general, no one noticed that I sometimes skip lectures...",
        "Проект по питону": "Python Project",
        "Ноябрь 2024 – Декабрь 2024": "November 2024 – December 2024",
        "Python Developer": "Python Developer",
        "Не получил нервный срыв, вроде нормально все получилось. Возможно, даже чуть-чуть вырос :)":
          "Didn't have a nervous breakdown, everything seems to have gone fine. Maybe even grew a bit :)",
        "Анекбот": "Anekbot",
        "Апрель 2022": "April 2022",
        "AI Engineer": "AI Engineer",
        "Работал над проектом, который до сих пор пытается понять, почему я такой крутой. Пока что без нервных срывов!":
          "Worked on a project that is still trying to understand why I'm so cool. So far, no nervous breakdowns!",
        "Навыки": "Skills",
        "Если интересно, что я могу для вас сделать, пишите:": "If you're interested in what I can do for you, write me:",
        "Написать в Telegram": "Write on Telegram",
        "Посмотреть резюме": "View Resume",
        "Написать на почту": "Email Me",
        "Сделано с любовью в 2024 году.": "Made with love in 2024."
      },
      ru: {
        // Русские тексты остаются без изменений
        "Верхняя строчка | Должность": "Верхняя строчка | Должность",
        "Вкратце обо мне": "Вкратце обо мне",
        "Мой опыт работы": "Мой опыт работы",
        "Сотрудничество": "Сотрудничество",
        "GitHub": "GitHub",
        "Написать мне": "Написать мне",
        "Привет! Я Александр Болгов": "Привет! Я Александр Болгов",
        "Я — студент Высшей Школы Экономики, ФКН ПМИ. Учусь отлично и мечтаю начать ходить на все лекции (шучу, конечно!).":
          "Я — студент Высшей Школы Экономики, ФКН ПМИ. Учусь отлично и мечтаю начать ходить на все лекции (шучу, конечно!).",
        "Обо мне": "Обо мне",
        "Я — обычный студент, который не получил нервный срыв, но, кажется, все прошло нормально. В общем, никто не заметил, что я иногда пропускаю лекции...":
          "Я — обычный студент, который не получил нервный срыв, но, кажется, все прошло нормально. В общем, никто не заметил, что я иногда пропускаю лекции...",
        "Проект по питону": "Проект по питону",
        "Ноябрь 2024 – Декабрь 2024": "Ноябрь 2024 – Декабрь 2024",
        "Python Developer": "Python Developer",
        "Не получил нервный срыв, вроде нормально все получилось. Возможно, даже чуть-чуть вырос :)":
          "Не получил нервный срыв, вроде нормально все получилось. Возможно, даже чуть-чуть вырос :)",
        "Анекбот": "Анекбот",
        "Апрель 2022": "Апрель 2022",
        "AI Engineer": "AI Engineer",
        "Работал над проектом, который до сих пор пытается понять, почему я такой крутой. Пока что без нервных срывов!":
          "Работал над проектом, который до сих пор пытается понять, почему я такой крутой. Пока что без нервных срывов!",
        "Навыки": "Навыки",
        "Если интересно, что я могу для вас сделать, пишите:": "Если интересно, что я могу для вас сделать, пишите:",
        "Написать в Telegram": "Написать в Telegram",
        "Посмотреть резюме": "Посмотреть резюме",
        "Написать на почту": "Написать на почту",
        "Сделано с любовью в 2024 году.": "Сделано с любовью в 2024 году."
      }
    };
  
    // Функция для перевода текста
    function translate(language) {
      document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
          element.textContent = translations[language][key];
        }
      });
    }
  
    // Переключение языка
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('click', () => {
      let currentLanguage = localStorage.getItem('language') || 'ru';
      let newLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
      localStorage.setItem('language', newLanguage);
      translate(newLanguage);
      languageToggle.textContent = newLanguage === 'ru' ? 'EN' : 'RU';
    });
  
    // Инициализация языка при загрузке
    let savedLanguage = localStorage.getItem('language') || 'ru';
    translate(savedLanguage);
    languageToggle.textContent = savedLanguage === 'ru' ? 'EN' : 'RU';
  
    // Переключение темы
    themeToggleBtn.addEventListener('click', () => {
      let currentTheme = localStorage.getItem('theme') || 'light';
      if (currentTheme === 'light') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        themeToggleBtn.textContent = 'Светлая тема';
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        themeToggleBtn.textContent = 'Темная тема';
        localStorage.setItem('theme', 'light');
      }
    });
  
    // Инициализация темы при загрузке
    let savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
      themeToggleBtn.textContent = 'Светлая тема';
    } else {
      body.classList.add('light-theme');
      themeToggleBtn.textContent = 'Темная тема';
    }
  });
  