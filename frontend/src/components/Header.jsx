const Header = () => {
    return (
        <header className="bg-[#8CDBE0] flex items-center justify-between text-2xl h-12 inset-shadow-md">
            <a href="#" className='font-[Climate_Crisis] ml-10'>Gigsup</a>
            <ul className="flex gap-4 mr-6">
                <li><a href="#" class="hover:underline me-4 md:me-6">Login</a></li>
                <li><a href="#" class="hover:underline me-4 md:me-6">Register</a></li>
                <li><a href="#" class="hover:underline me-4 md:me-6">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header