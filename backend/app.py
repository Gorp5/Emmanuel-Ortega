from flask import Flask, request, send_file
from flask_cors import CORS
import os
app = Flask(__name__)
CORS(app)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

UPLOAD_FOLDER = os.path.join(BASE_DIR, "uploads")

@app.route('/', methods=['GET'])
def home():
    return {'message': 'Hello World'}, 200
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file1' not in request.files:
        return {'error': 'No file part'}, 400
    file = request.files['file1']
    if file.filename == '':
        return {'error': 'No selected file'}, 400
    if file:
        # Save file to disk
        file.save(os.path.join('uploads', file.filename))
        return {'message': f'File {file.filename} uploaded successfully'}, 200
@app.route('/download/<filename>', methods=['GET'])
def download_file(filename):
    file_path = os.path.join(UPLOAD_FOLDER, filename)

    return send_file(
        file_path,
        as_attachment=True  # forces download
    )
if __name__ == '__main__':
    app.run(debug=True)