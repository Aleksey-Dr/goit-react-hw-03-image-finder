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
    isLoading: false,
    error: false,
    showModal: false,
    pageNum: 1,
  };

  componentDidUpdate(_, prevState) {

    if (prevState.term !== this.state.term
      || prevState.pageNum !== this.state.pageNum) {
      try {
        this.setState({ isLoading: true });
        fetchImages(this.state.term, this.state.pageNum)
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

  onLoadMore = () => {
    this.setState(prevState => 
       ({ pageNum: prevState.pageNum + 1 })
    );
    console.log(this.state.pageNum);
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
          <Button onClick={this.onLoadMore} />}

        {showModal && <Modal onClose={this.toggleModal} largeImage={largeImage} />}
      </div>
    );
  };
};
