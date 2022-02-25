import React from 'react';

type ValueType = {
  meaningOfLife: number;
}

const NewContext = React.createContext<ValueType>(undefined);
  
const NewContextProvider = ({children}:{children: JSX.ReactElement}) => {
  const value = { someCoolValue: 42 };
  return (
    <NewContext.Provider value={value}>
      {children}
    </NewContext.Provider>
  );
}
  
const useNewContext = () => {
  const ctx = useContext(NewContext);
  if (ctx === undefined) {
    throw new Error("useNewContext must be used within a NewContextProvider");
  }
  return ctx;
}

export { NewContextProvider, useNewContext};
