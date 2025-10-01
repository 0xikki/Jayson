import { Brain, Dna, Users, TrendingUp, AlertCircle } from 'lucide-react';

export const causesData = {
  psychological: {
    icon: Brain,
    title: "Psychological Factors",
    percentage: 45,
    color: "bg-blue-500",
    factors: [
      "Depression and anxiety disorders",
      "Stress and trauma",
      "Escapism and emotional regulation",
      "Thrill-seeking behavior",
      "Low self-esteem"
    ]
  },
  biological: {
    icon: Dna,
    title: "Biological & Genetic Factors",
    percentage: 35,
    color: "bg-green-500",
    factors: [
      "Genetic predisposition",
      "Brain chemistry imbalances",
      "Dopamine reward system dysfunction",
      "Impulse control disorders",
      "Family history of addiction"
    ]
  },
  social: {
    icon: Users,
    title: "Social & Environmental Factors",
    percentage: 20,
    color: "bg-purple-500",
    factors: [
      "Peer pressure and social influence",
      "Cultural attitudes toward gambling",
      "Easy access to gambling venues",
      "Financial stress",
      "Social isolation"
    ]
  }
};

export const riskFactors = [
  { factor: "Age (18-29)", risk: 85, description: "Young adults are at highest risk" },
  { factor: "Mental Health Issues", risk: 75, description: "Depression, anxiety increase vulnerability" },
  { factor: "Substance Use", risk: 70, description: "Alcohol/drug use amplifies risk" },
  { factor: "Financial Stress", risk: 60, description: "Economic pressure can trigger gambling" },
  { factor: "Social Isolation", risk: 55, description: "Loneliness increases susceptibility" },
];

export const philippinesSpecificFactors = [
  {
    icon: TrendingUp,
    title: "Rising Online Gambling",
    description: "PAGCOR data shows a 300% increase in online gambling participation since 2020.",
  },
  {
    icon: Users,
    title: "Cultural Acceptance",
    description: "Traditional games like \"jueteng\" and \"tong-its\" normalize gambling behavior.",
  },
  {
    icon: AlertCircle,
    title: "Economic Pressure",
    description: "Financial stress from unemployment and inflation drives risky gambling behavior.",
  }
]; 