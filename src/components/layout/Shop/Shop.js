import "./shop.css";
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
import { Link } from 'react-router-dom';

const arraySrcBook = [Book1, Book2, Book3, Book4, Book5, Book6, Book7, Book8, Book9, Book10]

function Shop(){
return (
    <section className="shop-page flex-grow-1">
        <div className="container">
            <div className="title-page">
                <p>Books <span>(Filtered by Category #1)</span></p>
            </div>

            <div className="book-list">
                <div className="row">
                    <div className="col-lg-3">
                        <p className="bl-filter font-14px">Filter by</p>

                        <div className="bl-main-filter">
                            {/*
                            <!-- Category --> */}
                            <div className="blmf-card">
                                <p className="blmfc-title">Category</p>
                                <ul className="blmfc-list">
                                    <li>category_name</li>
                                    <li>Category #1</li>
                                    <li>Category #2</li>
                                </ul>
                            </div>

                            {/*
                            <!-- Author --> */}
                            <div className="blmf-card">
                                <p className="blmfc-title">Author</p>
                                <ul className="blmfc-list">
                                    <li>author_name</li>
                                    <li>Author #1</li>
                                    <li>Author #2</li>
                                </ul>
                            </div>

                            {/*
                            <!-- Rating --> */}
                            <div className="blmf-card">
                                <p className="blmfc-title">Rating Review</p>
                                <ul className="blmfc-list">
                                    <li>1 Star</li>
                                    <li>2 Star</li>
                                    <li>3 Star</li>
                                    <li>4 Star</li>
                                    <li>5 Star</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <p className="bl-showing font-14px">Showing 1-12 of 126 books</p>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-end">
                                <div className="dropdown me-4">
                                    <button className="btn btn-secondary dropdown-toggle font-14px" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Sort by on sale
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Sort by on sale</a>
                                        <a className="dropdown-item" href="#">Sort by popularity</a>
                                        <a className="dropdown-item" href="#">Sort by price: low to high</a>
                                        <a className="dropdown-item" href="#">Sort by price: high to low</a>
                                    </div>
                                </div>

                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle font-14px" type="button"
                                        id="dropdownShowButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Show 20
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div id="mainRow" className="row">
                            {
                            arraySrcBook.map(book => {
                            return (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={book}>
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={book} alt="Books" />
                                    <a className="card-body" href="/shop/1">
                                        <p className="book-title font-18px">Book title</p>
                                        <p className="book-author font-14px">Author Name</p>
                                    </a>
                                    <div className="card-footer text-muted font-14px">Price</div>
                                </div>
                            </div>
                            )
                            })
                            }
                        </div>

                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item"><a className="text-color-black page-link"
                                                href="#">Previous</a></li>
                                        <li className="page-item"><a className="text-color-black page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="text-color-black page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="text-color-black page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="text-color-black page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

);
}

export default Shop;