import React from 'react';
import { Gamepad2 } from 'lucide-react';

export default function GameSection() {
  return (
    <div className="bg-gray-800/50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Gamepad2 className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-white">Play श्वास: Escape the Haunted Mansion</h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Dare to enter the haunted mansion? Test your courage in this thrilling escape game based on श्वास. 
            Navigate through dark corridors, solve mysterious puzzles, and uncover the secrets that lie within. 
            But beware - you're not alone in there...
          </p>
          
          <a
            href="https://glowing-unicorn-6443d7.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105"
          >
            <Gamepad2 className="w-6 h-6" />
            Play Now
          </a>
        </div>
      </div>
    </div>
  );
}