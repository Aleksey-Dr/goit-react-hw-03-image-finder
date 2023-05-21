import clsx from 'clsx';
import css from './ImageGallery.module.css';

import ImageGalleryItem from '../imageGalleryItem';

const ImageGallery = ({ openModal }) => {
    return (
        <ul className={clsx(css["image-gallery"])}>
            <ImageGalleryItem onOpen={openModal} />
        </ul>
    );
};

export default ImageGallery;