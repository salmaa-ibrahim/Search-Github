import './searchBar.css'
import searcIcon from "/images/Shape 2.svg"
function SearchBar(){
    return(
        <div id='searchBar'>
            <div id='search'>
                <img id="searchIcon" src={searcIcon} alt="" />
                <input type="text" placeholder='Search GitHub Username...' id="searchInput" />
            </div>
            <div>
                <button id='searchBtn'> Search</button>
            </div>
        </div>
    )
}

export default SearchBar