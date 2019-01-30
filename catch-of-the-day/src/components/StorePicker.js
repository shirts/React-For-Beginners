import React from 'react';
import {getFunName} from '../helpers';
import PropTypes from 'prop-types';

class StorePicker extends React.Component {
  myInput = React.createRef();
  static propTypes = {
    history: PropTypes.object,
  };

  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a name</h2>

          <input
            ref={this.myInput}
            type="text"
            placeholder="Store Name"
            defaultValue={getFunName()}
          />

          <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
