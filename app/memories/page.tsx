"use client"


import Image from "next/image"
import { useRouter } from "next/navigation"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MemoriesPage() {
  const router = useRouter()
  const memories = [
    {
      year: "2019",
      title: "Farewell Party 2019",
      side: "left",
      images: ["/memories/2019_1.jpg", "/memories/2019_2.jpg", "/memories/2019_3.jpg"],
      description: "Our journey Ended with the wonderfull party Hosted in ASVS Campus Kadapur.",
    },
    {
      year: "2020",
      title: "Meetups After the SSLC.",
      side: "right",
      images: ["/memories/2020_1.jpg", "/memories/2020_2.jpg", "/memories/2020_3.jpg"],
      description: "It feels different vibe when we meet again with the some mindset with those old gossips.",
    },
    {
      year: "2021",
      title: "Birthaday Celibrations",
      side: "left",
      images: ["/memories/2021_1.jpg", "/memories/2021_2.jpg", "/memories/2021_3.jpg"],
      description: "Those old Birthady Celibrations still Gives the Same spike in the Heart Rate.",
    },
    {
      year: "2022",
      title: "Dhaba plans",
      side: "right",
      images: ["/memories/2022_1.jpg", "/memories/2022_2.jpg", "/memories/2022_3.jpg"],
      description: "Those Dhaba Plans at Night 8 o clock with 4 peoples on a single bike.",
    },
    {
      year: "2023",
      title: "Suddan Planned Trips",
      side: "left",
      images: ["/memories/2023_1.jpg", "/memories/2023_2.jpg", "/memories/2023_3.jpg"],
      description: "Suddan Planned trips with full of enjoyments..",
    },
      {
      year: "2024",
      title: "Party At Prashant's Home",
      side: "right",
      images: ["/memories/2024_1.jpg", "/memories/2024_2.jpg", "/memories/2024_3.jpg"],
      description: "Those parties we did at prashant's Home and roasting each others with the fathers name never ends..",
    },
        {
      year: "2025",
      title: "First ASVS Official Trip",
      side: "left",
      images: ["/memories/2025_1.jpg", "/memories/2025_2.jpg", "/memories/2025_3.jpg"],
      description: "First Official Trip Hosted by ASVS Boys After 5 years of SSLC .",
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-amber-500 to-orange-600 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="inline-block animate-bounce-slow bg-white text-amber-600 font-medium px-3 py-1 rounded-full text-sm mb-2">
              Remember
            </span>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md animate-fadeIn">
              Memories Through The Years
            </h1>
            <p className="mx-auto max-w-[700px] text-amber-50 md:text-xl animate-slideUp">
              Relive the special moments that shaped our college experience.
            </p>
          </div>
        </div>

        {/* Animated elements */}
        <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-white/10 animate-blob"></div>
        <div className="absolute top-16 right-16 w-24 h-24 rounded-full bg-white/10 animate-blob animation-delay-2000"></div>
      </section>

      {/* Memories Timeline */}
      <section className="w-full py-12 md:py-24 relative">
        <div className="container px-4 md:px-6">
          {/* Background animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-100 dark:bg-amber-900/10 blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-orange-100 dark:bg-orange-900/10 blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
          </div>

          {/* Timeline */}
          <div className="relative mt-12">
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-amber-500 to-orange-600"></div>

            {memories.map((memory, index) => (
              <div
                key={index}
                className={`relative mb-12 ${memory.side === "left" ? "md:ml-0 md:mr-[50%]" : "md:ml-[50%] md:mr-0"} md:w-[45%] animate-fadeInSlide opacity-0`}
                style={{ animationDelay: `${index * 200}ms`, animationFillMode: "forwards" }}
              >
                <div className="absolute top-5 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 md:top-5 md:-translate-y-1/2 md:-mr-12 z-10 h-6 w-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg animate-pulse"></div>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-200/10 dark:hover:shadow-amber-900/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-amber-500" />
                      <span className="text-sm font-medium text-amber-500">{memory.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{memory.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {memory.description}
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {memory.images.map((imgSrc, imgIndex) => (
                        <div key={imgIndex} className="overflow-hidden rounded-md">
                          <Image
                            src={imgSrc}
                            width={120}
                            height={80}
                            alt={`Memory ${memory.year}`}
                            className="rounded-md object-cover transition-transform hover:scale-110 duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
              onClick={() => router.push("/gallery")}>
                  See our Image gallary
            </Button>
          </div>
        </div>
      </section>

      {/* Memory Submission */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-amber-100 to-orange-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Have a memory to share?
              </h2>
              <p className="text-muted-foreground">
                We'd love to hear about your favorite college memories. Share your stories and photos with the alumni community.
              </p>
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                Submit Your Memory
              </Button>
            </div>
            <div className="md:w-1/2 relative">
              <Image
                src="/memories/2025_1.jpg"
                width={600}
                height={400}
                alt="College memories"
                className="rounded-lg shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-amber-200 dark:bg-amber-900/20 z-0 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
