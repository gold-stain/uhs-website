"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const organizers = [
    {
      name: "Mr. Mash Phurutsi",
      role: "Founder & Director",
      email: "mash@uhs.co.za",
      phone: "+27 123 456 789",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Dr. Tech Leader",
      role: "Technical Director",
      email: "tech@uhs.co.za",
      phone: "+27 987 654 321",
      image: "/images/nkuna.jpg",
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
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 bg-clip-text text-transparent mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to join the innovation revolution? Get in touch with our team
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                  <MessageSquare className="w-8 h-8 text-blue-500" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative">
                  <motion.label
                    animate={{
                      y: focusedField === "name" || formData.name ? -25 : 0,
                      scale: focusedField === "name" || formData.name ? 0.85 : 1,
                      color: focusedField === "name" ? "#3B82F6" : "#6B7280",
                    }}
                    className="absolute left-3 top-3 pointer-events-none transition-all duration-200 origin-left"
                  >
                    Your Name
                  </motion.label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                    className={`pt-6 pb-2 transition-all duration-300 ${
                      focusedField === "name" ? "ring-2 ring-blue-500 shadow-lg" : ""
                    }`}
                  />
                  <User className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                </div>

                <div className="relative">
                  <motion.label
                    animate={{
                      y: focusedField === "email" || formData.email ? -25 : 0,
                      scale: focusedField === "email" || formData.email ? 0.85 : 1,
                      color: focusedField === "email" ? "#3B82F6" : "#6B7280",
                    }}
                    className="absolute left-3 top-3 pointer-events-none transition-all duration-200 origin-left"
                  >
                    Email Address
                  </motion.label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    className={`pt-6 pb-2 transition-all duration-300 ${
                      focusedField === "email" ? "ring-2 ring-blue-500 shadow-lg" : ""
                    }`}
                  />
                  <Mail className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                </div>

                <div className="relative">
                  <motion.label
                    animate={{
                      y: focusedField === "subject" || formData.subject ? -25 : 0,
                      scale: focusedField === "subject" || formData.subject ? 0.85 : 1,
                      color: focusedField === "subject" ? "#3B82F6" : "#6B7280",
                    }}
                    className="absolute left-3 top-3 pointer-events-none transition-all duration-200 origin-left"
                  >
                    Subject
                  </motion.label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField("")}
                    className={`pt-6 pb-2 transition-all duration-300 ${
                      focusedField === "subject" ? "ring-2 ring-blue-500 shadow-lg" : ""
                    }`}
                  />
                </div>

                <div className="relative">
                  <motion.label
                    animate={{
                      y: focusedField === "message" || formData.message ? -25 : 0,
                      scale: focusedField === "message" || formData.message ? 0.85 : 1,
                      color: focusedField === "message" ? "#3B82F6" : "#6B7280",
                    }}
                    className="absolute left-3 top-3 pointer-events-none transition-all duration-200 origin-left z-10"
                  >
                    Your Message
                  </motion.label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField("")}
                    rows={6}
                    className={`pt-6 pb-2 resize-none transition-all duration-300 ${
                      focusedField === "message" ? "ring-2 ring-blue-500 shadow-lg" : ""
                    }`}
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-yellow-50 to-red-50">
                  <Mail className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@uhs.co.za</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-red-50 to-blue-50">
                  <Phone className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+27 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-yellow-50">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">Universities across South Africa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Organizers */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Key Organizers</h3>
              {organizers.map((organizer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="perspective-1000"
                >
                  <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <Image
                            src={organizer.image || "/placeholder.svg"}
                            alt={organizer.name}
                            width={80}
                            height={80}
                            className="rounded-full object-cover"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/20 to-blue-500/20"></div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-800">{organizer.name}</h4>
                          <p className="text-gray-600 mb-2">{organizer.role}</p>
                          <div className="space-y-1">
                            <p className="text-sm text-gray-500 flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              {organizer.email}
                            </p>
                            <p className="text-sm text-gray-500 flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              {organizer.phone}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
