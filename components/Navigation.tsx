
import React from 'react';

interface NavigationProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onJump: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ current, total, onPrev, onNext, onJump }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-6 flex flex-col md:flex-row items-center justify-between bg-white/80 backdrop-blur-md border-t border-slate-200 z-50">
      <div className="flex gap-1 mb-4 md:mb-0">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onJump(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === i ? 'bg-indigo-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onPrev}
          disabled={current === 0}
          className={`px-6 py-2 rounded-full flex items-center gap-2 transition-all ${
            current === 0 
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
              : 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 shadow-sm'
          }`}
        >
          <i className="fa-solid fa-chevron-left"></i>
          <span className="font-semibold">Trước</span>
        </button>

        <span className="text-slate-500 font-medium hidden md:block">
          Slide {current + 1} / {total}
        </span>

        <button
          onClick={onNext}
          disabled={current === total - 1}
          className={`px-6 py-2 rounded-full flex items-center gap-2 transition-all ${
            current === total - 1 
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200'
          }`}
        >
          <span className="font-semibold">Tiếp theo</span>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
