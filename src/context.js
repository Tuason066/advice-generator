import { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import axios from 'axios';

const AppContext = createContext();

const initialState = { id: 0, advice: '', isLoading: true };

function AppProvider({ children }) {
  const [advice, dispatch] = useReducer(reducer, initialState);

  const fetchAdvice = async () => {
    const { data } = await axios(
      'https://api.adviceslip.com/advice?t=' + Math.random()
    );

    dispatch({ type: 'FETCH_ADVICE', payload: data.slip });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <AppContext.Provider value={{ advice, fetchAdvice }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
