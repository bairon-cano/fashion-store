import { useState } from "react";
import { UserType } from "types/types";

const useLocalStorage = (key: string, initialValue: UserType | null) => {

  //funcion para encontrar un valor en el localstorage
  const findValue = (findKey: string = key) => {
    try {
      const item = window.localStorage.getItem(findKey);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  };

  // aquí creo el estado e intento obtener los datos del local storage como valor inicial
  const [storedValue, setStoredValue] = useState(findValue);

  //funcion para almacenar el estado en el localstorage
  const setValue = (username:string, value: UserType) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(username, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };  

  return [storedValue, setValue, findValue];
};

export default useLocalStorage;