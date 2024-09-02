import {createContext, useContext, useState} from "react";

export type AlertContextType = {
  isOpen: boolean;
  type: string;
  message: string;
  onOpen: (type: string, message: string) => void;
  onClose: () => void;
};


const AlertContext = createContext<AlertContextType>({
  isOpen: false,
  type: 'success',
  message: '',
  onOpen: () => {},
  onClose: () => {},
});

export const AlertProvider = ({children}: {children: React.ReactNode}) => {
  const [state, setState] = useState({
    isOpen: false,
    type: 'success',
    message: '',
  });

  return (
    <AlertContext.Provider value={{
      ...state,
      onOpen: (type: string, message: string) => setState({...state, isOpen: true, type, message}),
      onClose: () => setState({...state, isOpen: false}),
    }}>
      {children}
    </AlertContext.Provider>
  );
}
export const useAlertContext = () => useContext(AlertContext);
