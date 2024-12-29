from flask import Flask, render_template, redirect, session, url_for
from datetime import timedelta

app = Flask(__name__)

@app.route("/")
def main():
    return redirect(url_for('ru_light'))

@app.route("/en/dark")
def en_dark():
    session['theme'] = 'dark'
    session['language'] = 'en'
    return render_template("dark_en.html")

@app.route("/en/light")
def en_light():
    session['theme'] = 'light'
    session['language'] = 'en'
    return render_template("light_en.html")

@app.route("/ru/dark")
def ru_dark():
    session['theme'] = 'dark'
    session['language'] = 'ru'
    return render_template("dark_rus.html")

@app.route("/ru/light")
def ru_light():
    session['theme'] = 'light'
    session['language'] = 'ru'
    return render_template("light_rus.html")

@app.errorhandler(404)
def render_not_found(error):
    return "Ничего не нашлось! Вот неудача, отправляйтесь на главную!"

@app.errorhandler(500)
def render_server_error(error):
    return "Что-то не так, но мы все починим"

if __name__ == '__main__':
    app.run(port=5005, debug=True)
