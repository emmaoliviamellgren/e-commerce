import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-around h-24 border-b border-slate-300">
        <h1 className="text-xl">E-Commerce</h1>
        <ul className="flex gap-6 nowrap items-center">
          <li><NavLink to="/contact" className="text-sm hover:border-b border-neutral-600">Get in Touch</NavLink></li>
          <li><a href="#" className="flex gap-1 items-center text-sm bg-stone-100 bg-opacity-80 hover:bg-stone-200 px-4 py-3 border rounded-full border-neutral-400"><span>Check-out</span><FaShoppingCart /></a></li>
        </ul>
    </div>
  )
}
export default Navbar