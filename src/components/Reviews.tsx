import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "अंकित महर्षि",
    rating: 5,
    text: "श्वास - द बॉय ऑन द लास्ट सीट पाँच लेखकों—वर्षा श्रीवास्तव (नर्क की परी), सुमित मेनारिया (हेती), आस्था जैन (नष्ट), शालिनी सिंह (कठपुतली), और अंकू ठाकुर (I Didn't Kill the Seventh One)—के सम्मिलित प्रयास से लिखी गई एक अनूठी पुस्तक है। इस उपन्यास में पांच अलग-अलग कहानियां हैं, जो अंततः एक ही धागे में बुनी जाती हैं, और पाठकों को एक रोमांचक, भावनात्मक और विचारोत्तेजक अनुभव प्रदान करती हैं।"
  },
  {
    name: "आलोक सिंह परमार",
    rating: 5,
    text: "ये प्रतिलिपि के लेखकों का एक अनूठा प्रयोग है जो कि सफल रहा, 5 लेखकों ने अपनी अपनी विधा में अपनी कहानियों को प्रस्तुत किया जो सच में उत्कृष्ट रहीं, सब कहानियों के बीच कुछ न कुछ जुड़ा भी रहा और अपनेआप में अलग भी रहीं।"
  },
  {
    name: "ShiReen Shujat Khan",
    rating: 5,
    text: "Shvaas, a Really very interesting and mind blowing story. It's a rollercoaster ride full of suspense thriller and horror. If you are a fan of Varsha ji, Sumit Sir, Thakur, Shalini and Antas then it's a great treasure for you. Must buy this book and you'll never regret for your decision. ❤️"
  },
  {
    name: "स्वीटी",
    rating: 5,
    text: "ये कहना बिल्कुल भी अतिश्योक्ति नही होगी की ये किताब #श्वास जाते हुए साल 2024 का सबसे बेहतरीन तोहफा है हम पाठकों के लिए। जो पाठक हॉरर, थ्रिलर, रहस्य-रोमांच के दिवाने है, उन्हें आँख बंद करके इस किताब को खरीद लेना चाहिए। वो किताबें तो हमने अक्सर पढ़ी है जिसमें कई लेखकों की कहानियाँ होती है, तो ये किताब भी वैसी ही है जिसमें पाँच अलग अलग लेखकों की कहानियाँ है, लेकिन लेकिन लेकिन, यहाँ एक ट्विस्ट है, भले ही कहानी पाँच अलग लेखकों ने लिखी है, लेकिन कहानी के अंत तक आते आते, कहानी एक हो जाती है और यही इस किताब की सबसे बड़ी USP है।"
  }
];

export default function Reviews() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-12">
            <Star className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white">Amazon Reviews</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg relative group hover:bg-gray-700/50 transition-all"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <Quote className="w-8 h-8 text-purple-400 mb-4" />
                  <div className="flex mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-justify">{review.text}</p>
                  <p className="text-purple-400 font-medium">{review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}