import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-semibold text-gray-900">BreastCare</span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link 
                to="/" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-pink-300"
              >
                Home
              </Link>
              <Link 
                to="/predict" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-pink-300"
              >
                Predict
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};