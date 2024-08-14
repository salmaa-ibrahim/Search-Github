import './searchBar.css'
import { ThemeContext } from '../mainApp/mainApp';
import { useContext } from "react";
import searcIcon from "/images/Shape 2.svg"
function SearchBar(){
    const passevedValues = useContext(ThemeContext)
    console.log(passevedValues.theme)
    return(
        <div className={passevedValues.theme +"SearchBar"}> 
            <div id='search'>
                <img id="searchIcon" src={searcIcon} alt="" />
                <input type="text" placeholder='Search GitHub Username...' className={passevedValues.theme +"SearchInput"} />
            </div>
            <div id='button'>
                <button id='searchBtn'> Search</button>
            </div>
        </div>
    )
}

export default SearchBar