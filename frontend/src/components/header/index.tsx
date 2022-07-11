import './styles.css'
import logo from '../../assets/img/mercedes-logo.svg'

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="springReact" />
                <h1>React com Spring Boot</h1>
                <p>Desenvolvido por Augusto</p>
            </div>
        </header>
    )
}

export default Header
