21.05.2023
I. Basic initial settings #1
1. Created this repository by React homework template
   (https://github.com/goitacademy/react-homework-template).
2. Set Settings > Actions > General:
   Workflow permissions:
   🔘 Read and write permissions (Workflows have read and write permissions in the repository for all scopes)
   ☑  Allow GitHub Actions to create and approve pull requests
3. Changed: "homepage": "https://your_username.github.io/your_repo_name/".

II. Basic initial settings #2
1. Set Settings > Pages:
   Branch: gh-pages from folder "root"
2. Code > About > ⚙ > Website > ☑ Use your GitHub Pages website
   (https://aleksey-dr.github.io/goit-react-hw-03-image-finder/).

III. Adding and configuring tools
1. npm install.
2. npm i prop-types.
3. npm i clsx.
4. npm i react-icons.

IV. Create component <Searchbar>
1. Created a "searchbar" folder in the "components" folder.
2. Created a Searchbar.jsx file in the "searchbar" folder.
3. Created an index.js in the "searchbar" folder.
4. Created <Searchbar> component-function.
5. Adeed "import Searchbar from './searchbar';" to the App.jsx.
6. Added <Searchbar> component-function to the App.jsx.
7. Created a Searchbar.module.css file in the "searchbar" folder.
8. Added styles for <Searchbar> component-function.
9. Changed common styles (html, body. img).

Fix
1. Fixed .form styles.

V. Create component <ImageGallery>
1. Created an "imageGallery" folder in the "components" folder.
2. Created an ImageGallery.jsx file in the "imageGallery" folder.
3. Created an index.js in the "imageGallery" folder.
4. Created <ImageGallery> component-function.
5. Adeed "import ImageGallery from './imageGallery';" to the App.jsx.
6. Added <ImageGallery> component-function to the App.jsx.
7. Created a ImageGallery.module.css file in the "imageGallery" folder.
8. Added styles for <ImageGallery> component-function.
9. Added styles for <App> component.

VI. Create component <ImageGalleryItem>
1. Created an "imageGalleryItem" folder in the "components" folder.
2. Created an ImageGalleryItem.jsx file in the "imageGalleryItem" folder.
3. Created an index.js in the "imageGalleryItem" folder.
4. Created <ImageGalleryItem> component-function.
5. Adeed "import ImageGallery from '../imageGalleryItem';" to the ImageGallery.jsx.
6. Added <ImageGalleryItem> component-function to the ImageGallery.jsx.
7. Created a ImageGalleryItem.module.css file in the "imageGalleryItem" folder.
8. Added styles for <ImageGalleryItem> component-function.

VII. Create component <Button>
1. Created a "button" folder in the "components" folder.
2. Created a Button.jsx file in the "button" folder.
3. Created an index.js in the "button" folder.
4. Created <Button> component-function.
5. Adeed "import Button from './button';" to the App.jsx.
6. Added <Button> component-function to the App.jsx.
7. Created a Button.module.css file in the "button" folder.
8. Added styles for <Button> component-function.

Fixed styles for <input> of <Searchbar>.

VIII. Create component <Loader>
1. npm i react-loader-spinner.
2. Created a "loader" folder in the "components" folder.
3. Created a Loader.jsx file in the "loader" folder.
4. Created <Loader> component-function.
5. Added "import { Grid } from 'react-loader-spinner';".
6. Added <Grid> component to the <Loader> component-function.
7. Adeed "import Loader from './loader';" to the App.jsx.
8. Added <Loader> component-function to the App.jsx.

IX. Create component <Modal>
1. Created a "modal" folder in the "components" folder.
2. Created a Modal.jsx file in the "modal" folder.
3. Created an index.js in the "modal" folder.
4. Created <Modal> component-class.
5. Added "<div id="modal-root"></div>" to the index.html of "public" folder.
6. Added "import { createPortal } from 'react-dom';" to the Modal.jsx file.
7. Adeed "import Modal from './modal';" to the App.jsx.
8. Added <Modal> component-class to the App.jsx.
9. Created a Modal.module.css file in the "modal" folder.
10. Added styles for <Modal> component-class.

X. Create work configuration for the Modal window
1. <App> component-function changed to component-class.
2. Added the "state" to the <App>.
3. Crated a "toggleModal" arrow function in the <App>.
4. Added componentDidMount() and componentWillUnmount() to the <Modal>.
5. Crated a "handleKeyDown" arrow function in the <Modal>.
6. Crated a "handleBackdropClick" arrow function in the <Modal>.
7. Added props with the "toggleModal" function to <ImageGallery> and <ImageGalleryItem>.

Fixed Searchbar styles.

XI. Create handler of <Searchbar>
1. <Searchbar> component-function changed to component-class.
2. Added the "state" to the <Searchbar>.
3. Create a "handleTermChange" arrow function.
4. Added onChange to <input> of the <Searchbar>.
5. Added onSubmit to <form> of the <Searchbar>.
6. Create "handleSearcbarSubmit" arrow fanction in <App>.
7. Added "handleSearcbarSubmit" arrow fanction to props of the <Searchbar>.
8. Create "handleSubmit" arrow functin in the <Searchbar>.
9. Added element "term" to "stetes" of <App> and <Searchbar>.

XII. Create "fetch" configuration
1. Created a "services" folder in the "src" folder.
2. Created pixabay-api.js file i the "services" folder.
3. npm i axios.
4. Added "import axios from 'axios';" to the pixabay-api.js file.
5. Created "fetchGalery(term)" async function.
6. Added "import api from '../services/pixabay-api';".
7. Added "images: []," to the state of <App>.
8. Added async componentDidMount() to the <App>.

Fixed
1. "url" in the pixabay-api.js.
2. Styles of <App>.
3. Styles of <Buttn>.
4. Styles of <Loader>.