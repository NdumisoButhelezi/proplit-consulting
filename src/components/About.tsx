import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
          <img
  src="https://images.unsplash.com/photo-1573164574001-518958d9baa2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="Alternative Image Description"
  className="rounded-lg shadow-xl w-full"
/>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6">About PropLit Consulting</h2>
            
            <blockquote className="border-l-4 border-emerald-500 pl-4 mb-8 italic text-xl text-gray-600">
              "Asiqhubekanga,asicaphunanga,saqala phansi"
              <footer className="text-sm font-semibold mt-2">- Lungisani Mjaji</footer>
            </blockquote>
            
            <p className="text-gray-600 mb-8">
              PropLit Consulting is a 100% black female-owned business dedicated to transforming communities through knowledge, purpose, and access. Under the leadership of Sarah Mqadi, we've established ourselves as a leading force in skills development and business empowerment.
              At the heart of everything we do is a sense of purpose - a commitment to making a positive impact on the lives of others. Whether it's helping individuals achieve their homeownership dreams or guiding organisations toward their strategic objectives, we are driven by a shared purpose to create meaningful & impactful change in the world.
              By breaking down barriers and fostering inclusivity, we ensure that everyone has the chance to thrive and succeed, regardless of their background or circumstances.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-emerald-500" />
                <span>B-BBEE Level 1 Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-500" />
                <span>Over 10 years of industry experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}