import { Component } from 'react';

import Searchbar from './searchbar';
import ImageGallery from './imageGallery';
import Button from './button';
import Loader from './loader';
import Modal from './modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <Searchbar />
        <ImageGallery openModal={this.toggleModal} />
        <Loader />
        <Button />
        { showModal && <Modal onClose={this.toggleModal} /> }
      </div>
    );
  };
};
