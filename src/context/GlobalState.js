import { createContext, useReducer } from "react";


const GlobalContext = createContext()


const GlobalProvider = () => {
  const [state , dispatch] = useReducer(AppReducer, initialState);
  return (
    
  )
};

export default GlobalProvider