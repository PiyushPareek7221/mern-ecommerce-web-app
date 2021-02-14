import React, { useEffect, useState } from 'react'
import '../styles.css'
import {API} from '../backend'
import Base from './Base'
import Card from './Card'
import { loadCart } from './helper/cardHelper'
import PaymentB from './PaymentB'


const Cart = ()=> {

    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        setProducts(loadCart);
    }, [reload])

    const loadAllProducts = (products) => {
        return (
          <div>
            <h2>This section is to load products</h2>
            {products.map((product, index) => (
              <Card
                key={index}
                product={product}
                removeFromCart={true}
                addToCart={false}
                setReload={setReload}
                reload={reload}
              />
            ))}
          </div>
        );
      };
    
    return (
        <Base title='Cart Page' description='Ready to checkout'>
            {/* children */}
            <div className='row text-center'>
                <div className='col-6'>{products.length>0? loadAllProducts(products):(
                  <h3>No products in cart</h3>
                )}</div>
                <div className='col-6'><PaymentB products={products} setReload={setReload} /></div>
            </div>
        </Base>
    )
}

export default Cart;