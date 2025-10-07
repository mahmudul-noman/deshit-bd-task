"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d]"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-[#ffc107] text-sm font-semibold tracking-wider">
                HELLO!
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              I'm Professional Web Designer &{" "}
              <span className="text-[#ffc107]">Management Developer</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="outline"
                className="relative border-0 text-white hover:text-white font-semibold px-8 py-6 text-base overflow-hidden group rounded-none cursor-pointer"
                style={{ backgroundColor: "#EE5B6E" }}
              >
                <span className="absolute inset-y-0 left-0 w-1/2 bg-black transition-all duration-500 ease-in-out group-hover:left-1/2"></span>
                <Download className="mr-2 relative z-10" size={20} />
                <span className="relative z-10">Download CV</span>
              </Button>

              <Button
                variant="outline"
                className="relative border-0 text-white hover:text-white font-semibold px-8 py-6 text-base overflow-hidden group rounded-none cursor-pointer"
                style={{ backgroundColor: "#EE5B6E" }}
              >
                <span className="absolute inset-y-0 left-0 w-1/2 bg-black transition-all duration-500 ease-in-out group-hover:left-1/2"></span>
                <Mail className="mr-2 relative z-10" size={20} />
                <span className="relative z-10">Contact</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image (Double Layered + Rotating Shape) */}
          <div className="relative flex justify-center lg:justify-end h-full">
            <div className="relative w-full h-[500px] lg:h-[600px] xl:h-[700px]">
              {/* Rotating Background Shape */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="absolute w-[100%] h-[100%] animate-spin-slow">
                  <Image
                    src="/shape.webp"
                    alt="Rotating Background Shape"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Back Image */}
              <div className="absolute top-0 left-0 w-full h-full translate-y-[-20px] scale-105 opacity-40">
                <Image
                  src="/hero 1.png"
                  alt="Background Layer"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Front Image */}
              <div className="absolute bottom-0 left-0 w-full h-full z-10">
                <Image
                  src="/hero 1.png"
                  alt="Front Layer"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slow spin animation */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
