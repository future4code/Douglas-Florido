export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export const TABLE_NAME = "Recipe"

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type user = {
   id: string,
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type signupInput = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: string
}

export const convertStringToUserRole = (role: string): USER_ROLES => {

   switch (role.toUpperCase()) {
      case "NORMAL":
         return USER_ROLES.NORMAL;
      case "ADMIN":
         return USER_ROLES.ADMIN;
      default:
         throw new Error("User role must be 'NORMAL' or 'ADMIN'")
   }
}

export type loginInput = {
   email: string,
   password: string
}