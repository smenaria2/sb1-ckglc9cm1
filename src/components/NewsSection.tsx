import React, { useRef, useState } from 'react';
import { Newspaper, ChevronDown, ChevronUp } from 'lucide-react';
import ImageWithFallback from './ui/ImageWithFallback';
import { useGridObserver } from '../utils/grid';

const newsItems = [
  {
    image: "https://i.ibb.co/xqqrzmb/Whats-App-Image-2024-12-05-at-7-31-57-AM-1.jpg",
    alt: "Rajasthan Patrika",
    link: "#",
    date: "2024-03-05"
  },
  {
    image: "https://i.ibb.co/KKNcVnX/Whats-App-Image-2024-12-05-at-7-31-57-AM.jpg",
    alt: "Pratahkaal",
    link: "#",
    date: "2024-03-04"
  },
  {
    image: "https://i.ibb.co/MsqYBB4/Screenshot-2024-12-05-081503.png",
    alt: "Udaipur Times",
    link: "https://udaipurtimes.com/book-review/shvaas-udaipur-best-seller/cid15770581.htm",
    date: "2024-03-03"
  },
  {
    image: "https://i.ibb.co/FD8skd2/Screenshot-2024-12-05-082830.png",
    alt: "Hindustan Bytes",
    link: "https://www.hindustanbytes.com/dense-forests-untold-stories-and-an-unheard-evil-embark-on-a-thrilling-journey-with-shvass-five-writers-five-stories-and-countless-mysteries",
    date: "2024-03-02"
  },
  {
    image: "https://i.ibb.co/Z8xDTfD/Screenshot-20241206145454.jpg",
    alt: "Rozana Himachal",
    link: "https://rozanahimachal.com/young-writer-anku-thakur-presented-a-copy-of-her-book-shwaas-to-mla-indra-dutt-lakhanpal",
    date: "2024-03-01"
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function NewsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  useGridObserver(gridRef);

  const displayedNews = showAll ? newsItems : newsItems.slice(0, 3);

  return (
    <div className="bg-gray-800/50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-12">
            <Newspaper className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-white">In the News</h2>
          </div>
          
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {displayedNews.map((item, index) => (
              <div key={index} className="relative aspect-[4/3] w-full">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div className="absolute inset-0 rounded-lg overflow-hidden bg-gray-800">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              </div>
            ))}
          </div>

          {newsItems.length > 3 && (
            <div className="flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 bg-gray-700/50 hover:bg-gray-600/50 text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                {showAll ? (
                  <>
                    Show Less <ChevronUp className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    See More <ChevronDown className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}