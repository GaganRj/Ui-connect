import { useState, useEffect } from 'react';
import imageSmall from './assets/image/Untitled design.png';
import imageMedium from './assets/image/Project (1).png';
import imageLarge from './assets/image/UIConnect.png';
import logo from './assets/image/uiconnect_logo_3.png'

function App() {
  // Function to handle button click
  const handleClick = () => {
    alert('Hello, World');
  };

  // State to store the current image based on screen size
  const [currentImage, setCurrentImage] = useState(getImageForScreenSize());

  // Function to determine which image to use based on screen width
  function getImageForScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      return imageSmall;
    } else if (screenWidth < 920) {
      return imageMedium;
    } else {
      return imageLarge;
    }
  }

  // Effect to update image on screen resize
  useEffect(() => {
    const handleResize = () => {
      setCurrentImage(getImageForScreenSize());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Styles object containing all the necessary styling
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // Ensure full viewport height
      minWidth: '100vw', // Ensure full viewport width
      margin: 0,
      overflow: 'hidden', // Hide overflow to prevent scrolling
      position: 'relative',
    },  
    header: {
      height: '100px',
      backgroundColor: '#ccc',
      display:"flex",
      alignItem:"center",
      justifyContent:"center"
    },
    logo: {
      width: '100px',
      height:"100px"
    },
    main: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden', // Hide overflow to prevent scrolling
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1, // Overlay above image
    },
    textContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: 'white',
      zIndex: 2, // Text above overlay
    },
    title: {
      margin: 0,
      fontSize: '2em',
    },
    button: {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '1em',
      cursor: 'pointer',
    },
    footer: {
      height: '100px',
      backgroundColor: '#ccc',
      textAlign: 'center',
      lineHeight: '100px',
      zIndex: 3, // Ensure footer is above other elements
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Ensure image covers entire area
      zIndex: 0, // Image behind overlay and text
    },
  };

  // JSX structure defining the layout of the component
  return (
    <div style={styles.container}>
      <header style={styles.header}><img src={logo} style={styles.logo} /></header>
      <main style={styles.main}>
        <img src={currentImage} alt="Background" style={styles.image} />
        <div style={styles.overlay}></div>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>UI CONNECT</h1>
          <button onClick={handleClick} style={styles.button}>Click here</button>
        </div>
      </main>
      <footer style={styles.footer}>Footer</footer>
    </div>
  );
}

export default App;
