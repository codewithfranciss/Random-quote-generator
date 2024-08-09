import React, { useState } from 'react';
import '@fontsource/playfair-display/700.css';

const quoteList = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King"
  },
  {
    quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy"
  }
];

const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState(quoteList[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    setCurrentQuote(quoteList[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <h1 className="text-white text-3xl font-bold mb-4 text-center">
        "{currentQuote.quote}"
      </h1>
      <i className="text-white text-xl mb-6"> {currentQuote.author}</i>
      <button
        onClick={generateRandomQuote}
        className="bg-slate-100 hover:bg-slate-600 text-slate-700 font-bold py-2 px-4 rounded"
      >
        Generate Quote
      </button>
    </div>
  );
};

export default Quote;
