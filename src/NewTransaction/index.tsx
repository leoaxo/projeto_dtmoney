import Modal from 'react-modal';
import { Container, TransactionTypeContaine } from './styled';
import closeImg from '../assets/close.svg';
import incomeImg from '../assets/income.svg';
import outcomeImg from '../assets/outcome.svg';
interface NewTransactionModalProps {
isOpen: boolean;
onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactionModalProps){
    return(
        <Modal 
        isOpen = {isOpen} 
        onRequestClose = {onRequestClose}
        overlayClassName = "react-modal-overlay"
        className = "react-modal-content"
       >
         <button type="button" 
         onClick={onRequestClose}
         className="react-modal-close"
         ><img src={closeImg} alt="Fecha Modal"/></button>
         <Container>
         <h2>  Cadastra Transação </h2>
         <input placeholder = "Titulo"
         />
         
          <input type="Number"
           placeholder = "Valor"
         />
         <TransactionTypeContaine>
             <button 
             type="button">
              <img src={incomeImg} alt="Entrada"/>
              Entrada 
             </button>
             <button 
             type="button">
              <img src={outcomeImg} alt="Saida"/>
              Saida 
             </button>
          </TransactionTypeContaine>
          <input 
           placeholder = "Catedoria"
         />
         
         <button type="submit">
           Cadastrar
         </button>
         </Container>
         
         
       </Modal>
    )
}