import './shop.css';
import React from 'react';
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
import Pagination from 'react-js-pagination';
import MyDropdown from '../../components/Dropdown/MyDropdown';

import axios from "axios";
import MyAccordion from '../../components/MyAccordion/MyAccordion';


const objectBookCover = {
    "book1": Book1,
    "book2": Book2,
    "book3": Book3,
    "book4": Book4,
    "book5": Book5,
    "book6": Book6,
    "book7": Book7,
    "book8": Book8,
    "book9": Book9,
    "book10": Book10,
}

export default class Shop extends React.Component {
        constructor(props) {
            super(props);

           
            this.state = {
                allBooks: [],
                defaultBooks: [],
                activePage: 1,
                itemCountPerPage: 1,
                totalItemCount: 1,
                paginate: 5,
                from: 1,
                to: undefined


            };
            this.handlePageChange = this.handlePageChange.bind(this);
        }

        handlePageChange(pageNumber) {
            axios.get(`http://localhost:8000/api/books?paginate=${this.state.paginate}&page=${pageNumber}`)
                .then(result => {
                    // console.log(result.data);
                    const allBooks = result.data.data;
                    const current_page = result.data.current_page;
                    const per_page = result.data.per_page;
                    const total = result.data.total;
                    const from = result.data.from;
                    const to = result.data.to;
                    allBooks.map((book) => (
                        Object.keys(book).forEach((key) => {
                            if (key === 'book_cover_photo') {
                                if (book[key] === null || book[key] === 'null') {
                                    book[key] = defaultBookCover;
                                } else {
                                    book[key] = objectBookCover[book[key]]
                                }
                            }
                        })
                    ))
                    this.setState({
                        allBooks: allBooks,
                        activePage: current_page,
                        itemCountPerPage: per_page,
                        totalItemCount: total,
                        from: from,
                        to: to


                    })

                });

        }

        getBookData() {
            axios.get(`http://localhost:8000/api/books?paginate=${this.state.paginate}&page=${this.state.activePage}`)
                .then(result => {

                    const allBooks = result.data.data;
                    const current_page = result.data.current_page;
                    const per_page = result.data.per_page;
                    const total = result.data.total;
                    const from = result.data.from;
                    const to = result.data.to;
                    allBooks.map((book) => (
                        Object.keys(book).forEach((key) => {
                            if (key === 'book_cover_photo') {
                                if (book[key] === null || book[key] === 'null') {
                                    book[key] = defaultBookCover;
                                } else {
                                    book[key] = objectBookCover[book[key]]
                                }
                            }
                        })
                    ))
                    this.setState({
                        allBooks: allBooks,
                        activePage: current_page,
                        itemCountPerPage: per_page,
                        totalItemCount: total,
                        from: from,
                        to: to


                    })

                });

        }

        componentDidMount() {
            this.getBookData();
        }
render() {
return (
<section className="shop-page flex-grow-1">
    <div className="container">
        <div className="title-page">
            <p>
                Books <span>(Filtered by Category #1)</span>
            </p>
        </div>

        <div className="book-list">
            <div className="row">
                <div className="col-lg-3 p-0">
                    <p className="bl-filter font-14px">Filter by</p>

                    <div>
                        <MyAccordion/>
                    </div>
                </div>

                <div className="col-lg-9">
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <p className="bl-showing font-14px">Showing {this.state.from}-{this.state.to} of&nbsp; 
                                 {this.state.totalItemCount} books</p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <div className="dropdown me-3">
                                <MyDropdown title="Sort by" list={["Sort by on sale", "Sort by popularity", "Sort by price: low to high", "Sort by price: high to low" ]} />
                            </div>

                            <div>
                                <MyDropdown title="Show: 5" list={["Show: 15", "Show: 20" , "Show: 25" ]} />


                            </div>
                        </div>
                    </div>

                    <div id="mainRow" className="row">
                        {this.state.allBooks.map((book) => {
                        return (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={book}>
                            <div className="card">
                                <img className="card-img-top img-fluid" src={book.book_cover_photo} alt="Books" />
                                <a className="card-body" href="/shop/1">
                                    <p className="book-title font-18px">{book.book_title}</p>
                                    <p className="book-author font-14px">{book.author_name}</p>
                                </a>
                                <div className="card-footer text-muted font-14px">${book.final_price}</div>
                            </div>
                        </div>
                        );
                        })}
                    </div>

                    <div className="d-flex justify-content-center">
                        <Pagination activePage={this.state.activePage} itemsCountPerPage={this.state.itemCountPerPage}
                            totalItemsCount={this.state.totalItemCount} pageRangeDisplayed={3} //firstPageText="First"
                            prevPageText="Previous" nextPageText="Next" //lastPageText="Last"
                            onChange={this.handlePageChange} itemClass='page-item' linkClass='page-link' />
                    </div>
                    {/* {{!! $book -> link() !!}} */}
                </div>
            </div>
        </div>
    </div>
</section>
);
}

}