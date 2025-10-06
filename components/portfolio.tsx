// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const portfolioItems = [
//   {
//     image: "/modern-workspace-with-laptop-and-plant.jpg",
//     title: "Project 1",
//     category: "Web",
//   },
//   {
//     image: "/woman-working-on-laptop-in-office.jpg",
//     title: "Project 2",
//     category: "Apps",
//   },
//   {
//     image: "/professional-woman-with-laptop-outdoors.jpg",
//     title: "Project 3",
//     category: "Card",
//   },
//   {
//     image: "/person-working-at-desk-with-window-view.jpg",
//     title: "Project 4",
//     category: "Web",
//   },
//   {
//     image: "/minimalist-desk-setup-with-coffee.jpg",
//     title: "Project 5",
//     category: "Apps",
//   },
//   {
//     image: "/woman-working-on-laptop-with-notebook.jpg",
//     title: "Project 6",
//     category: "Card",
//   },
// ];

// const categories = ["All", "Web", "Apps", "Card"];

// export default function Portfolio() {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredItems =
//     selectedCategory === "All"
//       ? portfolioItems
//       : portfolioItems.filter((item) => item.category === selectedCategory);

//   return (
//     <section id="portfolio" className="py-20 bg-[#1a1a1a]">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
//             Our Portfolio
//           </h2>
//           <div className="flex justify-center items-center mb-4">
//             <div className="w-16 h-[2px] bg-yellow-500"></div>
//             <div className="w-4 h-4 bg-yellow-500 rounded-full -mx-2"></div>
//             <div className="w-16 h-[2px] bg-yellow-500"></div>
//           </div>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet.
//             Vivamus sodales elementum pharetra. Cras dignissim justo eu accumsan
//             vulputate.
//           </p>

//           {/* Tabs */}
//           <div className="flex justify-center mt-6 gap-6 text-sm md:text-base font-medium">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 className={`transition-colors cursor-pointer ${
//                   selectedCategory === category
//                     ? "text-yellow-500"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//                 onClick={() => setSelectedCategory(category)}
//               >
//                 {category.toUpperCase()}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Portfolio Grid*/}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 h-[720px]">
//           {Array.from({ length: 6 }).map((_, index) => {
//             const item = filteredItems[index];

//             return (
//               <motion.div
//                 key={index}
//                 className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {item ? (
//                   <>
//                     <Image
//                       src={item.image || "/placeholder.svg"}
//                       alt={item.title}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                       <h3 className="text-white text-xl font-bold">
//                         {item.title}
//                       </h3>
//                     </div>
//                   </>
//                 ) : (
//                   <div className="bg-transparent w-full h-full"></div> // empty placeholder
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  { image: "/modern-workspace-with-laptop-and-plant.jpg", title: "Project 1", category: "Web" },
  { image: "/woman-working-on-laptop-in-office.jpg", title: "Project 2", category: "Apps" },
  { image: "/professional-woman-with-laptop-outdoors.jpg", title: "Project 3", category: "Card" },
  { image: "/person-working-at-desk-with-window-view.jpg", title: "Project 4", category: "Web" },
  { image: "/minimalist-desk-setup-with-coffee.jpg", title: "Project 5", category: "Apps" },
  { image: "/woman-working-on-laptop-with-notebook.jpg", title: "Project 6", category: "Card" },
];

const categories = ["All", "Web", "Apps", "Card"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Portfolio</h2>
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
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
