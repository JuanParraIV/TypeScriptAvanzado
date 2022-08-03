// Parámetros rest flexibilidad en los parámetros

export enum ROLES {
  ADMIN = "ADMIN",
  CLIENT = "CLIENT",
  MANAGER = "MANAGER",
  CUSTOMER = "CUSTOMER",
}

export type User = {
  name: string,
  role: ROLES,
}
const myFunc = (...args) => args

console.log(myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9))

const user: User = {
  name: 'Juan',
  role: ROLES.ADMIN,
}

const user2: User = {
  name: 'Jose',
  role: ROLES.CLIENT,
}

const user3: User = {
  name: 'Michael',
  role: ROLES.MANAGER,
}

const user4: User = {
  name: 'Maria',
  role: ROLES.CUSTOMER,
}

export const checkUserRole = (user) => {
  if (user.role === ROLES.ADMIN) {
    return `El usuario: ${user.name} es ${user.role}`
  }

  if (user.role === ROLES.CLIENT) {
    return `El usuario: ${user.name} es ${user.role}`
  }

  if (user.role === ROLES.MANAGER) {
    return `El usuario: ${user.name} es ${user.role}`
  }

  if (user.role === ROLES.CUSTOMER) {
    return `El usuario: ${user.name} es ${user.role}`
  }
}

export const checkUserRoleV2 = (user, ...roles: string[]) => {
  if (roles.includes(user.role)) {
    return true
  }
  return false
}

console.log(checkUserRole(user))
console.log(checkUserRole(user2))
console.log(checkUserRole(user3))
console.log(checkUserRole(user4))

console.log(checkUserRoleV2(user4, ROLES.CUSTOMER))
