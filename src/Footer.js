import { Instagram, Linkedin,Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright Section */}
          <div className="text-sm">
            <p>&copy; {currentYear} Made by Ayati Bijoria & Harsh Rathore. All rights reserved.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 items-center">
            <a
              href="https://www.instagram.com/mafficknitb/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200 flex items-center gap-2"
              aria-label="Instagram"
            >
              <Instagram size={20} />
              <span className="text-sm">Instagram</span>
            </a>
            
            <a
              href="https://www.linkedin.com/company/mafficknitb?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200 flex items-center gap-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
             <a
              href="https://www.facebook.com/mafficknitbhopal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200 flex items-center gap-2"
              aria-label="Facebook"
            >
              <Facebook size={20} />
              <span className="text-sm">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}