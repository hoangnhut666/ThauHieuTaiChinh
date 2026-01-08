
import React from 'react';
import { SlideData } from '../types';

export const TitleSlide: React.FC<{ data: SlideData }> = ({ data }) => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-8 px-4 py-20 overflow-y-auto">
    <div className="flex flex-col items-center space-y-6">
      <div className="p-5 bg-indigo-50 rounded-2xl animate-bounce shadow-inner">
        <i className="fa-solid fa-seedling text-7xl text-indigo-600"></i>
      </div>
      <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {data.title}
      </h1>
      <div className="h-1.5 w-32 bg-indigo-500 rounded-full mx-auto"></div>
      <p className="text-xl md:text-3xl text-slate-600 font-medium">
        {data.subtitle}
      </p>
    </div>

    {data.members && (
      <div className="w-full max-w-2xl mt-12 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-[2rem] p-8 shadow-sm">
        <div className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Thành viên thực hiện</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-left">
          {data.members.map((member) => (
            <div key={member.id} className="flex items-center gap-3 group">
              <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                {member.id}
              </span>
              <span className="font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                {member.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    )}

    <div className="pt-8 text-slate-400 text-sm flex items-center gap-2">
      <i className="fa-solid fa-computer-mouse"></i> Cuộn hoặc dùng phím mũi tên
    </div>
  </div>
);

export const MindMapSlide: React.FC<{ data: SlideData }> = ({ data }) => (
  <div className="h-full flex flex-col p-8 md:p-16 max-w-7xl mx-auto w-full overflow-y-auto pb-32 md:pb-16">
    <div className="mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">{data.title}</h2>
      <p className="text-lg text-slate-500">{data.subtitle}</p>
    </div>
    
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
      {data.mindMapItems?.map((item) => (
        <div key={item.id} className="relative group">
          <div className={`p-8 rounded-3xl border-2 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl ${item.color} flex flex-col items-center text-center space-y-4`}>
            <div className="text-2xl font-bold opacity-30">{item.id}</div>
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
              <i className={`fa-solid ${item.icon} text-3xl`}></i>
            </div>
            <div className="font-bold text-lg leading-tight">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ContrastSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  if (!data.contrastData) return null;
  const { negative, positive } = data.contrastData;

  const colorMap: Record<string, string> = {
    red: "bg-red-50 border-red-100 text-red-900",
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-900",
    rose: "bg-rose-50 border-rose-100 text-rose-900",
    teal: "bg-teal-50 border-teal-100 text-teal-900",
    indigo: "bg-indigo-50 border-indigo-100 text-indigo-900"
  };

  const iconColorMap: Record<string, string> = {
    red: "text-red-500",
    emerald: "text-emerald-500",
    rose: "text-rose-500",
    teal: "text-teal-500",
    indigo: "text-indigo-500"
  };

  return (
    <div className="h-full flex flex-col p-8 md:p-16 max-w-7xl mx-auto w-full overflow-y-auto pb-32 md:pb-16">
      <div className="mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">{data.title}</h2>
        <p className="text-lg text-slate-500">{data.subtitle}</p>
      </div>

      <div className={`flex flex-col lg:flex-row gap-12 items-start ${data.imageUrl ? 'justify-between' : 'justify-center'}`}>
        <div className={`grid grid-cols-1 ${data.imageUrl ? 'lg:w-7/12' : 'md:grid-cols-2 max-w-6xl'} gap-8 w-full`}>
          <div className={`rounded-[2.5rem] border-4 p-8 md:p-12 transition-all hover:shadow-lg ${colorMap[negative.color || 'red']}`}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm ${iconColorMap[negative.color || 'red']}`}>
                 <i className="fa-solid fa-xmark"></i>
              </span>
              {negative.title}
            </h3>
            <ul className="space-y-6">
              {negative.items.map((item, i) => (
                <li key={i} className="flex gap-4 text-lg leading-relaxed">
                  <span className="mt-2.5 w-2 h-2 rounded-full bg-current opacity-30 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded-[2.5rem] border-4 p-8 md:p-12 transition-all hover:shadow-lg ${colorMap[positive.color || 'emerald']}`}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm ${iconColorMap[positive.color || 'emerald']}`}>
                 <i className="fa-solid fa-check"></i>
              </span>
              {positive.title}
            </h3>
            <ul className="space-y-6">
              {positive.items.map((item, i) => (
                <li key={i} className="flex gap-4 text-lg leading-relaxed">
                  <span className="mt-2.5 w-2 h-2 rounded-full bg-current opacity-30 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {data.imageUrl && (
          <div className="w-full lg:w-4/12 max-w-md lg:sticky lg:top-4">
            <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-200/50 border-4 border-white">
              <img 
                src={data.imageUrl} 
                alt={data.title} 
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105" 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ContentSlide: React.FC<{ data: SlideData }> = ({ data }) => (
  <div className="h-full flex flex-col p-8 md:p-16 max-w-7xl mx-auto w-full overflow-y-auto pb-32 md:pb-16">
    <div className="mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">{data.title}</h2>
      <p className="text-lg text-slate-500">{data.subtitle}</p>
    </div>
    
    <div className={`flex-1 flex flex-col lg:flex-row gap-12 items-center ${data.imageUrl ? 'justify-between' : 'justify-center'}`}>
      <div className={`w-full flex flex-col gap-8 ${data.imageUrl ? 'lg:w-1/2' : 'max-w-4xl'}`}>
        {data.sections?.map((section, idx) => {
          const colorClass = section.color || 'indigo';
          return (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col sm:flex-row gap-8 items-start">
              <div className={`w-16 h-16 rounded-2xl bg-${colorClass}-100 flex items-center justify-center flex-shrink-0 text-${colorClass}-600`}>
                <i className={`fa-solid ${section.icon} text-3xl`}></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-lg text-slate-600 leading-relaxed">
                      <i className={`fa-solid fa-circle-check mt-1.5 text-${colorClass}-500 flex-shrink-0`}></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {data.imageUrl && (
        <div className="w-full lg:w-5/12 max-w-md">
          <div className="w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-200/50 border-4 border-white">
            <img 
              src={data.imageUrl} 
              alt={data.title} 
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105" 
            />
          </div>
        </div>
      )}
    </div>
  </div>
);

export const ConclusionSlide: React.FC<{ data: SlideData }> = ({ data }) => (
  <div className="h-full flex flex-col p-8 md:p-16 max-w-4xl mx-auto w-full overflow-y-auto pb-32 md:pb-16">
     <div className="text-center mb-12">
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">{data.title}</h2>
      <p className="text-xl text-slate-500 italic">{data.subtitle}</p>
    </div>

    <div className="flex-1 grid grid-cols-1 gap-4">
      {data.sections?.[0].items.map((item, i) => (
        <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors group">
          <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center font-bold text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            {i + 1}
          </div>
          <div className="text-xl font-semibold text-slate-700">{item}</div>
        </div>
      ))}
    </div>

    <div className="mt-16 text-center">
      <div className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg shadow-lg shadow-indigo-200">
        <i className="fa-solid fa-heart"></i>
        Giàu Có & Hạnh Phúc Trọn Vẹn
      </div>
    </div>
  </div>
);

export const ThanksSlide: React.FC<{ data: SlideData }> = ({ data }) => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-12 px-4 py-20 bg-gradient-to-b from-transparent to-indigo-50/20">
    <div className="relative">
      <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 animate-pulse"></div>
      <div className="relative p-10 bg-white rounded-full shadow-2xl shadow-indigo-100 group transition-transform hover:scale-110">
        <i className="fa-solid fa-heart text-8xl text-indigo-600 animate-ping absolute opacity-20"></i>
        <i className="fa-solid fa-heart text-8xl text-indigo-600 relative"></i>
      </div>
    </div>
    
    <div className="space-y-4">
      <h2 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter">
        {data.title}
      </h2>
      <p className="text-2xl md:text-4xl text-slate-600 font-medium max-w-3xl">
        {data.subtitle}
      </p>
    </div>

    <div className="pt-12 flex flex-col items-center gap-6">
      <div className="h-1 w-24 bg-indigo-200 rounded-full"></div>
      <div className="flex gap-4">
        <div className="px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-500 shadow-sm flex items-center gap-3">
          <i className="fa-solid fa-comments text-indigo-500"></i>
          Q&A Session
        </div>
      </div>
    </div>
  </div>
);
