import { Heart, Users, Phone } from 'lucide-react';
import { slowLearnersNav } from './navigation';

// Hero content configuration
export const heroContent = {
  gambling: {
    title: 'Find Your Way Back to',
    highlight: 'Hope & Recovery',
    subtitle: "You're not alone in your struggle with gambling addiction. Discover resources, support, and a path to recovery in the Philippines.",
    buttons: [
      {
        text: 'Get Help Now',
        href: '/get-help',
        variant: 'secondary' as const
      },
      {
        text: 'Find Resources',
        href: '/resources',
        variant: 'outline' as const,
        className: 'border-white text-white hover:bg-white hover:text-primary'
      }
    ]
  },
  slowLearners: {
    title: 'Empowering Every Learner',
    highlight: undefined,
    subtitle: 'Unlocking potential through personalized strategies and dedicated support for academic success.',
    buttons: [
      {
        text: 'Take Assessment',
        href: '/assessment',
        variant: 'default' as const
      },
      {
        text: 'Explore Strategies',
        href: '/strategies',
        variant: 'outline' as const
      }
    ]
  }
};

// Statistics content configuration
export const statisticsContent = {
  gambling: {
    title: 'Understanding the Impact',
    subtitle: "Gambling addiction affects millions worldwide. Here's what you need to know.",
    statistics: [
      {
        value: '2-3%',
        label: 'of adults worldwide are affected by gambling disorders',
        icon: Users,
        iconColor: 'secondary'
      },
      {
        value: '75%',
        label: 'recovery rate with proper support and treatment',
        icon: Heart,
        iconColor: 'accent'
      },
      {
        value: '24/7',
        label: 'support available through various helplines and resources',
        icon: Phone,
        iconColor: 'destructive'
      }
    ]
  },
  slowLearners: {
    title: 'The Landscape of Learning in the Philippines',
    subtitle: undefined,
    statistics: [
      {
        value: '14.1%',
        label: 'of students in the Philippines are identified as slow learners.'
      },
      {
        value: 'K-12',
        label: 'Challenges within the curriculum that require special attention.'
      },
      {
        value: '88%',
        label: 'Socio-economically advantaged students outperform disadvantaged students.'
      }
    ]
  }
};

// Quick links content configuration
export const quickLinksContent = {
  gambling: {
    title: 'Start Your Journey',
    subtitle: 'Learn about the causes, understand the effects, and find the help you need.',
    links: [
      {
        name: 'Understand Causes',
        href: '/causes',
        description: 'Learn about the psychological, biological, and social factors behind gambling addiction.'
      },
      {
        name: 'Recognize Effects',
        href: '/effects',
        description: 'Understand the financial, emotional, and social impact of gambling addiction.'
      },
      {
        name: 'Get Help',
        href: '/get-help',
        description: 'Find step-by-step guidance and professional support for recovery.'
      },
      {
        name: 'Find Resources',
        href: '/resources',
        description: 'Connect with local support groups and treatment centers in the Philippines.'
      }
    ]
  },
  slowLearners: {
    title: 'Explore Support & Strategies',
    subtitle: undefined,
    links: slowLearnersNav.map(nav => ({
      name: nav.name,
      href: nav.href
    }))
  }
};