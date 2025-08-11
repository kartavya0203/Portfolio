"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Code, Database } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Web Developer. Data Analyst. Power BI Expert."

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Bridging <span className="text-primary">Code</span> & <span className="text-primary">Data</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 h-8">
              {typedText}
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              I create beautiful, functional websites and powerful data visualizations that help businesses grow and
              make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex items-center mt-8 space-x-6">
              <div className="flex items-center">
                <Code className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm">Web Development</span>
              </div>
              <div className="flex items-center">
                <BarChart2 className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm">Power BI</span>
              </div>
              <div className="flex items-center">
                <Database className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm">Data Analysis</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-80 md:h-96">
              <Image
                src="./images/Kartavya.jpg"
                alt="Hero Image"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

