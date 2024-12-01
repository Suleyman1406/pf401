import { Rent } from "@/types";

export type GetAllRentResponseType = {
  items: Rent[];
  message: string;
};
export type GetByIdRentResponseType = {
  item: Rent;
  message: string;
};

export type RentRequestPayload = {
  name: string;
  fuel: number;
  gearBox: string;
  price: number;
  description: string;
  capacity: number;
  discount: number;
  categoryId: string;
  pickUpLocation: string;
  dropOffLocations: string[];
  images?: File[];
  showInRecommendation: boolean;
};
