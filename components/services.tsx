import {
  Code,
  Smartphone,
  Palette,
  Layers,
  BarChart,
  Monitor,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Smartphone,
    title: "App Design & Develop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Layers,
    title: "Graphic Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: BarChart,
    title: "SEO Marketing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden p-8 rounded-lg transition-transform duration-300 transform hover:scale-105 group bg-[#2d2d2d]"
            >
              {/* Vertical background effect from center */}
              <div className="absolute inset-0 bg-[#ffc107] scale-y-0 origin-center transition-transform duration-500 group-hover:scale-y-100 z-0"></div>

              {/* Card content */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 bg-[#ffc107] group-hover:bg-black transition-colors duration-300">
                  <service.icon
                    size={32}
                    className="text-black group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-black transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-black transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
