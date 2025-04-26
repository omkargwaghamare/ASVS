"use client"

import Image from "next/image"
import { useState } from "react"
import { MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const alumniData = [
  { name: "Mahesh Gurunath", year: 2019, major: "Computer Science and Engineering", location: "Belgaum", image: "1.JPG" },
  { name: "Omkar Waghamare", year: 2019, major: "Computer Science and Engineering", location: "Mangalore", image: "2.JPG" },
  { name: "Rahul Shinde", year: 2019, major: "Bachelors of Pharmacy", location: "Belgaum", image: "3.JPG" },
  { name: "Somanath shirole", year: 2019, major: "B.A , LLB", location: "Belgaum", image: "4.JPG" },
  { name: "Abhishek Pakale", year: 2019, major: "bachelore of Science", location: "Belgaum", image: "5.JPG" },
  { name: "Sanket Mali", year: 2019, major: "Bachelore of Arts", location: "Chikodi", image: "6.JPG" },
  { name: "Adarsh Sanadi", year: 2019, major: "BAMS", location: "Belgaum", image: "7.JPG" },
  { name: "Rohit Ranadevi", year: 2019, major: "Merchant navy", location: "Mumbai", image: "8.JPG" },
  { name: "Vishal Waghamare", year: 2019, major: "Computer Science and Engineering", location: "Bangalore", image: "9.JPG" },
  { name: "Prashant Gurunath", year: 2019, major: "ITI Fitter", location: "Chikodi", image: "10.JPG" },
  { name: "Akash Kore", year: 2019, major: "ITI Elecrician", location: "Chikodi", image: "11.JPG" },
  { name: "Santosh Gurunath", year: 2019, major: "ITI Elecrician", location: "Chikodi", image: "12.JPG" },
  { name: "Navanath Shirole", year: 2019, major: "Hotel Management", location: "Bangalore", image: "13.JPG" },
  { name: "Dnyneshwar Surayvanshi", year: 2019, major: "Bachelore of Commerce", location: "Pune", image: "14.JPG" },
  { name: "Sourabh Pawar", year: 2019, major: "Elecronics and Communication Engineerng", location: "Bangalore", image: "15.JPG" },
  { name: "Amol Patil", year: 2019, major: "Bachelore of Pharmacy", location: "Belgaum", image: "16.JPG" },
  { name: "Rohit Mali", year: 2019, major: "Mali Collection", location: "Kadapur", image: "17.JPG" },
  { name: "Nagesh Kagawade", year: 2019, major: "Bachelore of Science", location: "Chikodi", image: "18.JPG" },
  { name: "Mustak Mulla", year: 2019, major: "Bachelore of Arts", location: "chikodi", image: "19.JPG" },
  { name: "Next Your Name", year: 2019, major: "Arts & Humanities", location: "Karnataka", image: "20.JPG" }
]

export default function AlumniPage() {
  const [visibleCards, setVisibleCards] = useState(8)

  const loadMore = () => {
    setVisibleCards((prev) => Math.min(prev + 4, alumniData.length))
  }

  return (
    <>
      {/* Header */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-500 to-blue-600 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="inline-block animate-bounce-slow bg-white text-blue-600 font-medium px-3 py-1 rounded-full text-sm mb-2">
              Connect
            </span>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md animate-fadeIn">
              Alumni Directory
            </h1>
            <p className="mx-auto max-w-[700px] text-blue-50 md:text-xl animate-slideUp">
              Reconnect with your classmates and see where they are now.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-white/10 animate-blob"></div>
        <div className="absolute top-24 right-24 w-32 h-32 rounded-full bg-white/10 animate-blob animation-delay-2000"></div>
      </section>

      {/* Search and Filter */}
      <section className="w-full py-8 border-b bg-white dark:bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search alumni by name, year, or major..." className="w-full pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="animate-pulse">Graduation Year</Button>
              <Button variant="outline" size="sm">Major</Button>
              <Button variant="outline" size="sm">Location</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Directory */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {alumniData.slice(0, visibleCards).map((alumni, i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white to-blue-50 dark:from-slate-950 dark:to-slate-900"
              >
                <div className="aspect-square relative">
                  <Image
                    src={`/alumni/${alumni.image}`}
                    alt={alumni.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="font-medium">View Profile</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 relative overflow-hidden group">
                  <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                    {alumni.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">Class of {alumni.year}</p>
                  <p className="text-sm">{alumni.major}</p>
                  <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{alumni.location}</span>
                  </div>
                  <div className="absolute -right-12 -bottom-12 w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {visibleCards < alumniData.length && (
            <div className="flex justify-center mt-12">
              <Button onClick={loadMore} className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                Load More Alumni
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Join Directory */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Not in our directory yet?
              </h2>
              <p className="text-muted-foreground">
                Join our alumni network today to connect with old friends, stay updated on events, and access exclusive alumni benefits.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Join Now
              </Button>
            </div>
            <div className="md:w-1/2 relative">
              <Image
                src="/alumni/join.jpg" 
                width={600}
                height={400}
                alt="Alumni gathering"
                className="rounded-lg shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-blue-200 dark:bg-blue-900/20 z-0 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
