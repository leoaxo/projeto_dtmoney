import { useState } from 'react';
import  Modal  from'react-modal';
import logoimg from '../../assets/logo.svg';
import { Container, Content } from './Styled';
Modal.setAppElement('#root');
interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}
export function Header ({onOpenNewTransactionModal}:HeaderProps){
   
    return (
    <Container>
        <Content>
        <img src= {logoimg} alt = "gt money" />
        <button type = "button" onClick = {onOpenNewTransactionModal}>
            Nova transação 
        </button>
     
        </Content>
    </Container>
    )
}