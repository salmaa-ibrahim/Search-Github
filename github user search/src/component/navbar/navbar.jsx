import './navbar.css'
import darkImg from '/images/Path.svg'

import { ThemeContext } from '../mainApp/mainApp';
import { useContext } from "react";

function Navbar(){
    const theme= useContext(ThemeContext)
    function onHandleChange(event){
        let newValue;
        if(event.target.checked == false){
            newValue ="light"
        } else{
            newValue ="dark"
        }
        theme.setTheme(newValue)
    }
    return(
        <div id='navbar'>
            <a href="#">devfinder</a>
            <div id="mood">
                <div className="moodState" >
                    <input className='check' type="checkbox" onChange={onHandleChange} />
                    <button className='moodBtn'>DARK</button>
                </div>
                <div className="moodImg">
                    <img src={darkImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar