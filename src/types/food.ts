export type foodType = {
  id: number;
  name: string;
  description: string;
  price: string;
  available: true;
  image: string;
};

export type FoodSubmissionType = Omit<foodType, "id" | "available">;
