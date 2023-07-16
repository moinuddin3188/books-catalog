export type UserName = {
  firstName: string;
  lastName: string;
};

export type UserRole = "user" | "admin";

export type IUser = {
  name: UserName;
  email: string;
  password: string;
};
