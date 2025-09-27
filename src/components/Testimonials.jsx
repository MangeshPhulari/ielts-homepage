import React from "react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Ria Sharma", text: "I improved from band 6.0 to 7.5 in 3 months!" },
  { name: "Arjun Patel", text: "Mock tests are super realistic with AI feedback." },
  { name: "Fatima Khan", text: "Friendly trainers and focused speaking practice." }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold">Student Testimonials</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-5 bg-white rounded-lg border border-gray-100 shadow hover:shadow-md"
            >
              <h3 className="font-semibold">{r.name}</h3>
              <p className="mt-2 text-gray-600">“{r.text}”</p>
              <div className="mt-3 text-yellow-500">★★★★★</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
