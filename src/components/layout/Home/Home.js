import "./home.css";
import { Button } from 'reactstrap';
import Book1 from '../../../assets/bookcovers/book1.jpg';
import Book2 from '../../../assets/bookcovers/book2.jpg';
import Book3 from '../../../assets/bookcovers/book3.jpg';
import Book4 from '../../../assets/bookcovers/book4.jpg';
import Book5 from '../../../assets/bookcovers/book5.jpg';
import Book6 from '../../../assets/bookcovers/book6.jpg';
import Book7 from '../../../assets/bookcovers/book7.jpg';
import Book8 from '../../../assets/bookcovers/book8.jpg';
import Book9 from '../../../assets/bookcovers/book9.jpg';
import Book10 from '../../../assets/bookcovers/book10.jpg';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';


const arraySrcBook = [Book1, Book2, Book3, Book4, Book5, Book6, Book7, Book8, Book9, Book10]

function Home() {
return (
<section className="home-page flex-grow-1">
    <div className="container">
        <div className="row align-items-center mb-4">
            <div className="col-lg-6">
                <p>On Sale</p>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
                <Button color="secondary" size="sm">
                    View All &nbsp; <i class="fas fa-angle-right"></i> 
                </Button>
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
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {
            arraySrcBook.map(book => {
            return (
                <SwiperSlide key={book} className="carousel">
                    <div className="card">
                        <img className="card-img-top img-fluid" src={book} alt="Books" />
                        <div className="card-body">
                            <p className="book-title font-18px">Book title</p>
                            <p className="book-author font-14px">Author Name</p>
                        </div>
                        <div className="card-footer text-muted font-14px">Price</div>
                    </div>
                </SwiperSlide>)})
            }
        </Swiper>
        <div className="book-list">
            <div className="text-center">
                <p className="section-title font-20px mb-3">Featured Books</p>
                <div className="mb-4">
                    <Button color="secondary">
                        Recommended
                    </Button>
                    <a className="custom-link">Popular</a>
                </div>
            </div>
            <div id="mainRow" className="row">
                {
                arraySrcBook.map(book => {
                return (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={book}>
                    <div className="card">
                        <img className="card-img-top img-fluid" src={book} alt="Books" />
                        <div className="card-body">
                            <p className="book-title font-18px">Book title</p>
                            <p className="book-author font-14px">Author Name</p>
                        </div>
                        <div className="card-footer text-muted font-14px">Price</div>
                    </div>
                </div>
                )
                })
                }
            </div>
        </div>
    </div>
</section>
);
}

export default Home;