import { faLocationDot, faBed, faCity, faSquareParking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer'
import './hotel.css';
import { useState } from 'react';
import { faArrowAltCircleRight, faArrowAltCircleLeft, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const Hotel = () => {
  const [slideNum, setSlideNum] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/34704608.jpg?k=1bfb1a94fa1448e8fcab9730cfcefc779f6ce782fcc59399e8f991a7fef0031a&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/34704602.jpg?k=2a072e626f303000ad4142860f5ebe37ee592b2da41f85688725a2cd04b60d4b&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/31104463.jpg?k=56f3d339e1e198938ffcff30233ccfd838314e9e8af49be2b6aa6c39adb1b732&o=&hp=1"

    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/54020073.jpg?k=75124882e1467ca02e99376e0ebce363584127a0e7cdcc87d7a50f8e63ba885a&o=&hp=1"

    }, {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/40212140.jpg?k=7f865a29a86a3142d1443986a30ac883048a1cfa66a749624192c339d2c82dd6&o=&hp=1"
    }, {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/37349389.jpg?k=a099579c3bf5850b2005aa55c0a4a8ce348b943e28b6c59cbbd06ecbe17f509f&o=&hp=1"
    }
  ];
  const handleOpen = (i) => {
    setSlideNum(i);
    setOpen(true);
  }
  const moveHandler = (direction)=>{
    let slideNumber;
    if(direction === "l"){
      slideNumber = slideNum === 0 ? 5 : slideNum-1;
    } else{
      slideNumber = slideNum === 5 ? 0 : slideNum+1;
    }
    setSlideNum(slideNumber);
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="closebtn" onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className="Arrow" onClick={()=>{moveHandler("l")}}/>
          <div className="sliderWrapper">
            <img src={photos[slideNum].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="Arrow" onClick={()=>{moveHandler("r")}}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve</button>
          <h2 className="hotelTitle">Hilton Jaipur</h2>
          <div className="hotelAddress">
            <FontAwesomeIcon className='icon' icon={faLocationDot} />
            <span className=''>Plot No. 42, Geejgarh House, Hawa Sadak, 302006 Jaipur, India -</span>
          </div>
          <span className='hotelDistance'>Great Location - 3.7 km from centre </span>
          <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailText">
              <h2 className="hotelDetailTitle">Get the celebrity treatment with world-class service at Hilton Jaipur
              </h2>
              <p className="hotelDesc">Located at just a 10-minute drive from Jaipur Railway Station
                and 25-minute drive from Jaipur International Airport,
                Hilton Jaipur operates with a swimming pool and spectacular views of the scenic Aravalli hills

                The richly decorated rooms offer air-conditioning, flat-screen satellite TV and seating area.
                Each room includes a minibar and a safety deposit box. The attached bathrooms are equipped with
                a bathtub, hairdryer and free toiletries.

                Dining options include Aurum, an all-day dining restaurant, serving continental delicacies.
                Indian delights can be relished at Chandi. Alcoholic and non-alcoholic beverages
                can be enjoyed at Krystal. Enjoy a fun evening at Nebulae our trendy rooftop lounge,
                while you gorge on glocal cuisine featuring signature dishes,
                groove to the beat of our resident DJ. Room service options are available too.</p>
            </div>
            <div className="hotelDetailPrice">
              <h2 className='hotelDetailHeading'>Property highlights</h2>
              <h3 className="hotelDetailSubheading">Perfect for a 2-night stay!</h3>
              <div>
                <FontAwesomeIcon className='locIcon' icon={faLocationDot} />
                <span>Top location: Highly rated by recent guests (8.1) </span>
              </div>
              <div>
                <FontAwesomeIcon className='bedIcon' icon={faBed} />
                <span className=''> Want a great night's sleep? This hotel was highly rated for its very comfy beds.</span>
              </div>
              <h4>Breakfast info</h4>
              <span>Continental, Vegetarian, American, Buffet</span>
              <h4>Rooms with:</h4>
              <span>
                <FontAwesomeIcon className='bedIcon' icon={faCity} />
                <span>City view</span>
              </span>
              <span>
                <FontAwesomeIcon className='parkingIcon' icon={faSquareParking} />
                <span> Free private parking available at the hotel </span>
              </span>
              <button className="reserveBtn">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel