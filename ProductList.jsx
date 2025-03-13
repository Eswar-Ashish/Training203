import {useEffect, useState} from "react";
//import "./Mobile.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const ProductList=({endpoint})=>{
    const[products, setProducts]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:9000/${endpoint}').then(res => setProducts(res.data));

    },[endpoint]);

    return(
        <div className="parent">
            {products.map((product)=>{
                <div key={product.id} className="child" onClick={()=>navigate(`/product/${endpoint}/${product.id}`)}>
                    <img src={product.pimage} alt={product.name} />
                    <h2><i className="fa fa-rupee"></i>{product.pcost}</h2>
                    <p>Qty: {product.pqty}</p>
                </div>
            })}
        </div>
    );
}

export const Mobiles=()=> <ProductList endpoint="mobiles"/>
export const Laptops=()=> <ProductList endpoint="laptops"/>
export const Watches=()=> <ProductList endpoint="watches"/>
