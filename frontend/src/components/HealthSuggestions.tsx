import React from 'react';
import { CalendarClock, Search, Activity, Coffee } from 'lucide-react';

export const HealthSuggestions: React.FC = () => {
  const suggestions = [
    {
      id: 1,
      title: 'Regular Screenings',
      description: 'Schedule regular mammograms as recommended by your healthcare provider. Women over 40 should have a mammogram every 1-2 years.',
      icon: <CalendarClock className="h-6 w-6 text-pink-500" />
    },
    {
      id: 2,
      title: 'Know Your Body',
      description: 'Perform monthly breast self-exams to become familiar with how your breasts normally look and feel. Report any changes to your doctor.',
      icon: <Search className="h-6 w-6 text-pink-500" />
    },
    {
      id: 3,
      title: 'Stay Active',
      description: 'Regular physical activity can help lower breast cancer risk. Aim for at least 150 minutes of moderate exercise each week.',
      icon: <Activity className="h-6 w-6 text-pink-500" />
    },
    {
      id: 4,
      title: 'Healthy Lifestyle',
      description: 'Maintain a healthy weight, limit alcohol consumption, avoid smoking, and eat a balanced diet rich in fruits and vegetables.',
      icon: <Coffee className="h-6 w-6 text-pink-500" />
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Health Suggestions for Breast Cancer Prevention
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="border border-gray-200 rounded-lg p-5 transition-all duration-300 hover:shadow-md hover:border-pink-200">
            <div className="flex items-center mb-3">
              {suggestion.icon}
              <h3 className="ml-2 text-lg font-medium text-gray-900">
                {suggestion.title}
              </h3>
            </div>
            <p className="text-gray-600">
              {suggestion.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-pink-50 rounded-lg border border-pink-100">
        <h3 className="font-medium text-pink-800 mb-2">Remember:</h3>
        <p className="text-pink-700">
          Early detection is key to successful treatment. Understand your risk factors, including family history, and discuss them with your healthcare provider.
        </p>
      </div>
    </div>
  );
};