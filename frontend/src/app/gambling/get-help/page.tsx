'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Users, CheckCircle, Heart, Shield, Clock, MapPin, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const GetHelpPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const recoverySteps = [
    {
      id: 1,
      title: "Acknowledge the Problem",
      description: "The first and most crucial step is admitting you have a gambling problem.",
      icon: Heart,
      actions: [
        "Take an honest self-assessment",
        "Recognize the impact on your life",
        "Accept that you need help",
        "Stop blaming external factors"
      ],
      timeframe: "Right now"
    },
    {
      id: 2,
      title: "Reach Out for Support",
      description: "Don't face this alone. Connect with people who understand and can help.",
      icon: Users,
      actions: [
        "Call a gambling addiction hotline",
        "Tell a trusted family member or friend",
        "Join a support group",
        "Consider professional counseling"
      ],
      timeframe: "Within 24 hours"
    },
    {
      id: 3,
      title: "Take Control of Finances",
      description: "Protect yourself from further financial damage and create barriers.",
      icon: Shield,
      actions: [
        "Give financial control to a trusted person",
        "Close online gambling accounts",
        "Install gambling blocking software",
        "Limit access to cash and credit cards"
      ],
      timeframe: "Within 1 week"
    },
    {
      id: 4,
      title: "Seek Professional Help",
      description: "Get expert guidance to address underlying issues and develop coping strategies.",
      icon: Star,
      actions: [
        "Find a qualified therapist",
        "Consider inpatient treatment if needed",
        "Explore medication options",
        "Address co-occurring mental health issues"
      ],
      timeframe: "Within 2 weeks"
    }
  ];

  const emergencyContacts = [
    {
      name: "Gamblers Anonymous Philippines",
      phone: "0917-509-4080",
      description: "24/7 support hotline",
      contact: "Reagan"
    },
    {
      name: "National Crisis Hotline",
      phone: "0917-899-8727",
      description: "Mental health crisis support",
      contact: "DOH"
    },
    {
      name: "Suicide Prevention Hotline",
      phone: "0917-558-4673",
      description: "24/7 suicide prevention",
      contact: "Natasha Goulbourn Foundation"
    }
  ];

  const treatmentOptions = [
    {
      title: "Support Groups",
      description: "Join others in recovery through peer support meetings",
      icon: Users,
      benefits: ["Free of charge", "Available nationwide", "Peer support", "Ongoing recovery"],
      locations: ["Metro Manila", "Cebu", "Davao", "Baguio", "Online meetings"]
    },
    {
      title: "Individual Therapy",
      description: "One-on-one counseling with addiction specialists",
      icon: Heart,
      benefits: ["Personalized treatment", "Address underlying issues", "Flexible scheduling", "Confidential"],
      locations: ["Private clinics", "Hospital programs", "Online therapy", "Community centers"]
    },
    {
      title: "Inpatient Treatment",
      description: "Intensive residential treatment programs",
      icon: Shield,
      benefits: ["24/7 medical support", "Structured environment", "Intensive therapy", "Medical detox if needed"],
      locations: ["Specialized treatment centers", "Hospital programs", "Rehabilitation facilities"]
    }
  ];

  const handleStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
    if (stepId < recoverySteps.length) {
      setCurrentStep(stepId + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-8 bg-blue-50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-blue-100">
            <Heart className="w-8 h-8 text-blue-600" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 tracking-tight">
            You&apos;ve Taken the First Step
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Seeking help takes courage. You&apos;re not alone in this journey. Recovery is possible, and we&apos;re here to guide you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-all duration-200 hover:scale-105">
              <a href="tel:+639175094080">
                <Phone className="mr-2" size={20} />
                Call Now: 0917-509-4080
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 px-8 transition-all duration-200 hover:scale-105">
              <a href="#steps">
                Start Recovery Steps
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="px-4 py-12 bg-blue-50/50 border-y border-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-4 tracking-tight">
              Need Immediate Help?
            </h2>
            <p className="text-slate-600 font-light">
              If you&apos;re in crisis or having thoughts of self-harm, reach out now.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="border-blue-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 rounded-2xl flex items-center justify-center">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">{contact.name}</h3>
                  <a
                    href={`tel:+63${contact.phone.replace(/^0/, '')}`}
                    className="text-2xl font-light text-blue-600 block mb-2 hover:underline"
                  >
                    {contact.phone}
                  </a>
                  <p className="text-slate-600 text-sm mb-1">{contact.description}</p>
                  <p className="text-slate-500 text-xs">Contact: {contact.contact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Steps */}
      <section id="steps" className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Your Recovery Roadmap
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Follow these essential steps to begin your journey to recovery
            </p>
          </div>

          <div className="space-y-6">
            {recoverySteps.map((step) => {
              const IconComponent = step.icon;
              const isCompleted = completedSteps.includes(step.id);
              const isCurrent = currentStep === step.id;

              return (
                <Card
                  key={step.id}
                  className={`border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl ${
                    isCurrent ? 'ring-2 ring-blue-500 shadow-lg' : ''
                  } ${isCompleted ? 'bg-blue-50/30 border-blue-200' : ''}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isCompleted ? 'bg-blue-600 scale-110' : 'bg-blue-50'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="text-white" size={28} />
                        ) : (
                          <IconComponent className="text-blue-600" size={28} />
                        )}
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-2">
                              Step {step.id}: {step.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">{step.description}</p>
                          </div>
                          <div className="flex items-center text-sm text-slate-500 font-light ml-4">
                            <Clock className="mr-1" size={16} />
                            {step.timeframe}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          {step.actions.map((action, actionIndex) => (
                            <div key={actionIndex} className="flex items-center group">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 transition-transform group-hover:scale-150"></div>
                              <span className="text-slate-600">{action}</span>
                            </div>
                          ))}
                        </div>

                        {!isCompleted && (
                          <Button
                            onClick={() => handleStepComplete(step.id)}
                            className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200"
                          >
                            Mark as Complete
                          </Button>
                        )}

                        {isCompleted && (
                          <div className="text-blue-600 font-medium flex items-center">
                            <CheckCircle className="mr-2" size={20} />
                            Step Completed!
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="px-4 py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Treatment Options Available
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Choose the treatment approach that works best for your situation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {treatmentOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto mb-4 bg-blue-50 rounded-2xl flex items-center justify-center transition-colors hover:bg-blue-100">
                      <IconComponent className="text-blue-600" size={28} />
                    </div>
                    <CardTitle className="text-xl text-center text-slate-900">{option.title}</CardTitle>
                    <p className="text-slate-600 text-center text-sm">{option.description}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-medium text-slate-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {option.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                            <span className="text-slate-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">Available in:</h4>
                      <div className="flex flex-wrap gap-2">
                        {option.locations.map((location, locationIndex) => (
                          <span key={locationIndex} className="flex items-center bg-blue-50 px-3 py-1.5 rounded-full text-xs text-slate-700">
                            <MapPin className="mr-1" size={12} />
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50/50 to-slate-50/50 backdrop-blur-sm">
            <CardContent className="p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 tracking-tight">
                Your Recovery Progress
              </h2>

              <div className="mb-8">
                <div className="text-5xl font-light text-blue-600 mb-4">
                  {completedSteps.length}/{recoverySteps.length}
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(completedSteps.length / recoverySteps.length) * 100}%` }}
                  ></div>
                </div>
                <p className="text-lg text-slate-600 font-light">
                  Steps completed towards recovery
                </p>
              </div>

              {completedSteps.length === recoverySteps.length ? (
                <div>
                  <CheckCircle className="mx-auto mb-4 text-blue-600" size={48} />
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Congratulations!</h3>
                  <p className="text-lg text-slate-600 mb-8 font-light">
                    You&apos;ve completed all the initial recovery steps. Keep going - recovery is a journey, not a destination.
                  </p>
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-all duration-200 hover:scale-105">
                    <Link href="/gambling/resources">
                      Find Ongoing Support
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              ) : (
                <div>
                  <p className="text-lg text-slate-600 mb-8 font-light">
                    Every step forward is progress. Don&apos;t give up - you&apos;re stronger than you think.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-all duration-200 hover:scale-105">
                      <Link href="/gambling/resources">
                        Find Local Support
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 px-8 transition-all duration-200 hover:scale-105">
                      <a href="tel:+639175094080">
                        Call for Help
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default GetHelpPage;
