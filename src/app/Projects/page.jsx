'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { ProjectsData } from '../Context/ProjectsData';

export default function PortfolioSection() {

  const { projectsItem } = useContext(ProjectsData)

  return (
    <section
      id="portfolio"
      className="h-full overflow-y-scroll [&::-webkit-scrollbar]:hidden bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png')] px-6 dark:bg-zinc-900 pb-16"
    >
      <div className="max-w-6xl pt-5 mx-auto text-center">
        
        <h2 className="flex items-center justify-center gap-5 sm:gap-8 md:gap-10 text-4xl font-bold text-white mb-12">
          {/* <Link href='/' >
            <Image
              src={require('../../../public/leftarrow.png')}
              alt='arrow btn'
              height={50}
              width={50}
              className='bg-white rounded-full'
            />
          </Link> */}
          My work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectsItem.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="rounded-4xl shadow-lg group"
            >
              <div className="group rounded-4xl w-full h-64 mx-auto perspective-[1000px]">
                <div className="relative w-full h-full transition-transform duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">

                  <div className='absolute px-5 w-full h-full backface-hidden bg-white flex items-center justify-center rounded-2xl '>
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-61 object-contain transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <p className='fixed bg-black/50 h-10 bottom-0 left-0 right-0 blur-xl '></p>
                    <p className='fixed h-10 bottom-0 left-0 right-0 text-black font-extrabold'>{item.title}</p>
                  </div>

                  <div className="absolute w-full h-full backface-hidden px-3 flex flex-col justify-center rounded-2xl bg-white/30 text-white transform-[rotateY(180deg)]">
                    <p className="text-white text-lg font-bold">Role : {item.role}</p>
                    <p className="text-white text-md font-semibold">Tools : {item.tools}</p>
                    {item.link? (<Link href={item.link} className='absolute px-5 py-5 bottom-0 left-0 text-white underline text-sm font-extrabold cursor-pointer'>link... </Link>):''}
                    <Link href={`/Projects/${index}`} className='absolute px-5 py-5 bottom-0 right-0 text-white underline text-sm font-extrabold cursor-pointer'>View More... </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
