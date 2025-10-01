'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DollarSign, Heart, Users, TrendingDown, AlertTriangle, Home, Briefcase, Brain, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const EffectsPage = () => {
  const [selectedImpact, setSelectedImpact] = useState('financial');

  const impactData = {
    financial: {
      icon: DollarSign,
      title: "Financial Impact",
      stats: [
        { label: "Average Debt", value: "₱2.5M", description: "Accumulated by problem gamblers" },
        { label: "Bankruptcy Rate", value: "23%", description: "Of gambling addicts file for bankruptcy" },
        { label: "Lost Savings", value: "89%", description: "Lose their entire life savings" },
        { label: "Retirement Funds", value: "67%", description: "Drain their retirement accounts" }
      ],
      consequences: [
        "Overwhelming debt and financial ruin",
        "Loss of home, car, and personal assets",
        "Damaged credit scores and financial reputation",
        "Inability to meet basic family needs",
        "Borrowing from dangerous sources"
      ],
      warning: {
        title: "Critical Warning:",
        message: "Financial problems from gambling often lead to desperate measures including borrowing from loan sharks, embezzlement, or other illegal activities that compound the crisis."
      }
    },
    emotional: {
      icon: Heart,
      title: "Emotional & Mental Health",
      stats: [
        { label: "Depression Rate", value: "76%", description: "Experience clinical depression" },
        { label: "Anxiety Disorders", value: "84%", description: "Develop severe anxiety" },
        { label: "Suicide Risk", value: "5x", description: "Higher than general population" },
        { label: "Substance Abuse", value: "45%", description: "Develop secondary addictions" }
      ],
      consequences: [
        "Severe depression and anxiety disorders",
        "Increased risk of suicide and self-harm",
        "Feelings of shame, guilt, and hopelessness",
        "Loss of self-esteem and confidence",
        "Development of other mental health issues"
      ],
      warning: {
        title: "Mental Health Crisis:",
        message: "The shame and despair from gambling losses create a vicious cycle where people gamble more to escape negative emotions, worsening their mental health condition."
      }
    },
    social: {
      icon: Users,
      title: "Social & Relationship Impact",
      stats: [
        { label: "Divorce Rate", value: "53%", description: "Of marriages end in divorce" },
        { label: "Family Breakdown", value: "78%", description: "Experience family conflicts" },
        { label: "Lost Friendships", value: "65%", description: "Lose close friendships" },
        { label: "Social Isolation", value: "82%", description: "Become socially isolated" }
      ],
      consequences: [
        "Breakdown of marriages and partnerships",
        "Loss of trust from family and friends",
        "Social isolation and loneliness",
        "Impact on children's emotional development",
        "Loss of social support networks"
      ],
      warning: {
        title: "Relationship Destruction:",
        message: "The lies, broken promises, and financial betrayal destroy the foundation of trust that relationships are built on, often irreparably damaging family bonds."
      }
    }
  };

  const philippinesStats = [
    {
      icon: TrendingDown,
      title: "Economic Impact in PH",
      value: "₱180B",
      description: "Annual economic loss due to gambling addiction"
    },
    {
      icon: Users,
      title: "Affected Families",
      value: "2.1M",
      description: "Filipino families affected by gambling problems"
    },
    {
      icon: Briefcase,
      title: "Job Loss Rate",
      value: "34%",
      description: "Of problem gamblers lose their employment"
    },
    {
      icon: Home,
      title: "Housing Impact",
      value: "28%",
      description: "Face foreclosure or eviction"
    }
  ];

  const warningSignsTimeline = [
    {
      phase: "Early Stage",
      timeframe: "0-6 months",
      signs: ["Increased gambling frequency", "Lying about losses", "Borrowing small amounts"],
      severity: "low"
    },
    {
      phase: "Problem Stage",
      timeframe: "6-18 months",
      signs: ["Chasing losses", "Neglecting responsibilities", "Relationship conflicts"],
      severity: "medium"
    },
    {
      phase: "Crisis Stage",
      timeframe: "18+ months",
      signs: ["Desperate borrowing", "Illegal activities", "Suicidal thoughts"],
      severity: "high"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Hero Section */}
      <section className="px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-8 bg-blue-50 dark:bg-blue-950/50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/50">
            <AlertTriangle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-8 tracking-tight">
            The Real Cost of Gambling Addiction
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Understanding the devastating effects of gambling addiction is crucial for recognition, intervention, and recovery. The impact extends far beyond financial losses.
          </p>
        </div>
      </section>

      {/* Philippines Statistics */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              Impact in the Philippines
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              The scale of gambling addiction&apos;s impact on Filipino society
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philippinesStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="border-border bg-card/80 backdrop-blur-sm text-center transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="pt-8 pb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 mb-4 transition-colors hover:bg-blue-100">
                      <IconComponent className="text-blue-600 dark:text-blue-400" size={28} />
                    </div>
                    <h3 className="text-3xl font-light text-foreground mb-2">{stat.value}</h3>
                    <h4 className="text-base font-medium text-foreground mb-2">{stat.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Impact Breakdown */}
      <section className="px-4 py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              Comprehensive Impact Analysis
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              Explore the different ways gambling addiction affects individuals and families
            </p>
          </div>

          {/* Impact Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {Object.entries(impactData).map(([key, data]) => {
              const IconComponent = data.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedImpact(key)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedImpact === key
                      ? 'bg-blue-600 dark:bg-blue-700 text-white shadow-lg scale-105'
                      : 'bg-card text-muted-foreground hover:bg-muted border border-border'
                  }`}
                >
                  <IconComponent className="mr-2" size={20} />
                  {data.title}
                </button>
              );
            })}
          </div>

          {/* Selected Impact Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Statistics */}
            <div className="lg:col-span-1">
              <Card className="border-border bg-card/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Key Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5">
                    {impactData[selectedImpact as keyof typeof impactData].stats.map((stat, index) => (
                      <div key={index} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-muted-foreground text-sm">{stat.label}</span>
                          <span className="text-2xl font-light text-blue-600 dark:text-blue-400">
                            {stat.value}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{stat.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Consequences */}
            <div className="lg:col-span-2">
              <Card className="border-border bg-card/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl h-full">
                <CardHeader>
                  <div className="flex items-center">
                    {React.createElement(impactData[selectedImpact as keyof typeof impactData].icon, {
                      className: "text-blue-600 dark:text-blue-400 mr-3",
                      size: 32
                    })}
                    <CardTitle className="text-2xl text-foreground">
                      {impactData[selectedImpact as keyof typeof impactData].title} Consequences
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {impactData[selectedImpact as keyof typeof impactData].consequences.map((consequence, index) => (
                      <div key={index} className="flex items-start p-4 bg-muted/50 rounded-xl group hover:bg-muted transition-colors">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                        <span className="text-muted-foreground leading-relaxed">{consequence}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50 rounded-xl">
                    <h4 className="font-medium text-blue-900 mb-2">
                      {impactData[selectedImpact as keyof typeof impactData].warning.title}
                    </h4>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      {impactData[selectedImpact as keyof typeof impactData].warning.message}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Timeline */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              Progression of Effects
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              How gambling addiction effects worsen over time
            </p>
          </div>

          <div className="space-y-6">
            {warningSignsTimeline.map((phase, index) => (
              <Card
                key={index}
                className={`border-border bg-card/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl ${
                  phase.severity === 'low' ? 'border-l-4 border-l-yellow-400' :
                  phase.severity === 'medium' ? 'border-l-4 border-l-orange-400' :
                  'border-l-4 border-l-red-400'
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      phase.severity === 'low' ? 'bg-yellow-50' :
                      phase.severity === 'medium' ? 'bg-orange-50' :
                      'bg-red-50'
                    }`}>
                      <Brain className={`${
                        phase.severity === 'low' ? 'text-yellow-600' :
                        phase.severity === 'medium' ? 'text-orange-600' :
                        'text-red-600'
                      }`} size={24} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-medium text-foreground">{phase.phase}</h3>
                        <span className="text-sm text-muted-foreground/80 font-light">{phase.timeframe}</span>
                      </div>

                      <ul className="space-y-2">
                        {phase.signs.map((sign, signIndex) => (
                          <li key={signIndex} className="flex items-center text-muted-foreground">
                            <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                              phase.severity === 'low' ? 'bg-yellow-400' :
                              phase.severity === 'medium' ? 'bg-orange-400' :
                              'bg-red-400'
                            }`}></div>
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
            Don&apos;t Let It Get Worse
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
            The effects of gambling addiction compound over time. Early intervention can prevent the most devastating consequences. Help is available now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 dark:bg-blue-700 text-white px-8 transition-all duration-200 hover:scale-105">
              <Link href="/gambling/get-help">
                Get Help Immediately
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/30 px-8 transition-all duration-200 hover:scale-105">
              <Link href="/gambling/resources">
                Find Local Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EffectsPage;
