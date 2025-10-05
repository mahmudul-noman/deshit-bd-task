import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Resume from "@/components/resume"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
