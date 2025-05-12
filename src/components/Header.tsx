import {Link} from "react-router";
import PfpImage from '../assets/nijika.jpg';

export default function Header() {
    return (
        <header>
            <div className='container-lg'>
                <div className='flex-row layout'>
                    <p className='logo'>LUMINART</p>
                    <div className='desktop-links'>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Shop</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/'>Contacts</Link>
                    </div>
                    <div className='desktop-icons'>
                        <Link className='flex-center' to='/'>
                            <i className="bi bi-heart-fill"></i>
                        </Link>
                        <Link className='flex-center' to='/'>
                            <i className="bi bi-cart-fill"></i>
                        </Link>
                        <Link className='pfp-link' to='/'>
                            <img src={PfpImage} alt="pfp"/>
                        </Link>
                    </div>
                    <i className="bi bi-list"></i>
                </div>
            </div>
        </header>
    )
}