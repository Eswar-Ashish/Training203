import {Link, Outlet } from 'react-router-dom';
import {useCart} from './cartContext';

const Dashboard=()=>{
    const {cart} = useCart();

    return(
        <div className="dashboard-container">
            <Link className='cart-icon' to="/cart" >
                🛒
                {cart.length >0 && <span className='cart-count'>{cart.length}</span>}
            </Link>

            <nav className='dashboard-nav'>
                <Link to="" >laptops</Link>
                <Link to="mobiles" >Mobiles</Link>
                <Link to="watches" >Watches</Link>
            </nav>

            <div className="dashboard-content">
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
