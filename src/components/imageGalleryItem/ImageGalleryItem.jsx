import clsx from 'clsx';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
    return (
        <li className={clsx(css["gallery-item"])}>
            <img src="" alt="image" />
        </li>
    );
};

export default ImageGalleryItem;