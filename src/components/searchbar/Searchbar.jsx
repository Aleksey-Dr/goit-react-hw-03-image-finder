import { Component } from 'react';

import clsx from 'clsx';
import { ImSearch } from 'react-icons/im';

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    term: '',
  };

  handleTermChange = event => {
    this.setState({
      term: event.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.term.trim() === '') {
      alert('Empty string');
      return;
    }
    this.props.onSubmit(this.state.term);
    this.setState({
      term: '',
    });
  };

  render() {
    return (
      <header className={clsx(css.searchbar)}>
        <form className={clsx(css.form)} onSubmit={this.handleSubmit}>
          <button type="submit" className={clsx(css.button)}>
            <span className={clsx(css["button-label"])}>
              <ImSearch size="20" />
            </span>
          </button>

          <input
            className={clsx(css.input)}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleTermChange}
          />
        </form>
      </header>
    );
  };
};

export default Searchbar;
