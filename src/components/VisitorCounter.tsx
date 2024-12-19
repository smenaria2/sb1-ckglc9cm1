import React from 'react';
import { Users } from 'lucide-react';
import { useLocalStorage } from '../utils/storage';

export default function VisitorCounter() {
  const [count, setCount] = useLocalStorage('visitorCount', 124);

  React.useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setCount(count + 1);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <div className="bg-gray-800/50 py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2">
          <Users className="w-6 h-6 text-purple-400" />
          <p className="text-lg text-gray-300">
            Total Visitors: <span className="font-bold text-purple-400">{count}</span>
          </p>
        </div>
      </div>
    </div>
  );
}