import { Code, Smartphone, Palette, Layers, BarChart, Monitor } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    icon: Smartphone,
    title: "App Design & Develop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    icon: Layers,
    title: "Graphic Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    icon: BarChart,
    title: "SEO Marketing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#2d2d2d] p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#ffc107] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#ffb800] transition-colors">
                <service.icon size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
