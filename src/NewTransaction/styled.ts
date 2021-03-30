import styled from 'styled-components';
import {darken, transparentize} from 'polished';
import { isPropertySignature } from 'typescript';
export const Container = styled.form`

h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}
input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    

    &::placeholder{
        color: var(--text-body);
    }
    & + input {
        margin-top: 1rem;
    }
}
    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--gree);
        font-weight: 600;
        font-size: 1rem;
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        margin-top: 1.5rem;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`
export const TransactionTypeContaine = styled.div `
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;
interface Radioboxprops  {
    isActive: Boolean;
    activeColor: 'green'| 'red';


};
const colors = {
    green: '#33CC95',
    red: '#E52640'
};
export const Radiobox = styled.button<Radioboxprops>`

        height: 4rem;
        border: 2px solid #d7d7d7;
        border-radius: 0.25rem;
        
        transition:  0.5s;
        background: ${(props)=> props.isActive  
        ? transparentize(0.8, colors[props.activeColor])
        :'transparent'
        };
        &:hover{
            
            border-color: ${darken(0.2, '#D7D7D7')};
        }

        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 20px;
            height: 20px;
        }   

        span{
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
    

`