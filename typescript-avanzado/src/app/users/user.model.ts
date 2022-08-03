import { BaseModel } from "../base.model";

export enum ROLES {
  ADMIN = "ADMIN",
  CLIENT = "CLIENT",
  MANAGER = "MANAGER",
  CUSTOMER = "CUSTOMER",
  SELLER = "SELLER",
}

export interface User extends BaseModel{
  username: string,
  role: ROLES
}
