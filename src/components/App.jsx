import { Component } from 'react';

import Searchbar from './searchbar';
import ImageGallery from './imageGallery';
import Button from './button';
import Loader from './loader';
import Modal from './modal';

export class App extends Component {
  state = {
    images: [],
    term: '',
    showModal: false,
  };

  handleSearcbarSubmit = term => {
    this.setState({ term: term });
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
