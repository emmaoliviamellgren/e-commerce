import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-around h-24 border-b border-slate-300">
        <h1 className="text-xl">E-Commerce</h1>
        <ul className="flex gap-6 nowrap items-center">
          <li><NavLink to="/contact" className="text-sm hover:border-b border-neutral-600">Get in Touch</NavLink></li>
          <li><a href="#" className="flex gap-1 items-center text-sm bg-orange-700 text-white transition hover:opacity-75 px-4 py-2 rounded-md shadow-md shadow-orange-400 tracking-wide"><span>Check-out</span><FaShoppingCart /></a></li>
        </ul>
    </div>
  )
}
export default Navbar