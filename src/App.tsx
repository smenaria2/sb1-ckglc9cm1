import React from 'react';
import Hero from './components/Hero';
import AboutBook from './components/AboutBook';
import Reviews from './components/Reviews';
import AuthorCard from './components/AuthorCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import GameSection from './components/GameSection';
import InstagramFeed from './components/InstagramFeed';
import NewsSection from './components/NewsSection';
import CompetitionSection from './components/CompetitionSection';
import CompetitionPopup from './components/CompetitionPopup';
import { authors } from './data/authors';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Fog Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent animate-fog-1"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent animate-fog-2"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <AboutBook />
        <GameSection />
        <Reviews />
        
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Meet the Authors</h2>
          
          {/* Combined Authors Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative group aspect-[16/9]">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://i.ibb.co/qMks25q/Whats-App-Image-2024-12-03-at-4-07-37-PM.jpg"
                alt="श्वास Authors"
                className="relative w-full h-full object-cover rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Individual Author Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {authors.map((author) => (
              <AuthorCard key={author.name} author={author} />
            ))}
          </div>
        </div>

        <NewsSection />
        <InstagramFeed />

        <div className="container mx-auto px-4 py-16">
          <CompetitionSection />
          <div className="mt-16">
            <ContactForm />
          </div>
        </div>

        <Footer />
      </div>

      <CompetitionPopup />
    </div>
  );
}