import './product.css';
// import MyDropdown from '../../components/Dropdown/MyDropdown';
import React from 'react';
import axios from 'axios';

import Book1 from '../../assets/bookcovers/book1.jpg';
import Book2 from '../../assets/bookcovers/book2.jpg';
import Book3 from '../../assets/bookcovers/book3.jpg';
import Book4 from '../../assets/bookcovers/book4.jpg';
import Book5 from '../../assets/bookcovers/book5.jpg';
import Book6 from '../../assets/bookcovers/book6.jpg';
import Book7 from '../../assets/bookcovers/book7.jpg';
import Book8 from '../../assets/bookcovers/book8.jpg';
import Book9 from '../../assets/bookcovers/book9.jpg';
import Book10 from '../../assets/bookcovers/book10.jpg';
import defaultBookCover from '../../assets/bookcovers/defaultBookCover.png';
import { ToastContainer, toast } from 'react-toastify';


export default class Product extends React.Component {
  constructor(props) {
    super(props);

    this.setPlusQuantity = this.setPlusQuantity.bind(this);
    this.setMinusQuantity = this.setMinusQuantity.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      details: {}
    };
  }

  getDetail() {
    const a = window.location.pathname;
    const id = a.split('/shop/')[1];
    const url = ' http://localhost:8000/api/book/' + id;
    axios.get(url).then((result) => {
      const objectBookCover = {
        book1: Book1,
        book2: Book2,
        book3: Book3,
        book4: Book4,
        book5: Book5,
        book6: Book6,
        book7: Book7,
        book8: Book8,
        book9: Book9,
        book10: Book10
      };
      Object.keys(result.data[0]).forEach((x) => {
        if (x === 'book_cover_photo') {
          if (result.data[0][x] === null) {
            result.data[0][x] = defaultBookCover;
          } else {
            result.data[0][x] = objectBookCover[result.data[0][x]];
          }
        }
        if (x === 'avg_rating') {
          if (result.data[0][x] === null) {
            result.data[0][x] = 0;
          }
        }
        if (x === 'book_price') {
          result.data[0][x] = parseFloat(result.data[0][x]).toFixed(2);
        }

        if (x === 'discount_price') {
          if (result.data[0][x] !== null) {
            result.data[0][x] = parseFloat(result.data[0][x]).toFixed(2);
          }
        }
      });
      result.data[0]['quantity'] = 1;
      this.setState({ details: JSON.parse(JSON.stringify(result.data[0])) });
    });
  }

  setPlusQuantity() {
    if (this.state.details.quantity < 8) {
      this.setState((prevState) => ({
        details: {
          ...prevState.details,
          quantity: prevState.details.quantity + 1
        }
      }));
    }
  }

  setMinusQuantity() {
    if (this.state.details.quantity > 1) {
      this.setState((prevState) => ({
        details: {
          ...prevState.details,
          quantity: prevState.details.quantity - 1
        }
      }));
    }
  }

  addToCart() {
    const cart = localStorage.getItem('cart');
    const cartObject = JSON.parse(JSON.stringify(this.state.details));
    if (cart !== null) {
      let cartArray = [...JSON.parse(cart)];
      cartArray.push(cartObject);
      cartArray = cartArray.reverse();
      localStorage.setItem('cart', JSON.stringify(cartArray));
      toast.dismiss();
      toast.success('Added successfully', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined
      });
      this.props.checkCart();
    } else {
      let cartArray = [];
      cartArray.push(cartObject);
      cartArray = cartArray.reverse();
      localStorage.setItem('cart', JSON.stringify(cartArray));
      toast.dismiss();
      toast.success('Added successfully', {
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
  }

  componentDidMount() {
    this.getDetail();
  }
  
  render() {
    return (
      <section className="detail-page flex-grow-1">
        <ToastContainer />
        <div className="container">
          <div className="title-section">
            <p className="title-page font-22px">Category: {this.state.details.category_name}</p>
          </div>

          <div>
            <div className="row">
              <div className="col-lg-8">
                <div className="card card-book">
                  <div className="row">
                    <div className="col-lg-4">
                      <img
                        className="card-img-top"
                        width="100%"
                        height="340px"
                        src={this.state.details.book_cover_photo}
                        alt="Books"
                      />
                      <p className="px-3 pb-3 author text-right mt-3">
                        By (author) <span>{this.state.details.author_name}</span>
                      </p>
                    </div>
                    <div className="col-lg-8">
                      <div className="book-detail-layout">
                        <br />
                        <p className="book-title font-22px">{this.state.details.book_title}</p>
                        <br />
                        <p>Book description</p>
                        <p>{this.state.details.book_summary}</p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-add-to-card">
                  <div className="card-header">
                    <span
                      className={`price-first ${
                        this.state.details.discount_price !== null ? 'price-first-line mr-3' : 'text-dark h4'
                      }`}>
                      $
                      {parseFloat(
                        this.state.details.book_price * this.state.details.quantity
                      ).toFixed(2)}
                    </span>
                    {this.state.details.discount_price !== null ? (
                      <span className="price-sale font-22px ms-2">
                        $
                        {parseFloat(
                          this.state.details.discount_price * this.state.details.quantity
                        ).toFixed(2)}
                      </span>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="card-body">
                    <div className="cb-content">
                      <p className="label">Quantity</p>
                      <div className="quantity">
                        <i
                          className={`fas fa-minus ${
                            this.state.details.quantity === 1 ? 'cursor-not-allowed' : ''
                          }`}
                          onClick={this.setMinusQuantity}
                        />
                        <span>{this.state.details.quantity}</span>
                        <i
                          className={`fas fa-plus ${
                            this.state.details.quantity === 8 ? 'cursor-not-allowed' : ''
                          }`}
                          onClick={this.setPlusQuantity}
                        />
                      </div>
                      <br />
                      <br />
                      <a className="add-btn" onClick={this.addToCart}>
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-8">
                <div className="card card-review bg-white-smoke">
                  <div className="card-body">
                    <p className="book-title">
                      <span className="font-22px">Customer Reviews</span>
                      <span>(Filtered by 5 star)</span>
                    </p>
                    <br />
                    <div className="row star-row">
                      <div className="col-lg-2">
                        <p className="point font-24px">{this.state.details.avg_rating}</p>
                        <p className="number">({this.state.details.total_review})</p>
                      </div>
                      <div className="col-lg-10">
                        <p className="point font-24px">Star</p>
                        <ul className="list-start">
                          <li>5 star ({this.state.details.five_star})</li>
                          <li>4 star ({this.state.details.four_star})</li>
                          <li>3 star ({this.state.details.three_star})</li>
                          <li>2 star ({this.state.details.two_star})</li>
                          <li>1 star ({this.state.details.one_star})</li>
                        </ul>
                      </div>
                    </div>
                    <br />
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-write">
                  <div className="card-header bg-white">
                    <p className="font-22px">Write a Review</p>
                  </div>
                  <div className="card-body">
                    <p>Add a title</p>
                    <input className="form-control" />
                    <br />
                    <p>Details please! Your review helps other shoppers</p>
                    <textarea className="form-control"></textarea>
                    <br />
                    <p>Select a rating star</p>
                    <select className="form-control">
                      <option>1 Star</option>
                      <option>2 Star</option>
                      <option>3 Star</option>
                      <option>4 Star</option>
                      <option>5 Star</option>
                    </select>
                  </div>
                  <div className="card-footer bg-white">
                    <a className="submit-btn">Submit Review</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
