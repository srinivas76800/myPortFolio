// components/PortfolioSection.tsx
'use client';

import { motion } from 'framer-motion';

const portfolioItems = [
  { id: 1, title: 'Dashboads', image: '/dashboad.png' },
  { id: 2, title: 'Apps', image: '/news.jpg' },
  { id: 3, title: 'E-commerce', image: '/groceri.png' },
  { id: 4, title: 'Mobile application', image: '/trackingapp.jpg' },
  { id: 5, title: 'Company websites', image: '/companysite.jpg' },
  { id: 6, title: 'Static landing pages', image: 'Staticlandingpages1.jpg' },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="px-6 bg-white dark:bg-zinc-900 pb-16"
    >
      <div
        style={{ backgroundImage: "url('/monkey.png')" }}
        className='h-48 w-55 bg-cover bg-center'
      />
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          My work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-61 object-contain transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
