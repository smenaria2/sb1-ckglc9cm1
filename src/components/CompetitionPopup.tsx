import React from 'react';
import { Trophy, X } from 'lucide-react';
import { useCompetitionPopup } from '../hooks/useCompetitionPopup';

export default function CompetitionPopup() {
  const { isOpen, handleClose } = useCompetitionPopup();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-gray-800 rounded-xl p-8 max-w-md w-full relative animate-fade-in">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-8 h-8 text-purple-400" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">
            Join Our Creative Challenge!
          </h3>
          
          <p className="text-gray-300 mb-6">
            Show your talent, Create your masterpiece inspired by 'श्वास' and get a chance to win free copy of 'श्वास'.
          </p>

          <div className="space-y-4">
            <a
              href="http://tiny.cc/shvaas"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105"
              onClick={handleClose}
            >
              Join Now!
            </a>
            
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}