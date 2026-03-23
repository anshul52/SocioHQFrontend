import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3] pt-4 pb-0 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex gap-12 mt-15">
        {/* Left Section */}
        <div className="w-1/3 flex flex-col justify-center  px-20">
          {/* Logo Placeholder */}
          <div className="h-35 w-55 mb-7">
            <img
              src="/images/logo.avif"
              alt=""
              className="text-gray-400 text-sm w-full h-full"
            />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-[16px] leading-6 max-w-xs">
            We help our clients succeed by creating brand identities, digital
            experiences...
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <div className="w-10 h-10 rounded-full  flex items-center justify-center text-white text-sm">
              <img src="/images/Instagram.avif" alt="" />
            </div>
            <div className="w-10 h-10 rounded-full  flex items-center justify-center text-white text-sm">
              <img src="/images/Facebook.avif" alt="" />
            </div>
            <div className="w-10 h-10 rounded-full  flex items-center justify-center text-white text-sm">
              <img src="/images/Dribbble.avif" alt="" />
            </div>
            <div className="w-10 h-10 rounded-full  flex items-center justify-center text-white text-sm">
              <img src="/images/Behance.avif" alt="" />
            </div>
          </div>
        </div>
        <div className="flex  items-end justify-center gap-30 w-2/3">
          {/* Quick Navigation */}
          <div>
            <h3 className="text-[14px] font-medium mb-4 text-black">
              Quick Navigation
            </h3>
            <ul className="space-y-3 text-gray-600 text-[15px]">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Careers</li>
              <li className="hover:text-black cursor-pointer">Contact Us</li>
              <li className="hover:text-black cursor-pointer">Blogs</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[14px] font-medium mb-4 text-black">
              Services
            </h3>
            <ul className="space-y-3 text-gray-600 text-[15px]">
              <li className="hover:text-black cursor-pointer">
                Digital Marketing
              </li>
              <li className="hover:text-black cursor-pointer">
                Web Development
              </li>
              <li className="hover:text-black cursor-pointer">SEO</li>
              <li className="hover:text-black cursor-pointer">
                Performance Marketing
              </li>
              <li className="hover:text-black cursor-pointer">
                Social Media Marketing
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[14px] font-medium mb-4 text-black">Contact</h3>

            <div className="space-y-4 text-gray-600 text-[15px]">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="text-red-500 mt-1" size={18} />
                <p>
                  10th Floor, Concord Tower, <br />
                  Media City, Dubai
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="text-blue-500" size={18} />
                <p>+971545255889</p>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <Phone className="text-green-500" size={18} />
                <p>+971545255889</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="text-red-400" size={18} />
                <p>info@socio.ae</p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-[14px] mt-12">
        Copyright ©2026 Socio | MCS Marketing
      </div>
    </footer>
  );
}
