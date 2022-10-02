import './style.css';
import { BsBank2} from 'react-icons/bs' //LOGO TB
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="content">
              <Link to='/'><BsBank2 fontSize={"2.5em"}/></Link> 

                    <ul>
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/cadastro'>Cadastro</Link> </li>
                        <li><Link to='/contacorrente'>Conta Corrente</Link> </li>
                        <li><Link to='/financiamento'>Financiamento</Link></li>
                        <li><Link to='/sobre'>Sobre Nós</Link></li>
                    </ul>

            </div>
        </header>
    )
}

export default Header