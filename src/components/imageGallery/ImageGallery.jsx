import clsx from 'clsx';
import css from './ImageGallery.module.css';

import ImageGalleryItem from '../imageGalleryItem';

const ImageGallery = ({ items, openModal }) => {
    return (
        <ul className={clsx(css["image-gallery"])}>
            {items.map(item =>
                <ImageGalleryItem
                    key={item.id}
                    webformatURL={item.webformatURL}
                    largeImageURL={item.largeImageURL}
                    onOpen={openModal}
                />)}
        </ul>
    );
};

export default ImageGallery;