'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center  text-center px-4 py-12 bg-base-100">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary">
        About Page Coming Soon!
      </h1>

      <div className="w-full max-w-md mb-6 rounded-lg overflow-hidden shadow-md">
        <img
          src="/assets/netflix.jpg"
          alt="Netflix Break"
          className="w-full h-auto object-cover"
        />
      </div>

      <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl">
        Our developer is currently on a snack break... and may have opened Netflix by mistake 🍿😅
        <br />
        We'll be back once the series is resolved!
      </p>
    </div>
  );
}