export type User = {
  id: string;
  email: string;
};

export type Theme = "light" | "dark" | "default";

export type Guest = Omit<User, "email" | "id">;