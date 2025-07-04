import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} BreastCare. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-pink-500">
              <span className="sr-only">Privacy</span>
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-500">
              <span className="sr-only">Terms</span>
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-500">
              <span className="sr-only">Contact</span>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};