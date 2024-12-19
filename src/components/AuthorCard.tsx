import React, { useState } from 'react';
import { Book, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Author {
  name: string;
  story: string;
  bio: string;
  achievements: string[];
  link: string;
  icon: 'male' | 'female';
}

export default function AuthorCard({ author }: { author: Author }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      className="bg-gray-800/80 backdrop-blur-sm group hover:bg-gray-700/80 transition-colors cursor-pointer border-gray-700 p-6 rounded-lg"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div layout className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {author.icon === 'male' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-purple-400 group-hover:text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-purple-400 group-hover:text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          )}
          <div>
            <h3 className="text-lg font-medium text-gray-100">{author.name}</h3>
            <p className="text-sm text-purple-300">Story: {author.story}</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-purple-400" />
        ) : (
          <ChevronDown className="w-6 h-6 text-purple-400" />
        )}
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-300 mt-4">{author.bio}</p>
            <div className="mt-4">
              <h4 className="font-medium text-purple-400 mb-2">Achievements:</h4>
              <ul className="space-y-2">
                {author.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                    <Award className="w-4 h-4 text-purple-400" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={author.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Book className="w-4 h-4" />
              Read on Pratilipi
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}