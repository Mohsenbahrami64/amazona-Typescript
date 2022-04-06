import Product from "../components/Product";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";


export default function HomeScreen() {
  const [products , setProducts] = useState([]);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(false);
  useEffect(()=>{
        const fetchData = async ()=>{
          try{
            setLoading(true);
            const {data} =await axios.get('/api/products');
            setLoading(false);
            setProducts(data);
          }catch (err:any){
            setError(err.message);
             setLoading(false);
          }
        
        }
        fetchData();
  },[])
  return (
    <div>
      {loading ?
        (<LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox varient="danger">{error}</MessageBox>
        ) : (
          <div className="row center">
            {products.map((product) => (
              <Product product={product}  ></Product>
            ))}
          </div>
        )
      }
  </div>
  )
}
  