"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    title: "Stock Vault",
    description:
      "A full-featured Billing Software platform with Invoice Generation, Sales Analysis, and admin dashboard.",
    fullDescription:
      "Stock Vault is a robust billing and inventory management platform. Features include real-time analytics, customizable invoices, user authentication, and more. It is designed for scalability with Django REST and MongoDB.",
    image: "/images/Stock_Vault.png?height=400&width=600",
    screenshots: [
      "/images/Stock_Vault_1.png",
      "/images/Stock_Vault_2.png",
    ],
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB", "Django-REST-Framework"],
    demoLink: "#",
    githubLink: "https://github.com/kartavya0203/StockVault",
    category: "web",
  },
  {
    id: 2,
    title: "Sales Performance Dashboard",
    description:
      "Interactive Power BI dashboard tracking sales performance metrics with drill-down capabilities and forecasting.",
    fullDescription:
      "This Power BI project provides deep insights into sales performance using interactive charts, KPI indicators, and region-wise breakdowns. Built using advanced DAX and relationships for analysis.",
    image: "/images/SalesDashboard.png?height=400&width=600",
    screenshots: ["/images/SalesDashboard.png"],
    tags: ["Power BI", "DAX", "Data Modeling", "Sales Analytics"],
    demoLink: "#",
    githubLink: "#",
    category: "data",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern portfolio website with smooth animations and responsive design.",
    fullDescription:
      "This is a personal portfolio website showcasing my skills, services, and projects. It uses Framer Motion for animations, Tailwind for styling, and is fully responsive across devices.",
    image: "/images/Portfolio.png?height=400&width=600",
    screenshots: ["/images/Portfolio.png"],
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "https://github.com/kartavya0203/Portfolio",
    category: "web",
  },
  {
    id: 4,
    title: "Servify",
    description:
      "A full-stack service marketplace platform where users can book home services like cleaning, repair, and beauty.",
    fullDescription:
      "Servify is a service marketplace inspired by Urban Company. Users can book services, make payments with Razorpay, and admins can manage bookings. Built with React, Django, and PostgreSQL.",
    image: "/images/Servify.png?height=400&width=600",
    screenshots: [
      "/images/Servify_1.png",
      "/images/Servify_2.png",
    ],
    tags: ["React", "PostgreSQL", "Tailwind CSS", "Python", "Django-Rest-Framework", "RazorPay"],
    demoLink: "#",
    githubLink: "https://github.com/kartavya0203/Servify",
    category: "web",
  },
  {
    id: 5,
    title: "Agro-Predict",
    description:
      "Agro Predict is a smart farming platform that uses machine learning to recommend optimal crops and predict yields.",
    fullDescription:
      "Agro Predict uses ML models to suggest crops based on soil and weather. It also offers yield prediction, payment integration, and a user-friendly frontend built with React.",
    image: "/images/AgroPredict.png?height=400&width=600",
    screenshots: [
      "/images/AgroPredict_1.png",
      "/images/AgroPredict_2.png",
    ],
    tags: ["React", "Python", "Django-Rest-Framework", "Tailwind CSS", "Postgresql", "Razorpay"],
    demoLink: "#",
    githubLink: "https://github.com/kartavya0203/Smart_individual",
    category: "web",
  },
  {
    id: 6,
    title: "Toy_Fiesta Dashboard",
    description:
      "Interactive Power BI dashboard created for Toy Fiesta, a Mexican toy store company, to track sales performance with drill-down and forecasting features.",
    fullDescription:
      "This Power BI project was developed for Toy Fiesta, a well-known Mexican toy store company, with the goal of enabling data-driven decision-making across their sales operations. The interactive dashboard offers a comprehensive view of sales performance, allowing stakeholders to explore key metrics such as revenue trends, top-performing products, and seasonal variations. Advanced DAX functions were utilized to create dynamic visualizations, enabling drill-down capabilities by product categories, regions, and time periods. The dashboard also includes predictive forecasting to assist in inventory planning and marketing strategies. Through intuitive visuals and a user-friendly interface, Toy Fiesta can now gain real-time insights into their business and make informed decisions that drive growth.",
   image: "/images/Toy_Fiesta.png?height=400&width=600",
    screenshots: ["/images/Toy_Fiesta.png"],
    tags: ["Power BI", "DAX", "Data Modeling", "Sales Analytics"],
    demoLink: "#",
    githubLink: "#",
    category: "data",
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  const openModal = (project: any) => setSelectedProject(project)
  const closeModal = () => setSelectedProject(null)

  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            💼 Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of web development and data analysis projects
            that deliver both beautiful user experiences and actionable
            insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "./placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant="secondary"
                        className="font-normal bg-white/80 backdrop-blur-sm"
                      >
                        {project.category === "web"
                          ? "Web Development"
                          : "Data Analysis"}
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
                  <CardFooter className="flex justify-between flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubLink}>
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                    <Button size="sm" onClick={() => openModal(project)}>
                      View More
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" onClick={() => setShowAll(!showAll)}>
            {showAll ? "View Less Projects" : "View More Projects"}
          </Button>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Dialog open={true} onOpenChange={closeModal}>
          <DialogContent className="max-w-5xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
            </DialogHeader>
            <p className="mb-4 text-muted-foreground">
              {selectedProject.fullDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedProject.screenshots.map((src: string, index: number) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  width={400}
                  height={250}
                  className="rounded-lg object-cover border"
                />
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
