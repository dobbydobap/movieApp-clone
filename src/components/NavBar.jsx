import {link} from 'react-router-dom'
import '../css/NavBar.css'

function NavBar(){
    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
                <link to="/">Movie App</link>
            </div>
            <div className='navbar-links'>
                <link to="/" className='nav-link'>Home</link>
                <link to="/favorites" className='nav-link'>Favorites</link>
            </div>
        </nav>
    )
}
export default NavBar