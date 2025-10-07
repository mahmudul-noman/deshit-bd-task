"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const stats = [
  { number: "589", label: "Projects" },
  { number: "2001", label: "Happy Clients" },
  { number: "5600", label: "Hours Worked" },
  { number: "8", label: "Awards Won" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "Github" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#2d2d2d]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Animated */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Section Title */}
            <div>
              <span className="text-[#ffc107] text-sm font-semibold tracking-wider">
                ABOUT ME
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Know Me More
              </h2>
            </div>

            {/* About Content */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                I'm <span className="text-[#ffc107]">David Henderson</span>, a
                Professional Web Designer & Developer
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I help you build brand for your business at an affordable price.
                Thousands of clients have procured exceptional results while
                working with our dedicated team. When an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Delivering work within time and budget which meets client's
                requirements is our moto. Lorem Ipsum has been the industry's
                standard dummy text ever when an unknown printer took a galley.
              </p>
            </div>

            {/* Social Links and Buttons */}
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-[#ffc107] hover:text-black transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  variant="outline"
                  className="relative border-0 text-white hover:text-white font-semibold px-8 py-6 text-base overflow-hidden group rounded-none cursor-pointer"
                  style={{ backgroundColor: "#EE5B6E" }}
                >
                  <span className="absolute inset-y-0 left-0 w-1/2 bg-black transition-all duration-500 ease-in-out group-hover:left-1/2"></span>
                  <span className="relative z-10">Download CV</span>
                </Button>

                <Button
                  variant="outline"
                  className="relative border-0 text-white hover:text-white font-semibold px-8 py-6 text-base overflow-hidden group rounded-none cursor-pointer"
                  style={{ backgroundColor: "#EE5B6E" }}
                >
                  <span className="absolute inset-y-0 left-0 w-1/2 bg-black transition-all duration-500 ease-in-out group-hover:left-1/2"></span>
                  <span className="relative z-10">Hire Me</span>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Side (Stats Grid) */}
          <motion.div
            className="grid grid-cols-2 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 100 }} // start from bottom
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} // faster than left (0.8)
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] rounded-md p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }} // each item also rises slightly
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#ffc107] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
