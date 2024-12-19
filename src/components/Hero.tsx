import React from 'react';
import { BookOpen, Share2, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Book Cover Image */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-lg bg-gray-800">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20241118_154005_960.jpg-lbkp6ovV9Y95j8GJFVOnMW0zS51ce8.jpeg"
              alt="श्वास - The Boy on the Last Seat"
              className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse mb-4">श्वास</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-wide mb-8">The Boy on the Last Seat!</h2>
          
          <div className="flex gap-4 flex-wrap justify-center mb-8">
            <span className="px-6 py-2 bg-purple-900/50 rounded-full text-lg font-medium tracking-wider text-white">Horror</span>
            <span className="px-6 py-2 bg-blue-900/50 rounded-full text-lg font-medium tracking-wider text-white">Thriller</span>
            <span className="px-6 py-2 bg-indigo-900/50 rounded-full text-lg font-medium tracking-wider text-white">Psychological</span>
          </div>

          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
            पाँच यात्री, पाँच कहानियाँ, एक रिसॉर्ट और कुछ भयानक अह्सास!
          </p>

          <div className="flex gap-4 flex-wrap justify-center mb-12">
            <a
              href="https://amzn.in/d/bv5idmt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 text-lg font-medium transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              Buy on Amazon
            </a>
            <button 
              className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded-lg flex items-center gap-2 text-lg font-medium transition-all duration-300"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('URL copied to clipboard!');
              }}
            >
              <Share2 className="w-5 h-5" />
              Copy Page URL
            </button>
            <a
              href="https://www.instagram.com/projectsvaas/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 text-lg font-medium transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>

          {/* YouTube Trailer */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-white">Watch the Trailer</h3>
            <div className="max-w-4xl mx-auto aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/pk7ApN0164g"
                title="श्वास Book Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}