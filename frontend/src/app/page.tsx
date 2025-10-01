import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Brain, GamepadIcon } from 'lucide-react';
import { BRAND_NAME } from '@/constants/site';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 tracking-tight">
            What feels overwhelming?
          </h1>

          <div className="space-y-6 mb-16">
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              What do you feel like you&apos;re struggling with?
            </p>
          </div>

          {/* Path Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Gambling Addiction Card */}
            <Link href="/gambling/intro" className="group">
              <Card className="h-full transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 border-slate-200 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <GamepadIcon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-medium text-slate-900 text-center">
                    Gambling Addiction
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-8">
                  <p className="text-slate-600 leading-relaxed text-center mb-6">
                    Find hope and support on your journey to recovery. You&apos;re not alone in this struggle.
                  </p>
                  <div className="flex justify-center">
                    <Button variant="outline" className="group-hover:bg-blue-50 group-hover:border-blue-200">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Slow Learning Card */}
            <Link href="/slow-learning/intro" className="group">
              <Card className="h-full transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 border-slate-200 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-6 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                    <Brain className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl font-medium text-slate-900 text-center">
                    Slow Learning
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-8">
                  <p className="text-slate-600 leading-relaxed text-center mb-6">
                    Unlock your potential with personalized strategies and dedicated support for academic success.
                  </p>
                  <div className="flex justify-center">
                    <Button variant="outline" className="group-hover:bg-emerald-50 group-hover:border-emerald-200">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Subtle bottom text */}
          <div className="mt-16">
            <p className="text-sm text-slate-400 font-light">
              Take the first step towards positive change
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
