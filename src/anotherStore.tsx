import React, { useState, Dispatch, SetStateAction }  from 'react';
import { itemCount } from './helpers/cart';

export const TotalContext = React.createContext<
  [number, Dispatch<SetStateAction<number>>]
>([0, () => null])

interface Props {
  children: React.ReactNode
}

function AnotherStore({ children }: Props) {
  const [count, setCount] = useState(itemCount())
  return (
    <TotalContext.Provider value={[count, setCount]}>
      {children}
    </TotalContext.Provider>
  );
}

export default AnotherStore;
