//import styled from 'styled-components';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import {TransactionsProvider} from "./hooks/useTransactions";

Modal.setAppElement('#root'); //acessibilidade

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); //incia como false,
    //pois o modal está fechado

    function handleOpenNewTransactionModal(){ //pattern-'handle' quando vou criar uma função que é
        //executada a partir de uma ação do user
        setIsNewTransactionModalOpen(true);
    }
    
    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }
  return (
    <TransactionsProvider> 
      <h1></h1>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      
      <Dashboard />

      <NewTransactionModal
      isOpen ={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}
      />
     
      <GlobalStyle />
    </TransactionsProvider>
  );
}

