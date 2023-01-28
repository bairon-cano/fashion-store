export type StateType = {
  cart: any[],
  menuIsOpen: boolean,
  orderIsOpen: boolean,
  userExist: boolean | null,
  isLogged: boolean | null,
  filter: string,
  user: UserType | {}
}

export type UserType = {
  username: string,
  email: string,
  password: string
}