"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-[#2d2d2d]"
      initial={{ opacity: 0, y: 50 }} // Start slightly below
      animate={{ opacity: 1, y: 0 }} // Animate to normal position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-[#1a1a1a] border-gray-700 text-white placeholder:text-gray-500 focus:border-[#ffc107]"
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#1a1a1a] border-gray-700 text-white placeholder:text-gray-500 focus:border-[#ffc107]"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                name="phone"
                type="tel"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-[#1a1a1a] border-gray-700 text-white placeholder:text-gray-500 focus:border-[#ffc107]"
              />
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-[#1a1a1a] border-gray-700 text-white placeholder:text-gray-500 focus:border-[#ffc107]"
                required
              />
            </div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="bg-[#1a1a1a] border-gray-700 text-white placeholder:text-gray-500 focus:border-[#ffc107] resize-none"
              required
            />
            <div>
              <Button
                variant="outline"
                className="relative border-0 text-white hover:text-white font-semibold px-8 py-6 text-base overflow-hidden group rounded-none cursor-pointer"
                style={{ backgroundColor: "#EE5B6E" }}
              >
                <span className="absolute inset-y-0 left-0 w-1/2 bg-black transition-all duration-500 ease-in-out group-hover:left-1/2"></span>
                <span className="relative z-10">Send Message</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
