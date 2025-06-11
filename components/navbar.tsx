"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/webinars", label: "Webinars" },
    { href: "/gallery", label: "Gallery" },
    { href: "/team", label: "Team" },
    { href: "/announcement", label: "News" },
    { href: "/contact", label: "Contact" },
  ]

  const hackathons = [
    { name: "TVH - Tshwane Varsity Hackathon", url: "https://tvh.icep.co.za/index.html" },
    {
      name: "MAISH - Mpumalanga Artificial Intelligence Student Hackathon",
      url: "https://maish.icep.co.za/index.html",
    },
    { name: "LVH - Limpopo Varsity Hackathon", url: "https://lah.web.app/" },
  ]

  const handleRegisterClick = () => {
    setShowRegisterModal(true)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="ml-3">
                <span className="font-space-grotesk font-bold text-2xl bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
                  UHS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  onClick={handleRegisterClick}
                  className="ml-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Register Now
                </Button>
              </motion.div>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-xl bg-blue-600 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-yellow-50 font-medium transition-all duration-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <Button
                    onClick={handleRegisterClick}
                    className="mt-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold"
                  >
                    Register Now
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Registration Modal */}
      <AnimatePresence>
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
      </AnimatePresence>
    </>
  )
}
