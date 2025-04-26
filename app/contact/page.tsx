import Image from "next/image"
import { Calendar, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-500 to-indigo-600 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="inline-block animate-bounce-slow bg-white text-purple-600 font-medium px-3 py-1 rounded-full text-sm mb-2">
              Connect
            </span>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md animate-fadeIn">
              Stay Connected
            </h1>
            <p className="mx-auto max-w-[700px] text-purple-50 md:text-xl animate-slideUp">
              Join our alumni network and stay updated on upcoming reunions and events.
            </p>
          </div>
        </div>

        {/* Animated elements */}
        <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-white/10 animate-blob"></div>
        <div className="absolute top-16 right-16 w-24 h-24 rounded-full bg-white/10 animate-blob animation-delay-2000"></div>
      </section>

      {/* Contact & Reunion */}
      <section className="w-full py-12 md:py-24 relative">
        <div className="container px-4 md:px-6">
          {/* Background animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-100 dark:bg-purple-900/10 blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-100 dark:bg-indigo-900/10 blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground">
                  Have questions or want to get involved? Reach out to our alumni association.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 group hover:text-purple-600 transition-colors duration-200">
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-purple-600 transition-colors duration-200" />
                  <a href="mailto:alumni@college.edu" className="group-hover:underline">
                    alumni@college.edu
                  </a>
                </div>
                <div className="flex items-center gap-2 group hover:text-purple-600 transition-colors duration-200">
                  <MapPin className="h-5 w-5 text-muted-foreground group-hover:text-purple-600 transition-colors duration-200" />
                  <span>ASVS Kadapur</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:text-purple-600 hover:border-purple-600 transition-colors duration-200"
                >
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:text-purple-600 hover:border-purple-600 transition-colors duration-200"
                >
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:text-purple-600 hover:border-purple-600 transition-colors duration-200"
                >
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:text-purple-600 hover:border-purple-600 transition-colors duration-200"
                >
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
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Input placeholder="Name" className="hover:border-purple-500 focus:border-purple-500" />
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="Email"
                        type="email"
                        className="hover:border-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Subject" className="hover:border-purple-500 focus:border-purple-500" />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Message"
                      className="min-h-[120px] hover:border-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    Send Message
                  </Button>
                </form>
              </div>
            <div className="text-center text-sm text-muted-foreground mt-12">
              Developed by <span className="font-semibold text-purple-600">Mahesh and Omkar</span>
            </div>
            </div>

            <div className="space-y-6">
              <div id="reunion" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Reunion Coming Soon.....
                  </h3>
                  <p className="text-muted-foreground">Mark your calendars for our next big reunion event!</p>
                </div>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none bg-gradient-to-tr from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white animate-pulse">
                        <Calendar className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">Reunion Coming Soon....</h4>
                        {/* <p className="text-sm text-muted-foreground">June 15, 2025 • 6:00 PM</p> */}
                        {/* <p className="text-sm">ASVS</p> */}
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                        Get ready.......
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-8">
                  <Image
                    src="/memories/reunion.jpg"
                    width={500}
                    height={300}
                    alt="Campus map"
                    className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
                  />
                </div>
              </div>

              <div className="space-y-2 mt-8">
                <h3 className="text-xl font-bold">Join Our Newsletter</h3>
                <p className="text-sm text-muted-foreground">Stay updated with alumni news and upcoming events.</p>
                <div className="flex gap-2">
                  <Input
                    placeholder="Your email address"
                    className="flex-1 hover:border-purple-500 focus:border-purple-500"
                  />
                  <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    Subscribe
                  </Button>
                </div>
              </div>

              <Card className="mt-8 overflow-hidden border-none bg-gradient-to-bl from-purple-100 to-indigo-100 dark:from-purple-950/20 dark:to-indigo-950/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg">Alumni Support Fund</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Support future generations of students by contributing to our alumni scholarship fund.
                  </p>
                  <Button className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-purple-100 to-indigo-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Visit Our Campus
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              The alumni office is always open to visitors. Stop by and say hello when you're in town!
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-lg shadow-xl">
            <div className="relative h-[400px] w-full">
              <Image
                src="/memories/school.jpg"
                fill
                alt="Campus map"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/40 to-transparent">
                <div className="absolute bottom-4 left-4 bg-white dark:bg-slate-900 p-4 rounded-lg shadow-lg">
                  <h3 className="font-semibold">ASVS Kadapurr</h3>
                  <p className="text-sm text-muted-foreground">Visit ASVS Kadapur</p>
                  <Button variant="link" className="p-0 h-auto text-purple-600 font-medium mt-1 hover:text-indigo-600">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

