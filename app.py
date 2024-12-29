from flask import Flask, render_template, redirect, url_for, request, make_response

app = Flask(__name__)

translations = {
    'en': {
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
        "Сделано с любовью в 2024 году.": "Made with love in 2024.",
        "Темная тема": "Dark Theme",
        "Светлая тема": "Light Theme",
        "Ничего не нашлось! Вот неудача, отправляйтесь на главную!": "Nothing found! Such a pity, go to the main page!",
        "Что-то не так, но мы все починим.": "Something went wrong, but we'll fix everything.",
        "На главную": "Go to Home"
    },
    'ru': {
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
        "Сделано с любовью в 2024 году.": "Сделано с любовью в 2024 году.",
        "Темная тема": "Темная тема",
        "Светлая тема": "Светлая тема",
        "Ничего не нашлось! Вот неудача, отправляйтесь на главную!": "Ничего не нашлось! Вот неудача, отправляйтесь на главную!",
        "Что-то не так, но мы все починим.": "Что-то не так, но мы все починим.",
        "На главную": "На главную"
    }
}

@app.route("/")
def main():
    language = request.cookies.get('language', 'ru')
    theme = request.cookies.get('theme', 'light')
    return render_template("index.html", language=language, theme=theme, translations=translations.get(language, {}))

@app.route("/set_language/<lang>")
def set_language(lang):
    if lang in translations:
        resp = make_response(redirect(url_for('main')))
        resp.set_cookie('language', lang)
        return resp
    return redirect(url_for('main'))

@app.route("/set_theme/<theme>")
def set_theme(theme):
    if theme in ['light', 'dark']:
        resp = make_response(redirect(url_for('main')))
        resp.set_cookie('theme', theme)
        return resp
    return redirect(url_for('main'))

@app.errorhandler(404)
def render_not_found(error):
    language = request.cookies.get('language', 'ru')
    theme = request.cookies.get('theme', 'light')
    return render_template("404.html", language=language, theme=theme, translations=translations.get(language, {})), 404

@app.errorhandler(500)
def render_server_error(error):
    language = request.cookies.get('language', 'ru')
    theme = request.cookies.get('theme', 'light')
    return render_template("500.html", language=language, theme=theme, translations=translations.get(language, {})), 500

if __name__ == '__main__':
    app.run(port=5002, debug=True)
