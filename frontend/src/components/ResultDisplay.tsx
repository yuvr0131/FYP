import React from 'react';
import { AlertCircle, CheckCircle, Loader2, XCircle } from 'lucide-react';

interface ResultDisplayProps {
  result: {
    prediction: string;
    confidence: string;
    recommendation: string;
  } | null;
  isLoading: boolean;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, isLoading }) => {
  const getSuggestions = (prediction: string) => {
    if (prediction === 'benign') {
      return [
        'Continue with regular breast cancer screenings as recommended',
        'Maintain monthly breast self-examinations',
        'Follow up with your healthcare provider as scheduled',
        'Keep a healthy lifestyle with regular exercise and balanced diet'
      ];
    } else if (prediction === 'malignant') {
      return [
        'Schedule an immediate appointment with your healthcare provider',
        'Prepare for additional diagnostic tests',
        'Bring your mammogram results to your appointment',
        'Consider bringing a family member or friend for support'
      ];
    } else {
      return [
        'Please try uploading the image again',
        'Ensure the image is clear and in the correct format',
        'Contact technical support if the issue persists'
      ];
    }
  };

  const getStatusColor = (prediction: string) => {
    switch (prediction) {
      case 'benign':
        return 'bg-green-50 border-green-200';
      case 'malignant':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-yellow-50 border-yellow-200';
    }
  };

  const getStatusIcon = (prediction: string) => {
    switch (prediction) {
      case 'benign':
        return <CheckCircle className="h-8 w-8 text-green-500 mr-3" />;
      case 'malignant':
        return <AlertCircle className="h-8 w-8 text-red-500 mr-3" />;
      default:
        return <XCircle className="h-8 w-8 text-yellow-500 mr-3" />;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Analysis Results</h2>
      
      <div className="flex-grow flex items-center justify-center">
        {isLoading ? (
          <div className="text-center py-12">
            <Loader2 className="h-12 w-12 text-pink-500 animate-spin mx-auto mb-4" />
            <p className="text-gray-500">Analyzing your image...</p>
          </div>
        ) : result ? (
          <div className="w-full">
            <div className={`mb-6 p-4 rounded-lg ${getStatusColor(result.prediction)}`}>
              <div className="flex items-center">
                {getStatusIcon(result.prediction)}
                <div>
                  <h3 className="text-lg font-medium capitalize">
                    {result.prediction}
                  </h3>
                  {result.prediction !== 'Error' && (
                    <p className="text-sm">
                      Confidence: {result.confidence}%
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Next Steps:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {getSuggestions(result.prediction).map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-800">
                <strong>Important:</strong> This is a preliminary assessment only and not a medical diagnosis. 
                Always consult with a healthcare professional for proper medical advice.
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>Upload and analyze an image to see results</p>
          </div>
        )}
      </div>
    </div>
  );
};