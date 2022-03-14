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

import axios from 'axios';
import MyAccordion from '../../components/MyAccordion/MyAccordion';

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

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.dropDownRef = React.createRef();
    this.state = {
      allBooks: [],
      defaultBooks: [],
      activePage: 1,
      itemCountPerPage: 1,
      totalItemCount: 1,
      paginate: 5,
      from: 1,
      to: undefined,
      category_name: [],
      author_name: [],
      filter: {
        author: '',
        category: '',
        rating: ''
      },
      nameFilter: {
        author: '',
        category: '',
        rating: ''
      }
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handShow = this.handShow.bind(this);
  }

  async handlePageChange(pageNumber) {
    let finalFilter = `http://localhost:8000/api/books?paginate=${this.state.paginate}&page=${pageNumber}`;
    const filterArray = Object.values(this.state.filter);
    const finalFilterArray = filterArray.filter((n) => n);
    if (finalFilterArray.length > 0) {
      finalFilterArray.map((x) => {
        finalFilter += x;
      });
    }
    axios.get(finalFilter).then((result) => {
      const allBooks = result.data.data;
      const current_page = result.data.current_page;
      const per_page = parseInt(result.data.per_page);
      const total = result.data.total;
      const from = result.data.from;
      const to = result.data.to;
      allBooks.map((book) =>
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
      this.setState({
        allBooks: allBooks,
        activePage: current_page,
        itemCountPerPage: per_page,
        totalItemCount: total,
        from: from,
        to: to
      });
    });
  }

  async getBookData() {
    await axios
      .get(
        `http://localhost:8000/api/books?paginate=${this.state.paginate}&page=${this.state.activePage}`
      )
      .then((result) => {
        const allBooks = result.data.data;
        const current_page = result.data.current_page;
        const per_page = parseInt(result.data.per_page);
        const total = result.data.total;
        const from = result.data.from;
        const to = result.data.to;
        allBooks.map((book) =>
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
        this.setState({
          allBooks: allBooks,
          activePage: current_page,
          itemCountPerPage: per_page,
          totalItemCount: total,
          from: from,
          to: to
        });
      });
  }

  async getFilter() {
    const category_name_array = [];
    const author_name_array = [];
    const url = 'http://localhost:8000/api/';
    await axios.get(url + 'getAllCategories').then((result) => {
      result.data.map((i) => {
        category_name_array.push(i.category_name);
      });
      this.setState({
        category_name: category_name_array
      });
    });
    await axios.get(url + 'getAllAuthors').then((result) => {
      result.data.map((i) => {
        author_name_array.push(i.author_name);
      });
      this.setState({
        author_name: author_name_array
      });
    });
  }

  async componentDidMount() {
    await this.getBookData();
    await this.getFilter();
  }

  async handleFilter(item, name) {
    if (name === 'Rating star') {
      if (item !== '') {
        await this.setState((prevState) => ({
          filter: {
            ...prevState.filter,
            rating: `&filter[avg_rating]=${item.split(' ')[0]}`
          }
        }));
      } else {
        await this.setState((prevState) => ({
          filter: {
            ...prevState.filter,
            rating: ''
          }
        }));
      }
    } else if (name === 'Author') {
      if (item !== '') {
        await this.setState((prevState) => ({
          filter: {
            ...prevState.filter,
            author: `&filter[author_name]=${item}`
          }
        }));
      } else {
        await this.setState((prevState) => ({
          filter: {
            ...prevState.filter,
            author: ''
          }
        }));
      }
    } else if (name === 'Category') {
      if (item !== '') {
        await this.setState((prevState) => ({
          filter: {
            ...prevState.filter,
            category: `&filter[category_name]=${item}`
          }
        }));
      } else {
        await this.setState((prevState) => ({
          filter: {
            ...prevState.filter,
            category: ''
          }
        }));
      }
    }
    const filterArray = Object.values(this.state.filter);
    const finalFilterArray = filterArray.filter((n) => n);
    let finalFilter = `http://localhost:8000/api/books?page=1&paginate=${this.state.paginate}`;
    if (finalFilterArray.length > 0) {
      finalFilterArray.map((x) => {
        finalFilter += x;
      });
    }
    await axios.get(finalFilter).then((result) => {
      const allBooks = result.data.data;
      const current_page = result.data.current_page;
      const per_page = parseInt(result.data.per_page);
      const total = result.data.total;
      const from = result.data.from;
      const to = result.data.to;
      allBooks.map((book) =>
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
      this.setState({
        allBooks: allBooks,
        activePage: current_page,
        itemCountPerPage: per_page,
        totalItemCount: total,
        from: from,
        to: to
      });
    });
  }

  async handShow(number) {
    console.log(number);
    this.dropDownRef.current.changeTitle(number);
    await this.setState({ paginate: parseInt(number.split(': ')[1]) });
    await this.handlePageChange(1);
  }
  render() {
    return (
      <section className="shop-page flex-grow-1">
        <div className="container">
          <div className="title-page">
          <p>
              Books{' '}
              {this.state.filter.author !== '' ||
              this.state.filter.category !== '' ||
              this.state.filter.rating !== '' ? (
                <span>(Filtered by</span>
              ) : (
                ''
              )}
              <span>
                {this.state.filter.category !== '' ? (
                  <span style={{ 'font-weight': 'bold', 'font-style': 'italic' }}>
                    {' '}
                    Category:{' '}
                    <span style={{ color: 'var(--darkblue)' }}>
                      {this.state.filter.category.split('=')[1]}{' '}
                    </span>
                  </span>
                ) : (
                  ''
                )}
                {this.state.filter.author !== '' ? (
                  <span style={{ 'font-weight': 'bold', 'font-style': 'italic' }}>
                    - Author:{' '}
                    <span style={{ color: 'var(--darkblue)' }}>
                      {this.state.filter.author.split('=')[1]}{' '}
                    </span>
                  </span>
                ) : (
                  ''
                )}
                {this.state.filter.rating !== '' ? (
                  <span style={{ 'font-weight': 'bold', 'font-style': 'italic' }}>
                    - Rating:{' '}
                    <span style={{ color: 'var(--darkblue)' }}>
                      {this.state.filter.rating.split('=')[1]}
                    </span>
                    {parseInt(this.state.filter.rating.split('=')[1]) === 1 ? (
                      <span style={{ color: 'var(--darkblue)' }}> star</span>
                    ) : (
                      <span style={{ color: 'var(--darkblue)' }}> stars</span>
                    )}
                  </span>
                ) : (
                  ''
                )}
              </span>
              {this.state.filter.author !== '' ||
              this.state.filter.category !== '' ||
              this.state.filter.rating !== '' ? (
                <span>)</span>
              ) : (
                ''
              )}
            </p>
          </div>

          <div className="book-list">
            <div className="row">
              <div className="col-lg-3 p-0">
                <p className="bl-filter font-14px">Filter by</p>

                <div>
                  <MyAccordion
                    categories={this.state.category_name}
                    authors={this.state.author_name}
                    handleFilter={this.handleFilter}
                  />
                </div>
              </div>

              {this.state.allBooks.length > 0 ? (
                <div className="col-lg-9">
                  <div className="row mb-4">
                    <div className="col-lg-6">
                      <p className="bl-showing font-14px">
                        Showing {this.state.from}-{this.state.to} of&nbsp;
                        {this.state.totalItemCount} books
                      </p>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                      <div className="dropdown me-3">
                        <MyDropdown
                          title="Sort by"
                          list={[
                            'Sort by on sale',
                            'Sort by popularity',
                            'Sort by price: low to high',
                            'Sort by price: high to low'
                          ]}
                        />
                      </div>

                      <div>
                        <MyDropdown
                          ref={this.dropDownRef}
                          title="Show: 5"
                          list={['Show: 5', 'Show: 15', 'Show: 20', 'Show: 25']}
                          handShow={this.handShow}
                        />
                      </div>
                    </div>
                  </div>
                  <div id="mainRow" className="row">
                    {this.state.allBooks.map((book, index) => {
                      return (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                          <a href={`shop/${book.id}`} className="card">
                            <img
                              className="card-img-top img-fluid"
                              src={book.book_cover_photo}
                              alt="Books"
                            />
                            <div className="card-body">
                              <p className="book-title font-18px">{book.book_title}</p>
                              <p className="book-author font-14px">{book.author_name}</p>
                            </div>
                            <div className="card-footer text-muted font-14px">
                              ${book.final_price}
                            </div>
                          </a>
                        </div>
                      );
                    })}
                  </div>

                  <div className="d-flex justify-content-center">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemCountPerPage}
                      totalItemsCount={this.state.totalItemCount}
                      pageRangeDisplayed={3}
                      //firstPageText="First"
                      prevPageText="Previous"
                      nextPageText="Next"
                      //lastPageText="Last"
                      onChange={this.handlePageChange}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </div>
                </div>
              ) : (
                <div className="col-lg-9">No matching data was found. Please try again.</div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
