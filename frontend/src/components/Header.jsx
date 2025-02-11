import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-[#8CDBE0] flex items-center justify-between text-2xl h-12 inset-shadow-md border-b-1">
            <Link to='/' className='font-[Climate_Crisis] ml-10'>Gigsup</Link>
            <ul className="flex gap-4 mr-6">
                <li><Link to='/login' class="hover:underline me-4 md:me-6">Login</Link></li>
                <li><Link to='/register' class="hover:underline me-4 md:me-6">Register</Link></li>
                <li><a href="#" class="hover:underline me-4 md:me-6">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header