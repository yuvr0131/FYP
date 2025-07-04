from flask import Flask, request, jsonify
import os
from flask_cors import CORS 
from config import UPLOAD_FOLDER, ALLOWED_EXTENSIONS
from model.loader import load_model
from model.predictor import predict
from utils.transform import preprocess_image

app = Flask(__name__)
CORS(app, origins=["https://relaxed-hotteok-6aa113.netlify.app"])
model = load_model()

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def home():
    return "✅ ResNet50 Benign/Malignant Classifier is running."

@app.route('/predict', methods=['POST'])
def predict_route():
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided."}), 400

    image_file = request.files['image']
    if image_file and allowed_file(image_file.filename):
        filepath = os.path.join(UPLOAD_FOLDER, image_file.filename)
        image_file.save(filepath)
        image_tensor = preprocess_image(filepath)
        prediction = predict(model, image_tensor)
        return jsonify({
            "filename": image_file.filename,
            "prediction": prediction
        })
    else:
        return jsonify({"error": "Invalid file type"}), 400

if __name__ == '__main__':
    app.run(debug=True)
