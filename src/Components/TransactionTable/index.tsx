import { useEffect } from "react"
import { api } from "../../services/api";
import {Container} from "./styled"
export function TransactionsTable(){
    useEffect(()=> {
       api.get('transactions')
       .then(response => console.log(response.data))
    }, []);
    
    return(
        
    <Container>
      <table>
           <thead>
               <tr>
                   <th>Titulo</th>
                   <th>Valor</th>
                   <th>Categoria</th>
                   <th>Data</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td>Lanche</td>
                   <td className ="withdraw">-R$15</td>
                   <td>Comida</td>
                   <td>20/03/2021</td>
               </tr>
           </tbody>
           <tbody>
               <tr>
                   <td>Deposito</td>
                   <td className ="deposit">R$1.100</td>
                   <td>Salario</td>
                   <td>20/03/2021</td>
               </tr>
           </tbody>
       </table>
       
    </Container>
    )
    
   
}