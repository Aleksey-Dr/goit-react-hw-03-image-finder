import clsx from 'clsx';
import { ImSearch } from 'react-icons/im';

import css from './Searchbar.module.css';

const Searchbar = () => {
  return (
    <header className={clsx(css.searchbar)}>
      <form className={clsx(css.form)}>
        <button type="submit" className={clsx(css.button)}>
          <span className={clsx(css["button-label"])}>
            <ImSearch />
          </span>
        </button>

        <input
          className={clsx(css.input)}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
