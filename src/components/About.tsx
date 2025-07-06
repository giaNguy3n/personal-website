import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Software Engineer & Problem Solver
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I’m a passionate software engineer specializing in front-end development and AI-powered solutions. 
              I leverage cloud platforms to architect highly scalable applications, 
              drawing on a robust, full-stack skill set to build innovative software that solves real-world problems.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey in technology started with a curiosity about how things work, 
              which led me to pursue a career in software engineering. I believe in 
              continuous learning and staying up-to-date with the latest technologies 
              and best practices in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 