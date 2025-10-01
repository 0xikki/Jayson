'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BRAND_NAME } from '@/constants/site';
import { gamblingAddictionNav, slowLearnersNav } from '@/constants/navigation';
import ThemeToggle from '@/components/shared/ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Determine context from pathname
  const isGambling = pathname.startsWith('/gambling');
  const isSlowLearning = pathname.startsWith('/slow-learning');
  const isHomePage = pathname === '/';

  // Navigation items from constants

  const getNavClasses = () => {
    if (isHomePage) {
      return {
        nav: 'bg-background/80 backdrop-blur-sm text-foreground shadow-sm sticky top-0 z-50 border-b border-border',
        brand: 'text-xl font-light hover:text-muted-foreground transition-colors duration-200',
        link: 'hover:text-muted-foreground transition-colors duration-200 font-medium',
        mobileMenu: 'md:hidden bg-background/95 backdrop-blur-sm rounded-b-lg border-b border-border',
        mobileLink: 'hover:text-muted-foreground hover:bg-muted block px-3 py-2 text-base font-medium transition-all duration-200 rounded-md'
      };
    } else if (isGambling) {
      return {
        nav: 'bg-blue-600 dark:bg-blue-700 text-white shadow-lg sticky top-0 z-50',
        brand: 'text-xl font-medium hover:text-blue-100 dark:hover:text-blue-200 transition-colors duration-200',
        link: 'hover:text-blue-100 dark:hover:text-blue-200 transition-colors duration-200 font-medium',
        mobileMenu: 'md:hidden bg-blue-600/95 dark:bg-blue-700/95 backdrop-blur-sm rounded-b-lg',
        mobileLink: 'hover:text-blue-100 dark:hover:text-blue-200 hover:bg-blue-700/30 dark:hover:bg-blue-800/30 block px-3 py-2 text-base font-medium transition-all duration-200 rounded-md'
      };
    } else if (isSlowLearning) {
      return {
        nav: 'bg-emerald-600 dark:bg-emerald-700 text-white shadow-lg sticky top-0 z-50',
        brand: 'text-xl font-medium hover:text-emerald-100 dark:hover:text-emerald-200 transition-colors duration-200',
        link: 'hover:text-emerald-100 dark:hover:text-emerald-200 transition-colors duration-200 font-medium',
        mobileMenu: 'md:hidden bg-emerald-600/95 dark:bg-emerald-700/95 backdrop-blur-sm rounded-b-lg',
        mobileLink: 'hover:text-emerald-100 dark:hover:text-emerald-200 hover:bg-emerald-700/30 dark:hover:bg-emerald-800/30 block px-3 py-2 text-base font-medium transition-all duration-200 rounded-md'
      };
    } else {
      return {
        nav: 'bg-background text-foreground shadow-sm sticky top-0 z-50 border-b border-border',
        brand: 'text-xl font-light hover:text-muted-foreground transition-colors duration-200',
        link: 'hover:text-muted-foreground transition-colors duration-200 font-medium',
        mobileMenu: 'md:hidden bg-background/95 backdrop-blur-sm rounded-b-lg border-b border-border',
        mobileLink: 'hover:text-muted-foreground hover:bg-muted block px-3 py-2 text-base font-medium transition-all duration-200 rounded-md'
      };
    }
  };

  const navClasses = getNavClasses();
  const navItems = isGambling ? gamblingAddictionNav : isSlowLearning ? slowLearnersNav : [];

  return (
    <nav className={navClasses.nav}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className={navClasses.brand}>
              {BRAND_NAME}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navClasses.link}
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            {(isGambling || isSlowLearning) && (
              <Button asChild variant={isHomePage ? 'default' : 'secondary'}>
                <Link href={isGambling ? '/gambling/get-help' : '/slow-learning/support'} className="ml-4">
                  {isGambling ? 'Get Help Now' : 'Get Support'}
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={navClasses.link}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${navClasses.mobileMenu}`}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navClasses.mobileLink}
                  onClick={() => setIsOpen(false)}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
              {(isGambling || isSlowLearning) && (
                <Button asChild className="w-full mt-4">
                  <Link
                    href={isGambling ? '/gambling/get-help' : '/slow-learning/support'}
                    className="block text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {isGambling ? 'Get Help Now' : 'Get Support'}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 