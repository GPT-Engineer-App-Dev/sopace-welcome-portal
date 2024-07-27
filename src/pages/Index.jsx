import { Button } from "@/components/ui/button";
import { Rocket, Star, Moon, Sun } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <h1 className="text-5xl font-bold mb-4">Explore the Cosmos</h1>
        <p className="text-xl mb-8 max-w-2xl text-center">Embark on a journey through the wonders of space and discover the mysteries of the universe.</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Start Your Adventure
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Discover the Wonders of Space</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Rocket className="h-12 w-12 text-blue-600" />}
              title="Space Exploration"
              description="Learn about past, present, and future space missions."
            />
            <FeatureCard
              icon={<Star className="h-12 w-12 text-yellow-500" />}
              title="Stellar Phenomena"
              description="Explore the life cycles of stars and cosmic events."
            />
            <FeatureCard
              icon={<Moon className="h-12 w-12 text-gray-600" />}
              title="Planetary Science"
              description="Discover the diverse worlds within our solar system."
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-8">Join our community of space enthusiasts and start your cosmic journey today!</p>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900">
            Sign Up Now
          </Button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Index;
