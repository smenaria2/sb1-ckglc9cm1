import React from 'react';
import { Trophy } from 'lucide-react';

export default function CompetitionSection() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      {/* Results Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-white flex items-center justify-center gap-2">
          <Trophy className="w-8 h-8 text-yellow-400" />
          Painting Competition Results
        </h3>
        <div className="aspect-video w-full max-w-2xl mx-auto mb-8">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/7zrBjbs1nFI"
            title="Painting Competition Results"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* New Competitions Section */}
      <div>
        <h3 className="text-xl font-medium text-gray-300 mb-6">Join new competitions</h3>
        <a
          href="http://tiny.cc/shvaas"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105"
        >
          <Trophy className="w-6 h-6" />
          Join the Competition
        </a>
      </div>
    </div>
  );
}