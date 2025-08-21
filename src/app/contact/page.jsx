'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center  text-center px-4 py-12 bg-base-100">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary">
        Contact Page Under Construction
      </h1>

      <div className="w-full max-w-md mb-6 rounded-lg overflow-hidden shadow-md">
        <img
          src="/assets/coffee.jpg"
          alt="Coffee Break"
          className="w-full h-auto object-cover"
        />
      </div>

      <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl">
        Our contact form is brewing... ☕ <br />
        Developer stepped out for coffee and a quick nap. Try again after the caffeine kicks in!
      </p>
    </div>
  );
}