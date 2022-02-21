import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

class ProductContainer extends Component {
  constructor() {
    super();
    this.state = {
      /* Initialize the product list state */
      productList: [
        {
          id: 1,
          name: 'Microsoft Xbox Series X Gaming Console',
          description: `Key Specs: 4K gameplay at up to 120 frames per second, 1TB of expandable storage, Doubles as a streaming player.
            The Series X is the most powerful and entertaining Xbox yet. It can deliver stunning 4K gameplay with a high 
            frame rate, which makes your graphics spectacular. Plus, it has 8K HDR and exceptional cloud gaming capabilities.`,
          status: 'Out of Stock',
        },
        {
          id: 2,
          name: 'Sony PlayStation 5 Gaming Console',
          description: `Key Specs: 4K gameplay at up to 120 frames per second, 1TB of expandable storage, doubles as a streaming player.  
            Sony's PlayStation 5, like the Xbox Series X, can deliver 4K gameplay at up 120 frames per second, as well as 8K output. 
            Sony's finest console yet also rocks fast memory and storage for instantaneous interactions.`,
          status: 'Available',
        },
        {
          id: 3,
          name: 'Nintendo Switch Gaming Console (OLED Model)',
          description: `Key Specs: Full HD gameplay in TV mode; Standard HD in handheld mode,
            7-inch OLED display, up to 9 hours of battery life.
            Nintendo's latest Switch is a better version of a legendary product and the most versatile gaming console that money can buy.`,
          status: 'Available',
        },
        {
          id: 4,
          name: 'Chromecast with Google TV',
          description: `Key Specs: 4K gameplay at up to 60 frames per second, Doubles as a streaming player, Bundled voice remote.
            This Chromecast console is the best option for budget-minded gamers, because it supports Google’s Stadia cloud gaming service.`,
          status: 'Available',
        },
        {
          id: 5,
          name: 'Microsoft Series S Gaming Console',
          description: `Key Specs: 1440p gameplay at up to 120 frames per second, 512 GB of expandable storage, Doubles as a streaming player.
            Launched alongside the mighty Xbox Series X, the reasonably priced Xbox Series S is our favorite entry-level gaming console by Microsoft.`,
          status: 'Available',
        },

        {
          id: 6,
          name: 'Nintendo Switch Lite Portable Gaming Console',
          description: `Key Specs: 5.5-inch HD LCD touchscreen, 32 GB of expandable storage, Up to 7 hours of battery life.
            For handheld gaming on the go, there's no better option than the Nintendo Switch Lite. It is the more compact variant of the Nintendo Switch with a much lower price tag.`,
          status: 'Available',
        },
        {
          id: 7,
          name: 'Apple TV 4K (2021)',
          description: `Key Specs: Apple A12 Bionic chip, Up to 64GB of storage, Bundled Siri remote.
            The latest Apple TV 4K is great for gaming, thanks to a powerful chip and support for controllers (including Xbox and PlayStation ones). 
            It also allows iPhone and iPad users to game on a larger screen via AirPlay connectivity.
            Launched alongside the mighty Xbox Series X, the reasonably priced Xbox Series S is our favorite entry-level gaming console by Microsoft.`,
          status: 'Available',
        },
      ],
      selectedProduct: '',
    };
    this.handleProductClick = this.handleProductClick.bind(this);
  }

  handleProductClick(productId) {
    console.log(productId);
    let selectedProduct = this.state.productList.find(
      (x) => x.id === Number(productId)
    );
    selectedProduct
      ? this.setState(
          {
            selectedProduct: selectedProduct,
          },
          () => console.log(this.state.selectedProduct)
        )
      : null;
  }

  render() {
    return (
      <div style={{ margin: '8% 0 0 10%' }}>
        {/* List of products */}
        <ProductList
          products={this.state.productList}
          selectProduct={this.handleProductClick}
        />

        {/* Detail view of each product */}
        <ProductDetails product={this.state.selectedProduct} />
      </div>
    );
  }
}
export default ProductContainer;
