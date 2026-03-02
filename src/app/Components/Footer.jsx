'use client'
import { useState } from 'react';
import { BadgeCent, BadgeCheck, BadgeCheckIcon, BadgeIcon, BaggageClaim, Briefcase, BriefcaseMedical, ContactIcon, Instagram, LucideBadgeCheck, Mail, MailOpen, MapPin, MapPinCheckInside, Workflow, WorkflowIcon } from 'lucide-react';
import { FaLinkedin, FaWhatsapp, FaTelegramPlane, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { IconContract } from '@tabler/icons-react';

export default function Footer() {

  const [mailHover, setMailHover] = useState(false)
  const [mapIcon, setMapIcon] = useState(false)
  const [contactHover, setContactHover] = useState(false)
  const [hireHover, setHireHover] = useState(false)

  return (
    <footer className='bg-[#121212] py-5 h-full text-white'>
      <div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand & Location */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Location </h3>
            <p
              className="text-gray-400 transition-all ease-in-out flex justify-center md:justify-start items-center gap-2 hover:text-white cursor-pointer"
              onMouseEnter={() => setMapIcon(true)}
              onMouseLeave={() => setMapIcon(false)}
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/?api=1&query=Hyderabad",
                  "_blank"
                )
              }
            >
              {mapIcon ? (
                <MapPinCheckInside size={16} />
              ) : (
                <MapPin size={16} />
              )}
              Warangal, Hyderabad, Telangana
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-2">Contact</h4>

            <p
              className="text-gray-400 transition-all ease-in-out flex justify-center md:justify-start items-center gap-2 hover:text-white"
              onMouseEnter={() => setMailHover(true)}
              onMouseLeave={() => setMailHover(false)}
            >
              {mailHover ? (<MailOpen size={16} />) : (<Mail size={16} />)}
              <a href="mailto:srinivasvemunri8@gmail.com">srinivasvemunuri8@gmail.com</a>
            </p>

            <p
              className="text-gray-400 flex justify-center md:justify-start items-center gap-2 mt-2 hover:text-white"
              onMouseEnter={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
            >
              {contactHover ? (<ContactIcon size={16} />) : (<IconContract size={16} />)}
              <a href="https://drive.google.com/file/d/1h3hcXoz9MaX_fZhTpd6Lg8MdfUS2eazW/view?usp=sharing">My Resume</a>
            </p>

            <p
              className="text-gray-400 flex justify-center md:justify-start items-center gap-2 mt-2 hover:text-white"
              onMouseEnter={() => setHireHover(true)}
              onMouseLeave={() => setHireHover(false)}
            >
              {hireHover ? (<BriefcaseMedical size={16} />) : (<Briefcase size={16} />)}
              <a
                href={`mailto:srinivasvemunuri8@gmail.com
                  ?subject=Hiring%20Inquiry
                  &body=Hi%20Srinivas,%0A%0AI%20checked%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.%0A%0AThanks`}
              >
                Hire Me
              </a>
            </p>

          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-medium mb-2">Follow Me</h4>
            <div className="flex justify-center md:justify-start gap-4 text-gray-300">
              <Link href="https://www.instagram.com/mr_vemunuri_02?igsh=NjV4MjF4eGgxdmp5 " target="_blank">
                <Instagram className="hover:text-white transition" size={25} />
              </Link>
              {/* <Link href=" https://wa.me/+919392532694" target="_blank">
              <FaWhatsapp  className="hover:text-white transition"  size={25}/>
            </Link> */}
              <Link href="http://t.me/mrVemunuri02" target="_blank">
                <FaTelegramPlane className="hover:text-white transition" size={25} />
              </Link>
              <Link href="https://github.com/srinivas76800" target="_blank">
                <FaGithub className="hover:text-white transition" size={25} />
              </Link>
              <Link href="https://www.linkedin.com/in/vemunuri-vivek-d15m02y2004" target="_blank">
                <FaLinkedin className="hover:text-white transition" size={25} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Mr Vemunuri's site. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
