"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Zap,
  Users,
  Trophy,
  Calendar,
  Play,
  Bell,
  ExternalLink,
} from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const router = useRouter()

  const slides = [
    {
      title: "University Hackathon Series",
      subtitle: "Innovation Starts Here",
      description: "Where Innovation Meets Excellence",
      highlight: "Innovate. Compete. Elevate.",
      buttonText: "Start Your Journey",
      buttonLink: "/about",
      image: "/images/uhs-team.jpeg",
    },
    {
      title: "7th Annual Hackathon",
      subtitle: "September 21-23, 2025",
      description: "Three Days of Pure Innovation",
      highlight: "R45,000 in Prizes",
      buttonText: "Register Now",
      buttonLink: "#register",
      image: "/images/carousel1.jpeg",
    },
    {
      title: "Future Tech Leaders",
      subtitle: "Join the Revolution",
      description: "Shape Tomorrow's Technology Today",
      highlight: "500+ Participants Expected",
      buttonText: "View Webinars",
      buttonLink: "/webinars",
      image: "/images/carousel2.jpeg",
    },
  ]

  const hackathons = [
    { name: "TVH - Tshwane Varsity Hackathon", url: "https://tvh.icep.co.za/index.html" },
    {
      name: "MAISH - Mpumalanga Artificial Intelligence Student Hackathon",
      url: "https://maish.icep.co.za/index.html",
    },
    { name: "LVH - Limpopo Varsity Hackathon", url: "https://lah.web.app/" },
  ]

  const winners = [
    {
      year: "2024",
      team: "Team Tracts",
      project: "Booking System",
      description: "Revolutionary booking platform that streamlined university resource management",
      achievement: "Developed an innovative solution that improved efficiency by 300%",
    },
    {
      year: "2025",
      team: "Team Developed",
      project: "Nexis Bank System",
      description: "Next-generation banking solution with advanced security features",
      achievement: "Created a secure, scalable banking platform with AI-powered fraud detection",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleRegisterClick = () => {
    setShowRegisterModal(true)
  }

  // Check if today is a webinar day (for demo purposes, we'll simulate)
  const isWebinarDay = false // This would be dynamic based on actual dates

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Slider */}
        <div className="relative h-screen">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <Image
                src={slide.image || "/placeholder.svg?height=1080&width=1920"}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl">
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold mb-8 shadow-lg"
                    >
                      <Zap className="w-5 h-5 mr-2" />
                      {slide.subtitle}
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-space-grotesk font-bold mb-6 text-white"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-xl md:text-2xl text-white/90 mb-4 font-medium"
                    >
                      {slide.description}
                    </motion.p>

                    {/* Highlight */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-lg md:text-xl text-yellow-400 font-semibold mb-12"
                    >
                      {slide.highlight}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="flex flex-col sm:flex-row gap-6"
                    >
                      {slide.buttonLink === "#register" ? (
                        <Button
                          onClick={handleRegisterClick}
                          size="lg"
                          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                          {slide.buttonText}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      ) : (
                        <Button
                          onClick={() => router.push(slide.buttonLink)}
                          size="lg"
                          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                          {slide.buttonText}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      )}
                      <Button
                        onClick={() => router.push("/gallery")}
                        variant="outline"
                        size="lg"
                        className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        Watch Highlights
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={nextSlide}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-red-600 w-12" : "bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Live Meeting Button - Floating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Button
            asChild
            className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
              isWebinarDay ? "animate-pulse" : ""
            }`}
          >
            <a
              href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWNkYzQ1YjctMTMyMy00ZWJjLTk2ZTUtOTQ1MjE5NTU0ZGUz%40thread.v2/0?context=%7b%22Tid%22%3a%223df74539-9453-4d03-bb9d-b9102cb9ce9c%22%2c%22Oid%22%3a%221b6c3b43-fe35-4636-b64e-919b8fe5a8b9%22%7d"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <span
                className={`inline-block w-3 h-3 bg-red-500 rounded-full mr-2 ${isWebinarDay ? "animate-ping" : "animate-pulse"}`}
              ></span>
              Live • JOIN UHS MEETING
            </a>
          </Button>
        </motion.div>
      </section>

      {/* UHS Hackathon Series Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4 text-gray-800">
              UHS Hackathon Series
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              UHS is the parent organization for multiple hackathon events across South Africa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full text-center">
                  <div className="text-4xl mb-6">🏆</div>
                  <h3 className="text-xl font-space-grotesk font-bold mb-4 text-gray-800">{hackathon.name}</h3>
                  <a
                    href={hackathon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visit Website <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <div className="h-1 w-16 bg-red-600 mt-6 mx-auto group-hover:w-24 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hall of Fame</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Celebrating our championship teams and their groundbreaking solutions
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {winners.map((winner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="shadow-xl border-0 bg-gradient-to-r from-white via-blue-50/50 to-yellow-50/50 hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-2xl p-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="flex-shrink-0">
                        <motion.div
                          animate={{
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                          className="bg-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold shadow-lg"
                        >
                          {winner.year}
                        </motion.div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{winner.team}</h3>
                        <h4 className="text-xl font-semibold text-blue-600 mb-3">{winner.project}</h4>
                        <p className="text-gray-700 mb-3 leading-relaxed">{winner.description}</p>
                        <div className="flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-yellow-500" />
                          <span className="text-sm font-medium text-gray-600">{winner.achievement}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Highlight Section */}
      <section className="py-16 bg-blue-600 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <Bell className="h-8 w-8 mr-3 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold">Latest News & Events</h2>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Stay updated with the latest hackathon announcements, registration deadlines, and event highlights
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Event Poster */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/tvh2025.jpg"
                  alt="7th Annual Tshwane Varsity Hackathon 2025"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">7th Annual TVH</h3>
                    <p className="text-sm text-gray-600">September 21-23, 2025</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-yellow-400 font-bold mb-2 flex items-center">
                  <span className="text-2xl mr-2">🚀</span>
                  Registration Open
                </div>
                <h3 className="text-xl font-bold mb-2">UHS 2025 Registration</h3>
                <p className="text-white/80 text-sm mb-4">
                  Early bird registration now open! Secure your spot for the 7th Annual Hackathon. Limited spaces
                  available.
                </p>
                <Button
                  onClick={handleRegisterClick}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                >
                  Register Now
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-yellow-400 font-bold mb-2 flex items-center">
                  <span className="text-2xl mr-2">📅</span>
                  Save the Date
                </div>
                <h3 className="text-xl font-bold mb-2">September 21-23, 2025</h3>
                <p className="text-white/80 text-sm mb-4">
                  Three days of innovation at Ga-Rankuwa Campus. Mark your calendars for South Africa's premier
                  university hackathon!
                </p>
                <div className="flex items-center text-white/70 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Ga-Rankuwa Campus | New Hall</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => router.push("/announcement")}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View All News
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4 text-gray-800">UHS by the Numbers</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "7+", label: "Years Running", icon: Calendar, color: "bg-blue-600" },
              { number: "500+", label: "Participants", icon: Users, color: "bg-red-600" },
              { number: "R45K", label: "Total Prizes", icon: Trophy, color: "bg-yellow-600" },
              { number: "15+", label: "Partner Companies", icon: Zap, color: "bg-blue-600" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.color} text-white mb-4 group-hover:shadow-lg transition-all duration-300`}
                >
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-space-grotesk font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4 text-gray-800">Why Choose UHS?</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of university hackathons with cutting-edge challenges and unparalleled opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation Hub",
                description:
                  "Access to cutting-edge technologies, AI tools, and cloud platforms to bring your ideas to life",
                icon: "🚀",
                color: "bg-blue-600",
              },
              {
                title: "Industry Mentorship",
                description:
                  "Learn from tech leaders and industry experts who will guide you throughout the competition",
                icon: "👥",
                color: "bg-red-600",
              },
              {
                title: "Career Opportunities",
                description: "Connect with top companies and unlock internship and job opportunities in tech",
                icon: "💼",
                color: "bg-yellow-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-space-grotesk font-bold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  <div className={`h-1 w-16 ${feature.color} mt-6 group-hover:w-24 transition-all duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4 text-gray-800">
            Official <span className="text-red-600">Partners</span>
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly supported by leading technology companies and academic institutions across South Africa
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of partners */}
            {[
              { src: "/images/tut-logo.png", alt: "Tshwane University of Technology" },
              { src: "/images/tshwane-logo.jpg", alt: "City of Tshwane" },
              { src: "/images/nelekat.png", alt: "Nelekat" },
              { src: "/images/sefako.png", alt: "Sefako University" },
              { src: "/images/think-tank.png", alt: "Think Tank" },
              { src: "/images/aws.png", alt: "AWS" },
              { src: "/images/faethm.png", alt: "Faethm" },
            ].map((partner, index) => (
              <motion.div
                key={`first-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 mx-4"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-[180px] h-[120px] flex items-center justify-center group">
                  <Image
                    src={partner.src || "/placeholder.svg"}
                    alt={partner.alt}
                    width={120}
                    height={80}
                    className="grayscale group-hover:grayscale-0 transition-all duration-300 object-contain max-h-[80px]"
                  />
                </div>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              { src: "/images/tut-logo.png", alt: "Tshwane University of Technology" },
              { src: "/images/tshwane-logo.jpg", alt: "City of Tshwane" },
              { src: "/images/nelekat.png", alt: "Nelekat" },
              { src: "/images/sefako.png", alt: "Sefako University" },
              { src: "/images/think-tank.png", alt: "Think Tank" },
              { src: "/images/aws.png", alt: "AWS" },
              { src: "/images/faethm.png", alt: "Faethm" },
            ].map((partner, index) => (
              <motion.div
                key={`second-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 mx-4"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-[180px] h-[120px] flex items-center justify-center group">
                  <Image
                    src={partner.src || "/placeholder.svg"}
                    alt={partner.alt}
                    width={120}
                    height={80}
                    className="grayscale group-hover:grayscale-0 transition-all duration-300 object-contain max-h-[80px]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join South Africa's most innovative university hackathon and transform your ideas into reality
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                onClick={handleRegisterClick}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => router.push("/webinars")}
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
              >
                View Webinars
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Modal */}
      {showRegisterModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowRegisterModal(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose Your Hackathon</h3>
            <div className="space-y-4">
              {hackathons.map((hackathon, index) => (
                <a
                  key={index}
                  href={hackathon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-4 text-left bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors duration-300 border border-gray-200 hover:border-blue-300"
                >
                  <div className="font-semibold text-gray-800">{hackathon.name}</div>
                </a>
              ))}
            </div>
            <Button onClick={() => setShowRegisterModal(false)} variant="outline" className="w-full mt-6">
              Cancel
            </Button>
          </motion.div>
        </motion.div>
      )}
    </main>
  )
}
