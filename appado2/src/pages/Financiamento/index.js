import Header from '../../components/Header';
import './style.css'

function Financiamento() {
    return (
        <div>
            <Header/>
            <h3>Nome do Cliente: xxxxxxxxxxxxxxxx</h3>
            <br/>
            <form>
                <div className='valor'>
                <label>Valor Solicitado: </label>
                <input/>
                </div>
                
                <button>Calcular Financiamento</button>
            </form>
           
            <div className='calculo'>
                <h4 className='texto-financiamento'>Calculo do Financiamento:</h4>
                <p className='texto-financiamento' >Valor Solicitado: 00.000,00</p>
                <p className='texto-financiamento' >Taxa de Juros: 00%</p>
                <div className='calculo2'>
                    <div className='parcelas'>
                    <p>2 Parcelas de: 00.000,00</p>
                    <p>3 Parcelas de: 00.000,00</p>
                    <p>4 Parcelas de: 00.000,00</p>
                    </div>
                    <div className='total'>
                        <p>Total Pago: 00.000,00</p>
                        <p>Total Pago: 00.000,00</p>
                        <p>Total Pago: 00.000,00</p>
                    </div>
                </div>
                
            </div>

        </div>
        
    )
}

export default Financiamento;