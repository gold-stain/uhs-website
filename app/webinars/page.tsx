"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User, Video, Bell } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function WebinarsPage() {
  const webinars = [
    {
      title: "TVH Launch and Serverless Dev",
      subtitle: "Worker's Month",
      date: "15 May 2025",
      presenter: "TBC",
      status: "upcoming",
      description: "Launch event for Tshwane Varsity Hackathon with insights into serverless development technologies.",
    },
    {
      title: "Design Thinking and Agile Scrum",
      subtitle: "Youth Month",
      date: "26 June 2025",
      presenter: "Joanne Parold, Dr Vuyiwe Marambane, Dr Shasha Modingwane",
      status: "upcoming",
      description: "Learn modern design thinking methodologies and agile development practices.",
    },
    {
      title: "IP Awareness and Presentation Skills",
      subtitle: "Mandela 67 mins Month",
      date: "23 July 2025",
      presenter: "Wynand Fourie, Thapelo Montong",
      status: "upcoming",
      description: "Understanding intellectual property rights and developing effective presentation skills.",
    },
    {
      title: "GirlsInTech",
      subtitle: "Women's Month",
      date: "13 August 2025",
      presenter: "TBC",
      status: "upcoming",
      description: "Empowering women in technology with specialized workshops and networking opportunities.",
    },
    {
      title: "African Indigenous Innovation",
      subtitle: "Heritage Month - Incubation Hacker Confirmation",
      date: "10 September 2025",
      presenter: "Prof Mammo Mochi",
      status: "upcoming",
      description: "Exploring indigenous innovation and incubation opportunities in African technology.",
    },
    {
      title: "MAISH Webinars (AI)",
      subtitle: "Artificial Intelligence Focus",
      date: "14-18 July 2025",
      presenter: "TBC",
      status: "upcoming",
      description: "Week-long series focusing on artificial intelligence and machine learning applications.",
    },
    {
      title: "LVH Launch",
      subtitle: "Limpopo Varsity Hackathon",
      date: "TBC per Hackathon",
      presenter: "TBC",
      status: "planning",
      description: "Official launch event for the Limpopo Varsity Hackathon series.",
    },
    {
      title: "MAISH Launch",
      subtitle: "Mamelodi AI & Software Hackathon",
      date: "TBC per Hackathon",
      presenter: "TBC",
      status: "planning",
      description: "Launch event for the Mamelodi AI & Software Hackathon.",
    },
    {
      title: "LVH Webinars",
      subtitle: "Limpopo Series",
      date: "TBC",
      presenter: "TBC",
      status: "planning",
      description: "Educational webinar series for Limpopo Varsity Hackathon participants.",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-red-100 text-red-800"
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      case "planning":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "live":
        return <Video className="w-4 h-4" />
      case "upcoming":
        return <Calendar className="w-4 h-4" />
      case "planning":
        return <Clock className="w-4 h-4" />
      default:
        return <Bell className="w-4 h-4" />
    }
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
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold mb-6 text-gray-800">Upcoming Webinars</h1>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our educational webinar series featuring industry experts and thought leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-10 px-4 mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <Badge className={`${getStatusColor(webinar.status)} font-medium flex items-center gap-1`}>
                        {getStatusIcon(webinar.status)}
                        {webinar.status.charAt(0).toUpperCase() + webinar.status.slice(1)}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 mb-2">{webinar.title}</CardTitle>
                    <p className="text-blue-600 font-medium text-sm">{webinar.subtitle}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm">{webinar.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        {webinar.presenter}
                      </div>
                    </div>

                    {webinar.status === "live" && (
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        <Video className="w-4 h-4 mr-2" />
                        Join Live
                      </Button>
                    )}

                    {webinar.status === "upcoming" && (
                      <Button
                        variant="outline"
                        className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                      >
                        <Bell className="w-4 h-4 mr-2" />
                        Set Reminder
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How to Join Our Webinars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to participate in our educational sessions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Register",
                description: "Sign up for the webinar through our registration link or contact form",
                icon: "📝",
              },
              {
                step: "2",
                title: "Get Notified",
                description: "Receive email reminders and joining instructions before the event",
                icon: "📧",
              },
              {
                step: "3",
                title: "Join Live",
                description: "Click the meeting link at the scheduled time to participate",
                icon: "🎥",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Step {item.step}: {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
