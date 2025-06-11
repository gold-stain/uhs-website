import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 relative overflow-hidden border-t border-gray-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100 to-yellow-100"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-space-grotesk font-bold text-gray-800">UHS</div>
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              South Africa's premier university hackathon series, fostering innovation and technological advancement
              among the next generation of tech leaders.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Stay Updated</h4>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-space-grotesk font-bold text-lg mb-6 text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/webinars", label: "Webinars" },
                { href: "/gallery", label: "Gallery" },
                { href: "/team", label: "Team" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-space-grotesk font-bold text-lg mb-6 text-gray-800">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3 mt-1">
                  <Mail className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Email</div>
                  <div className="text-gray-800 font-medium">info@uhs.co.za</div>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-2 rounded-lg mr-3 mt-1">
                  <Phone className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Phone</div>
                  <div className="text-gray-800 font-medium">+27 12 345 6789</div>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-3 mt-1">
                  <MapPin className="h-4 w-4 text-yellow-600" />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Location</div>
                  <div className="text-gray-800 font-medium">
                    Tshwane University
                    <br />
                    Pretoria, South Africa
                  </div>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-gray-800">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
                  { icon: Twitter, href: "#", color: "hover:bg-blue-400" },
                  { icon: Instagram, href: "#", color: "hover:bg-pink-500" },
                  { icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
                  { icon: Github, href: "#", color: "hover:bg-gray-800" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`bg-white border border-gray-200 ${social.color} hover:text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-sm`}
                  >
                    <social.icon className="h-5 w-5 text-gray-600" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} University Hackathon Series. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
