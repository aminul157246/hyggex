
import {   NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {

  const items = <>
  
    <li className="list-none ml-4"><NavLink
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
      style={{ background: 'none' }}
      to={'/'}>Home</NavLink></li>

    <li className="list-none ml-4"><NavLink 
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
      style={{ background: 'none' }} to={'/flashCard'}>Flashcard</NavLink></li>

    <li className="list-none ml-4"><NavLink 
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
      style={{ background: 'none' }}
       to={'/contact'}>Contact</NavLink></li>

    <li className="list-none ml-4"><NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
      style={{ background: 'none' }}
       to={'/faq'}>FAQ</NavLink></li>

    <li className="list-none ml-4">
       <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "font-bold" : ""}
        style={{ background: '#2196F3', paddingTop:'4px', paddingBottom : '4px' ,paddingRight : '8px' , paddingLeft : '8px', color : 'white', borderRadius :" 12px" }} to={'/login'}>Login </NavLink>
     
    </li>
    



  </>

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
    </div>
    <a className="w-12 lg:w-32"><img src={logo} alt="" /></a>
  </div>
 
  <div className="navbar-end">
    {items}
  </div>
</div>
  );
};

export default Navbar;