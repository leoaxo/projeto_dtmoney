import { Dashboard } from "./Components/Dashboard";
import Modal from 'react-modal';
import { Header } from "./Components/Header/Index";
import { GlobalStyle } from "./styled/globa";
import { useState } from "react";
import { NewTransactionModal } from "./NewTransaction";
import { TransactionsProviver } from "./hooks/useTransactions";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState (false);
  function handleOpenNewTransactionModal (){
      setIsNewTransactionModalOpen (true);
  }
  function handleCloseNewTransactionModal() {
   setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProviver>
      <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal}/>
      <NewTransactionModal 
      isOpen = {isNewTransactionModalOpen}
      onRequestClose = {handleCloseNewTransactionModal}
      />
       <Dashboard />
      <GlobalStyle/>
     
      </TransactionsProviver>
  );
}