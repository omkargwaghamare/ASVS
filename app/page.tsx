import Link from "next/link"
import { Calendar, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-primary overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-primary/80"></div>
        </div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 animate-fadeIn">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-md">
                Reuniting Class of 2019
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl drop-shadow-md">
                Celebrating the memories, friendships, and achievements of our amazing alumni community.
              </p>
            </div>
            <div className="space-x-4 animate-slideUp">
              <Button className="bg-white text-primary hover:bg-white/90">Join Directory</Button>
              <Button variant="outline" className="border-white text-primary hover hover:bg-white/20">
                Upcoming Reunions
              </Button>
            </div>
          </div>
        </div>

        {/* Animated circles */}
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-white/10 animate-blob"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-white/10 animate-blob animation-delay-2000"></div>
      </section>

      {/* Feature Sections */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Alumni Card */}
            <Link href="/alumni" className="group">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-1 transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-white dark:bg-slate-950 p-6 rounded-lg h-full">
                  <div className="mb-4 text-blue-500 flex justify-between items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold">Alumni Directory</h3>
                  <p className="mt-2 text-muted-foreground">
                    Reconnect with your classmates and see where they are now.
                  </p>
                </div>
              </div>
            </Link>

            {/* Memories Card */}
            <Link href="/memories" className="group">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 p-1 transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-white dark:bg-slate-950 p-6 rounded-lg h-full">
                  <div className="mb-4 text-amber-500 flex justify-between items-center">
                    <Calendar className="h-10 w-10" />
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold">Memories</h3>
                  <p className="mt-2 text-muted-foreground">
                    Relive the special moments that shaped our college experience.
                  </p>
                </div>
              </div>
            </Link>

            {/* Teachers Card */}
            <Link href="/teachers" className="group">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 p-1 transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-white dark:bg-slate-950 p-6 rounded-lg h-full">
                  <div className="mb-4 text-green-500 flex justify-between items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10"
                    >
                      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                      <path d="M12 13v8"></path>
                      <path d="M5 13v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"></path>
                    </svg>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold">Teachers</h3>
                  <p className="mt-2 text-muted-foreground">Honoring the educators who guided and inspired us.</p>
                </div>
              </div>
            </Link>

            {/* Gallery Card */}
            <Link href="/gallery" className="group">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 p-1 transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-white dark:bg-slate-950 p-6 rounded-lg h-full">
                  <div className="mb-4 text-pink-500 flex justify-between items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10"
                    >
                      <path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                      <rect width="10" height="10" x="11" y="3" rx="2"></rect>
                    </svg>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold">Photo Gallery</h3>
                  <p className="mt-2 text-muted-foreground">
                    Browse through our collection of photos from various events.
                  </p>
                </div>
              </div>
            </Link>

            {/* Contact Card */}
            <Link href="/contact" className="group">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 p-1 transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-white dark:bg-slate-950 p-6 rounded-lg h-full">
                  <div className="mb-4 text-purple-500 flex justify-between items-center">
                    <Mail className="h-10 w-10" />
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold">Stay Connected</h3>
                  <p className="mt-2 text-muted-foreground">
                    Join our alumni network and stay updated on upcoming events.
                  </p>
                </div>
              </div>
            </Link>

            {/* Reunion Card */}
            <Link href="/contact#reunion" className="group">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-1 transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-white dark:bg-slate-950 p-6 rounded-lg h-full">
                  <div className="mb-4 text-cyan-500 flex justify-between items-center">
                    <Calendar className="h-10 w-10" />
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold">Upcoming Reunion</h3>
                  <p className="mt-2 text-muted-foreground">Mark your calendars for our next big reunion event!</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Join Our Alumni Community
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Sign up now to receive updates on upcoming events, reunions, and alumni news.
              </p>
            </div>
            <Button className="animate-pulse bg-gradient-to-r from-primary to-purple-600">Register Now</Button>
          </div>
        </div>
      </section>
    </>
  )
}

