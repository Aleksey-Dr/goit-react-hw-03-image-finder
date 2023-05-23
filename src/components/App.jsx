import { Component } from 'react';

import Searchbar from './searchbar';
import ImageGallery from './imageGallery';
import Button from './button';
import Loader from './loader';
import Modal from './modal';

import { fetchImages } from '../services/pixabay-api';
export class App extends Component {
  state = {
    images: [],
    term: '',
    showModal: false,
    error: false,
  };

  componentDidUpdate(_, prevState) {

    if (prevState.term !== this.state.term) {
      try {
        fetchImages(this.state.term)
          .then(galery => {
            this.setState(prevState => ({ images: [...prevState.images, ...galery] }));
            console.log(galery);
          });
          } catch {
        this.setState({ error: true, });
      //   // console.log(error);
      }
    }
  };

  handleSearcbarSubmit = term => {
    this.setState({ term });
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { images, showModal } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearcbarSubmit} />
        <ImageGallery
          items={images}
          openModal={this.toggleModal}
        />
        <Loader />
        <Button />
        {showModal && <Modal onClose={this.toggleModal} />}
      </div>
    );
  };
};
