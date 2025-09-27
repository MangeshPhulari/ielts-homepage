import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-800 text-gray-300 text-center">
      <p>© {new Date().getFullYear()} IELTS ProAcademy. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="#privacy" className="hover:text-white">Privacy</a>
        <a href="#terms" className="hover:text-white">Terms</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
    </footer>
  );
}
