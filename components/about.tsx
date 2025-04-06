import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const webSkills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "UI/UX Design", level: 70 },
]

const dataSkills = [
  { name: "Power BI", level: 95 },
  { name: "Data Analysis", level: 90 },
  { name: "SQL", level: 85 },
  { name: "Python", level: 80 },
  { name: "DAX & M", level: 85 },
  { name: "Data Visualization", level: 90 },
]

const certifications = [
  "Coursera: AWS Cloud Technical Essentials",
  "IBM: Exploratory Data Analysis for Machine Learning",
  "University of Pennsylvania: Data Structures in Java",
]

export function About() {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            📜 About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn about my background, skills, and what drives me as a developer and data analyst.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              I'm a passionate web developer and data analyst with over 5 years of experience creating digital
              experiences and data-driven solutions. My journey began when I built my first website for a local
              business, and I've been expanding my skills ever since.
            </p>
            <p className="text-muted-foreground mb-6">
              I specialize in building modern, responsive websites and applications using the latest technologies, as
              well as creating insightful Power BI dashboards and data analysis solutions that help businesses make
              informed decisions.
            </p>

            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            <Tabs defaultValue="web" className="w-full mb-6">
              <TabsList className="mb-4">
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="data">Data Analysis</TabsTrigger>
              </TabsList>
              <TabsContent value="web">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {webSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="data">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dataSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            <ul className="list-disc list-inside mb-6 text-muted-foreground">
              {certifications.map((cert, index) => (
                <li key={index} className="mb-1">
                  {cert}
                </li>
              ))}
            </ul>

            <Button asChild>
              <Link href="#">
                <FileText className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=400" alt="About Me" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

