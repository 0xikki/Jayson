import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ArrowRight, Heart, Shield, Users, Brain, TrendingUp } from 'lucide-react';

export default function GamblingIntroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Hero Section */}
      <section className="px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-8 bg-blue-50 dark:bg-blue-950/50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/50">
            <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Understanding Gambling Addiction
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            You&apos;ve taken the first step by acknowledging the struggle. Let&apos;s explore what gambling addiction is and how you can reclaim control of your life.
          </p>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 tracking-tight">What It Is</h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Understanding the nature of gambling addiction is the foundation of recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950/50 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50">
                  <Brain className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl font-medium text-card-foreground">Behavioral Disorder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Gambling addiction is a recognized behavioral disorder characterized by persistent and recurrent problematic gambling behavior that leads to significant impairment or distress.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950/50 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50">
                  <Shield className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl font-medium text-card-foreground">Loss of Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  It involves the inability to control gambling impulses despite negative consequences to personal, family, or occupational functioning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950/50 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50">
                  <Users className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl font-medium text-card-foreground">Treatable Condition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Most importantly, gambling addiction is a treatable condition. With proper support, guidance, and commitment, recovery is absolutely possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="px-4 py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 tracking-tight">Why It Matters</h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              Addressing gambling addiction isn&apos;t just about stopping the behavior—it&apos;s about reclaiming your entire life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50">
                  <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Financial Recovery</h3>
                  <p className="text-muted-foreground leading-relaxed">Regain control over your finances and build a stable economic foundation for your future.</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50">
                  <Heart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Relationship Healing</h3>
                  <p className="text-muted-foreground leading-relaxed">Rebuild trust with family and friends, and create deeper, more meaningful connections.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Mental Wellness</h3>
                  <p className="text-muted-foreground leading-relaxed">Experience reduced anxiety, depression, and stress while developing healthy coping mechanisms.</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50">
                  <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Personal Growth</h3>
                  <p className="text-muted-foreground leading-relaxed">Rediscover your values, goals, and the person you want to become beyond addiction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Address It Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 tracking-tight">How We Can Help</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light mb-16 max-w-2xl mx-auto">
            Recovery begins with understanding your unique situation. Our assessment will help create a personalized path forward.
          </p>

          <Card className="border-border bg-card/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl">
            <CardContent className="p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left flex-1">
                  <h3 className="text-2xl font-medium text-card-foreground mb-3">Start Your Assessment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Take a confidential assessment to understand your situation and receive personalized recommendations for your recovery journey.
                  </p>
                </div>
                <Button asChild size="lg" className="bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-8 py-6 text-base flex-shrink-0 transition-all duration-200 hover:scale-105">
                  <Link href="/gambling/assessment">
                    Begin Assessment
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground/70 font-light mt-8">
            Your responses are completely confidential and will help us provide the most relevant support resources.
          </p>
        </div>
      </section>
    </div>
  );
}