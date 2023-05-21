import clsx from 'clsx';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
    return (
        <li className={clsx(css["gallery-item"])}>
            <img src="" alt="item galery" />
        </li>
    );
};

export default ImageGalleryItem;