import { useState } from 'react';
import { StateType, UserType } from 'types/types';
import useLocalStorage from './useLocalStorage';

export const initialState: StateType = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
  listIsOpen: false,
  userExist: null,
  isLogged: null,
  filter: '',
  user: {},
};

const useInitialState = () => {
  const [user, setUser, findValue] = useLocalStorage("user", null); //uso el hook para almacenar en el localStorage los datos del usuario
  const [state, setState] = useState(initialState);

  const addToCart = (payload: any) => {
    setState({
      ...state,
      cart: state.cart.includes(payload) ? state.cart : [...state.cart, payload],
    });
  };

  const removeFromCart = (payload: any) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };

  const toogleList = () => {
    setState({
      ...state,
      listIsOpen: !state.listIsOpen,
    });
  };

  const changeFilter = (filterString: string) => {
    setState({
      ...state,
      filter: filterString,
    });
  };

  const changeProducts = (products: any) => {
    if (state.filter == 'All') {
      return products;
    }
    const newProducts = products.filter((prod: any) => prod?.category?.name == state.filter);
    return newProducts.length > 0 ? newProducts : products;
  };

  const register = (email:string, value: UserType) => {
    setUser(email, value);
  };

  const login = (email: string, password: string) => {
    const userLogin = findValue(email);

    if(!userLogin || password != userLogin.password){
      setState({
        ...state,
        isLogged: false,
      });
      return;
    }

    setState({
      ...state,
      isLogged: true,
      user: userLogin
    });
  };

  const logout = () => {
    setState({
      ...state,
      isLogged: false,
      user: {}
    });
  };

  const changePassword = (email: string) => {
    const user = findValue(email);

    if(!user){
      return {
        userExist: false
      };
    }

    return {userExist: true, user: user};
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrder,
    toggleMenu,
    toogleList,
    changeFilter,
    changeProducts,
    login,
    logout,
    register,
    user,
    changePassword
  };
};

export default useInitialState;
