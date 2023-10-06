import React, { useState } from "react";

export const Context = React.createContext;
export const ContextProvide = ({ children }) => {
  const [items, setItems] = useState("anjay");
  return (
    <Context.Provider value={{ items, setItems }}>{children}</Context.Provider>
  );
};
