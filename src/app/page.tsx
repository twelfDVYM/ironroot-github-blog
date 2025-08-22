// src/app/page.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FaMarkdown,
  FaMobile,
  FaBolt,
  FaSearch,
  FaImage,
  FaCode,
  FaRocket,
  FaPalette,
  FaChartLine,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Subscribe from "../components/Subscribe";
import Carousel from "../components/ImageCarousel";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="text-blue-600 mb-4 text-3xl">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default function Home() {
  return (
    <div
      id="page-container"
      className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50"
    >
      <header className="bg-gradient-to-b from-[#a0522d] to-[#c68642]">
        <div id="contact-header" className="container mx-auto px-4 py-2">
          <div
            id="info"
            className="flex flex-wrap items-center justify-between space-x-4 md:space-x-0 md:flex-row"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+27639434886"
              className="text-black hover:text-gray-800 mb-2 md:mb-0 ml-4"
            >
              +27 63 943 4886
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:ironrootrockcraft@gmail.com?subject=IronRoot%20Enquiry"
              className="text-black hover:text-blue-800 mb-2 md:mb-0"
            >
              ironrootrockcraft@gmail.com
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=27639434886&amp;text=I%20want%20to%20make%20rocks!"
              className="text-black hover:text-green-800 mb-2 md:mb-0"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <Image
          src="https://twelfDVYM.github.io/host/IronRoot2.jpg"
          alt="IronRoot RockCraft"
          fill
          priority
          className="object-cover w-full h-full absolute inset-0 z-0"
          style={{ opacity: 0.7 }}
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-50 opacity-0" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-8 pb-12 lg:pt-16 lg:pb-20">
            <div className="text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 mb-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900"
                >
                  <span className="block">
                    Turn Your <span className="text-[#c68642]">Sand</span>
                  </span>
                  <span className="block">
                    Into a Beautiful{" "}
                    <span className="text-[#a0522d]">Rock</span>
                  </span>
                </motion.h1>
                <Image
                  src="https://twelfDVYM.github.io/host/IronRootLogoWEB.jpg"
                  alt="Logo"
                  width={600}
                  height={600}
                  className="mb-4 lg:mb-0 lg:ml-4 rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
              High-Quality Hand-Crafted Rock Features
            </h2>
            <p className="text-xl text-gray-600">
              We handcraft ultra-realistic artificial boulders that bring
              texture, depth, and bold design to your outdoor space—without the
              back-breaking weight or careful maneuvering of real stone. We
              bring natural beauty and lasting value to homes, parks, and
              commercial properties with our expertly crafted artificial rock
              landscaping and installations that can be installed anywhere,
              enhance outdoor spaces and stand the test of time!
            </p>
            <br />
            <p className="text-xl text-gray-600">
              From our humble beginnings in the Northern Drakensberg, IronRoot
              RockCraft is growing into a trusted name for artificial rock
              features across South Africa.
            </p>
            <br />
            <p className="text-xl text-gray-600">
              We travel to you! Contact us below.
            </p>
            <br />
            <p className="text-xl text-gray-600">
              Here are some of our most recent projects:
            </p>
          </div>

          {/* Image Carousel Section */}
          <div className="flex justify-center">
            <Carousel />
          </div>
        </div>
      </div>

      <Subscribe />

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">Built with NextJS</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://facebook.com/IronRootRockCraft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
