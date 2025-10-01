import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { causesData } from '@/constants/causes';
import { Brain, Heart, ArrowRight, CheckCircle } from 'lucide-react';

export default function AssessmentPage() {
  const causes = Object.values(causesData);

  const selfAssessmentQuestions = [
    "Do you often gamble longer than you intended?",
    "Have you tried to cut back on gambling but found it difficult?",
    "Do you feel restless or irritable when trying to stop gambling?",
    "Do you gamble to escape problems or relieve anxiety or depression?",
    "Have you lied to family or friends about your gambling?",
    "Have you committed illegal acts to finance gambling?",
    "Have you jeopardized relationships or job opportunities because of gambling?",
    "Do you rely on others to provide money for gambling losses?"
  ];

  const warningSigns = [
    {
      category: "Behavioral",
      signs: [
        "Preoccupation with gambling",
        "Needing to gamble with increasing amounts",
        "Unsuccessful efforts to control gambling",
        "Gambling when feeling distressed"
      ]
    },
    {
      category: "Financial",
      signs: [
        "Borrowing money to gamble",
        "Selling possessions to fund gambling",
        "Missing bill payments",
        "Hiding financial losses"
      ]
    },
    {
      category: "Social",
      signs: [
        "Lying about gambling activities",
        "Withdrawing from family and friends",
        "Missing work or school",
        "Relationship conflicts"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-8 bg-blue-50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-blue-100">
            <Brain className="w-8 h-8 text-blue-600" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 tracking-tight">
            Self-Assessment
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Understanding your relationship with gambling is the first step toward positive change. This assessment can help identify potential concerns.
          </p>
        </div>
      </section>

      {/* Understanding Gambling Addiction Causes */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Understanding Gambling Addiction
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Identifying the root causes is essential for recovery and prevention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((cause) => {
              const Icon = cause.icon;
              return (
                <Card key={cause.title} className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto mb-6 bg-blue-50 rounded-2xl flex items-center justify-center transition-colors hover:bg-blue-100">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl text-center font-medium text-slate-900">{cause.title}</CardTitle>
                    <div className="text-center text-sm text-blue-600 font-medium mt-2">{cause.percentage}% of cases</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5">
                      {cause.factors.map((factor, index) => (
                        <li key={index} className="flex items-center text-slate-700 text-sm group">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                          <span>{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Self-Assessment Questions */}
      <section className="px-4 py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Quick Self-Assessment
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light mb-8">
              Answer these questions honestly to evaluate your gambling habits
            </p>
            <Card className="border-blue-200 bg-blue-50/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong>Note:</strong> If you answer "yes" to 3 or more of these questions, you may be experiencing problem gambling and should consider seeking professional help.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {selfAssessmentQuestions.map((question, index) => (
              <Card key={index} className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600 font-medium">
                      {index + 1}
                    </div>
                    <p className="text-slate-700 leading-relaxed pt-1">{question}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Warning Signs to Watch For
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Recognizing these signs early can make a significant difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {warningSigns.map((category, index) => (
              <Card key={index} className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 rounded-2xl flex items-center justify-center transition-colors hover:bg-blue-100">
                    <Heart className="text-blue-600" size={24} />
                  </div>
                  <CardTitle className="text-xl text-center text-slate-900">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.signs.map((sign, signIndex) => (
                      <li key={signIndex} className="flex items-start group">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" size={16} />
                        <span className="text-slate-700 text-sm leading-relaxed">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="px-4 py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50/50 to-slate-50/50 backdrop-blur-sm">
            <CardContent className="p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 tracking-tight">
                  Ready to Take the Next Step?
                </h2>
                <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                  If this assessment has raised concerns about your gambling, know that help is available. Recovery is possible, and you don&apos;t have to face this alone.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-slate-200 bg-white/80">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-slate-900 mb-3">Understanding the Problem</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      Learn more about gambling addiction, its causes, and effects to better understand what you&apos;re facing.
                    </p>
                    <div className="flex flex-col gap-2">
                      <Button asChild variant="outline" className="border-blue-200 hover:bg-blue-50 transition-all duration-200">
                        <Link href="/gambling/causes">
                          Explore Causes
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-blue-200 hover:bg-blue-50 transition-all duration-200">
                        <Link href="/gambling/effects">
                          Understand Effects
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 bg-white/80">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-slate-900 mb-3">Get Support Now</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      Connect with resources, support groups, and professional help to start your recovery journey today.
                    </p>
                    <div className="flex flex-col gap-2">
                      <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:scale-105">
                        <Link href="/gambling/get-help">
                          Get Help Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-blue-200 hover:bg-blue-50 transition-all duration-200">
                        <Link href="/gambling/resources">
                          Find Resources
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Crisis Support */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-blue-200 bg-blue-50/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-medium text-slate-900 mb-4">Need Immediate Support?</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                If you&apos;re in crisis or having thoughts of self-harm, please reach out for help right away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+639175094080"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
                >
                  Call GA Philippines: 0917-509-4080
                </a>
                <a
                  href="tel:+639178998727"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                >
                  Crisis Hotline: 0917-899-8727
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
