import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { governmentPrograms, ngos } from '@/constants/slowLearners';
import { Building2, Users, ExternalLink, Heart } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-8 bg-emerald-50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-emerald-100">
            <Heart className="w-8 h-8 text-emerald-600" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 tracking-tight">
            Avenues of Support
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Find government programs and non-governmental organizations dedicated to supporting slow learners.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Government Programs */}
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">Government Programs</h2>
                </div>
                <p className="text-lg text-slate-600 font-light">
                  Official programs from the Department of Education and other government agencies
                </p>
              </div>

              <div className="space-y-6">
                {governmentPrograms.map((program) => (
                  <Card key={program.name} className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-emerald-100">
                          <Building2 className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-medium text-slate-900 mb-3">{program.name}</h3>
                          <p className="text-slate-600 mb-4 leading-relaxed">{program.description}</p>
                          <Link
                            href={program.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                          >
                            Learn More
                            <ExternalLink className="ml-1.5 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* NGOs */}
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">NGOs</h2>
                </div>
                <p className="text-lg text-slate-600 font-light">
                  Non-governmental organizations providing specialized support and services
                </p>
              </div>

              <div className="space-y-6">
                {ngos.map((ngo) => (
                  <Card key={ngo.name} className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-emerald-100">
                          <Users className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-medium text-slate-900 mb-3">{ngo.name}</h3>
                          <p className="text-slate-600 mb-4 leading-relaxed">{ngo.description}</p>
                          <Link
                            href={ngo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                          >
                            Learn More
                            <ExternalLink className="ml-1.5 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Support Section */}
      <section className="px-4 py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-slate-50/50 backdrop-blur-sm">
            <CardContent className="p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 tracking-tight">
                Need Help Finding the Right Program?
              </h2>
              <p className="text-lg text-slate-600 font-light mb-8 max-w-2xl mx-auto">
                Every learner is unique. These organizations can help assess your specific needs and connect you with the most appropriate support services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.deped.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
                >
                  Visit DepEd Website
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                <Link
                  href="/slow-learning/resources"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                >
                  Explore Digital Tools
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
