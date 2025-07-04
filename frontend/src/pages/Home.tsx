import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageCarousel } from '../components/ImageCarousel';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Early Detection <span className="text-pink-600">Saves Lives</span>
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Learn about breast cancer awareness and use our prediction tool to assess risk factors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Breast Cancer Awareness
          </h2>
          <div className="mb-12">
            <ImageCarousel />
          </div>
          <div className="text-center">
            <Link
              to="/predict"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150 ease-in-out"
            >
              Try Our Prediction Tool
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Early Detection Matters
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                <div className="text-pink-500 text-xl font-semibold mb-3">Higher Survival Rates</div>
                <p className="text-gray-600">
                  When detected early, breast cancer has a 5-year survival rate of over 90%.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                <div className="text-pink-500 text-xl font-semibold mb-3">Less Aggressive Treatments</div>
                <p className="text-gray-600">
                  Early-stage breast cancers often require less aggressive treatments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                <div className="text-pink-500 text-xl font-semibold mb-3">Better Quality of Life</div>
                <p className="text-gray-600">
                  Early detection leads to better treatment options and improved quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};