import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { BRAND_NAME } from '@/constants/site';

const Footer = () => {
  const socialLinks = [
    { href: "#", icon: Facebook },
    { href: "#", icon: Twitter },
    { href: "#", icon: Instagram },
  ];

  const quickLinks = [
    { href: "/gambling/intro", label: "Gambling Support" },
    { href: "/slow-learning/intro", label: "Learning Support" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-primary text-white border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-start">
          {/* About Section */}
          <div className="md:col-span-5">
            <h3 className="text-xl font-bold mb-4 text-white">{BRAND_NAME}</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              A supportive platform providing resources and guidance for individuals facing personal challenges.
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              We offer compassionate support and practical tools to help you find your path forward.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm block"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Section */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold mb-4 text-white">Connect With Us</h3>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 mb-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                    aria-label={`Visit our ${link.icon.displayName} page`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Contact Information */}
            <div className="text-sm">
              <p className="font-semibold mb-2 text-white">Need Support?</p>
              <a href="tel:1553" className="flex items-center text-white/70 hover:text-white transition-colors duration-200" aria-label="Call crisis hotline">
                <Mail className="mr-2 flex-shrink-0" size={16} />
                <span>Crisis Hotline: 1553</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="text-center text-xs text-white/60 space-y-2">
            <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
            <p className="max-w-2xl mx-auto leading-relaxed">
              This website is for informational purposes only. If you are in a crisis, please call a medical professional or a 24/7 hotline immediately.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 