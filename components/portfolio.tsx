"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Eye, ArrowLeft, ArrowRight, X } from "lucide-react";

const portfolioItems = [
  {
    image: "/modern-workspace-with-laptop-and-plant.jpg",
    title: "Project 1",
    category: "Web",
  },
  {
    image: "/woman-working-on-laptop-in-office.jpg",
    title: "Project 2",
    category: "Apps",
  },
  {
    image: "/professional-woman-with-laptop-outdoors.jpg",
    title: "Project 3",
    category: "Card",
  },
  {
    image: "/person-working-at-desk-with-window-view.jpg",
    title: "Project 4",
    category: "Web",
  },
  {
    image: "/minimalist-desk-setup-with-coffee.jpg",
    title: "Project 5",
    category: "Apps",
  },
  {
    image: "/woman-working-on-laptop-with-notebook.jpg",
    title: "Project 6",
    category: "Card",
  },
];

const categories = ["All", "Web", "Apps", "Card"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const openModal = (index: any) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );

  return (
    <section id="portfolio" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Our Portfolio
          </h2>
          <div className="flex justify-center items-center mb-4">
            <div className="w-16 h-[2px] bg-yellow-500"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full -mx-2"></div>
            <div className="w-16 h-[2px] bg-yellow-500"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet.
            Vivamus sodales elementum pharetra. Cras dignissim justo eu accumsan
            vulputate.
          </p>

          {/* Tabs */}
          <div className="flex justify-center mt-6 gap-6 text-sm md:text-base font-medium flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                className={`transition-colors cursor-pointer ${
                  selectedCategory === category
                    ? "text-yellow-500"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: -20, scale: 0.9 }} // start smaller and slightly offset
                  whileHover={{ opacity: 1, x: 0, y: 0, scale: 1 }} // full overlay
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] bg-black/50 flex items-center justify-center gap-4 rounded-lg"
                >
                  <div className="flex gap-4">
                    <button className="p-3 bg-white rounded-full hover:bg-yellow-500 transition">
                      <Plus className="w-5 h-5 text-black" />
                    </button>
                    <button
                      className="p-3 bg-white rounded-full hover:bg-yellow-500 transition"
                      onClick={() => openModal(index)}
                    >
                      <Eye className="w-5 h-5 text-black" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button
            className="absolute top-5 right-5 text-white p-2"
            onClick={closeModal}
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-5 text-white p-2"
            onClick={prevImage}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-3xl h-[80vh] flex items-center justify-center">
            <Image
              src={filteredItems[currentIndex].image}
              alt={filteredItems[currentIndex].title}
              fill
              className="object-contain"
            />
          </div>

          <button
            className="absolute right-5 text-white p-2"
            onClick={nextImage}
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
