const NavItem = ({ href, label }: { href: string; label: string  }) => {
    return (
        <li className="text-xs font-medium text-gray-700 hover:text-yellow-500">
        <a 
            className="flex items-center px-4  transition-colors duration-200 hover:bg-gray-100 rounded-md"
            href={href}
        >
            {label}
        </a>
        </li>
    );
}
export default NavItem;