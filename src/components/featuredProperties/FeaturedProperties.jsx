import './featuredProperties.css';

const FeaturedProperties = () => {
    return (
        <div className="fpContainer">
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=" alt="" className="fpImg" />
                <span className="fpName">Sugar Loft Apartments</span>
                <span className="fpCity">Rio de Janeiro</span>
                <span className="fpPrice">Starting from ₹ 3,690</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Wonderful</span>
                </div>
            </div>
            <div className="fpItem">
                <img style={{height:"100%"}} src="https://cf.bstatic.com/xdata/images/hotel/max500/34497879.jpg?k=d27391d1eaeb691fafed1ae7fd6cedcfa7d2634113ed446614bd2389ecb1bfc6&o=" alt="" className="fpImg" />
                <span className="fpName">The Apartments Club</span>
                <span className="fpCity">London</span>
                <span className="fpPrice">Starting from ₹ 53,653</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max500/39615603.jpg?k=ffa7f14b1c5235c8883662876734f832a596de617cd8380ce1025fb21bc92df9&o=" alt="" className="fpImg" />
                <span className="fpName">KeizersgrachtSuite471</span>
                <span className="fpCity">Amsterdam</span>
                <span className="fpPrice">Starting from ₹ 110,326</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Wonderful</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max500/112346687.jpg?k=b0c1b36d31151ed463b8960c21e868584043522f4f380c0f382994d4b3e7ada2&o=" alt="" className="fpImg" />
                <span className="fpName">A casa di Edi</span>
                <span className="fpCity">Rome</span>
                <span className="fpPrice">Starting from ₹ 28,781</span>
                <div className="fpRating">
                    <button>10</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max500/74148425.jpg?k=a135c36d6f7c6efdbe55690f844c20707754e581c1207357f8cda49d1235113f&o=" alt="" className="fpImg" />
                <span className="fpName">Aparthotel stare Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties