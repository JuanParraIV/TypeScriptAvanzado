export enum  ROLES{
    ADMIN = "ADMIN",
    USER = "USER"
    }

export type User = {
    name: string,
    role: ROLES
}

export const nicoUser: User = {
    name: "Nico",
    role: ROLES.ADMIN
}