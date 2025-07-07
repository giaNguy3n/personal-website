import React from 'react';
import profileImg from '../assets/profile.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={profileImg}
              alt="Gia Nguyen profile"
              className="w-32 h-32 mx-auto mb-6 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-[#c7a645]">Gia Nguyen</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Software Engineer passionate about building innovative solutions and creating impactful user experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-[#c7a645] text-white font-semibold rounded-lg hover:bg-[#bfa24d] transition-colors shadow-lg hover:shadow-xl"
            >
              Learn More
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-[#c7a645] text-[#c7a645] font-semibold rounded-lg hover:bg-[#c7a645] hover:text-white transition-colors"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/gianguyen847/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#c7a645] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 