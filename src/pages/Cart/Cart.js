import React from 'react';
import './cart.css';
import { ToastContainer, toast } from 'react-toastify';

export default class Cart extends React.Component {
  state = {
    cart: [],
    totalPrice: 0
  };

  // Get Cart in localStorage
  getCart() {
    const cart = localStorage.getItem('cart');
    if (cart !== null) {
      this.setState({ cart: JSON.parse(cart) });
      this.setPrice(JSON.parse(cart));
    }
  }

  setPrice(value) {
    let totalPrice = [];
    value.map((i) => {
      if (i.discount_price !== null) {
        const number = parseFloat(i.discount_price).toFixed(2) * i.quantity;
        totalPrice.push(number);
      } else {
        const number = parseFloat(i.book_price).toFixed(2) * i.quantity;
        totalPrice.push(number);
      }
    });
    totalPrice = totalPrice.map(Number);
    const arrSum = totalPrice.reduce((a, b) => a + b, 0);
    this.setState({ totalPrice: parseFloat(arrSum).toFixed(2) });
  }

  updateLocalStorage(value) {
    localStorage.setItem('cart', JSON.stringify(value));
    toast.success('Update cart successfully', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined
    });
    this.props.checkCart();
  }

  setPlusQuantity(value, index) {
    if (value < 8) {
      let items = [...this.state.cart];
      let item = { ...items[index] };
      item.quantity += 1;
      items[index] = item;
      this.setPrice(items);
      this.setState({ cart: items });
      this.updateLocalStorage(items);
    }
  }

  setMinusQuantity(value, index) {
    if (value > 1) {
      let items = [...this.state.cart];
      let item = { ...items[index] };
      item.quantity -= 1;
      items[index] = item;
      this.setPrice(items);
      this.setState({ cart: items });
      this.updateLocalStorage(items);
    } else {
      let items = [...this.state.cart];
      items.splice(index, 1);
      this.setPrice(items);
      this.setState({ cart: items });
      this.updateLocalStorage(items);
    }
  }

  handleSignIn() {
    const token = localStorage.getItem('access_token');
    let items = [...this.state.cart];
    if (items.length > 0 && token === null) {
      // eslint-disable-next-line react/prop-types
      this.props.openModal();
    } else if (items.length > 0 && token !== null) {
      console.log('Gui');
    }
  }

  componentDidMount() {
    this.getCart();
  }

  render() {
    return (
      <section className="cart-page flex-grow-1">
        <div className="container">
          <div className="title-section">
            <p className="title-page font-22px">Your cart: {this.state.cart.length} items</p>
          </div>
          <div>
            <div className="row">
              <div className="col-lg-8">
                <table className="table table-bordered table-fixed tbl-cart">
                  <thead>
                    <tr>
                      <td width={'45%'}>Product</td>
                      <td width={'15%'}>Price</td>
                      <td width={'25%'}>Quantity</td>
                      <td width={'15%'}>Total</td>
                    </tr>
                  </thead>
                  <tbody
                    className={
                      this.state.cart.length > 0
                        ? ''
                        : 'd-flex align-items-center justify-content-center'
                    }>
                    {this.state.cart.length > 0 ? (
                      this.state.cart.map((i, idx) => {
                        return (
                          <tr key={idx}>
                            <td width={'45%'}>
                              <a href={`shop/${i.id}`} style={{ color: 'inherit' }} className="product-column">
                                <img src={i.book_cover_photo} alt="Books" />
                                <div className="pc-infor">
                                  <p className="font-20px">{i.book_title}</p>
                                  <p>{i.author_name}</p>
                                </div>
                              </a>
                            </td>
                            <td width={'15%'}>
                              <div className="price-column">
                                <p className="font-20px">${i.book_price}</p>
                                {i.discount_price !== null ? <p>${i.discount_price}</p> : ''}
                              </div>
                            </td>
                            <td width={'25%'}>
                              <div className="quantity-column">
                                <i
                                  className="fas fa-minus"
                                  onClick={() => this.setMinusQuantity(i.quantity, idx)}
                                />
                                <span>{i.quantity}</span>
                                <i
                                  className={`fas fa-plus ${
                                    i.quantity === 8 ? 'cursor-not-allowed' : ''
                                  }`}
                                  onClick={() => this.setPlusQuantity(i.quantity, idx)}
                                />
                              </div>
                            </td>
                            <td width={'15%'}>
                              <div className="total-column">
                                {i.discount_price !== null ? (
                                  <p className="font-20px">
                                    $
                                    {parseFloat(
                                      parseFloat(i.discount_price).toFixed(2) * i.quantity
                                    ).toFixed(2)}
                                  </p>
                                ) : (
                                  <p className="font-20px">
                                    $
                                    {parseFloat(
                                      parseFloat(i.book_price).toFixed(2) * i.quantity
                                    ).toFixed(2)}
                                  </p>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr style={{ border: 'none' }}>
                        <td className="text-center">Your cart is empty!</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="col-lg-4">
                <div className="card card-totals">
                  <div className="card-header">
                    <p className="text-center">Cart Totals</p>
                  </div>
                  <div className="card-body">
                    <p className="font-24px">${this.state.totalPrice}</p>
                    <br />
                    <a
                      onClick={() => this.handleSignIn()}
                      className={this.state.cart.length > 0 ? '' : 'cursor-not-allowed'}>
                      Place order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    );
  }
}