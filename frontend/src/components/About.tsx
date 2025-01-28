import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
      {/* Heading Animation */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-black mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About petsCare Platform
      </motion.h2>

      {/* Content Animation */}
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3, // Staggered animation for child elements
            },
          },
        }}
      >
        <motion.p
          className="text-gray-600 text-base sm:text-lg leading-relaxed font-semibold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          At petsCare, we believe that pets are more than just companions; they
          are cherished members of our families. We are passionate about
          creating a world where every pet thrives, and their human companions
          find joy and fulfillment in their relationships.
        </motion.p>

        <motion.p
          className="text-gray-600 text-base sm:text-lg leading-relaxed font-semibold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Our mission is to empower pet owners with the knowledge, resources,
          and support they need to provide the best possible life for their
          furry, feathered, or scaled friends. We strive to build a thriving
          community where pet owners can connect, share experiences, and learn
          from each other.
        </motion.p>

        <motion.p
          className="text-gray-600 text-base sm:text-lg leading-relaxed font-semibold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          We are committed to providing high-quality information, products, and
          services that enhance the well-being of pets. Whether you're a
          seasoned pet owner or just starting your journey, we are here to
          support you every step of the way.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
