import React from 'react';

const Stats = () => {
  const stats = [
    { number: '10+', label: 'WEB PROJECTS' },
    { number: '4+', label: 'ANDROID APPS' },
    { number: '1', label: 'CRM PROJECT' },
    { number: '2025', label: 'FOUNDED YEAR' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;