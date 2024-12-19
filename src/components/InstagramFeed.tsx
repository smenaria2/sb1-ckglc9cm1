import React from 'react';
import { Instagram } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Instagram className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-white">Follow Our Journey</h2>
          </div>
          
          <div className="aspect-square max-w-3xl mx-auto bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              src="https://www.instagram.com/projectsvaas/embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Instagram Feed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}