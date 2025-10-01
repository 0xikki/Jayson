import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { slowLearnersStrategies } from '@/constants/slowLearners';
import { Home, SpellCheck, ClipboardCheck, Laptop, Lightbulb, ArrowRight } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  home: Home,
  'spell-check': SpellCheck,
  'clipboard-check': ClipboardCheck,
  laptop: Laptop,
};

export default function StrategiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-8 bg-emerald-50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-emerald-100">
            <Lightbulb className="w-8 h-8 text-emerald-600" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 tracking-tight">
            Effective Learning Strategies
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Discover proven strategies to help slow learners thrive academically and build confidence.
          </p>
        </div>
      </section>

      {/* Strategies Grid */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Proven Approaches
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Evidence-based strategies tailored for effective learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slowLearnersStrategies.map((strategy) => {
              const Icon = iconMap[strategy.icon];
              return (
                <Card key={strategy.title} className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group">
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto mb-6 bg-emerald-50 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-emerald-100">
                      <Icon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl text-center font-medium text-slate-900">{strategy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed text-center">{strategy.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Tips */}
      <section className="px-4 py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Implementing These Strategies
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Practical tips for parents, teachers, and learners
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-slate-900 mb-4">For Parents</h3>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Create a consistent study routine and quiet learning environment at home</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Use visual aids and hands-on materials to reinforce learning concepts</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Celebrate small victories and progress to build confidence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-slate-900 mb-4">For Teachers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Provide differentiated instruction tailored to individual learning needs</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Break complex tasks into smaller, manageable steps</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Offer multiple ways to demonstrate understanding beyond traditional tests</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-slate-900 mb-4">For Learners</h3>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Use memory techniques like mnemonics and visualization</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Take frequent breaks during study sessions to maintain focus</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Don't hesitate to ask questions and seek clarification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-light mb-12 max-w-2xl mx-auto">
            Explore additional support resources and tools to enhance your learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 transition-all duration-200 hover:scale-105">
              <Link href="/slow-learning/support">
                Find Support Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-emerald-200 hover:bg-emerald-50 px-8 transition-all duration-200 hover:scale-105">
              <Link href="/slow-learning/resources">
                Explore Digital Tools
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
