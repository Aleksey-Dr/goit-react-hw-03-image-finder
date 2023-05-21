import Searchbar from './searchbar';
import ImageGallery from './imageGallery';
import Button from './button';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Searchbar />
      <ImageGallery />
      <Button />
    </div>
  );
};