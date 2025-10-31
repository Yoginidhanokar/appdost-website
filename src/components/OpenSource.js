import React from 'react';

const OpenSource = () => {
  const projects = [
    {
      title: 'DeepFake Detection',
      subtitle: 'ANAL Summer Internship Project',
      description: 'Advanced deep learning model for detecting manipulated media using computer vision and neural networks. Summer Internship research project.',
      tags: ['ANAL Airpipe'],
      link: 'View on GitHub'
    },
    {
      title: 'NodeBot',
      subtitle: 'Intelligent Python Automation Bot',
      description: 'Smart automation bot built with Python for task scheduling, data processing, and intelligent workflow automation.',
      tags: ['Python Automation'],
      link: 'View on GitHub'
    },
    {
      title: 'EduTools',
      subtitle: 'Educational Web Platform',
      description: 'Collection of educational tools and utilities for students and teachers. Interactive learning resources and study aids.',
      tags: ['HTML/CSS Education'],
      link: 'View on GitHub'
    },
    {
      title: 'DialogFlow Chatbot',
      subtitle: 'Conversational AI Assistant',
      description: 'Intelligent chatbot using Google\'s DialogFlow ES for natural language processing and automated customer support.',
      tags: ['DialogFlow'],
      link: 'View on GitHub'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Open Source & Innovation Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our contributions to AI, automation, and educational technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow hover:border-blue-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <div className="text-blue-600 font-semibold mb-3">{project.subtitle}</div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold underline">
                {project.link}
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;