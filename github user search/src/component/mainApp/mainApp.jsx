import './mainApp.css'
import Navbar from '../navbar/navbar'
import SearchBar from '../searchBar/searchBar'
import Content from '../content/content'


function MainApp(){
    return (
        <div className='Github'>
        <Navbar></Navbar>
        <SearchBar></SearchBar>
        <Content></Content>
        
      </div>
    )
}

export default MainApp