"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Traveler",
    role: "CEO, Company",
    image: "/professional-woman-headshot.png",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Johnny Depp",
    role: "CTO, Tech Corp",
    image: "/professional-man-headshot.png",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-[#2d2d2d]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Clients Feedback
          </h2>
          <div className="flex justify-center items-center mb-4">
            <div className="w-16 h-[2px] bg-yellow-500"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full -mx-2"></div>
            <div className="w-16 h-[2px] bg-yellow-500"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#1a1a1a] p-8 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-[#ffc107] text-[#ffc107]"
                    />
                  ))}
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-[#ffc107] text-[#ffc107] hover:bg-[#ffc107] hover:text-black bg-transparent"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-[#ffc107] text-[#ffc107] hover:bg-[#ffc107] hover:text-black bg-transparent"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight, Star } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const testimonials = [
//   {
//     name: "Sarah Traveler",
//     role: "CEO, Company",
//     image: "/professional-woman-headshot.png",
//     rating: 5,
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     name: "Johnny Depp",
//     role: "CTO, Tech Corp",
//     image: "/professional-man-headshot.png",
//     rating: 5,
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
// ]

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   return (
//     <section id="testimonials" className="py-20 bg-[#2d2d2d]">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Clients Feedback</h2>
//                     <div className="flex justify-center items-center mb-4">
//             <div className="w-16 h-[2px] bg-yellow-500"></div>
//             <div className="w-4 h-4 bg-yellow-500 rounded-full -mx-2"></div>
//             <div className="w-16 h-[2px] bg-yellow-500"></div>
//           </div>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//             industry's standard dummy text.
//           </p>
//         </div>

//         {/* Testimonials Slider */}
//         <div className="max-w-5xl mx-auto relative px-12 md:px-16">
//           <div className="grid md:grid-cols-2 gap-6 mb-20">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="relative">
//                 {/* Testimonial Card */}
//                 <div className="bg-[#1a7a7a] p-8 rounded-lg text-white relative">
//                   {/* Name and Role at Top */}
//                   <h4 className="text-xl font-bold mb-1">{testimonial.name}</h4>
//                   <p className="text-gray-200 text-sm mb-4">{testimonial.role}</p>

//                   {/* Testimonial Text */}
//                   <p className="text-gray-100 leading-relaxed mb-6">{testimonial.text}</p>

//                   {/* Stars at Bottom */}
//                   <div className="flex gap-1">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} size={18} className="fill-[#ffc107] text-[#ffc107]" />
//                     ))}
//                   </div>

//                   <div className="absolute -bottom-3 left-12 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#1a7a7a]"></div>
//                 </div>

//                 {/* Profile Image Below Card */}
//                 <div className="absolute -bottom-16 left-8">
//                   <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#4dd0e1] bg-[#4dd0e1]">
//                     <Image
//                       src={testimonial.image || "/placeholder.svg"}
//                       alt={testimonial.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Arrows on Sides */}
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={prevTestimonial}
//             className="absolute left-0 top-1/3 -translate-y-1/2 rounded-full border-2 border-[#ffc107] text-[#ffc107] hover:bg-[#ffc107] hover:text-black bg-transparent"
//           >
//             <ChevronLeft size={20} />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={nextTestimonial}
//             className="absolute right-0 top-1/3 -translate-y-1/2 rounded-full border-2 border-[#ffc107] text-[#ffc107] hover:bg-[#ffc107] hover:text-black bg-transparent"
//           >
//             <ChevronRight size={20} />
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }
