import React from 'react';

const Projects = () => {
  const projects = [
    {
      category: 'AI-Powered Educational Platform',
      title: 'BEU Mate - Bihar Engineering',
      description: 'An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation with interactive content and real-time assistance.',
      tech: ['React Native', 'Node.js', 'AI/ML'],
      links: ['Play Store', 'Website'],
      featured: true
    },
    {
      category: 'Educational Platform',
      title: 'Devskillquest',
      description: 'An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects, coding challenges, and peer-to-peer learning.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
      links: ['Website', 'Demo'],
      featured: false
    },
    {
      category: 'Wedding Platform',
      title: 'The Weddings Chapter',
      description: 'A premium wedding planning platform connecting couples with top vendors, venues, and services. Features vendor management, booking system, and wedding planning tools.',
      tech: ['PHP', 'Laravel', 'MySQL'],
      links: ['Website', 'Admin'],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real solutions for real businesses - explore our successful projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow hover:border-blue-300">
              {project.featured && (
                <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  ⭐ Featured Project
                </div>
              )}
              <div className="text-blue-600 font-semibold mb-2">{project.category}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.links.map((link, idx) => (
                  <a 
                    key={idx} 
                    href="https://appdost.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-700 font-medium underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;