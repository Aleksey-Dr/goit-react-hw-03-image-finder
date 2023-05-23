import clsx from 'clsx';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, onOpen }) => {

    
    return (
        <li key={id} className={clsx(css["gallery-item"])} onClick={onOpen}>
            <img src={webformatURL} alt="item galery" />
        </li>
    );
};

export default ImageGalleryItem;