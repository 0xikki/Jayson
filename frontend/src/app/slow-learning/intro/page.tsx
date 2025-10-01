import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ArrowRight, Brain, BookOpen, Users, Target, Lightbulb, TrendingUp } from 'lucide-react';

export default function SlowLearningIntroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-8 bg-emerald-50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-emerald-100">
            <Brain className="w-8 h-8 text-emerald-600" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 tracking-tight">
            Empowering Every Learner
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Every student learns differently. Let&apos;s discover your unique learning style and unlock strategies tailored specifically for your academic success.
          </p>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">What It Means</h2>
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto">
              Being a slow learner doesn&apos;t mean less capable—it means learning in a way that&apos;s unique to you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-emerald-100">
                  <Brain className="w-7 h-7 text-emerald-600" />
                </div>
                <CardTitle className="text-xl font-medium text-slate-900">Different Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Slow learners process information at their own pace and often benefit from alternative teaching methods and more time to grasp concepts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-emerald-100">
                  <BookOpen className="w-7 h-7 text-emerald-600" />
                </div>
                <CardTitle className="text-xl font-medium text-slate-900">Unique Strengths</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Many slow learners excel in areas like creativity, problem-solving, hands-on learning, and developing deep understanding of subjects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-emerald-100">
                  <Target className="w-7 h-7 text-emerald-600" />
                </div>
                <CardTitle className="text-xl font-medium text-slate-900">Tailored Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  With the right strategies, support systems, and learning environment, every slow learner can achieve academic success and reach their full potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="px-4 py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">Why It Matters</h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Addressing learning challenges early and effectively opens doors to lifelong success and personal fulfillment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-emerald-100">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-slate-900 mb-2">Academic Achievement</h3>
                  <p className="text-slate-600 leading-relaxed">Unlock better grades and academic performance through personalized learning strategies.</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-emerald-100">
                  <Brain className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-slate-900 mb-2">Confidence Building</h3>
                  <p className="text-slate-600 leading-relaxed">Develop self-esteem and confidence in your abilities as you see tangible progress.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-emerald-100">
                  <Lightbulb className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-slate-900 mb-2">Skill Development</h3>
                  <p className="text-slate-600 leading-relaxed">Learn study techniques and cognitive strategies that will benefit you throughout life.</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-emerald-100">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-slate-900 mb-2">Future Opportunities</h3>
                  <p className="text-slate-600 leading-relaxed">Open doors to higher education, career advancement, and personal growth opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">How We Can Help</h2>
          <p className="text-lg md:text-xl text-slate-600 font-light mb-16 max-w-2xl mx-auto">
            Our comprehensive assessment will identify your learning style and create a personalized roadmap for academic success.
          </p>

          <Card className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl">
            <CardContent className="p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left flex-1">
                  <h3 className="text-2xl font-medium text-slate-900 mb-3">Discover Your Learning Style</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Take our learning assessment to understand your unique strengths and receive personalized strategies for academic improvement.
                  </p>
                </div>
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-base flex-shrink-0 transition-all duration-200 hover:scale-105">
                  <Link href="/slow-learning/assessment">
                    Start Assessment
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-slate-400 font-light mt-8">
            Your assessment results will help us recommend the most effective learning strategies and support resources for you.
          </p>
        </div>
      </section>
    </div>
  );
}