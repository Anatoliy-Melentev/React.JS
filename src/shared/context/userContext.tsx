import React from 'react';
import { useUserData } from "../../hooks/useUserData";

interface IUserContextData {
  name?: string;
  iconImg?: string;
}

export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const
    [data] = useUserData(),
    { Provider } = userContext;

  return (
    <Provider value={data}>
      {children}
    </Provider>
  );
}