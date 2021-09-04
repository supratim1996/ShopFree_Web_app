
import React from 'react';
import data from './data.js';

function App() {
  return (
    <div className="grid-container">
            <header className="row">
               <div>
                 <a href="index.html" className="brand">ShopFree</a>
               </div>
               <div>
                  <a href="cart.html">My Cart</a>
                  <a href="signin.html">Sign In</a>
               </div>
            </header>
            <main>
               <div className = "row center">
                 {data.products.map(product=>
                  <div className = 'card' key = {product._id}>
                  <a href = {`/products/${product._id}`}>
                      
                      <img className = 'maximum' src={product.image} alt={product.name}/>
                  </a>
                  <div className='card-body'>
                    <a href="product.html"><h2>{product.name}</h2></a>
                    
                    <div className = 'rateing'>
                    <span><i className = 'fa fa-star'></i></span>
                    <span><i className = 'fa fa-star'></i></span>
                    <span><i className = 'fa fa-star'></i></span>
                    <span><i className = 'fa fa-star'></i></span>
                    <span><i className = 'fa fa-star-half-o'></i></span>
                    </div>
                    <div className = 'price'>
                      Rs {product.price}
                    </div>
                </div>
            </div>
            )}
                    
                 
              </div>
            </main>
            <footer className="row center">
                <p>All Rights Reserved</p>
            </footer>
        </div>
  );
}

export default App;
