import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { LucideIcon } from 'lucide-react';

interface StatisticItem {
  value: string;
  label: string;
  icon?: LucideIcon;
  iconColor?: string;
}

interface StatisticsSectionProps {
  title: string;
  subtitle?: string;
  statistics: StatisticItem[];
  theme: 'gambling' | 'slowLearners';
}

const StatisticsSection = ({ title, subtitle, statistics, theme }: StatisticsSectionProps) => {
  const getThemeClasses = () => {
    if (theme === 'gambling') {
      return {
        container: 'py-16 bg-background',
        wrapper: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        title: 'text-3xl md:text-4xl font-bold text-primary mb-4',
        subtitle: 'text-lg text-muted-foreground max-w-2xl mx-auto',
        card: 'text-center hover:shadow-lg transition-shadow',
        cardTitle: 'text-4xl font-bold text-primary',
        cardContent: 'text-muted-foreground',
        iconContainer: 'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
        iconColors: {
          secondary: 'bg-secondary/10 text-secondary',
          accent: 'bg-accent/10 text-accent',
          destructive: 'bg-destructive/10 text-destructive',
          primary: 'bg-primary/10 text-primary',
          success: 'bg-success/10 text-success',
          warning: 'bg-warning/10 text-warning',
          info: 'bg-info/10 text-info'
        }
      };
    } else {
      return {
        container: 'py-12 bg-sl-background',
        wrapper: 'container mx-auto px-4',
        title: 'text-3xl font-bold text-center text-sl-foreground mb-8',
        subtitle: 'text-lg text-sl-muted-foreground max-w-2xl mx-auto',
        card: 'bg-sl-card border-sl-border text-center hover:shadow-lg transition-shadow',
        cardTitle: 'text-4xl font-bold text-sl-primary',
        cardContent: 'text-sl-foreground',
        iconContainer: 'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
        iconColors: {
          secondary: 'bg-sl-secondary/10 text-sl-secondary',
          accent: 'bg-sl-accent/10 text-sl-accent',
          destructive: 'bg-sl-destructive/10 text-sl-destructive',
          primary: 'bg-sl-primary/10 text-sl-primary',
          success: 'bg-sl-success/10 text-sl-success',
          warning: 'bg-sl-warning/10 text-sl-warning',
          info: 'bg-sl-info/10 text-sl-info'
        }
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

        <div className="grid md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <Card key={index} className={themeClasses.card}>
              <CardHeader>
                {stat.icon && stat.iconColor && (
                  <div className={`${themeClasses.iconContainer} ${themeClasses.iconColors[stat.iconColor as keyof typeof themeClasses.iconColors] || themeClasses.iconColors.primary}`}>
                    <stat.icon size={32} />
                  </div>
                )}
                <CardTitle className={themeClasses.cardTitle}>{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={themeClasses.cardContent}>
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;