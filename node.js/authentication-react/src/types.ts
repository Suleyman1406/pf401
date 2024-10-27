export type User = {
  id: string;
  name: string;
  surname: string;
  email: string;
  isBlocked: boolean;
  role: UserRole;
};

export enum UserRole {
  SuperAdmin = "superadmin",
  Admin = "admin",
  User = "user",
}
