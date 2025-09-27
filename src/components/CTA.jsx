import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold"
      >
        Start your IELTS journey today
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-3 text-lg"
      >
        Book a <span className="font-semibold">free trial class</span> and experience the difference.
      </motion.p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
        className="mt-6"
      >
        <a href="#contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform">
          Book Free Trial
        </a>
      </motion.div>
    </section>
  );
}
