import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 },
        { name: "Go", level: 65 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Angular", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Django", level: 75 },
        { name: "Spring Boot", level: 70 },
        { name: "GraphQL", level: 80 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Terraform", level: 70 },
        { name: "Microservices", level: 75 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "Elasticsearch", level: 70 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Linux", level: 80 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Jira", level: 80 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Additional Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Data Analysis
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                System Design
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Performance Optimization
              </span>
              <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                Security Best Practices
              </span>
              <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                API Design
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                Testing & QA
              </span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Code Review
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 