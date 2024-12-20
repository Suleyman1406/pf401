import { AvailabilityFilter } from "@/components/shared/availability-filter";
import { Hero } from "./components/Hero";

const HomePage = () => {
  return (
    <div className="container pt-4 lg:pt-8 pb-8 lg:pb-16 flex flex-col gap-y-6 lg:gap-y-8">
      <Hero />
      <AvailabilityFilter />
    </div>
  );
};

export default HomePage;
