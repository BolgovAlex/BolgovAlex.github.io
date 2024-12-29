document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const languageToggleBtn = document.getElementById('language-toggle');
    const body = document.body;
  
    const translations = {
      en: {
        "Вкратце обо мне": "About Me",
        "Мой опыт работы": "My Work Experience",
        "Сотрудничество": "Collaboration",
        "GitHub": "GitHub",
        "Написать мне": "Contact Me",
        "Привет! Я Александр Болгов": "Hello! I'm Alexander Bolgov",
        "Я — студент Высшей Школы Экономики, ФКН ПМИ. Учусь отлично и мечтаю начать ходить на все лекции (шучу, конечно!).":
          "I am a student at the Higher School of Economics, FKN PMI. Studying excellently and dreaming of attending all lectures (just kidding, of course!).",
        "Обо мне": "About Me",
        "Студент 2 курса прикладной математики и информатики, раньше жил в Казани и увлекался робототехникой и вырезкой по дереву, сейчас к сожалению на это не хватает времени.":
          "Second-year student of Applied Mathematics and Computer Science, previously lived in Kazan and was interested in robotics and wood carving, unfortunately, don't have enough time for it now.",
        "Проект по питону": "Python Project",
        "Ноябрь 2024 – Декабрь 2024": "November 2024 – December 2024",
        "Python Developer": "Python Developer",
        "Не получил нервный срыв, вроде нормально все получилось. Возможно, даже чуть-чуть вырос :)":
          "Didn't have a nervous breakdown, everything seems to have gone fine. Maybe even grew a bit :)",
        "Анекбот": "Anekbot",
        "Апрель 2022": "April 2022",
        "Я написал бота в тг, который раз в сутки берет анекдоты из паблика анекдоты категории б и отправляет рандомный по запросу пользователя.":
          "I wrote a Telegram bot that once a day fetches jokes from the 'Jokes Category B' public group and sends a random one upon user request.",
        "Навыки": "Skills",
        "Если интересно, что я могу для вас сделать, пишите:": "If you're interested in what I can do for you, contact me:",
        "Написать в Telegram": "Write on Telegram",
        "Написать на почту": "Email Me",
        "Сделано с любовью в 2024 году.": "Made with love in 2024."
      },
      ru: {
        "Вкратце обо мне": "Вкратце обо мне",
        "Мой опыт работы": "Мой опыт работы",
        "Сотрудничество": "Сотрудничество",
        "GitHub": "GitHub",
        "Написать мне": "Написать мне",
        "Привет! Я Александр Болгов": "Привет! Я Александр Болгов",
        "Я — студент Высшей Школы Экономики, ФКН ПМИ. Учусь отлично и мечтаю начать ходить на все лекции (шучу, конечно!).":
          "Я — студент Высшей Школы Экономики, ФКН ПМИ. Учусь отлично и мечтаю начать ходить на все лекции (шучу, конечно!).",
        "Обо мне": "Обо мне",
        "Студент 2 курса прикладной математики и информатики, раньше жил в Казани и увлекался робототехникой и вырезкой по дереву, сейчас к сожалению на это не хватает времени.":
          "Студент 2 курса прикладной математики и информатики, раньше жил в Казани и увлекался робототехникой и вырезкой по дереву, сейчас к сожалению на это не хватает времени.",
        "Проект по питону": "Проект по питону",
        "Ноябрь 2024 – Декабрь 2024": "Ноябрь 2024 – Декабрь 2024",
        "Python Developer": "Python Developer",
        "Не получил нервный срыв, вроде нормально все получилось. Возможно, даже чуть-чуть вырос :)":
          "Не получил нервный срыв, вроде нормально все получилось. Возможно, даже чуть-чуть вырос :)",
        "Анекбот": "Анекбот",
        "Апрель 2022": "Апрель 2022",
        "Я написал бота в тг, который раз в сутки берет анекдоты из паблика анекдоты категории б и отправляет рандомный по запросу пользователя.":
          "Я написал бота в тг, который раз в сутки берет анекдоты из паблика анекдоты категории б и отправляет рандомный по запросу пользователя.",
        "Навыки": "Навыки",
        "Если интересно, что я могу для вас сделать, пишите:": "Если интересно, что я могу для вас сделать, пишите:",
        "Написать в Telegram": "Написать в Telegram",
        "Написать на почту": "Написать на почту",
        "Сделано с любовью в 2024 году.": "Сделано с любовью в 2024 году."
      }
    };
  
    function translate(language) {
      document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
          element.textContent = translations[language][key];
        }
      });
    }

    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('click', () => {
      let currentLanguage = localStorage.getItem('language') || 'ru';
      let newLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
      localStorage.setItem('language', newLanguage);
      translate(newLanguage);
      languageToggle.textContent = newLanguage === 'ru' ? 'EN' : 'RU';
    });

    let savedLanguage = localStorage.getItem('language') || 'ru';
    translate(savedLanguage);
    languageToggle.textContent = savedLanguage === 'ru' ? 'EN' : 'RU';

    themeToggleBtn.addEventListener('click', () => {
      let currentTheme = localStorage.getItem('theme') || 'light';
      if (currentTheme === 'light') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        themeToggleBtn.textContent = savedLanguage === 'ru' ? 'Светлая тема' : 'Light Theme';
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        themeToggleBtn.textContent = savedLanguage === 'ru' ? 'Темная тема' : 'Dark Theme';
        localStorage.setItem('theme', 'light');
      }
    });

    let savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
      themeToggleBtn.textContent = savedLanguage === 'ru' ? 'Светлая тема' : 'Light Theme';
    } else {
      body.classList.add('light-theme');
      themeToggleBtn.textContent = savedLanguage === 'ru' ? 'Темная тема' : 'Dark Theme';
    }
  });
  