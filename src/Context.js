
import React, { createContext, useContext, useState } from 'react';
import PhotoProfil from './header/imageHeader/ImgProfil.jpg';

const ProfilContext = createContext();

export const ProfilProvider = ({ children }) => {
  const [headerData, setHeaderData] = useState({
    name: 'Gaoui Mounir',
    imgSrc: PhotoProfil,
  });

  return (
    <ProfilContext.Provider value={{ headerData, setHeaderData }}>
      {children}
    </ProfilContext.Provider>
  );
};

export const useHeader = () => {
  const context = useContext(ProfilContext);
  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
};
