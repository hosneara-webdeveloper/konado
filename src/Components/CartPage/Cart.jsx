/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartDetails from './CartDetails/CartDetails';
import Product from '../Prodcuts/Product';

const Cart = () => {
    const products = useLoaderData();
    return (
        <div className='pt-5 my-5'>
            <div className="container">
                <div className="cart-box pt-4 pb-3">
                    {
                        products.map(product => {
                            if(product.id == 1){
                                return <CartDetails key={product.id} product={product}></CartDetails>
                            }
                        })
                    }
                </div>
                <h1>Description</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi facere, non, ipsum expedita, a dolorem nemo magnam illum quisquam possimus error maxime beatae porro corporis debitis! Nisi obcaecati dolorum soluta dolores laborum nihil amet, placeat enim eveniet harum animi aliquid omnis libero tenetur dolore? Sit perferendis aliquid a maiores exercitationem ipsum dolores, ipsa enim saepe quae optio voluptas nisi odit magni harum deleniti, voluptate facilis accusantium corrupti sunt eius minima? Magnam consequatur, quis ducimus possimus cumque adipisci, maxime fugit voluptates sapiente quia earum sunt deserunt reiciendis ab repellat placeat ipsa repudiandae consectetur. Maiores facilis animi dolorem quod, autem accusantium?</p>
                <h1>Related Products</h1>
                <div className="row row-cols-1 row-cols-lg-5 g-4 pb-5">
                {
                    products.map(product=> {
                        if(product.id <= 5){
                            return <Product key={product.id} product={product}></Product>
                        }
                    })
                }
                </div>
            </div>
        </div>
    );
};

export default Cart;