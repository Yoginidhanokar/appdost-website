import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Android App Development',
      description: 'Custom Android applications built with the latest technologies to bring your ideas to life.',
      features: ['Native & Hybrid Apps', 'Play Store Deployment', 'Maintenance & Support'],
      icon: '📱'
    },
    {
      title: 'Web Development',
      description: 'Responsive and scalable web applications tailored to your business needs.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Progressive Web Apps'],
      icon: '🌐'
    },
    {
      title: 'UI/UX Development',
      description: 'Beautiful, intuitive user interfaces that enhance user experience and engagement.',
      features: ['User Research', 'Wireframing', 'Brand Identity'],
      icon: '🎨'
    },
    {
      title: 'CRM Software',
      description: 'Comprehensive CRM solutions to manage customer relationships and boost productivity.',
      features: ['Custom Development', 'Integration Services', 'Training & Support'],
      icon: '💼'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS, Azure, GCP', 'Migration Services', 'Performance Tuning'],
      icon: '☁️'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with robust security solutions and best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance'],
      icon: '🔒'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions to transform your business and drive digital innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;