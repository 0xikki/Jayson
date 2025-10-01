
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const EmergencyHelp = () => {
  return (
    <section className="py-16 bg-destructive text-destructive-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Need Immediate Help?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          If you&apos;re in crisis or need someone to talk to right now, help is available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-white text-destructive hover:bg-gray-100 font-semibold">
            <Link href="tel:+639175094080">
              Call GA Philippines: 0917-509-4080
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-destructive font-semibold">
            <Link href="/resources">
              View All Resources
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyHelp; 