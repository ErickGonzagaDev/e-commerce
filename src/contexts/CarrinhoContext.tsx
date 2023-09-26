import { ICelular } from "../interface/ICelular";
import React, { createContext, useEffect, useState } from "react";

interface CarrinhoContextProps {
  addCarrinho: (value: ICelular) => void;
  excluirCarrinho: (value: ICelular) => void;
  listaCarrinho: ICelular[];
  total: number
}

export const CarrinhoContext = createContext<CarrinhoContextProps>({
  addCarrinho: () => {},
  excluirCarrinho: () => {},
  listaCarrinho: [],
  total:0
});

interface CarrinhoProviderProps {
  children: React.ReactNode;
}

export const CarrinhoProvider = ({ children }: CarrinhoProviderProps) => {
  const [listaCarrinho, setListaCarrinho] = useState<ICelular[]>([]);
  const [total,setTotal] = useState(0)

  const addCarrinho = (celularAdd: ICelular) => {
    setListaCarrinho([...listaCarrinho, celularAdd]);
  };

  const excluirCarrinho = (celularExcluir:ICelular)=>{
    setListaCarrinho(listaCarrinho.filter(celular=> celular.modelo !== celularExcluir.modelo))
  }

  useEffect(()=>{
    const listaTotal = listaCarrinho.reduce((total,celular)=> total + celular.preco,0)
    setTotal(listaTotal)
  },[listaCarrinho])

  return (
    <CarrinhoContext.Provider value={{ addCarrinho, listaCarrinho,excluirCarrinho,total }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
