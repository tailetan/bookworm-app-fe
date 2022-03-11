import './home.css';
import { Button } from 'reactstrap';
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

import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';

import axios from 'axios';

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

export default class Home extends React.Component {
  state = {
    onSaleBooks: [],
    recommendedBooks: [],
    popularBooks: [],
    defaultBooks: [],
    recommended: true //button
  };

  componentDidMount() {
    axios.get('http://localhost:8000/api/getOnSaleBooks').then((result) => {
      // console.log(result.data);
      const onSaleBooks = result.data;
      onSaleBooks.map((book) =>
        Object.keys(book).forEach((key) => {
          if (key === 'book_cover_photo') {
            if (book[key] === null || book[key] === 'null') {
              book[key] = defaultBookCover;
            } else {
              book[key] = objectBookCover[book[key]];
            }
          }
        })
      );
      this.setState({ onSaleBooks: onSaleBooks });
    });
    axios.get('http://localhost:8000/api/getRecommendedBooks').then((result) => {
      // console.log(result.data);
      const recommendedBooks = result.data;
      recommendedBooks.map((book) =>
        Object.keys(book).forEach((key) => {
          if (key === 'book_cover_photo') {
            if (book[key] === null || book[key] === 'null') {
              book[key] = defaultBookCover;
            } else {
              book[key] = objectBookCover[book[key]];
            }
          }
        })
      );
      this.setState({ recommendedBooks, defaultBooks: recommendedBooks });
    });
    axios.get('http://localhost:8000/api/getPopularBooks').then((result) => {
      // console.log(result.data);
      const popularBooks = result.data;
      popularBooks.map((book) =>
        Object.keys(book).forEach((key) => {
          if (key === 'book_cover_photo') {
            if (book[key] === null || book[key] === 'null') {
              book[key] = defaultBookCover;
            } else {
              book[key] = objectBookCover[book[key]];
            }
          }
        })
      );
      this.setState({ popularBooks: popularBooks });
    });
  }
  recommendedBookClick = () => {
    this.setState({ defaultBooks: this.state.recommendedBooks });
    this.setState({ recommended: true });
  };
  popularBookClick = () => {
    this.setState({ defaultBooks: this.state.popularBooks });
    this.setState({ recommended: false });
  };
  nextPath(path) {
    this.props.push(path);
  }
  render() {
    return (
      <section className="home-page flex-grow-1">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-lg-6">
              <p>On Sale</p>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
                <Link to={`/shop`}>
                    <Button  color="secondary" size="sm">
                        View All &nbsp; <i className="fas fa-angle-right"></i>
                    </Button>
                </Link>
              
            </div>
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            navigation={true}
            loop={true}
            loopFillGroupWithBlank={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}>
            {this.state.onSaleBooks.map((book, idx) => {
              return (
                <SwiperSlide key={idx} className="carousel">
                  <div className="card h-100">
                    <img
                      className="card-img-top img-fluid"
                      src={book.book_cover_photo}
                      alt="Books"
                    />
                    <div className="card-body d-flex flex-column">
                      <p className="book-title font-18px flex-grow-1">{book.book_title}</p>
                      <p className="book-author font-14px mt-3">{book.author_name}</p>
                    </div>
                    <div className="card-footer text-muted font-14px">
                      <strike>${book.book_price}</strike> <strong>${book.discount_price}</strong>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="book-list">
            <div className="text-center">
              <p className="section-title font-20px mb-3">Featured Books</p>
              <div className="mb-4">
                <Button
                  color={this.state.recommended ? 'secondary' : 'link'}
                  onClick={this.recommendedBookClick}>
                  Recommended
                </Button>

                <Button
                  color={this.state.recommended ? 'link' : 'secondary'}
                  onClick={this.popularBookClick}>
                  Popular
                </Button>
              </div>
            </div>
            <div id="mainRow" className="row">
              {this.state.defaultBooks.map((book) => {
                return (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 align-items-stretch"
                    key={book.id}>
                    <div className="card h-100">
                      <img
                        className="card-img-top img-fluid"
                        src={book.book_cover_photo}
                        alt="Books"
                      />
                      <div className="card-body d-flex flex-column">
                        <p className="book-title font-18px flex-grow-1">{book.book_title}</p>
                        <p className="book-author font-14px mt-3">{book.author_name}</p>
                      </div>
                      <div className="card-footer text-muted font-14px">${book.final_price}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}