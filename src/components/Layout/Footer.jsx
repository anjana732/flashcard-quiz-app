import {EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import { FaGithub,FaGlobe,FaLinkedin, FaTwitter,} from 'react-icons/fa';

  
  export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand/Logo */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-400 mb-3">FlashCard Quiz</h2>
            <p className="text-sm">
              Challenge your knowledge across categories and levels. Learn while having fun!
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400">Home</a></li>
              <li><a href="#" className="hover:text-indigo-400">Instruction</a></li>
              <li><a href="#" className="hover:text-indigo-400">Score Evaluation</a></li>
              <li><a href="#" className="hover:text-indigo-400">Start Quiz</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Contact</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5 text-indigo-400" />
                <span>anjanasingh1257@gmail.com</span>
              </li>
              {/* <li className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-indigo-400" />
                <span>+91-98765-43210</span>
              </li> */}
              <li className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-indigo-400" />
                <span>India</span>
              </li>
            </ul>
          </div>
  
          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-indigo-400">
                <FaGithub size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400">
                <FaGlobe size={20} />
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom note */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FlashCard. All rights reserved.
        </div>
      </footer>
    );
  }
  