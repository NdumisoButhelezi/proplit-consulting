import React from 'react';
import { Users, Briefcase, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Learners Trained',
  },
  {
    icon: Briefcase,
    value: '200+',
    label: 'Businesses Supported',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Community Projects',
  },
];

export default function Impact() {
  return (
    <section className="py-20 bg-emerald-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-emerald-800/50"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-emerald-200">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Success Stories</h3>
          <div className="bg-emerald-800/50 p-8 rounded-lg">
            <p className="italic mb-4">
              "PropLit's guidance transformed our small business from a local shop to a thriving enterprise. Their mentorship and support were invaluable in our growth journey."
            </p>
            <p className="font-semibold">- Sarah Johnson, Local Business Owner</p>
          </div>
        </div>
      </div>
    </section>
  );
}