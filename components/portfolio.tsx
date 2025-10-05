import Image from "next/image"

const portfolioItems = [
  {
    image: "/modern-workspace-with-laptop-and-plant.jpg",
    title: "Project 1",
  },
  {
    image: "/woman-working-on-laptop-in-office.jpg",
    title: "Project 2",
  },
  {
    image: "/professional-woman-with-laptop-outdoors.jpg",
    title: "Project 3",
  },
  {
    image: "/person-working-at-desk-with-window-view.jpg",
    title: "Project 4",
  },
  {
    image: "/minimalist-desk-setup-with-coffee.jpg",
    title: "Project 5",
  },
  {
    image: "/woman-working-on-laptop-with-notebook.jpg",
    title: "Project 6",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
