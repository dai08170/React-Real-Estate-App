import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <section id="listings">

        <section className="search-area">
          <input type="text" name="search" />
        </section>

        <section className="sortby-area">
          <div className="results">390 results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby">
              <option value="price-asc">Highest Price</option>
              <option value="price-dsc">Lowest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-list"></i>
              <i className="fa fa-th"></i>
            </div>
          </div>
        </section>

        <section className="listings-results">
          <div className="listing">
            <div className="listing-img">
              <span className="Address">Address</span>
              <div className="details">
                <div className="user-img"></div>
                <div className="user-details">
                  <span className="user-name">Nina Smith</span>
                  <span className="post-date">05/08/2017</span>
                </div>
                <div className="listing-details">
                  <div className="floor-space">
                    <i className="fa fa-square"></i>
                    <span>1000 ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed"></i>
                    <span>3 Bedrooms</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span>$1000 / month</span>
              <i className="fa fa-map-marker"></i>
              <span>Ridgewood NY</span>
            </div>
          </div>
        </section>

        <section className="pagination">
          <ul className="pagination-nums">
            <li>Prev</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    )
  }
}
