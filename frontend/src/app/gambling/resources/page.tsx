import { Phone, MapPin, Globe, Users, Heart, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function ResourcesPage() {
  const hotlines = [
    {
      name: "Gamblers Anonymous Philippines",
      phone: "0917-509-4080",
      available: "24/7",
      contact: "Reagan"
    },
    {
      name: "National Crisis Hotline",
      phone: "0917-899-8727",
      available: "24/7",
      contact: "DOH"
    },
    {
      name: "Suicide Prevention Hotline",
      phone: "0917-558-4673",
      available: "24/7",
      contact: "Natasha Goulbourn Foundation"
    },
    {
      name: "National Crisis Hotline (Landline)",
      phone: "1553",
      available: "24/7",
      contact: "Toll-free"
    }
  ];

  const supportGroups = [
    {
      name: "Gamblers Anonymous Philippines",
      location: "Metro Manila",
      schedule: "Weekly meetings",
      contact: "0917-509-4080",
      type: "In-person & Virtual"
    },
    {
      name: "Gamblers Anonymous Cebu",
      location: "Cebu City",
      schedule: "Weekly meetings",
      contact: "Contact via GA Philippines",
      type: "In-person"
    },
    {
      name: "Online Support Groups",
      location: "Virtual",
      schedule: "Multiple sessions weekly",
      contact: "Via website",
      type: "Virtual"
    }
  ];

  const treatmentCenters = [
    {
      name: "National Center for Mental Health",
      location: "Mandaluyong City",
      services: ["Outpatient counseling", "Psychiatric evaluation", "Group therapy"],
      contact: "(02) 8531-9001"
    },
    {
      name: "Philippine General Hospital - Psychiatry",
      location: "Manila",
      services: ["Individual therapy", "Addiction counseling", "Family therapy"],
      contact: "(02) 8554-8400"
    },
    {
      name: "Private Treatment Facilities",
      location: "Various locations nationwide",
      services: ["Inpatient treatment", "Intensive outpatient", "Residential programs"],
      contact: "Contact for specific centers"
    }
  ];

  const onlineResources = [
    {
      name: "Gamblers Anonymous International",
      url: "www.gamblersanonymous.org",
      description: "Global organization with resources and meeting locator"
    },
    {
      name: "National Council on Problem Gambling",
      url: "www.ncpgambling.org",
      description: "Education, resources, and treatment information"
    },
    {
      name: "BeGambleAware",
      url: "www.begambleaware.org",
      description: "Self-help tools and support services"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-8 bg-blue-50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-blue-100">
            <Heart className="w-8 h-8 text-blue-600" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 tracking-tight">
            Resources & Support
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Find help, support groups, and treatment centers in the Philippines. You don&apos;t have to face this alone.
          </p>
        </div>
      </section>

      {/* Emergency Hotlines */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Emergency Hotlines
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Reach out anytime, day or night
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {hotlines.map((hotline, index) => (
              <Card key={index} className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors hover:bg-blue-100">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-slate-900 mb-2">{hotline.name}</h3>
                      <a
                        href={`tel:+63${hotline.phone.replace(/^0/, '').replace(/-/g, '')}`}
                        className="text-2xl font-light text-blue-600 block mb-2 hover:underline"
                      >
                        {hotline.phone}
                      </a>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span className="font-medium">{hotline.available}</span>
                        <span>•</span>
                        <span>{hotline.contact}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Groups */}
      <section className="px-4 py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Support Groups
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Connect with others who understand your journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {supportGroups.map((group, index) => (
              <Card key={index} className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 rounded-2xl flex items-center justify-center transition-colors hover:bg-blue-100">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <CardTitle className="text-xl text-center text-slate-900">{group.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                      <div>
                        <p className="font-medium text-slate-900">{group.location}</p>
                        <p className="text-slate-600">{group.type}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                      <div>
                        <p className="text-slate-600">{group.schedule}</p>
                        <p className="text-slate-600">{group.contact}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Centers */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Treatment Centers
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Professional treatment facilities across the Philippines
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {treatmentCenters.map((center, index) => (
              <Card key={index} className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 rounded-2xl flex items-center justify-center transition-colors hover:bg-blue-100">
                    <Building2 className="text-blue-600" size={24} />
                  </div>
                  <CardTitle className="text-xl text-center text-slate-900">{center.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                    <MapPin size={14} />
                    <span>{center.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-slate-900 mb-2">Services:</h4>
                      <ul className="space-y-1.5">
                        {center.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Phone size={14} className="text-blue-600" />
                        <span>{center.contact}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Resources */}
      <section className="px-4 py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Online Resources
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              Access support and information from anywhere
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {onlineResources.map((resource, index) => (
              <Card key={index} className="border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors hover:bg-blue-100">
                      <Globe className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-slate-900 mb-2">{resource.name}</h3>
                      <a
                        href={`https://${resource.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm hover:underline block mb-2 font-light"
                      >
                        {resource.url}
                      </a>
                      <p className="text-sm text-slate-600 leading-relaxed">{resource.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50/50 to-slate-50/50 backdrop-blur-sm">
            <CardContent className="p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 tracking-tight">
                Need Help Right Now?
              </h2>
              <p className="text-lg text-slate-600 font-light mb-8 max-w-2xl mx-auto">
                Don&apos;t wait to get the support you need. Reach out today and take the first step towards recovery.
              </p>
              <a
                href="tel:+639175094080"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                <Phone className="mr-2" size={20} />
                Call Now: 0917-509-4080
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
