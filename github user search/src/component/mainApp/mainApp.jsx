import './mainApp.css'
import Navbar from '../navbar/navbar'
import SearchBar from '../searchBar/searchBar'
import Content from '../content/content'

import {createContext, useState} from "react"
export const ThemeContext = createContext(null)
function MainApp(){
    const [theme , setTheme] = useState("light");
    return (
        <div className='Github'>
        <ThemeContext.Provider value={{theme , setTheme}}>
        <Navbar></Navbar>
        <SearchBar></SearchBar>
        <Content></Content>
        </ThemeContext.Provider>
        
      </div>
    )
}

export default MainApp