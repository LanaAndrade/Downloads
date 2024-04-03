import {Link} from 'react-router-dom'

function Nav(){

    return(
        <>
            <header className='menu'>
                <nav className='nav-menu'>
                    <ul>
                        <Link className="link" to="/">Home</Link>
                        <Link className="link" to="/sobre">Sobre</Link>
                        <Link className="link" to="/portifolio">Portifolio</Link>
                        <Link className="link" to="/contato">Contato</Link>
                        <Link className="link" to="/login">Login</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav