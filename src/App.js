import { useEffect, useState } from 'react';
import './App.css';
import { CiStar } from "react-icons/ci";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function App() {
  const [item, setItem] = useState([]);
  console.log(item);
  useEffect(() => {
    dataStore();
  }, []);

  const dataStore = async() => {
    const res = await fetch("https://jhattse.com/api/v1/products/popular/?category_id=2841&skip=0&limit=20");
    // console.log(res)
    const jsonData = await res.json()
    // console.log(jsonData);
    setItem(jsonData);
  }

  const responsive = {
    superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 }, 
    items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  return (
    <div className="App">
      <h1>4700 BC</h1> 
      <p>GOURMET FOOD</p>
      <Carousel responsive={responsive}  
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        >
        {item.map((values) => {
           return(   
        <div className='card'>
          <div className='img'>
            <img src='img.jpg' alt={values.name} />
          </div>
          <h3>{values.name}</h3>
          <div className='rate'>
            <div className='rating'>
              <CiStar className='star'/>
              <h4>4.0</h4>
            </div>
            <div className='tag'>
              75 GMS
            </div>
          </div>
          <div className='price'>
            <div className='mrp'>
              <h3>₹{values.mrp}</h3>
              <h6>₹290</h6>
            </div>
            <button>Add</button>
          </div>
        </div>
         )})} 
      </Carousel>       
    </div>
  );
}

export default App;
