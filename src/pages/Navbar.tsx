import { Link } from "react-router-dom";
import './bar.scss'

const Navbar = () => {
    //const { getNoOfItemsInCart, setShouldShow } = useCartContext();
    return (
        <div className="navbar">
        <li>
          <Link to="/home">Главная страница</Link>
        </li>
        <li>
          <Link to="/shop">Магазин</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
      </div>
      );
    }
  
  export default Navbar;