from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from tensorflow import keras
from tensorflow.keras.preprocessing import image
import numpy as np
from PIL import Image
import io

app = FastAPI()

# Enable CORS so React/Next.js frontend can connect to FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Hello from FastAPI!"}

@app.get("/data")
def get_data():
    return {"data": ["Item 1", "Item 2", "Item 3"]}
  
MODEL_PATH = "sjs_cnn_model_finetuned.h5"
model = keras.models.load_model(MODEL_PATH)
IMAGE_SIZE = (224, 224)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Read image
        file_bytes = await file.read()
        print(f"Received file: {file.filename}, Size: {len(file_bytes)} bytes")

        image = Image.open(io.BytesIO(file_bytes)).convert("RGB")

        # Resize and preprocess
        image = image.resize(IMAGE_SIZE)
        image_array = np.array(image) / 255.0  # Normalize
        image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension
        print("Image array shape:", image_array.shape)

        # Get prediction
        predictions = model.predict(image_array)
        print("predictions: ", predictions)
        predicted_class = np.argmax(predictions, axis=1)[0]  # Get class index
        print("predicted_class: ", predicted_class)

        return {
            "predicted_class": int(predicted_class),
            "confidence": predictions.tolist(),
            "image_size": image.size,
            "filename": file.filename,
        }
    
    except Exception as e:
        return {"error": str(e)}
      