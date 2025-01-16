import React from "react";

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-semibold text-center text-white mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Pet Grooming</h3>
          <p className="text-gray-300 mb-4">
            Professional grooming services for all types of pets. Keep your pets
            clean, healthy, and looking their best.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
            Learn More
          </button>
        </div>

        {/* Service 2 */}
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Pet Sitting</h3>
          <p className="text-gray-300 mb-4">
            Trusted pet sitters who will take care of your pets while you're
            away. Whether it's a day or a week, we've got you covered.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
            Learn More
          </button>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Dog Walking</h3>
          <p className="text-gray-300 mb-4">
            Our professional dog walkers ensure your pets get the exercise they
            need while you’re busy at work or running errands.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
            Learn More
          </button>
        </div>

        {/* Service 4 */}
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Veterinary Services</h3>
          <p className="text-gray-300 mb-4">
            Comprehensive veterinary services to keep your pets healthy and
            happy. From routine check-ups to emergency care, we’ve got your pets
            covered.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
            Learn More
          </button>
        </div>

        {/* Service 5 */}
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Pet Training</h3>
          <p className="text-gray-300 mb-4">
            Effective pet training programs to help your pets become
            well-behaved and obedient. We offer basic and advanced training.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
            Learn More
          </button>
        </div>

        {/* Service 6 */}
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Pet Adoption</h3>
          <p className="text-gray-300 mb-4">
            Find your perfect pet! We offer pet adoption services, connecting
            you with pets in need of a loving home.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
