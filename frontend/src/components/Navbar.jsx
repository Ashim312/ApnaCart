import React, { useState, useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems, adminUrl } = useContext(ShopContext);
  const location = useLocation();

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  useEffect(() => {
    if (location.pathname !== '/collection') {
      setShowSearch(false);
    }
  }, [location.pathname, setShowSearch]);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={assets.logo} className='w-36' alt="Logo" /></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-800 '>
         <NavLink to='/' className= 'flex flex-col items-center gap-1'>
         <p>HOME</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>
        <NavLink to='/collection' className= 'flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/about' className= 'flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/contact' className= 'flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        
      </ul>

      <div className='flex items-center gap-6'>
        {location.pathname === '/collection' && (
          <img onClick={() => setShowSearch(true)} src={assets.search_img} alt="Search" className='w-5 cursor-pointer' />
        )}
        <a href={adminUrl} target="_blank" rel="noopener noreferrer" className='hidden sm:inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-slate-100 transition'>
          Admin Panel
        </a>
        <div className='relative group'>
          <img onClick={()=> token ? null : navigate('/login')} src={assets.profile_icon} alt="Profile" className='w-5 cursor-pointer' />
          {/* Dropdown Menu */}
          {token && 
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-xl shadow-md'>
              <p className='cursor-pointer hover:text-black'>My Account</p>
              <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>}
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} alt="Cart" className='w-5 min-w-5' />
          <p className='absolute -bottom-1.5 -right-1.5 text-center leading-4 aspect-square bg-black text-white text-xs w-4 rounded-full'>{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="Menu" className='w-5 cursor-pointer sm:hidden' />
      </div>
      {/* Sidebar menu for small or mobile screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all shadow-lg transform ${visible ? 'w-full' : 'w-0'}`}>
         <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} className='flex item-center gap-4 p-3 cursor-pointer'>
              <img src={assets.menu_icon} className='h-4 rotate-180' alt="Logo" />
              <p>Back</p>
            </div>
            <NavLink to='/' onClick={()=>setVisible(false)} className= 'py-2 pl-6 border-t'>HOME</NavLink>
            <NavLink to='/collection' onClick={()=>setVisible(false)} className= 'py-2 pl-6 border-t'>COLLECTION</NavLink>
            <NavLink to='/about' onClick={()=>setVisible(false)} className= 'py-2 pl-6 border-t'>ABOUT</NavLink>
            <NavLink to='/contact' onClick={()=>setVisible(false)} className= 'py-2 pl-6 border-t'>CONTACT</NavLink>
         </div>
      </div>
    </div>
  )
}

export default Navbar
