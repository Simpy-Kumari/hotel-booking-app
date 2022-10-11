import './list.css';
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {
  const location = useLocation()
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestinaton] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [option, setOption] = useState(location.state.option)
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder='Where are you going?' value={destination} />
            </div>
            <div className="listItem">
              <label>Check-in-out date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to
               ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (<DateRange onChange={(items) => setDate([items.selection])}
                minDate={new Date()} ranges={date} />)}
            </div>
            <div className="listItem">
              <label>Options</label>
              <div className="listOption">
                <div className="listOptionItem">
                  <span className='listOptionText'>Min Price
                    <small>per night </small></span>
                  <input type="number" className="listOptionInput" />
                </div>
                <div className="listOptionItem">
                  <span className='listOptionText'>Max Price
                    <small>per night </small></span>
                  <input type="number" className="listOptionInput" />
                </div>
                <div className="listOptionItem">
                  <span className='listOptionText'>Adult</span>
                  <input type="number" min={1} className="listOptionInput" placeholder={option.adult} />
                </div>
                <div className="listOptionItem">
                  <span className='listOptionText'>Children</span>
                  <input type="number" min={0} className="listOptionInput" placeholder={option.children} />
                </div>
                <div className="listOptionItem">
                  <span className='listOptionText'>Room</span>
                  <input type="number" min={1} className="listOptionInput" placeholder={option.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default List