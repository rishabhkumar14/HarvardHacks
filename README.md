# AIrid - AI-Powered Stevens-Johnson Syndrome Diagnosis from Eye Images

## Project Overview

AIrid is a revolutionary medical diagnostic tool that uses deep learning to detect Stevens-Johnson Syndrome (SJS) from eye images. Traditionally, SJS diagnosis relied on skin manifestations, but our system enables early detection through ocular signs, potentially saving lives through faster intervention.

This project represents a complete end-to-end solution, from data processing to model training and deployment as a user-friendly web application with a React frontend and FastAPI backend.

## Key Features

- **Novel Diagnostic Approach**: First-of-its-kind system to diagnose SJS using eye images instead of traditional skin manifestations
- **High Accuracy Model**: Fine-tuned ResNet50 architecture achieving 77.98% accuracy
- **User-Friendly Interface**: Modern Material UI dashboard for easy image upload and instant results
- **Secure API Backend**: FastAPI-powered backend for efficient image processing and prediction
- **Research Collaboration**: Developed using a private dataset from Harvard scientists

## Technical Architecture

### Machine Learning Model

- **Base Architecture**: ResNet50 pre-trained on ImageNet
- **Custom Layers**: Added Global Average Pooling, Dropout (0.5), Dense (256 units), and output layers
- **Training Approach**: Two-phase training with frozen base layers followed by fine-tuning
- **Input Size**: 224×224×3 RGB images
- **Performance**: 77.98% accuracy on test set

### Backend (FastAPI)

- RESTful API for image upload and processing
- Efficient image preprocessing pipeline
- Model inference endpoint with detailed prediction results
- CORS support for frontend integration

### Frontend (React)

- Material Dashboard 2 React template
- Responsive design for desktop and mobile use
- Image upload functionality with preview
- Real-time prediction display
- User authentication system

## Installation and Setup

### Prerequisites

- Python 3.9+
- Node.js 14+
- npm or yarn

### Backend Setup

```bash
# Navigate to backend folder
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# For Mac/Linux
source venv/bin/activate
# For Windows
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start the FastAPI server
uvicorn main:app --reload
```

### Frontend Setup

```bash
# Navigate to frontend folder
cd src

# Install dependencies
npm install

# Start the development server
npm run start
```

## Usage

1. Access the web interface at http://localhost:3000
2. Navigate to the diagnosis page
3. Upload an eye image for analysis
4. View the prediction results and confidence score
5. Download or share the report as needed

## Project Journey

This project evolved from a simple concept to a comprehensive medical diagnostic tool:

1. **Data Collection**: Collaborated with Harvard scientists to obtain a private dataset of eye images from SJS patients
2. **Data Preprocessing**: Implemented image normalization, augmentation, and splitting
3. **Model Development**: Trained a ResNet50-based model with custom classification layers
4. **Fine-tuning**: Optimized model performance through iterative training and hyperparameter tuning
5. **Backend Development**: Created a FastAPI service to handle image processing and model inference
6. **Frontend Implementation**: Built a user-friendly interface using Material UI components
7. **Integration**: Connected frontend and backend through RESTful API calls
8. **Deployment**: Packaged the entire solution for easy deployment

## Future Enhancements

- Mobile application for point-of-care diagnosis
- Multi-model ensemble for improved accuracy
- Integration with electronic health record systems
- Expanded dataset to include more diverse patient populations
- Explainable AI features to highlight diagnostic regions in images

## Contributors

- Harvard Medical Research Team
- AI/ML Engineers
- Full-Stack Developers
- UI/UX Designers

## License

This project is proprietary and confidential. All rights reserved.

## Acknowledgments

Special thanks to the Harvard research team for providing the dataset that made this project possible, and to all the medical professionals who contributed their expertise to validate our approach.

**AIrid**: Revolutionizing SJS diagnosis through the power of artificial intelligence and computer vision.
