import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface HeroButton {
  text: string;
  href: string;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
}

interface HeroSectionProps {
  title: string;
  highlight?: string;
  subtitle: string;
  buttons?: HeroButton[];
  theme: 'gambling' | 'slowLearners';
}

const HeroSection = ({ title, highlight, subtitle, buttons, theme }: HeroSectionProps) => {
  const getThemeClasses = () => {
    if (theme === 'gambling') {
      return {
        container: 'gradient-primary text-white',
        overlay: 'bg-black/10',
        highlight: 'text-accent',
        subtitle: 'opacity-90'
      };
    } else {
      return {
        container: 'bg-sl-background text-sl-foreground',
        overlay: '',
        highlight: 'text-sl-accent',
        subtitle: 'text-sl-muted-foreground'
      };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <section className={`relative ${themeClasses.container} overflow-hidden`}>
      {themeClasses.overlay && (
        <div className={`absolute inset-0 ${themeClasses.overlay}`}></div>
      )}
      <div className={`${theme === 'gambling' ? 'relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32' : 'container mx-auto px-4 py-16'}`}>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            {title}
            {highlight && (
              <span className={`${themeClasses.highlight} block`}>{highlight}</span>
            )}
          </h1>
          <p className={`text-lg md:text-xl ${themeClasses.subtitle} max-w-3xl mx-auto ${theme === 'gambling' ? 'mb-8 leading-relaxed' : ''}`}>
            {subtitle}
          </p>
          {buttons && buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              {buttons.map((button, index) => (
                <Button key={index} asChild variant={button.variant || 'default'} className={button.className}>
                  <Link href={button.href} className="text-lg px-8 py-4">
                    {button.text}
                    {index === 0 && <ArrowRight className="ml-2 inline" size={20} />}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;