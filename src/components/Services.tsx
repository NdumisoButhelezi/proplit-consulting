import React from 'react';
import { BookOpen, Rocket, ProjectorIcon, Users } from 'lucide-react';

const services = [
  {
    title: 'Learning & Skills Development Practices',
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Learning Needs Analysis & Content Design and Development</li>
        <li>Career and Learning Paths Development</li>
        <li>Facilitation | Mentoring | Coaching | Moderating | Assessing</li>
        <li>Occupationally-directed Workshop Planning & Delivery</li>
      </ul>
    ),
    icon: BookOpen,
    color: 'bg-blue-500'
  },
  {
    title: 'Business Startup Support',
    description: 'Co Registrations | Compliance | Business Plans | Funding Proposals | Marketing Strategies (Storytelling)',
    icon: Rocket,
    color: 'bg-emerald-500'
  },
  {
    title: 'Project Management',
    description: ' Proof of Concepts, Special Projects (Rural, School & Community Projects)',
    icon: ProjectorIcon,
    color: 'bg-purple-500'
  },
  {
    title: 'Collaborative & Other Programmes',
    description: 'Financial Literacy & Digital literacy, homeownership programs, and leadership training initiatives.',
    icon: Users,
    color: 'bg-orange-500'
  },
  {
    title: 'Education Support',
    description: 'Remedial Services - Maths | EMS | Physics | Accounting | English. Learner Profiling | Subject Choice Workshops | School Governance & Management Workshops',
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