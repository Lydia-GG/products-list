import React, { Component } from 'react';

class addItem extends Component {
  state = {
    product: '',
    price: '',
    quantity: 0,
  };

  handleChange = (e) => {
    console.log(e.target.id + ': ' + e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      product: '',
      price: '',
      quantity: 0,
    });
  };
  increase = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, quantity: this.state.quantity + 1 });
  };
  decrease = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      quantity: this.state.quantity > 0 ? this.state.quantity - 1 : 0,
    });
  };
  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.product}
            placeholder="Enter Product"
            id="product"
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            value={this.state.price}
            placeholder="Enter Price"
            id="price"
            onChange={this.handleChange}
            required
          />
          <div className="quantity-input">
            <button onClick={this.increase}>+</button>
            <input
              value={this.state.quantity}
              id="quantity"
              onChange={this.handleChange}
              required
            />
            <button onClick={this.decrease}>-</button>
          </div>

          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default addItem;
