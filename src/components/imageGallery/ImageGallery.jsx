import clsx from 'clsx';
import css from './ImageGallery.module.css';

import ImageGalleryItem from '../imageGalleryItem';

const ImageGallery = () => {
    return (
        <ul className={clsx(css["image-gallery"])}>
            <ImageGalleryItem />
        </ul>
    );
};

export default ImageGallery;