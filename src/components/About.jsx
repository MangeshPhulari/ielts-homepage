import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        <motion.img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=60"
          alt="classroom"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-lg shadow-lg"
        />

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold">Why Choose IELTS ProAcademy?</h2>
          <p className="mt-4 text-gray-600">
            With expert trainers, flexible schedules, and proven strategies, we’ve helped 5000+ students achieve their dream band scores.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
            <li>95% student success rate</li>
            <li>Expert Cambridge-certified trainers</li>
            <li>AI-driven feedback system</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
