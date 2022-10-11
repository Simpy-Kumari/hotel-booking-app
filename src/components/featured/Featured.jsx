import './featured.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="images/goaImg.jpg" alt="Goa" className="featureImg" />
        <div className='featuredTitle'>
          <h1>Goa Beach</h1>
          <h2>123 Propeties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="images/darjeelingImg.jpg" alt="Goa" className="featureImg" />
        <div className='featuredTitle'>
        <h1>Darjeeling</h1>
        <h2>734 Propeties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="images/dubaiImg.jpg" alt="Goa" className="featureImg" />
        <div className='featuredTitle'>
        <h1>Dubai</h1>
        <h2>456 Propeties</h2>
      </div>
      </div>
      <div className="featuredItem">
        <img src="images/hydImg.jpg" alt="Goa" className="featureImg" />
        <div className='featuredTitle'>
        <h1>Hyderabad</h1>
        <h2>977 Propeties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="images/ootyImg.jpg" alt="Goa" className="featureImg" />
        <div className='featuredTitle'>
        <h1>Ooty</h1>
        <h2>764 Propeties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured