import { Summary } from "../Summary";
import { Container } from "./styles";
import { TransactionsTable } from "../TransactionTable/index";
export function Dashboard(){
    return(
   <Container>
       <>
       <Summary />
       <TransactionsTable />
       </>
   </Container> 
  );
}