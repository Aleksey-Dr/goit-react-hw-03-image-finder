import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ onClick }) => {
    return (
        <button type="button" onClick={onClick} className={clsx(css.button)}>Load more</button>
    );
};

export default Button;