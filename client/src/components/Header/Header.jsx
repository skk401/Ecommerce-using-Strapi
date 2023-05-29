import "./Header.scss";

import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
const Header = () => {
const [scrolled,setScrolled]=useState(false);
const [showCart,setshowCart]=useState(false);
const [showSearch,setshowSearch]=useState(false);
const {cartCount} =useContext(Context)
const navigate=useNavigate()

const handleScroll=()=>{
    const offset=window.scrollY;
    //amount of scroll done is stored in offset
   if(offset > 200){
setScrolled(true);
   }
   else{
    setScrolled(false);
   }
}

useEffect(() =>{
window.addEventListener("scroll", handleScroll)
},[])


    return (
    <>
    <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
        <div className="header-content">
            <ul className="left">
                <li onClick={()=> navigate("/")}>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center" onClick={()=> navigate("/")}>HiremeClub</div>
            <div className="right">
                <TbSearch onClick={()=> setshowSearch(true)}></TbSearch>
                <AiOutlineHeart></AiOutlineHeart>
                <span className="cart-icon" 
                onClick={()=> setshowCart(true)}
                >
                    <CgShoppingCart></CgShoppingCart>
                   {!!cartCount && <span>{cartCount}</span>}
                </span>
            </div>
        </div>
       
    </header>
    {showCart && <Cart setshowCart={setshowCart}></Cart>}
    {showSearch && <Search setshowSearch={setshowSearch}></Search>}
    </>
    )
};

export default Header;
