import { Component } from 'react';

import Searchbar from './searchbar';
import ImageGallery from './imageGallery';
import Button from './button';
import Loader from './loader';
import Modal from './modal';

import { fetchImages } from '../services/pixabay-api';

import clsx from 'clsx';
import css from './App.module.css'

export class App extends Component {
  state = {
    images: [],
    largeImage: '',
    term: '',
    showModal: false,
    error: false,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {

    if (prevState.term !== this.state.term) {
      try {
        this.setState({ isLoading: true });
        fetchImages(this.state.term)
          .then(galery => {
            this.setState(prevState => ({
              images: [...prevState.images, ...galery],
              isLoading: false
            }));
          });
      }
      catch {
        this.setState({ error: true, isLoading: false });
      //   // console.log(error);
      };
    }
  };

  handleSearcbarSubmit = term => {
    this.setState({ term });
  };

  toggleModal = (largeImage) => {
    this.setState({
      showModal: !this.state.showModal,
      largeImage,
    });
  };

  render() {
    const { images, largeImage, showModal, isLoading } = this.state;

    return (
      <div className={clsx(css.app)}>
        <Searchbar onSubmit={this.handleSearcbarSubmit} />

        <ImageGallery
          items={images}
          openModal={this.toggleModal}
        />
        {isLoading &&
          <Loader />}
        
        {images.length > 11 &&
          <Button />}

        {showModal && <Modal onClose={this.toggleModal} largeImage={largeImage} />}
      </div>
    );
  };
};
