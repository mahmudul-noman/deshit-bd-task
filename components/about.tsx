import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"

const stats = [
  { number: "589", label: "Projects" },
  { number: "2001", label: "Happy Clients" },
  { number: "5600", label: "Hours Worked" },
  { number: "8", label: "Awards Won" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "Github" },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#2d2d2d]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <span className="text-[#ffc107] text-sm font-semibold tracking-wider">ABOUT ME</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Know Me More</h2>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                I'm <span className="text-[#ffc107]">David Henderson</span>, a Professional Web Designer & Developer
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I help you build brand for your business at an affordable price. Thousands of clients have procured
                exceptional results while working with our dedicated team. When an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Delivering work within time and budget which meets client's requirements is our moto. Lorem Ipsum has
                been the industry's standard dummy text ever when an unknown printer took a galley.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#ffc107] mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social Links and Buttons */}
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex gap-3 justify-center">
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
              <div className="flex gap-4 justify-center">
                <Button className="bg-[#ffc107] hover:bg-[#ffb800] text-black font-semibold">Download CV</Button>
                <Button
                  variant="outline"
                  className="border-[#ffc107] text-[#ffc107] hover:bg-[#ffc107] hover:text-black font-semibold bg-transparent"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
