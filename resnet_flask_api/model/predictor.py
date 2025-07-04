import torch
from config import CLASS_NAMES

def predict(model, image_tensor):
    with torch.no_grad():
        outputs = model(image_tensor)
        _, predicted = torch.max(outputs, 1)
        return CLASS_NAMES[predicted.item()]
