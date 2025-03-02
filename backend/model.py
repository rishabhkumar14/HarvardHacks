import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.preprocessing import image
import os

def load_and_classify_image(model_path, image_path):
    """
    Load a saved H5 model and use it to classify an image
    
    Args:
        model_path (str): Path to the .h5 model file
        image_path (str): Path to the image file to classify
    
    Returns:
        int: Predicted class index
    """
    # Load the model silently
    model = keras.models.load_model(model_path)
    
    # Determine input shape from model
    input_shape = model.input_shape[1:3]  # Height and width
    
    # Determine number of classes from model's output layer
    num_classes = model.output_shape[1]
    
    # Load and preprocess the image
    img = image.load_img(image_path, target_size=input_shape)
    
    # Convert image to array and preprocess
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    
    # Normalize pixel values to [0,1]
    if img_array.max() > 1:
        img_array = img_array / 255.0
    
    # Make prediction
    predictions = model.predict(img_array, verbose=0)
    
    # Get classification result
    if num_classes > 1:
        # For multi-class classification
        predicted_class = np.argmax(predictions, axis=1)[0]
        print(f"Classification result: {predicted_class}")
    else:
        # For binary classification
        predicted_class = 1 if predictions[0][0] > 0.5 else 0
        print(f"Classification result: {predicted_class}")
        print(f"predictions[0][0]: {predictions[0][0]}")
        
    return predicted_class

if __name__ == "__main__":
    model_path = "./sjs_cnn_model_finetuned.h5"
    image_path = "./image-1.jpg"
    
    # Check if files exist
    if not os.path.exists(model_path):
        print(f"Error: Model file not found at {model_path}")
    elif not os.path.exists(image_path):
        print(f"Error: Image file not found at {image_path}")
    else:
        load_and_classify_image(model_path, image_path)