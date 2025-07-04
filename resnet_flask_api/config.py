import os

UPLOAD_FOLDER = "uploads"
ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png'}
CLASS_NAMES = ["benign", "malignant"]
MODEL_PATH = "resnet50_benign_malignant.pth"

# Ensure the upload folder exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
