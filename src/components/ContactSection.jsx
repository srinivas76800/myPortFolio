'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Lottie from "lottie-react";
import ButtonNimation from "../assets/Buttonanimation.json";
import { Mail } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log(formData, 'fofm contact')
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(res, 'from contact')
      const data = await res.json();
      console.log(data, 'from contact ')
      if (data.success) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (err) {
      setStatus("Server error ❌");
    }
  };


  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-8"
        >
          Let’s Work Together ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-12"
        >
          Fill out the form and let’s create Creagy web sites 📷🤝
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-xl bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-xl bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-xl bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
          ></textarea>
          <button
            type="submit"
            className="flex gap-3 justify-center items-center w-full bg-white text-black py-1 rounded-xl font-semibold hover:cursor-pointer transition"
          >
            Send Message<Lottie
              animationData={ButtonNimation}
              loop={true}
              className="w-12 h-12"
            />
          </button>
        </motion.form>

        {status && (
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            {status}
          </p>
        )}

        <p className="flex justify-center gap-2 items-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          Or drop me a mail at{' '}
          <a
            href="srinivasvemunuri8@gmail.com"
            className="flex items-center gap-1 text-black dark:text-white"
          >
            <Mail size={16} />Mail
          </a>
        </p>
      </div>
    </section>
  );
}
