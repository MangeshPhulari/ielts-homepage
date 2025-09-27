import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "Speaking Practice", text: "Live 1:1 speaking sessions with certified trainers." },
  { title: "Mock Tests", text: "Full-length realistic mock tests with detailed reports." },
  { title: "AI Band Score", text: "Instant AI-powered band predictions for Writing & Speaking." },
  { title: "Study Plans", text: "Personalized weekly study plans and progress tracking." }
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold">What We Offer</h2>
        <p className="mt-2 text-gray-600">Designed to get you the band score you need.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg border border-gray-100 shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
