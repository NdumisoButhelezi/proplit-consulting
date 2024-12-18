import React from 'react';
import { BookOpen, Rocket, ProjectorIcon, Users } from 'lucide-react';

const services = [
  {
    title: 'Skills Development',
    description: 'Comprehensive training programs, content development, and career path guidance tailored to your needs.',
    icon: BookOpen,
    color: 'bg-blue-500'
  },
  {
    title: 'Business Startup Support',
    description: 'Expert guidance in funding applications, compliance requirements, and marketing strategies.',
    icon: Rocket,
    color: 'bg-emerald-500'
  },
  {
    title: 'Project Management',
    description: 'Specialized projects focusing on youth, women, and rural community development.',
    icon: ProjectorIcon,
    color: 'bg-purple-500'
  },
  {
    title: 'Community Programs',
    description: 'Digital literacy, homeownership programs, and leadership training initiatives.',
    icon: Users,
    color: 'bg-orange-500'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}