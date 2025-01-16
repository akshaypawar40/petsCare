import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div>
          <h3 className="text-base font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Hi-Technic Systems and Services</p>
          <p className="text-sm">123 Technology Street,</p>
          <p className="text-sm">San Francisco, CA 94102</p>
          <p className="text-sm">Email: contact@hitechnic.com</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-base font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1">
            {" "}
            {/* Changed space-y-2 to space-y-1 */}
            <li>
              <a
                href="#about"
                className="text-sm hover:text-gray-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#careers"
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-base font-semibold mb-3">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-400 transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hi-Technic Systems and Services. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
