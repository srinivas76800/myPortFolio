'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Lottie from "lottie-react";
import ButtonNimation from "../../assets/Buttonanimation.json";
import { Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandOnlyfans,
  IconBrandTelegram,
} from "@tabler/icons-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) { return setStatus('Missing filds!') }
    setStatus("Sending...");
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
        setFormData({ firstname: "", lastname: '', email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (err) {
      setStatus("Server error ❌");
    }
  };


  return (
    <section id="contact" className="overflow-y-scroll [&::-webkit-scrollbar]:hidden py-10 px-6 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png')] h-screen">
      {/* <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-row gap-2 sm:gap-8 items-center justify-center text-md sm:text-2xl md:text-4xl font-bold text-white mb-8"
        >
          <Link href='/' >
            <Image
              src={require('../../../public/leftarrow.png')}
              alt='arrow btn'
              height={30}
              width={30}
              className='bg-white rounded-full'
            />
          </Link>
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
            className="p-4 rounded-xl bg-white/5  text-gray-900  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-xl bg-white/5  text-gray-900  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-xl bg-white/5  text-gray-900  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
          ></textarea>
          <div
            className="rainbow mt-8 font-bold relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
            <button onSubmit={handleSubmit} className="px-8 w-full text-sm py-3 text-white rounded-full font-medium bg-white backdrop-blur">
              Let's Build Something Cool
            </button>
          </div>
        </motion.form>

        {status && (
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            {status}
          </p>
        )}
      </div> */}
      <div className="bg-black/40 mx-auto w-full max-w-3xl rounded-none bg-back p-4 md:rounded-2xl md:p-8">
        <h2 className="text-xl text-center font-extrabold text-white">
          Let&apos;s Work Together
        </h2>
        <div className="my-5 h-px w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <p className="mt-2 max-w-sm text-sm text-gray-400">
          Fill out the form and let’s create Creagy web sites 📷🤝
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" name="firstname" onChange={handleChange} value={formData.firstname} placeholder="Vemunuri" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" name="lastname" onChange={handleChange} value={formData.lastname} placeholder="vivek" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" onChange={handleChange} value={formData.email} placeholder="projectmayhem@example.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="text">Message</Label>
            <Input className='h-20' name="message" onChange={handleChange} id="text" value={formData.message} placeholder="Your Massage here.." type="text" />
          </LabelInputContainer>
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-linear-to-br from-black to-neutral-600 font-medium text-white "
            type="submit"
          >
            {status ? status : 'send message -->'}
            <BottomGradient />
          </button>

          <div className="my-5 h-px w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 space-y-4">

            <Link
              className="group/btn hover:-rotate-1 transition-all shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-white px-4 font-medium text-black dark:shadow-[0px_0px_1px_1px_#262626]"
              href={'https://github.com/srinivas76800'}
            >
              <IconBrandGithub className="h-4 w-4" />
              <span className="text-sm">
                GitHub
              </span>
            </Link>
            <Link
              className="group/btn hover:-rotate-2 transition-all shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-white px-4 font-medium text-black dark:shadow-[0px_0px_1px_1px_#262626]"
              href={'https://www.linkedin.com/in/vemunuri-vivek-d15m02y2004'}
            >
              <IconBrandLinkedin className="h-4 w-4" />
              <span className="text-sm">
                Linkedin
              </span>
            </Link>
            <Link
              className="group/btn hover:-rotate-2 transition-all shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-white px-4 font-medium text-black dark:shadow-[0px_0px_1px_1px_#262626]"
              href={'mailto:srinivasvemunuri8@gmail.com?subject=Hello&body=I want to contact you'}
            >
              <IconBrandGmail className="h-4 w-4" />
              <span className="text-sm">
                Mail
              </span>
            </Link>
            <Link
              className="group/btn hover:-rotate-2 transition-all shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-white px-4 font-medium text-black dark:shadow-[0px_0px_1px_1px_#262626]"
              href={'https://t.me/mrVemunuri02?text=Hello%20I%20am%20contacting%20you%20from%20your%20portfolio'}
            >
              <IconBrandTelegram className="h-4 w-4" />
              <span className=" text-sm">
                Telegram
              </span>
            </Link>
            <Link
              className="group/btn hover:-rotate-2 transition-all shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-white px-4 font-medium text-black dark:shadow-[0px_0px_1px_1px_#262626]"
              href={'https://www.instagram.com/mr_vemunuri_02?igsh=NjV4MjF4eGgxdmp5'}
            >
              <IconBrandInstagram className="h-4 w-4" />
              <span className=" text-sm">
                Instagram
              </span>
            </Link>

          </div>
        </form>
      </div>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
// const LinkGradient = () => {
//   return (
//     <>
//       <span className="absolute inset-x-0 -bottom-px block h-full w-full bg-linear-to-r from-transparent via-[#4f97d1] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
//       <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-[#5ea8d6] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
//     </>
//   );
// };

const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
