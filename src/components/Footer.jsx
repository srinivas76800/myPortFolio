import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { FaLinkedin ,FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand & Location */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Vivek's workplace </h3>
          <p className="text-gray-400 flex justify-center md:justify-start items-center gap-2 hover:text-white">
            <MapPin size={16} /> Palakurthy, Hyderabad, Telangana
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-medium mb-2">Contact</h4>
          <p className="text-gray-400 flex justify-center md:justify-start items-center gap-2 hover:text-white">
            <Mail size={16} /> <a href="mailto:rahulstudio@gmail.com">srinivasvemunuri8@gmail.com</a>
          </p>
          <p className="text-gray-400 flex justify-center md:justify-start items-center gap-2 mt-2 hover:text-white">
            <Phone size={16} /> +91 9392532694
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-medium mb-2">Follow Me</h4>
          <div className="flex justify-center md:justify-start gap-4 text-gray-300">
            <Link href="https://www.instagram.com/mr_vemunuri_02?igsh=NjV4MjF4eGgxdmp5 " target="_blank">
              <Instagram className="hover:text-white transition" size={25}/>
            </Link>
            <Link href=" https://wa.me/+919392532694" target="_blank">
              <FaWhatsapp  className="hover:text-white transition"  size={25}/>
            </Link>
            <Link href="http://t.me/mrVemunuri02" target="_blank">
              <FaTelegramPlane  className="hover:text-white transition"  size={25}/>
            </Link>
            {/* <Link href="#" target="_blank">
              <FaXTwitter  className="hover:text-white transition"  size={25}/>
            </Link> */}
            <Link href="https://www.linkedin.com/in/vemunuri-vivek-d15m02y2004" target="_blank">
              <FaLinkedin  className="hover:text-white transition"  size={25}/>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mr Vemunuri's site. All rights reserved.
      </div>
    </footer>
  );
}
