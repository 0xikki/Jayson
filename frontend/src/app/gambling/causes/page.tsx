'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AlertCircle, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { causesData, riskFactors, philippinesSpecificFactors } from '@/constants/causes';

const CausesPage = () => {
  const [activeTab, setActiveTab] = useState('psychological');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-8 bg-blue-50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-blue-100">
            <Heart className="w-8 h-8 text-blue-600" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 tracking-tight">
            Understanding the Causes
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Gambling addiction doesn&apos;t happen overnight. It&apos;s the result of complex interactions between psychological, biological, and social factors.
          </p>
        </div>
      </section>

      {/* Interactive Causes Breakdown */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Primary Contributing Factors
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Explore the specific factors that contribute to gambling addiction.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {Object.entries(causesData).map(([key, data]) => {
              const IconComponent = data.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <IconComponent className="mr-2" size={20} />
                  {data.title}
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center mb-6">
                  {React.createElement(causesData[activeTab as keyof typeof causesData].icon, {
                    className: "text-blue-600 mr-3",
                    size: 32
                  })}
                  <CardTitle className="text-2xl text-slate-900">
                    {causesData[activeTab as keyof typeof causesData].title}
                  </CardTitle>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-medium text-slate-600">Contributing Factor</span>
                    <span className="text-sm font-medium text-blue-600">
                      {causesData[activeTab as keyof typeof causesData].percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${causesData[activeTab as keyof typeof causesData].percentage}%` }}
                    ></div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {causesData[activeTab as keyof typeof causesData].factors.map((factor, index) => (
                    <li key={index} className="flex items-center group">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 transition-transform group-hover:scale-150"></div>
                      <span className="text-slate-600">{factor}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-gradient-to-br from-blue-50/50 to-slate-50/50 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Did You Know?</CardTitle>
              </CardHeader>
              <CardContent>
                {activeTab === 'psychological' && (
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Studies show that people with gambling problems are 3-4 times more likely to suffer from mood disorders like depression and anxiety.
                    </p>
                    <div className="bg-blue-100/50 p-6 rounded-xl border border-blue-200/50">
                      <Heart className="text-blue-600 mb-3" size={24} />
                      <p className="text-slate-700 leading-relaxed">
                        The brain&apos;s reward system releases dopamine during gambling, creating the same chemical response as substance abuse.
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === 'biological' && (
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Genetic factors account for approximately 35-54% of the risk for developing gambling disorders, making it one of the most heritable mental health conditions.
                    </p>
                    <div className="bg-blue-100/50 p-6 rounded-xl border border-blue-200/50">
                      {React.createElement(causesData.biological.icon, {
                        className: "text-blue-600 mb-3",
                        size: 24
                      })}
                      <p className="text-slate-700 leading-relaxed">
                        People with certain genetic variations process dopamine differently, making them more susceptible to addictive behaviors.
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === 'social' && (
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      In the Philippines, the proliferation of online gambling and casinos has made gambling more accessible than ever before.
                    </p>
                    <div className="bg-blue-100/50 p-6 rounded-xl border border-blue-200/50">
                      {React.createElement(causesData.social.icon, {
                        className: "text-blue-600 mb-3",
                        size: 24
                      })}
                      <p className="text-slate-700 leading-relaxed">
                        Social media and peer influence play significant roles, especially among younger demographics in urban areas.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Factors Visualization */}
      <section className="px-4 py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Risk Factor Analysis
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Understanding your risk factors can help in prevention and early intervention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Risk Levels by Factor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {riskFactors.map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-700">{item.factor}</span>
                        <span className="text-sm text-blue-600 font-medium">{item.risk}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${item.risk}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">
                  Philippines-Specific Factors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  {philippinesSpecificFactors.map((factor, index) => {
                    const IconComponent = factor.icon;
                    return (
                      <div key={index} className="flex items-start group">
                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 transition-colors group-hover:bg-blue-100">
                          <IconComponent className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 mb-1">{factor.title}</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{factor.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Recognize the Signs Early
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-light mb-12 max-w-2xl mx-auto">
            Understanding the causes is the first step. Learn about the effects and get help before it&apos;s too late.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-all duration-200 hover:scale-105">
              <Link href="/gambling/effects">
                Learn About Effects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 px-8 transition-all duration-200 hover:scale-105">
              <Link href="/gambling/get-help">
                Get Help Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CausesPage;
