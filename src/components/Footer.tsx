import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d2f38] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-8">
        {/* Copyright */}
        <div className="border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Gia Nguyen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer; 