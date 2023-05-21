import clsx from 'clsx';
import css from './Button.module.css';

const Button = () => {
    return (
        <button type="button" className={clsx(css.button)}>Load more</button>
    );
};

export default Button;