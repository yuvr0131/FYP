import React, { useRef, useState } from 'react';
import { Upload } from 'lucide-react';

interface FileUploaderProps {
  onFileSelected: (file: File) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const FileUploader: React.FC<FileUploaderProps> = ({ 
  onFileSelected, 
  onSubmit,
  isLoading 
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      alert('Please upload an image file');
      return;
    }

    // Create a preview
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setFilePreview(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);

    onFileSelected(file);
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Image</h2>
      
      <div 
        className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
          dragActive ? 'border-pink-500 bg-pink-50' : 'border-gray-300 hover:border-pink-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleButtonClick}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleChange}
        />
        
        {filePreview ? (
          <div className="relative w-full">
            <img
              src={filePreview}
              alt="Preview"
              className="mx-auto max-h-64 object-contain rounded-md"
            />
            <p className="mt-2 text-sm text-gray-500 text-center">
              Click or drag to change image
            </p>
          </div>
        ) : (
          <>
            <Upload className="h-12 w-12 text-gray-400 mb-3" />
            <p className="mb-2 text-sm font-semibold text-gray-700">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500">
              PNG, JPG or JPEG (MAX. 10MB)
            </p>
          </>
        )}
      </div>

      <button
        onClick={onSubmit}
        disabled={!filePreview || isLoading}
        className={`mt-4 px-4 py-2 rounded-md text-white font-medium transition-colors ${
          !filePreview || isLoading
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-pink-600 hover:bg-pink-700'
        }`}
      >
        {isLoading ? 'Processing...' : 'Analyze Image'}
      </button>
    </div>
  );
};