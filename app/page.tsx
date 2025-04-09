'use client';

import { useState, useRef } from 'react';

export default function Home() {
  const [showSurprise, setShowSurprise] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setShowSurprise(true);
    setTimeout(() => {
      audioRef.current?.play();
    }, 500);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200 p-6 text-center">
      {!showSurprise ? (
        <button
          onClick={handleClick}
          className="bg-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 text-xl transition-all"
        >
          Klik di sini 🎁
        </button>
      ) : (
        <div className="flex flex-col items-center animate-slow-fade">
          <h1 className="text-4xl font-bold text-pink-700 mb-4">
            Selamat Ulang Tahun, See 🎉
          </h1>
          <p className="text-lg text-gray-700 max-w-xl mb-4">
            Semoga hari-harimu penuh dengan tawa, cinta, dan keberkahan yang tidak pernah habis.
          </p>

          <img
            src="/images/Esse.jpg"
            alt="Foto Besse"
            className="w-64 h-64 object-cover rounded-2xl shadow-md mb-6 border-4 border-white"
          />

          <p className="text-md italic text-pink-800">Yudha Nugraha Syailendra</p>

          <audio ref={audioRef} src="/sounds/Selimut Hati.mp3" loop />
        </div>
      )}
    </main>
  );
}
