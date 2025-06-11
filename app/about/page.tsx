"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, User, Target, Eye } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  const timelineData = [
    {
      year: "2018",
      title: "Foundation",
      description:
        "UHS was founded by Mr. Mash Phurutsi with a vision to revolutionize university hackathons in South Africa",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      year: "2019-2023",
      title: "Growth",
      description: "Expanded across multiple universities, attracting hundreds of participants annually",
      icon: <Target className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Team Tracts won with their revolutionary Booking System solution",
      icon: <User className="w-6 h-6" />,
    },
    {
      year: "2025",
      title: "Excellence",
      description: "Team Developed created the groundbreaking Nexis Bank System",
      icon: <Eye className="w-6 h-6" />,
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0 bg-black/40"></div>
        <Image src="/images/tvh-group-photo.jpeg" alt="About UHS" fill className="object-cover" />

        {/* Enhanced text background with blur effect */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              {/* Blurred background specifically for text area */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl -m-8"></div>

              {/* Text content with enhanced visibility */}
              <div className="relative z-10 p-8">
                <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold text-white mb-4 drop-shadow-2xl">
                  About UHS
                </h1>
                <div className="h-1 w-24 bg-red-600 mb-6 shadow-lg"></div>
                <p className="text-xl text-white/95 max-w-2xl drop-shadow-lg font-medium">
                  Discover the journey of South Africa's premier university hackathon series
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-space-grotesk font-bold mb-6 text-gray-800">Our Story</h2>
              <div className="h-1 w-16 bg-red-600 mb-6"></div>
              <p className="text-gray-700 mb-4">
                The University Hackathon Series (UHS) was established in 2018 with a vision to bridge the gap between
                academic learning and real-world problem solving. Founded by Mr. Mash Phurutsi, UHS has grown to become
                South Africa's premier hackathon event for university students.
              </p>
              <p className="text-gray-700 mb-6">
                What began as a small competition at a single university has expanded to include participants from
                institutions across South Africa, fostering innovation, collaboration, and technological advancement
                among the country's brightest minds.
              </p>
              <Button onClick={() => router.push("/team")} className="bg-red-600 hover:bg-red-700 text-white">
                Meet Our Team
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/mash.png" alt="Mr. Mash Phurutsi - UHS Founder" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-space-grotesk font-bold mb-4 text-gray-800">Our Journey</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">From humble beginnings to national recognition</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timelineData.map((item, index) => (
              <div key={index} className="relative pl-10 pb-10">
                {/* Timeline line */}
                {index < timelineData.length - 1 && (
                  <div className="absolute left-4 top-4 bottom-0 w-0.5 bg-gray-300"></div>
                )}

                {/* Timeline node */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    <span className="text-red-600 font-bold">{item.year}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                To be the leading platform that transforms university students into innovative problem-solvers,
                fostering a culture of creativity, collaboration, and technological excellence across South African
                universities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                To provide a competitive platform where university students can showcase their technical skills, develop
                innovative solutions to real-world challenges, and build networks that will shape the future of
                technology in Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-space-grotesk font-bold mb-4 text-gray-800">Our Partners</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              UHS is proudly supported by leading technology companies and academic institutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            <Image src="/images/tut-logo.png" alt="Tshwane University of Technology" width={150} height={80} />
            <Image src="/images/tshwane-logo.jpg" alt="City of Tshwane" width={150} height={80} />
            <Image src="/images/aws.png" alt="AWS" width={150} height={80} />
            <Image src="/images/faethm.png" alt="Faethm" width={150} height={80} />
            <Image src="/images/nelekat.png" alt="Nelekat" width={150} height={80} />
            <Image src="/images/sefako.png" alt="Sefako University" width={150} height={80} />
            <Image src="/images/think-tank.png" alt="Think Tank" width={150} height={80} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Be part of South Africa's premier university hackathon and showcase your skills
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => router.push("/contact")}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8"
            >
              Register Now
            </Button>
            <Button
              onClick={() => router.push("/gallery")}
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
