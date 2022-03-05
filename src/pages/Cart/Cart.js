import "./cart.css";

function Cart(){
    return(
        <section className="cart-page flex-grow-1">
    <div className="container">
      <div className="title-section">
        <p className="title-page font-22px">Your cart: 3 items</p>
      </div>

      <div>
        <div className="row">
          <div className="col-lg-8">
            <table className="table table-bordered tbl-cart">
              <thead>
                <tr>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="product-column">
                      <img src="./assets//images/books.jpg" alt="Books" />
                      <div className="pc-infor">
                        <p className="font-20px">Book Title</p>
                        <p>Author Name</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="price-column">
                      <p className="font-20px">$29.99</p>
                      <p>$49.99</p>
                    </div>
                  </td>
                  <td>
                    <div className="quantity-column">
                      <i className="fas fa-minus"></i>
                      <span>2</span>
                      <i className="fas fa-plus"></i>
                    </div>
                  </td>
                  <td>
                    <div className="total-column">
                      <p className="font-20px">$59.98</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="product-column">
                      <img src="./assets//images/books.jpg" alt="Books" />
                      <div className="pc-infor">
                        <p className="font-20px">Book Title</p>
                        <p>Author Name</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="price-column">
                      <p className="font-20px">$29.99</p>
                    </div>
                  </td>
                  <td>
                    <div className="quantity-column">
                      <i className="fas fa-minus"></i>
                      <span>1</span>
                      <i className="fas fa-plus"></i>
                    </div>
                  </td>
                  <td>
                    <div className="total-column">
                      <p className="font-20px">$59.98</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <div className="card card-totals">
              <div className="card-header">
                <p className="text-center">Cart Totals</p>
              </div>
              <div className="card-body">
                <p className="font-24px">$99.97</p>
                <br />
                <a>Place order</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}

export default Cart;