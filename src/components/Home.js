import "../App";

import React from "react";

function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src="/images/cart.png" alt="img" />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="/logo512.png" alt="img" />
        </div>
        <div className="text-wrapper item">
          <span>Logo </span>
          <span>Price: $100.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
