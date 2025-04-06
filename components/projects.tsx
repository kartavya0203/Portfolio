import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Stock Vault",
    description:
      "A full-featured Billing Software platform with Invoice Generation, Sales Analysis, and admin dashboard.",
    image: "/images/Stock_Vault.png?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB","Django-REST-Framework"],
    demoLink: "#",
    githubLink: "https://github.com/kartavya0203/StockVault",
    category: "web",
  },
  {
    id: 2,
    title: "Sales Performance Dashboard",
    description:
      "Interactive Power BI dashboard tracking sales performance metrics with drill-down capabilities and forecasting.",
    image: "/images/SalesDashboard.png?height=400&width=600",
    tags: ["Power BI", "DAX", "Data Modeling", "Sales Analytics"],
    demoLink: "#",
    githubLink: "#",
    category: "data",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern portfolio website with smooth animations and responsive design.",
    image: "/images/Portfolio.png?height=400&width=600",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "https://github.com/kartavya0203/Portfolio",
    category: "web",
  },
  {
    id: 4,
    title: "Servify",
    description: "A full-stack service marketplace platform where users can book home services like cleaning, repair, and beauty, inspired by Urban Company.",
    image: "/images/Servify.png?height=400&width=600",
    tags: ["React", "PostgreSQL", "Tailwind CSS", "Python","Django-Rest-Famework","RazorPay"],
    demoLink: "#",
    githubLink: "https://github.com/kartavya0203/Servify",
    category: "web",
  },
  {
    id: 5,
    title: "Agro-Predict",
    description: "Agro Predict is a smart farming platform that uses machine learning to recommend optimal crops and predict yields based on soil and weather conditions.",
    image: "/images/AgroPredict.png?height=400&width=600",
    tags: ["React","Python","Django-Rest-Framework", "Tailwind CSS","Postgresql","Razorpay"],
    demoLink: "#",
    githubLink: "https://github.com/kartavya0203/Smart_individual",
    category: "web",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            💼 Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of web development and data analysis projects that deliver both beautiful user
            experiences and actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="font-normal bg-white/80 backdrop-blur-sm">
                    {project.category === "web" ? "Web Development" : "Data Analysis"}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubLink}>
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
                {/* <Button size="sm" asChild>
                  <Link href={project.demoLink}>
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Link>
                </Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Link href="#">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

