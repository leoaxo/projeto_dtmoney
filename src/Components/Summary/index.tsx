import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Contatiner } from "./styles";


export function Summary (){
    return(
        <Contatiner>
            <div>
                <header>
                    <p>Entrada</p>
                <img src = {incomeImg}alt = "Entradas" />
                </header>
                <strong> R$5000</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                <img src = {outcomeImg}alt = "Saidas" />
                </header>
                <strong>-R$4000</strong>
            </div>
            
            <div className = "highlight-background">
                <header>
                    <p>Total</p>
                <img src = {totalImg}alt = "Total" />
                </header>
                <strong>R$1000</strong>
            </div>
        </Contatiner>
    )
}