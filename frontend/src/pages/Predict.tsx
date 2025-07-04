import React, { useState } from 'react';
import { FileUploader } from '../components/FileUploader';
import { ResultDisplay } from '../components/ResultDisplay';
import { HealthSuggestions } from '../components/HealthSuggestions';

export const Predict: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [predictionResult, setPredictionResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelected = (file: File) => {
    setSelectedFile(file);
    setPredictionResult(null);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;
    
    setIsLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      setPredictionResult({
        prediction: data.prediction,
        confidence: '95',
        recommendation: data.prediction === 'malignant' 
          ? 'Immediate medical consultation is recommended.'
          : 'Continue with regular check-ups and monitoring.'
      });
    } catch (error) {
      console.error('Error making prediction:', error);
      setPredictionResult({
        prediction: 'Error',
        confidence: '0',
        recommendation: 'An error occurred while processing your image. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Breast Cancer Risk Assessment
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Upload a mammogram image to receive a preliminary assessment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FileUploader onFileSelected={handleFileSelected} onSubmit={handleSubmit} isLoading={isLoading} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ResultDisplay result={predictionResult} isLoading={isLoading} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <HealthSuggestions />
        </div>
      </div>
    </div>
  );
};