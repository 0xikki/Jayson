import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { digitalTools } from '@/constants/slowLearners';
import { Laptop, ExternalLink, Sparkles } from 'lucide-react';

export default function SLResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-8 bg-emerald-50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-emerald-100">
            <Laptop className="w-8 h-8 text-emerald-600" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 tracking-tight">
            Digital Tools & Apps
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Explore a curated list of digital resources to aid in the learning journey.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Philippine-Based Resources
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Technology-enabled learning platforms designed for Filipino students
            </p>
          </div>

          <div className="space-y-6">
            {digitalTools.map((tool) => (
              <Card key={tool.name} className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-emerald-100">
                      <Laptop className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-slate-900 mb-3">{tool.name}</h3>
                      <p className="text-slate-600 mb-5 leading-relaxed text-lg">{tool.description}</p>
                      <Link
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-base transition-colors"
                      >
                        Visit Website
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="px-4 py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              How to Use These Tools
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Maximize the benefits of digital learning resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">For Students</h3>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Set specific learning goals for each session</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Take regular breaks to avoid screen fatigue</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Track your progress and celebrate milestones</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">For Parents & Teachers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Monitor usage and provide guidance</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Supplement digital tools with hands-on activities</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0 transition-transform group-hover:scale-150"></div>
                    <span className="text-slate-600 leading-relaxed">Encourage discussion about what they're learning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-slate-50/50 backdrop-blur-sm">
            <CardContent className="p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 tracking-tight">
                Need More Support?
              </h2>
              <p className="text-lg text-slate-600 font-light mb-8 max-w-2xl mx-auto">
                Digital tools are most effective when combined with personalized strategies and professional support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/slow-learning/strategies"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
                >
                  Explore Strategies
                </Link>
                <Link
                  href="/slow-learning/support"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                >
                  Find Support Programs
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
