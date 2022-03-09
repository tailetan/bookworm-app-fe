import "./product.css";
import MyDropdown from '../../components/Dropdown/MyDropdown';


function Product(){
    return(
        <section class="detail-page flex-grow-1">
    <div class="container">
      <div class="title-section">
        <p class="title-page font-22px">Category Name</p>
      </div>

      <div>
        <div class="row">
          <div class="col-lg-8">
            <div class="card card-book">
              <div class="row">
                <div class="col-lg-4">
                  <img class="card-img-top" src="./assets/images/books.jpg" alt="Books" />
                  <p class="author text-right mt-3">By (author) <span>Anna Banks</span></p>
                </div>
                <div class="col-lg-8">
                  <div class="book-detail-layout">
                    <br />
                    <p class="book-title font-22px">Book Title</p>
                    <br />
                    <p>Book description</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi inventore impedit
                      repellendus mollitia totam expedita a nam. Doloremque at eveniet obcaecati expedita. Soluta
                      officia
                      esse ipsa tempore, aliquid voluptatum?</p>
                    <br />
                    <p>"The multi-million copy bestseller"</p>
                    <p>Soon to be a major fim</p>
                    <p>A Number One New York Times Bestseller</p>
                    <br />
                    <p>'Painfully beautiful New York Times'</p>
                    <p>'Unforgettable...as engrossing as it is moving' Daily Mail</p>
                    <p>'A rare achievement' The Times</p>
                    <p>'I can't even express how much I love this book!' Reese Witherspoon</p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-add-to-card">
              <div class="card-header">
                <span class="price-first">$49.99</span>
                <span class="price-sale font-22px">$29.99</span>
              </div>
              <div class="card-body">
                <div class="cb-content">
                  <p class="label">Quantity</p>
                  <div class="quantity">
                    <i class="fas fa-minus"></i>
                    <span>1</span>
                    <i class="fas fa-plus"></i>
                  </div>
                  <br />
                  <br />
                  <a class="add-btn">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-8">
            <div class="card card-review bg-white-smoke">
              <div class="card-body">
                <p class="book-title">
                  <span class="font-22px">Customer Reviews</span>
                  <span>(Filtered by 5 star)</span>
                </p>
                <br />
                <div class="row star-row">
                  <div class="col-lg-2">
                    <p class="point font-24px">4.6</p>
                    <p class="number">(3,134)</p>
                  </div>
                  <div class="col-lg-10">
                    <p class="point font-24px">Star</p>
                    <ul class="list-start">
                      <li>
                        5 star (200)
                      </li>
                      <li>
                        4 star (100)
                      </li>
                      <li>
                        3 star (20)
                      </li>
                      <li>
                        2 star (5)
                      </li>
                      <li>
                        1 star (0)
                      </li>
                    </ul>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-lg-6">
                    <p>Showing 1-12 of 3134 reviews</p>
                  </div>
                  <div class="col-lg-6 d-flex justify-content-end">
                    <div class="dropdown me-3">
                    <MyDropdown title="Sort by" list={["Sort by on sale", "Sort by date: newest to oldest", "Sort by date: oldest to newest"]} />

                    </div>

                    <div class="dropdown">
                    <MyDropdown title="Show" list={["Show 5", "Show 15", "Show 20", "Show 25" ]} />

                    </div>
                  </div>
                </div>

                {/* <!-- Start 1 component --> */}
                <div class="review-content">
                  <p class="rc-title font-22px">Review Title <span> | 5 starts</span></p>
                  <p class="rc-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis numquam
                    porro error totam,
                    exercitationem optio blanditiis nostrum quia?</p>
                  <p class="rc-day font-14px">Month Date, Year</p>
                </div>
                {/* <!-- End 1 component --> */}
                {/* <!-- Start 1 component --> */}
                <div class="review-content">
                  <p class="rc-title font-22px">Amazing Story! You will LOVE it <span> | 5 starts</span></p>
                  <p class="rc-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis numquam
                    porro error totam,
                    exercitationem optio blanditiis nostrum quia?</p>
                  <p class="rc-day font-14px">April 12, 2021</p>
                </div>
                {/* <!-- End 1 component --> */}
                {/* <!-- Start 1 component --> */}
                <div class="review-content">
                  <p class="rc-title font-22px">Amazing Story! You will LOVE it <span> | 5 starts</span></p>
                  <p class="rc-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis numquam
                    porro error totam,
                    exercitationem optio blanditiis nostrum quia?</p>
                  <p class="rc-day font-14px">April 12, 2021</p>
                </div>
                {/* <!-- End 1 component --> */}
                {/* <!-- Start 1 component --> */}
                <div class="review-content">
                  <p class="rc-title font-22px">Amazing Story! You will LOVE it <span> | 5 starts</span></p>
                  <p class="rc-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis numquam
                    porro error totam,
                    exercitationem optio blanditiis nostrum quia?</p>
                  <p class="rc-day font-14px">April 12, 2021</p>
                </div>
                {/* <!-- End 1 component --> */}
                {/* <!-- Start 1 component --> */}
                <div class="review-content">
                  <p class="rc-title font-22px">Amazing Story! You will LOVE it <span> | 5 starts</span></p>
                  <p class="rc-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis numquam
                    porro error totam,
                    exercitationem optio blanditiis nostrum quia?</p>
                  <p class="rc-day font-14px">April 12, 2021</p>
                </div>
                {/* <!-- End 1 component --> */}
                <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                    <nav>
                      <ul class="pagination">
                        <li class="page-item"><a class="text-color-black page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="text-color-black page-link" href="#">1</a></li>
                        <li class="page-item"><a class="text-color-black page-link" href="#">2</a></li>
                        <li class="page-item"><a class="text-color-black page-link" href="#">3</a></li>
                        <li class="page-item"><a class="text-color-black page-link" href="#">Next</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-write">
              <div class="card-header bg-white">
                <p class="font-22px">Write a Review</p>
              </div>
              <div class="card-body">
                <p>Add a title</p>
                <input class="form-control"/>
                <br />
                <br />
                <p>Details please! Your review helps other shoppers</p>
                <textarea class="form-control"></textarea>
                <br />
                <br />
                <p>Select a rating star</p>
                <select class="form-control">
                  <option>1 Star</option>
                  <option>2 Star</option>
                  <option>3 Star</option>
                  <option>4 Star</option>
                  <option>5 Star</option>
                </select>
              </div>
              <div class="card-footer bg-white">
                <a class="submit-btn">Submit Review</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}

export default Product;