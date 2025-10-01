import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface QuickLink {
  name: string;
  href: string;
  description?: string;
}

interface QuickLinksSectionProps {
  title: string;
  subtitle?: string;
  links: QuickLink[];
  theme: 'gambling' | 'slowLearners';
}

const QuickLinksSection = ({ title, subtitle, links, theme }: QuickLinksSectionProps) => {
  const getThemeClasses = () => {
    if (theme === 'gambling') {
      return {
        container: 'py-16 gradient-healing',
        wrapper: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        title: 'text-3xl md:text-4xl font-bold text-primary mb-4',
        subtitle: 'text-lg text-muted-foreground max-w-2xl mx-auto',
        card: 'group bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow',
        cardTitle: 'group-hover:text-secondary',
        cardContent: 'text-muted-foreground mb-4',
        arrow: 'text-secondary group-hover:translate-x-1 transition-transform'
      };
    } else {
      return {
        container: 'py-12 bg-sl-background',
        wrapper: 'container mx-auto px-4',
        title: 'text-3xl font-bold text-center text-sl-foreground mb-8',
        subtitle: 'text-lg text-sl-secondary max-w-2xl mx-auto',
        card: 'bg-sl-secondary hover:shadow-lg transition-shadow group',
        cardTitle: 'group-hover:text-sl-accent',
        cardContent: 'text-sl-foreground',
        arrow: 'text-sl-accent group-hover:translate-x-1 transition-transform'
      };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <section className={themeClasses.container}>
      <div className={themeClasses.wrapper}>
        <div className="text-center mb-12">
          <h2 className={themeClasses.title}>
            {title}
          </h2>
          {subtitle && (
            <p className={themeClasses.subtitle}>
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link) => (
            <Card key={link.href} className={themeClasses.card}>
              <Link href={link.href} className="block p-6">
                <CardHeader>
                  <CardTitle className={themeClasses.cardTitle}>{link.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  {link.description && (
                    <p className={themeClasses.cardContent}>
                      {link.description}
                    </p>
                  )}
                  <ArrowRight className={themeClasses.arrow} size={20} />
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;