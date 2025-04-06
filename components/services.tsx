import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart2, Code, Database, Globe, Layout, PieChart, Smartphone, TrendingUp } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const webServices = [
  {
    id: 1,
    title: "Web Development",
    description: "Creating responsive, fast, and user-friendly websites using modern technologies.",
    icon: <Globe className="h-10 w-10 text-primary" />,
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building beautiful user interfaces with React, Next.js, and modern CSS frameworks.",
    icon: <Layout className="h-10 w-10 text-primary" />,
  },
  {
    id: 3,
    title: "Custom Web Applications",
    description: "Building tailored web applications to meet your specific business needs.",
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications using React Native.",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
  },
]

const dataServices = [
  {
    id: 5,
    title: "Power BI Dashboard Development",
    description:
      "Custom Power BI dashboards with interactive visualizations, drill-down capabilities, and real-time data connections.",
    icon: <BarChart2 className="h-10 w-10 text-primary" />,
  },
  {
    id: 6,
    title: "Data Analysis & Insights",
    description:
      "Comprehensive data analysis to uncover patterns, trends, and actionable insights that drive business decisions.",
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
  },
  {
    id: 7,
    title: "Data Modeling & ETL",
    description: "Robust data models and ETL processes to transform raw data into structured, analysis-ready datasets.",
    icon: <Database className="h-10 w-10 text-primary" />,
  },
  {
    id: 4,
    title: "Data Visualization",
    description: "Clear, compelling visualizations that communicate complex data insights in an accessible format.",
    icon: <PieChart className="h-10 w-10 text-primary" />,
  },
]

export function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            🛠️ Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I provide a range of services spanning web development and data analysis to help businesses establish a
            strong online presence and make data-driven decisions.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="data">Data Analysis</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...webServices, ...dataServices].map((service) => (
                <Card key={service.id} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>{/* Additional content could go here */}</CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {webServices.map((service) => (
                <Card key={service.id} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>{/* Additional content could go here */}</CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="data">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dataServices.map((service) => (
                <Card key={service.id} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>{/* Additional content could go here */}</CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

