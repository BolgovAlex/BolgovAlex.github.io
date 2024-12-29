from flask import Flask, render_template, request, redirect, url_for
from flask_babel import Babel, gettext
import os

app = Flask(__name__)
app.config['BABEL_DEFAULT_LOCALE'] = 'ru'
app.config['BABEL_SUPPORTED_LOCALES'] = ['ru', 'en']

babel = Babel(app)

@babel.localeselector
def get_locale():
    lang = request.cookies.get('language')
    if lang in app.config['BABEL_SUPPORTED_LOCALES']:
        return lang
    return request.accept_languages.best_match(app.config['BABEL_SUPPORTED_LOCALES'])

@app.route("/")
def main():
    return render_template("index.html")

@app.route("/change_language/<language>")
def change_language(language):
    if language not in app.config['BABEL_SUPPORTED_LOCALES']:
        language = 'ru'
    response = redirect(url_for('main'))
    response.set_cookie('language', language)
    return response

@app.errorhandler(404)
def render_not_found(error):
    return gettext("Ничего не нашлось! Вот неудача, отправляйтесь на главную!"), 404

@app.errorhandler(500)
def render_server_error(error):
    return gettext("Что-то не так, но мы все починим"), 500

if __name__ == '__main__':
    app.run(port=5002, debug=True)
