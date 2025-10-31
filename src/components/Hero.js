import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
              Complete IT Solution Provider Since 2025
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Ideas Into{' '}
              <span className="text-blue-600">Digital Reality</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, 
              we bring innovation and excellence to every project with our expert team of developers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                Explore Our Services →
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-lg">
                Get Free Consultation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: '100%', text: 'Client Satisfaction' },
                { number: 'Secure & Scalable', text: 'Solutions' },
                { number: '24/7', text: 'Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              {[
                { title: 'Web Development', projects: '+10 Projects', icon: '🌐' },
                { title: 'Mobile Apps', projects: '+4 Apps', icon: '📱' },
                { title: 'Fast Delivery', projects: 'On Time', icon: '⚡' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-gray-600">{item.projects}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;