import Image from "next/image"
import { Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    image: "/woman-in-red-blazer-working-on-laptop.jpg",
    category: "DESIGN",
    date: "March 15, 2024",
    author: "Admin",
    title: "Inspire Design",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    image: "/woman-in-red-sweater-working-at-desk.jpg",
    category: "BUSINESS",
    date: "March 12, 2024",
    author: "Admin",
    title: "Doing Business and Influence",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    image: "/woman-working-on-laptop-in-modern-office.jpg",
    category: "TECHNOLOGY",
    date: "March 10, 2024",
    author: "Admin",
    title: "Expert Guidance & Accountability",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Latest Blog</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-[#2d2d2d] rounded-lg overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#ffc107] text-black text-xs font-bold px-3 py-1 rounded">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={16} />
                    {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffc107] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <Button variant="link" className="text-[#ffc107] hover:text-[#ffb800] p-0">
                  Read More →
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
