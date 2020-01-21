import React, { Component } from 'react';
import axios from "axios";

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    // State must use class based React components
    // life cycle hooks require class based React components
    constructor() {
        super();
        
        this.state = {  //initial state here
            pageTitle: "Welcome to my portfolio", //pageTitle is a key
            isLoading: false,
            data: [

            ]    
        };
        
        this.handleFilter = this.handleFilter.bind(this);

    }

    handleFilter(filter) {
      this.setState({
        data: this.state.data.filter(item => {
          return item.category === filter;
        })
      })
    }

    getPortfolioItems() {
      axios.get("https://chrisadamczyk.devcamp.space/portfolio/portfolio_items")
        .then(response => {
          this.setState({
            data: response.data.portfolio_items
          })
        })
        .catch(error => {
          console.log(error);
        });
    }

    portfolioItems() {
      // data that we will need:
      // - background image: thumb_image_url
      // - logo image
      // - description: description
      // - id: id

      return this.state.data.map(item => {   // to call it      

          // console.log("portfolio item", item);
          return <PortfolioItem key={item.id} item={item} />
        })
    }  
    
    componentDidMount() {
      this.getPortfolioItems();
    }

    render() {
      if (this.state.isLoading) { 
        return <div>Loading...</div>;
      }

      
      return ( 
        <div className="portfolio-items-wrapper">
          <button className="btn" onClick= {() => this.handleFilter('eCommerce')}>eCommerce</button>
          <button className="btn" onClick= {() => this.handleFilter('Scheduling')}>Scheduling</button>
          <button className="btn" onClick= {() => this.handleFilter('Enterprise')}>Enterprise</button>
          
          {this.portfolioItems()}         
        </div>
      );
  }
}