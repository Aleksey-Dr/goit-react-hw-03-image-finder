import { Component } from 'react';
import { createPortal } from 'react-dom';

import clsx from 'clsx';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    render() {
        return createPortal(
            <div className={clsx(css.overlay)}>
                <div className={clsx(css.modal)}>
                    <img src="" alt="item galery" />
                </div>
            </div>,
            modalRoot
        );
    };
};

export default Modal;