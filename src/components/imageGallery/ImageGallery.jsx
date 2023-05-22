import clsx from 'clsx';
import css from './ImageGallery.module.css';

import ImageGalleryItem from '../imageGalleryItem';

const ImageGallery = ({ items, openModal }) => {
    return (
        <ul className={clsx(css["image-gallery"])}>
            {items.map(item => <ImageGalleryItem onOpen={openModal} />)}
        </ul>
    );
};

export default ImageGallery;