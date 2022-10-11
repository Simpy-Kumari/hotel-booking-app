import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useState } from "react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";


const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestinaton] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1
  })
  const navigate =useNavigate();

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev, [name]: operation === "i" ? option[name] + 1 : option[name] - 1
      };
    });
  }
  
  
   const handleSearch = () => {
    navigate('/hotels', {state:{destination, date, option}})
  }
  
  return (
    <div className="header">
      <div className={type !== "list"? "headerContainer" : "headerContainer listMode"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
       { type !== "list" && 
        <> <h1 className="headerTiltle">A life time discount? it's Genius.</h1>
        <p className="hearderDesc">Get rewarded for your travels - unlock instant saving of 10%
          or more with free lamabooking account.
        </p>
        <button className="hearderBtn">Sign In / Register</button>
        <div className="hearderSearch">
          <div className="hearderSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input type="text" className="headerSearchInput"
             placeholder="Where are you going?" 
             onChange={e=>setDestinaton(e.target.value)}
             />
          </div>
          <div className="hearderSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />}
          </div>
          <div className="hearderSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={() => setOpenOption(!openOption)} className="headerSearchText">{`${option.adult} adult .
         ${option.children} children . ${option.room} room`}</span>
            { openOption && <div className="option">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button disabled={option.adult <= 1} className="optionCounterBtn" onClick={() => handleOption("adult", "d")}>-</button>
                  <span className="optionCounterNumber">{option.adult}</span>
                  <button className="optionCounterBtn" onClick={() => handleOption("adult", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button disabled={option.children <= 0} className="optionCounterBtn" onClick={() => handleOption("children", "d")}>-</button>
                  <span className="optionCounterNumber">{option.children}</span>
                  <button className="optionCounterBtn" onClick={() => handleOption("children", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button disabled={option.room <= 1} className="optionCounterBtn " onClick={() => handleOption("room", "d")}>-</button>
                  <span className="optionCounterNumber">{option.room}</span>
                  <button className="optionCounterBtn" onClick={() => handleOption("room", "i")}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="hearderSearchItem">
            <button type="" className="searchBtn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div> </>}
      </div>

    </div>
  )
}

export default Header