import "./propertyList.css";

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src="images\propertiesImages\apartmentImg.jpg" alt="" className="pListImg" />
                <div className="pListTitle">
                    <h1>Apartment</h1>
                    <h2>233 Apartment</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="images\propertiesImages\cabinsImg.jpg" alt="" className="pListImg" />
                <div className="pListTitle">
                    <h1>Cabins</h1>
                    <h2>983 Cabins</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="images\propertiesImages\hotelImg.jpg" alt="" className="pListImg" />
                <div className="pListTitle">
                    <h1>Hotels</h1>
                    <h2>236 Hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="images\propertiesImages\villaImg.jpg" alt="" className="pListImg" />
                <div className="pListTitle">
                    <h1>Villas</h1>
                    <h2>787 Villas</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="images\propertiesImages\resortImg.jpg" alt="" className="pListImg" />
                <div className="pListTitle">
                    <h1>Resort</h1>
                    <h2>767 Resort</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList