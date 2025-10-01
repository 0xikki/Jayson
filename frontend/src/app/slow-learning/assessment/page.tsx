import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ArrowLeft, Brain } from 'lucide-react';

export default function SlowLearningAssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-24 lg:py-32">
        <div className="mb-8">
          <Button asChild variant="outline" className="border-slate-200 hover:bg-slate-50 mb-4 transition-all duration-200">
            <Link href="/slow-learning/intro">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Introduction
            </Link>
          </Button>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-8 bg-emerald-50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-emerald-100">
            <Brain className="w-8 h-8 text-emerald-600" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 tracking-tight">
            Learning Style Assessment
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            This assessment will be available soon. We&apos;re developing a comprehensive tool to help identify your unique learning style and provide personalized recommendations.
          </p>

          <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-slate-50/50 backdrop-blur-sm">
            <CardContent className="p-10">
              <h2 className="text-2xl font-medium text-slate-900 mb-4">Coming Soon</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                In the meantime, explore our strategies and support resources to start your learning journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 transition-all duration-200 hover:scale-105">
                  <Link href="/slow-learning/strategies">Explore Strategies</Link>
                </Button>
                <Button asChild variant="outline" className="border-emerald-200 hover:bg-emerald-50 px-8 transition-all duration-200 hover:scale-105">
                  <Link href="/slow-learning/support">Find Support</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
