import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const blippImageURL = "https://i.ibb.co/4gVX1sn1/Whats-App-Image-2025-02-01-at-22-40-48-ff4bfa8c.jpg";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Let's Empower Together</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Do Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-emerald-500" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+27 77 405 7331</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-emerald-500" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@proplitconsulting.co.za</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-emerald-500" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-600">Johannesburg & KZN South Africa</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div >
      <footer className="py-6 bg-gray-100 mt-20">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <a href="https://www.blipp.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src={blippImageURL} alt="Powered by Blipp" className="h-8 mr-2" />
            <span className="text-center text-gray-600">Powered by <span className="font-semibold text-emerald-600">Blipp</span></span>
          </a>
        </div>
      </footer>
    </section>
  );
}