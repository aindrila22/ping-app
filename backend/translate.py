from flask import Flask, request, jsonify
from googletrans import Translator, LANGUAGES

app = Flask(__name__)
translator = Translator()

@app.route('/translate', methods=['POST'])
def translate():
    data = request.json
    language = data.get('language')
    text = data.get('text')

    if not language or not text:
        return jsonify({'error': 'Missing language or text in request body'}), 400

    if language not in LANGUAGES:
        return jsonify({'error': 'Invalid language code'}), 400

    translated_text = translator.translate(text, dest=language).text
    return jsonify({'translated_text': translated_text})

if __name__ == '__main__':
    app.run(debug=True)
