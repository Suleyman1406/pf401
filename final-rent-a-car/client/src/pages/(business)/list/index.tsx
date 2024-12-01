import { RentCard } from "@/components/shared/rent-card";
import { Filters } from "./components/Filters";
import { AvailabilityFilter } from "@/components/shared/availability-filter";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

export const RentListPage = () => {
  return (
    <div className="grid xl:grid-cols-[360px,1fr]">
      <ScrollToTop />
      <Filters />
      <div className="bg-white" />
      <div className="flex flex-col gap-y-6 lg:gap-y-8 pt-6 lg:pt-8 px-6 lg:px-8">
        <AvailabilityFilter />
        <div className="grid  sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 ">
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />
          <RentCard />A
        </div>
      </div>
    </div>
  );
};
