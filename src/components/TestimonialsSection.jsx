// components/TestimonialsSection.tsx
'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Raju R.',
    review:
      "Working with vivek was a breeze! He understood exactly what I wanted and built a clean, modern website that exceeded my expectations. Super reliable and creative!",
    image: 'https://i.pinimg.com/736x/82/63/37/826337ecbea0d8886c528f306e6547a5.jpg',
  },
  {
    id: 2,
    name: 'Rahul K.',
    review:
      "The attention to detail is unmatched. From UI design to smooth functionality, everything was spot-on. Definitely someone you want on your dev team.",
    image: 'https://i.pinimg.com/736x/c6/5c/dd/c65cdd8857b8e30b0a4a22d6b2b8156b.jpg',
  },
  {
    id: 3,
    name: 'Ganesh D.',
    review:
      "vivek doesn’t just write code—he builds experiences. My project went from an idea to a polished, professional site faster than I imagined.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-fzC1S7FVHg14jxO6vcrbWAYhabFAOkD4qkItAfnl-CrmSFrSeo3u9_xDoPKinxrr6E&usqp=CAU',
  }, {
    id: 4,
    name: 'Ajay J.',
    review:
      "I’ve collaborated with many developers, but vivek stands out. He communicates clearly, delivers on time, and the quality is 🔥. Highly recommend.",
    image: 'https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/9bda4d8a560899a4a522ea2952f967c6-1674326003150/5df90d58-6505-42e9-83b6-d379f10db4de.png',
  },
  {
    id: 5,
    name: 'Sanjay K.',
    review:
      "What impressed me most was how he turned complex requirements into simple, user-friendly solutions. Truly a problem-solver at heart.",
    image: 'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/6fef3dc41dcf4e9cddc3250e5e6ffe87-1690554823/Green%20bg/design-you-a-profile-pic-for-your-social-media-accounts.jpg',
  },
  {
    id: 6,
    name: 'Sneha E.',
    review:
      "From concept to deployment, everything was smooth. vivek’s skills in frontend + backend make him a complete package. Looking forward to working again.",
    image: 'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/d13290508f6f6d1e3f725012cf455ae1-1697449244/golden%20pattern%202/design-you-a-profile-pic-for-your-social-media-accounts.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          What Clients Say 💬
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.name}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.review}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
