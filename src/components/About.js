import React from 'react';

const About = () => {
  const features = [
    {
      title: 'User-Centric Design',
      description: 'Intuitive UI/UX that guarantees user satisfaction and engagement'
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Latest frameworks and tools for scalable, robust solutions'
    },
    {
      title: 'Client-Focused Approach',
      description: 'Your success is our priority, every step of the way'
    }
  ];

  const metrics = [
    { value: '100%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Projects Delivered' },
    { value: '24/7', label: 'Support Available' },
    { value: 'Fast', label: 'Turnaround Time' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ABOUT <span className="text-blue-600">APPDOST</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your Trusted Partner for Complete Digital Transformation. Founded in 2025, 
              we are a full-service IT solutions provider specializing in turning innovative 
              ideas into powerful, market-ready products.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Discover Our Services →
            </button>
          </div>

          {/* Right Content - Metrics */}
          <div className="grid grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;