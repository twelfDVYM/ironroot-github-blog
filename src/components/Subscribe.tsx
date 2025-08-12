// src/components/Subscribe.tsx
"use client";

import React, { useState } from "react";

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    // Reset form
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-b from-[#a0522d] to-[#c68642]">
      <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-8">
          Ready to make your own rocks?
        </h2>
        <p className="text-xl text-blue-100 mb-10">
          Contact us to receive news, quotes, and updates about IronRoot
          artificial rock features.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:info@ironroot.co.za?subject=IronRoot%20Enquiry"
            className="px-8 py-4 rounded-xl text-lg font-medium bg-white text-black hover:bg-amber-600 transition-colors duration-300"
          >
            Email Us
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=27639434886&text=I%20want%20to%20make%20rocks!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl text-lg font-medium bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
