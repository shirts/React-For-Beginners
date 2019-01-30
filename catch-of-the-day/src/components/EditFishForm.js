import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
  };

  handleChange = e => {
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value,
    };

    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.props.fish.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          value={this.props.fish.price}
          onChange={this.handleChange}
        />
        <select
          type="text"
          placeholder="status"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.value}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          placeholder="desc"
          value={this.props.fish.desc}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="image"
          name="image"
          value={this.props.fish.image}
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            this.props.deleteFish(this.props.index);
          }}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
