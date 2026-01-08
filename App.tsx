
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideType } from './types';
import Navigation from './components/Navigation';
import { 
  TitleSlide, 
  MindMapSlide, 
  ContrastSlide, 
  ContentSlide, 
  ConclusionSlide,
  ThanksSlide
} from './components/SlideLayouts';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev' | 'none'>('none');

  const goToNext = useCallback(() => {
    if (currentSlide < SLIDES.length - 1) {
      setDirection('next');
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const goToPrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection('prev');
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  const renderSlide = () => {
    const slide = SLIDES[currentSlide];
    switch (slide.type) {
      case SlideType.TITLE:
        return <TitleSlide data={slide} />;
      case SlideType.MINDMAP:
        return <MindMapSlide data={slide} />;
      case SlideType.CONTRAST:
        return <ContrastSlide data={slide} />;
      case SlideType.CONTENT:
        return <ContentSlide data={slide} />;
      case SlideType.CONCLUSION:
        return <ConclusionSlide data={slide} />;
      case SlideType.THANKS:
        return <ThanksSlide data={slide} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen bg-slate-50 flex flex-col overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      {/* Slide Progress Bar (Top) */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 z-50">
        <div 
          className="h-full bg-indigo-600 transition-all duration-500 ease-out" 
          style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
        ></div>
      </div>

      {/* Main Slide Content Area */}
      <main className="flex-1 relative overflow-hidden">
        <div 
          key={currentSlide}
          className={`h-full w-full transition-all duration-700 ease-in-out absolute inset-0
            ${direction === 'next' ? 'animate-slide-in-right' : direction === 'prev' ? 'animate-slide-in-left' : ''}
          `}
        >
          {renderSlide()}
        </div>
      </main>

      {/* Navigation Footer */}
      <Navigation 
        current={currentSlide} 
        total={SLIDES.length} 
        onPrev={goToPrev} 
        onNext={goToNext} 
        onJump={goToSlide}
      />

      {/* Custom Keyframes for Animations */}
      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default App;
