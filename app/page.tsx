import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

