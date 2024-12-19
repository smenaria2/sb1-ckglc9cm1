import React from 'react';
import { Mail } from 'lucide-react';

export default function ContactForm() {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-semibold mb-6 text-white flex items-center justify-center gap-2">
        <Mail className="w-8 h-8 text-purple-400" />
        Contact Us
      </h3>
      <p className="text-gray-300 mb-4">
        Have questions? Want to share your thoughts? We'd love to hear from you!
      </p>
      <a 
        href="mailto:sumitkmenaria@gmail.com"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300"
      >
        <Mail className="w-5 h-5" />
        Send us an email
      </a>
    </div>
  );
}
