import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center text-white mb-12">
        About Us
      </h2>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-white mb-6">Who We Are</h3>
        <p className="text-gray-300 text-lg">
          At petsCare, we are passionate about providing the best care for your
          pets. Founded in 2010, our team of dedicated professionals has been
          offering high-quality services for pets of all shapes and sizes.
          Whether it's pet grooming, walking, sitting, or veterinary care, we
          aim to make the lives of pets and their owners easier, safer, and more
          enjoyable.
        </p>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-white mb-6">Our Mission</h3>
        <p className="text-gray-300 text-lg">
          Our mission is to enhance the lives of pets and their families by
          providing exceptional services, compassionate care, and support. We
          aim to build long-term relationships with pet owners through trust,
          reliability, and a commitment to making pets' lives better.
        </p>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-white mb-6">Our Values</h3>
        <ul className="text-gray-300 text-lg space-y-4">
          <li>
            • Compassion: We treat every pet with love, kindness, and empathy.
          </li>
          <li>
            • Excellence: We provide the highest standard of care for your pets.
          </li>
          <li>
            • Integrity: We build trust with our clients through transparency
            and honesty.
          </li>
          <li>
            • Innovation: We continually improve our services to meet the needs
            of pets and their owners.
          </li>
          <li>
            • Community: We believe in building a supportive, pet-loving
            community.
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-white mb-6">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-center">John Doe</h4>
            <p className="text-center text-gray-400">Founder & CEO</p>
            <p className="text-gray-300 mt-4">
              John founded petsCare with a vision to improve the quality of life
              for pets and pet owners. With over 15 years of experience in the
              pet industry, he leads the team with dedication and passion.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-center">Jane Smith</h4>
            <p className="text-center text-gray-400">Chief Pet Care Officer</p>
            <p className="text-gray-300 mt-4">
              Jane is our lead pet care expert, responsible for overseeing all
              our grooming, walking, and sitting services. She has a deep love
              for animals and over a decade of experience caring for pets.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-center">Tom Williams</h4>
            <p className="text-center text-gray-400">Veterinarian</p>
            <p className="text-gray-300 mt-4">
              Dr. Tom Williams is a licensed veterinarian with over 10 years of
              experience. He ensures that all pets receive the highest level of
              medical care when visiting our clinic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
