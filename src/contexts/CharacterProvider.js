import React, { createContext, useState } from 'react';

const CharacterContext = createContext();

export default CharacterContext;

export const CharacterProvider = ({ children }) => {
  const [character, setCharacter] = useState(null);
  
  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};
