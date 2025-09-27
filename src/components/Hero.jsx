import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-gradient py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Achieve your target IELTS band with expert guidance
          </h1>
          <p className="mt-4 text-gray-600">
            Personalized coaching, realistic mock tests, and AI-powered band predictions.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium shadow hover:scale-105 transition-transform">
              Get Started
            </a>
            <a href="#features" className="px-4 py-3 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50">
              View Features
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=60"
            alt="students studying"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
