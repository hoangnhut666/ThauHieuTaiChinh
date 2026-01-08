
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AIImageProps {
  prompt: string;
  alt: string;
}

const AIImage: React.FC<AIImageProps> = ({ prompt, alt }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const generateImage = async () => {
      try {
        setLoading(true);
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }],
          },
          config: {
            imageConfig: {
              aspectRatio: "1:1"
            }
          }
        });

        if (!isMounted) return;

        let foundImage = false;
        if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              const base64Data = part.inlineData.data;
              setImageUrl(`data:image/png;base64,${base64Data}`);
              foundImage = true;
              break;
            }
          }
        }

        if (!foundImage) {
          setError("Could not generate image part.");
        }
      } catch (err) {
        console.error("Image generation failed:", err);
        setError("Failed to generate AI visual.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    generateImage();

    return () => {
      isMounted = false;
    };
  }, [prompt]);

  if (loading) {
    return (
      <div className="w-full aspect-square rounded-[2.5rem] bg-slate-100 animate-pulse flex flex-col items-center justify-center text-slate-400 gap-4">
        <i className="fa-solid fa-wand-magic-sparkles text-4xl animate-bounce"></i>
        <p className="text-sm font-medium">Đang tạo hình ảnh AI...</p>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className="w-full aspect-square rounded-[2.5rem] bg-slate-100 flex flex-col items-center justify-center text-slate-400 gap-2 p-6 text-center">
        <i className="fa-solid fa-circle-exclamation text-3xl"></i>
        <p className="text-sm">{error || "Không thể tải ảnh"}</p>
      </div>
    );
  }

  return (
    <div className="w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-200/50 border-4 border-white">
      <img src={imageUrl} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default AIImage;
