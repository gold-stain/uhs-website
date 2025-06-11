"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Twitter, Github } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Mr. Mash Phurutsi",
      role: "Founder & Director",
      image: "/images/mash.png",
      bio: "With a passion for innovation and education, Mr. Phurutsi established UHS in 2018 to bridge the gap between academic learning and real-world problem solving.",
      social: {
        email: "mash@uhs.co.za",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Technical Director",
      role: "Lead Developer",
      image: "/images/nkuna.jpg",
      bio: "Leading technical innovation at UHS, ensuring all hackathon challenges are cutting-edge and industry-relevant.",
      social: {
        email: "tech@uhs.co.za",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Event Coordinator",
      role: "Operations Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Responsible for the seamless execution of all UHS events, from planning to implementation.",
      social: {
        email: "events@uhs.co.za",
        linkedin: "#",
      },
    },
    {
      name: "Marketing Lead",
      role: "Communications Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Manages all outreach and promotional activities, ensuring UHS reaches the right audience.",
      social: {
        email: "marketing@uhs.co.za",
        twitter: "#",
      },
    },
  ]

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
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals behind the University Hackathon Series
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-10 px-4 mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Social Icons */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      {member.social.email && (
                        <a
                          href={`mailto:${member.social.email}`}
                          className="bg-white/90 p-2 rounded-full hover:bg-yellow-500 hover:text-white transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 p-2 rounded-full hover:bg-blue-400 hover:text-white transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 p-2 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 via-red-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Want to Join Our Team?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're always looking for passionate individuals to help us grow the University Hackathon Series. If
                you're interested in contributing to our mission, get in touch!
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Apply to Join
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
