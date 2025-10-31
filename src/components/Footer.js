import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">AppDost</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, 
              we bring innovation and excellence to every project.
            </p>
            <div className="text-gray-400">
              <p>Email: hr@appdost.in</p>
              <p>Founded: 2025</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {['Home', 'Services', 'About', 'Process', 'Projects'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                'Android Development',
                'Web Development', 
                'UI/UX Design',
                'CRM Solutions',
                'Cloud Services',
                'Cybersecurity'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AppDost. All rights reserved. | Complete IT Solution Provider Since 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;