import React from 'react';
import { Book } from 'lucide-react';

export default function AboutBook() {
  return (
    <div className="bg-gray-800/50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Book className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-white">About the Book</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-justify">
            घना जंगल, बेमौसम बारिश, एक वीरान रिसॉर्ट और ठहरा हुआ वक़्त... इन सबके बीच फंस चुके हैं पाँच लेखक सुमंत, अनंत, बरखा, शालीन और अंतस्; अपनी पाँच अनकही कहानियों और अनगिनत रहस्यों के साथ!
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mt-4 text-justify">
            परत-दर-परत रोमांच और डर के पन्ने जिनमें कैद है एक अनसुना शैतान हेति, अतीत के गर्भ में घुट रहा एक रक्तिम श्राप नष्ट, अपने टूटे पंख सहलाती हुई कोई नर्क की परी, भयावह अतीत के धागों पर डोलती हुई एक कठपुतली और एक मशहूर मगर निर्दोष हत्यारा!
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mt-4 text-justify">
            इंसानी दिमाग़ को उधेड़ती, खंगालती और सिलती हुई इन पाँच कहानियों के साथ आख़िर क्या रहस्य जुड़ा है इस रिसॉर्ट का? क्या आप भी चलना चाहेंगे रोमांच और डर से भरे इस नए सफ़र पर? क्या पता आपको भी अपनी बस की आखिरी सीट पर कोई मिल जाए!
          </p>
        </div>
      </div>
    </div>
  );
}