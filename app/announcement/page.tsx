"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Bell, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AnnouncementPage() {
  const announcements = [
    {
      title: "UHS 2025 Registration Now Open",
      date: "June 1, 2025",
      category: "Registration",
      content:
        "Registration for the 7th Annual University Hackathon Series is now open! Early bird registration closes on July 15, 2025. Don't miss your chance to participate in South Africa's premier hackathon event.",
      image: "/images/tvh2025.jpg",
      link: "/contact",
    },
    {
      title: "New Challenge Categories Announced",
      date: "May 15, 2025",
      category: "Challenges",
      content:
        "We're excited to announce new challenge categories for UHS 2025, including AI/ML Implementation, Cybersecurity, and Mobile App Innovation. Each category offers substantial prizes for winning teams.",
      image: "/images/tvh-launch.png",
      link: "/challenges",
    },
    {
      title: "TVH Launch Event - May 2025",
      date: "April 30, 2025",
      category: "Events",
      content:
        "Join us for the TVH Launch Event in May 2025 at the Student Centre, Soshanguve South Campus. This pre-hackathon event will feature workshops, networking opportunities, and a preview of this year's challenges.",
      image: "/images/flag.jpg",
      link: "#",
    },
  ]

  const upcomingEvent = {
    title: "7th Annual Tshwane Varsity Hackathon",
    date: "September 21-23, 2025",
    time: "09:00 - 17:00",
    location: "Ga-Rankuwa Campus | New Hall",
    description:
      "The Tshwane University of Technology's Faculty of Information and Communication Technology in partnership with the City of Tshwane invites you to partake in the 7th Annual Tshwane Varsity Hackathon.",
    image: "/images/tvh2025.jpg",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-yellow-50/30">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 bg-clip-text text-transparent mb-6">
              Announcements
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news and events from the University Hackathon Series
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-10 px-4 mb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Event</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="overflow-hidden border-0 shadow-xl bg-white">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={upcomingEvent.image || "/placeholder.svg"}
                    alt={upcomingEvent.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <Badge className="bg-blue-100 text-blue-800 mb-4">Upcoming Event</Badge>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{upcomingEvent.title}</h3>
                  <p className="text-gray-600 mb-6">{upcomingEvent.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                      <span>{upcomingEvent.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 mr-3 text-red-500" />
                      <span>{upcomingEvent.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-3 text-yellow-500" />
                      <span>{upcomingEvent.location}</span>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white">
                      Register Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Announcements List */}
      <section className="py-10 px-4 mb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest Announcements</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {announcements.map((announcement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full">
                  <div className="relative h-48">
                    <Image
                      src={announcement.image || "/placeholder.svg"}
                      alt={announcement.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-blue-600 text-white">{announcement.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pt-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {announcement.date}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{announcement.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{announcement.content}</p>
                    <a
                      href={announcement.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read more <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 via-red-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Bell className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Stay Updated</h2>
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to our newsletter to receive the latest announcements, event updates, and hackathon news
                directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
