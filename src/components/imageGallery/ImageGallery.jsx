import clsx from 'clsx';
import css from './ImageGallery.module.css';

const ImageGallery = () => {
    return (
        <ul className={clsx(css["image-gallery"])}>
            Набір 'li' із зображеннями
        </ul>
    );
};

export default ImageGallery;