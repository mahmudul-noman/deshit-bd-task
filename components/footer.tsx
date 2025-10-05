import Link from "next/link"
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Resume", href: "#resume" },
]

const webServices = [
  { name: "Web Design", href: "#" },
  { name: "Web Development", href: "#" },
  { name: "UI/UX Design", href: "#" },
  { name: "SEO Marketing", href: "#" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "Github" },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Code<span className="text-[#ffc107]">C</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center text-gray-400 hover:bg-[#ffc107] hover:text-black transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#ffc107] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Web Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">WEB SERVICES</h3>
            <ul className="space-y-2">
              {webServices.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-400 hover:text-[#ffc107] transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">CONTACT US</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-[#ffc107] flex-shrink-0 mt-1" />
                <span>123 Street Name, City, Country</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-[#ffc107] flex-shrink-0" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-[#ffc107] flex-shrink-0" />
                <span>info@codec.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 CodeC. All rights reserved. Designed by <span className="text-[#ffc107]">CodeC</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
