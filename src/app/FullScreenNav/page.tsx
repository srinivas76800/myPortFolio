"use client"
import Image from 'next/image';
import Link from 'next/link'
import React, { useRef, useState } from 'react'

const FullScreenNav = () => {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState(false)
  const [about, setAbout] = useState(false)
  const [Skills, setSkills] = useState(false)
  const [Contact, setContact] = useState(false)
  const navRef = useRef(null)

  return (
    <div className='h-screen relative text-white'>
      <div>
        <Link
          href='/'
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute w-40 h-10 right-0 top-0 z-10 p-3 bg-black cursor-pointer group"
        >
          <div className="h-full w-full">
            <div id="navBar" className="border" />
            <div className="mt-3.5 border w-[50%] float-end" />
          </div>
          <div
            ref={navRef}
            className={`bg-green-500 text-3xl font-bold text-center opacity-0 group-hover:opacity-100 pointer-events-none transition-all ease-in delay-4 absolute right-0 top-0 w-full ${open ? "h-full" : "h-0 "}`}
          >
            Home
          </div>
        </Link>
      </div>
      <div className='h-full w-full flex flex-col items-center justify-center text-center text-4xl sm:text-6xl md:text-8xl py-10'>
        <div className="w-full">
          <Link
            href='/Projects'
            onMouseEnter={() => setProjects(true)}
            onMouseLeave={() => setProjects(false)}
            className='font-bold border-t border-white/20 w-full group cursor-pointer h-30'
          >
            <div className="h-32 flex items-center justify-center">
              <div className='w-full'>
                <div className='h-32' > {
                  projects ? (
                    <div className='marquee opacity-0 group-hover:bg-white text-black group-hover:opacity-100 transition-all ease-in-out flex h-30 uppercase overflow-auto gap-5' >
                      <div className='text-scroll marquee__inner flex items-center'>
                        <h2 className='whitespace-nowrap'>to see my work click here</h2>
                        {/* <Image src={'/groceri.png'} className='rounded-full mx-5 my-3 object-cover' width={170} height={10} alt='groceri img ' /> */}
                      </div>
                      <div className="text-scroll marquee__inner flex items-center">
                        <h2 className='whitespace-nowrap'> to see my work click here</h2>
                        {/* <Image src={'/trackingapp.jpg'} className='rounded-full mx-5 my-3 object-cover' width={170} height={10} alt='groceri img ' /> */}
                      </div>
                    </div>
                  ) : (<div className='h-30 transition-all'>Projects</div>)}</div >
              </div>
            </div>
          </Link>
          <Link
            href='/AboutSection'
            onMouseEnter={() => setAbout(true)}
            onMouseLeave={() => setAbout(false)}
            className='font-bold border-t border-white/20 w-full group cursor-pointer h-30'
          >
            <div className="h-32 flex items-center justify-center">
              <div className='w-full'>
                <div className='h-32' > {
                  about ? (
                    <div className='marquee opacity-0 group-hover:bg-white text-black group-hover:opacity-100 transition-all ease-in-out flex h-30 uppercase overflow-auto gap-5' >
                      <div className='text-scroll marquee__inner flex items-center'>
                        <h2 className='whitespace-nowrap'>to see my work click here</h2>
                        {/* <Image src={'/groceri.png'} className='rounded-full mx-5 my-3 object-cover' width={170} height={10} alt='groceri img ' /> */}
                      </div>
                      <div className="text-scroll marquee__inner flex items-center">
                        <h2 className='whitespace-nowrap'> to see my work click here</h2>
                        {/* <Image src={'/trackingapp.jpg'} className='rounded-full mx-5 my-3 object-cover' width={170} height={10} alt='groceri img ' /> */}
                      </div>
                    </div>
                  ) : (<div className='h-30 transition-all'>About</div>)}</div >
              </div>
            </div>
          </Link>
          <Link
            href='/ContactSection'
            onMouseEnter={() => setContact(true)}
            onMouseLeave={() => setContact(false)}
            className='font-bold border-t border-white/20 w-full group cursor-pointer h-30'
          >
            <div className="h-32 flex items-center justify-center">
              <div className='w-full'>
                <div className='h-32' > {
                  Contact ? (
                    <div className='marquee opacity-0 group-hover:bg-white text-black group-hover:opacity-100 transition-all ease-in-out flex h-30 uppercase overflow-auto gap-5' >
                      <div className='text-scroll marquee__inner flex items-center'>
                        <h2 className='whitespace-nowrap'>to see my work click here</h2>
                        {/* <Image src={'/groceri.png'} className='rounded-full mx-5 my-3 object-cover' width={170} height={10} alt='groceri img ' /> */}
                      </div>
                      <div className="text-scroll marquee__inner flex items-center">
                        <h2 className='whitespace-nowrap'> to see my work click here</h2>
                        {/* <Image src={'/trackingapp.jpg'} className='rounded-full mx-5 my-3 object-cover' width={170} height={10} alt='groceri img ' /> */}
                      </div>
                    </div>
                  ) : (<div className='h-30 transition-all'>Constact me</div>)}</div >
              </div>
            </div>
          </Link>
          <Link
            href='/Skills'
            onMouseEnter={() => setSkills(true)}
            onMouseLeave={() => setSkills(false)}
            className='font-bold border-t border-white/20 w-full group cursor-pointer h-30'
          >
            <div className="h-32 flex items-center justify-center">
              <div className='w-full'>
                <div className='h-32' > {
                  Skills ? (
                    <div className='marquee opacity-0 group-hover:bg-white text-black group-hover:opacity-100 transition-all ease-in-out flex h-30 uppercase overflow-auto gap-5' >
                      <div className='text-scroll marquee__inner flex items-center'>
                        <h2 className='whitespace-nowrap'>to see my work click here</h2>
                        {/* <Image src={'/groceri.png'} className='rounded-full mx-5 my-3 object-cover' width={170} height={10} alt='groceri img ' /> */}
                      </div>
                      <div className="text-scroll marquee__inner flex items-center">
                        <h2 className='whitespace-nowrap'> to see my work click here</h2>
                        {/* <Image src={'/trackingapp.jpg'} className='rounded-full mx-5 my-3 object-cover' width={170} height={10} alt='groceri img ' /> */}
                      </div>
                    </div>
                  ) : (<div className='h-30 transition-all'>Skills</div>)}</div >
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav