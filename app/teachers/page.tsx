import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TeachersPage() {
  return (
    <>
      {/* Header */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-green-500 to-emerald-600 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="inline-block animate-bounce-slow bg-white text-green-600 font-medium px-3 py-1 rounded-full text-sm mb-2">
              Honor
            </span>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md animate-fadeIn">
              Our Beloved Teachers
            </h1>
            <p className="mx-auto max-w-[700px] text-green-50 md:text-xl animate-slideUp">
              Honoring the educators who guided and inspired us through our academic journey.
            </p>
          </div>
        </div>

        {/* Animated elements */}
        <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-white/10 animate-blob"></div>
        <div className="absolute top-16 right-16 w-24 h-24 rounded-full bg-white/10 animate-blob animation-delay-2000"></div>
      </section>

      {/* Teachers Directory */}
      <section className="w-full py-12 md:py-24 relative">
        <div className="container px-4 md:px-6">
          {/* Background animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-green-100 dark:bg-green-900/10 blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-emerald-100 dark:bg-emerald-900/10 blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-white to-green-50 dark:from-slate-950 dark:to-slate-900 opacity-0 animate-fadeIn"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="aspect-square relative">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Teacher+${i + 1}`}
                    alt={`Teacher ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="font-medium">View Profile</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 relative overflow-hidden group">
                  <h3 className="font-semibold text-lg group-hover:text-green-600 transition-colors">
                    {i % 2 === 0 ? "Prof. Jane Smith" : "Dr. John Davis"} {i + 1}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {i % 4 === 0 && "Mathematics Department"}
                    {i % 4 === 1 && "Science Department"}
                    {i % 4 === 2 && "Literature Department"}
                    {i % 4 === 3 && "History Department"}
                  </p>
                  <p className="text-sm mt-2 italic">
                    "{i % 3 === 0 && "Always encouraged us to think beyond the textbook."}
                    {i % 3 === 1 && "Inspired a generation of students to pursue their dreams."}
                    {i % 3 === 2 && "Their lessons went far beyond the classroom."}"
                  </p>

                  <div className="absolute -right-12 -bottom-12 w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tribute Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-green-100 to-emerald-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Pay Tribute to Your Mentors
              </h2>
              <p className="text-muted-foreground">
                Share stories about the teachers who made a difference in your life and helped shape who you are today.
              </p>
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                Share Your Story
              </Button>
            </div>
            <div className="md:w-1/2 relative">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Teacher+Tribute"
                width={600}
                height={400}
                alt="Teacher tribute"
                className="rounded-lg shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-green-200 dark:bg-green-900/20 z-0 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

