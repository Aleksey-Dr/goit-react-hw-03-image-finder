import clsx from 'clsx';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ onOpen, }) => {

    
    return (
        <li className={clsx(css["gallery-item"])} onClick={onOpen}>
            <img src="" alt="item galery" />
        </li>
    );
};

export default ImageGalleryItem;