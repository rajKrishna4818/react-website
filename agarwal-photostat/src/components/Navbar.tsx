
import Button from './Button'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-logo">
                AP
            </div>
            <ul className="navbar-links">
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-btn">
                <Button btnText='Vist Us' />
                <Button btnText='login' />
            </div>
        </nav>
    </>
  )
}

export default Navbar