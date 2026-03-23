"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Code,
  Megaphone,
  Search,
  Rocket,
  Share2,
  Palette,
  MessageCircle,
  Speaker,
  ArrowDownIcon,
} from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
const services = [
  {
    name: "Digital Marketing",
    icon: <Megaphone className="text-orange-400" size={20} />,
    href: "/digital-marketing-agency-usa",
  },
  {
    name: "Web Development",
    icon: <Code className="text-purple-500" size={20} />,
    href: "/web-development",
  },
  {
    name: "Search Engine Optimization",
    icon: <Search className="text-pink-500" size={20} />,
    href: "/search-engine-optimization",
  },
  {
    name: "Performance Marketing",
    icon: <Rocket className="text-yellow-400" size={20} />,
    href: "/performance-marketing",
  },
  {
    name: "Social Media Marketing",
    icon: <Share2 className="text-green-500" size={20} />,
    href: "/social-media-marketing",
  },
  {
    name: "Branding",
    icon: <Palette className="text-cyan-400" size={20} />,
    href: "/branding",
  },
  {
    name: "WhatsApp Marketing",
    icon: <MessageCircle className="text-green-600" size={20} />,
    href: "/whatsapp-marketing",
  },
  {
    name: "PR",
    icon: <Speaker className="text-red-500" size={20} />,
    href: "/pr",
  },
];
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="16"
    height="16"
    style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="16"
    height="16"
    style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }}
  >
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const Nav = () => {
  const [open, setOpen] = useState(false);
  let timeout: any;

  const handleEnter = () => {
    clearTimeout(timeout);
    setOpen(true);
  };

  const handleLeave = () => {
    timeout = setTimeout(() => {
      setOpen(false);
    }, 150); // delay of 150ms
  };
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/logo.avif"
              alt="Socio Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8 items-center">
            <div className="flex space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-[15px] font-lexend font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-[15px] font-lexend font-medium transition-colors"
              >
                About Us
              </Link>
              <div
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="relative flex items-center gap-1 px-3 py-2 font-lexend cursor-pointer text-gray-900 hover:text-red-500 text-[15px]"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
                {open && <ServicesDropdown />}
              </div>
              <Link
                href="/career"
                className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-[15px] font-lexend font-medium transition-colors"
              >
                Career
              </Link>

              <Link
                href="/contact-us"
                className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-[15px] font-lexend font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <div>
              <button className="ml-4 inline-flex font-inter font-semibold items-center bg-[#28d367] hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm transition-all duration-300 ease-out">
                <WhatsAppIcon /> WhatsApp
              </button>
              <button className="ml-4 inline-flex font-inter font-semibold items-center bg-[#f0f0f0] hover:bg-blue-600 text-black px-6 py-2 rounded-full text-sm transition-all duration-300 ease-out hover:text-white">
                <PhoneIcon /> +971 545255889
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

function ServicesDropdown() {
  return (
    <div className="absolute top-20 left-0 pt-2 w-80 bg-white rounded-2xl p-4 space-y-2 z-50">
      {services.map((service, index) => (
        <Link key={index} href={service.href} className="bg-blue-300">
          <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 py-4 rounded-lg transition">
            <div>{service.icon}</div>
            <span className="text-gray-800 font-medium">{service.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
