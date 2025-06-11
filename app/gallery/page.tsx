"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const categories = ["All", "TVH", "MAISH", "LVH", "Events", "Team", "Sponsors"]

  const galleryItems = [
    // TVH Images
    {
      id: 1,
      src: "/images/tvh-participants.jpeg",
      title: "TVH 2024 Participants",
      category: "TVH",
      description: "Participants at the 6th Annual Tshwane Varsity Hackathon with event banner",
    },
    {
      id: 2,
      src: "/images/tvh-certificates.jpeg",
      title: "TVH Certificate Ceremony",
      category: "TVH",
      description: "Participants in red HACKER t-shirts receiving certificates at TVH 2024",
    },
    {
      id: 3,
      src: "/images/tvh-group-photo.jpeg",
      title: "TVH Organizers & Participants",
      category: "TVH",
      description: "Large group photo of TVH organizers, officials, and participants",
    },
    {
      id: 4,
      src: "/images/tvh-gift-bags.jpeg",
      title: "TVH Gift Distribution",
      category: "TVH",
      description: "Participants receiving gift bags at the Tshwane Varsity Hackathon",
    },
    {
      id: 5,
      src: "/images/tvh-academy.jpeg",
      title: "TVH at Leadership Academy",
      category: "TVH",
      description: "Team photo at Tshwane Leadership and Management Academy with event banners",
    },

    // MAISH Images
    {
      id: 6,
      src: "/images/maish-coding.jpeg",
      title: "MAISH Coding Session",
      category: "MAISH",
      description: "Participants actively coding during the Mpumalanga AI & Software Hackathon",
    },
    {
      id: 7,
      src: "/images/maish-presentation.jpeg",
      title: "MAISH Opening Ceremony",
      category: "MAISH",
      description: "Formal presentation at University of Mpumalanga during MAISH event",
    },
    {
      id: 8,
      src: "/images/maish-winners.jpeg",
      title: "MAISH Winners Ceremony",
      category: "MAISH",
      description: "Winners receiving certificates and flowers at MAISH conclusion",
    },
    {
      id: 9,
      src: "/images/maish-stage.jpeg",
      title: "MAISH Stage Presentation",
      category: "MAISH",
      description: "Participants in yellow shirts presenting on stage at University of Mpumalanga",
    },

    // LVH Images
    {
      id: 10,
      src: "/images/lvh-participants.jpeg",
      title: "LVH Team Participants",
      category: "LVH",
      description: "LVH participants in red shirts at TUT Faculty event",
    },
    {
      id: 11,
      src: "/images/lvh-group-photo.jpeg",
      title: "LVH at University of Venda",
      category: "LVH",
      description: "Large group photo of LVH participants and organizers at University of Venda",
    },
    {
      id: 12,
      src: "/images/lvh-workshop.jpeg",
      title: "LVH Workshop Session",
      category: "LVH",
      description: "Educational workshop with participants and mentors during LVH",
    },
    {
      id: 13,
      src: "/images/lvh-presentation.jpeg",
      title: "LVH Presentation Ceremony",
      category: "LVH",
      description: "Formal presentation at LVH with University of Venda and TUT branding",
    },
    {
      id: 14,
      src: "/images/lvh-team-present.jpeg",
      title: "LVH Team Presenting",
      category: "LVH",
      description: "Team member presenting their solution during LVH competition",
    },
    {
      id: 15,
      src: "/images/lvh-casual.jpeg",
      title: "LVH Participants",
      category: "LVH",
      description: "Casual photo of LVH participants and organizers",
    },
    {
      id: 16,
      src: "/images/lvh-coding.jpeg",
      title: "LVH Coding Session",
      category: "LVH",
      description: "Active coding session during LVH with sponsor banners visible",
    },

    // Existing Images
    {
      id: 17,
      src: "/images/flag.jpg",
      title: "Flag Ceremony",
      category: "Events",
      description: "Opening ceremony flag raising at the hackathon venue",
    },
    {
      id: 18,
      src: "/images/tvh-winners.jpg",
      title: "TVH 2024 Winners",
      category: "TVH",
      description: "Winning team receiving their R10,000 prize at TVH 2024",
    },
    {
      id: 19,
      src: "/images/empower.jpg",
      title: "University Campus",
      category: "Events",
      description: "Tshwane University of Technology campus entrance",
    },
    {
      id: 20,
      src: "/images/nkuna.jpg",
      title: "Technical Director",
      category: "Team",
      description: "Leading technical innovation at UHS",
    },
    {
      id: 21,
      src: "/images/tut-logo.png",
      title: "Tshwane University",
      category: "Sponsors",
      description: "Official university partner and host",
    },
    {
      id: 22,
      src: "/images/tshwane-logo.jpg",
      title: "City of Tshwane",
      category: "Sponsors",
      description: "Municipal partner supporting innovation",
    },
    {
      id: 23,
      src: "/images/hackerthon-logo.jpg",
      title: "TVH Logo",
      category: "TVH",
      description: "Official Tshwane Varsity Hackathon branding",
    },
  ]

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50/30 to-blue-50/30">
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
                Gallery
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore moments of innovation, competition, and celebration from UHS hackathon events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-yellow-500 to-red-500 text-white shadow-lg"
                    : "border-2 border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                  }}
                  className="group cursor-pointer perspective-1000"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                    <div className="aspect-square relative">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-3 py-1 text-white text-xs font-semibold rounded-full ${
                          item.category === "TVH"
                            ? "bg-gradient-to-r from-green-500 to-blue-500"
                            : item.category === "MAISH"
                              ? "bg-gradient-to-r from-purple-500 to-pink-500"
                              : item.category === "LVH"
                                ? "bg-gradient-to-r from-orange-500 to-red-500"
                                : "bg-gradient-to-r from-yellow-500 to-red-500"
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <Button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                  size="sm"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-3">{selectedImage.description}</p>
                <span
                  className={`inline-block px-3 py-1 text-white text-sm font-semibold rounded-full ${
                    selectedImage.category === "TVH"
                      ? "bg-gradient-to-r from-green-500 to-blue-500"
                      : selectedImage.category === "MAISH"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : selectedImage.category === "LVH"
                          ? "bg-gradient-to-r from-orange-500 to-red-500"
                          : "bg-gradient-to-r from-yellow-500 to-red-500"
                  }`}
                >
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
