import './navbar.css'
import darkImg from '/images/Path.svg'
function Navbar(){
    return(
        <div id='navbar'>
            <a href="#">devfinder</a>
            <div id="mood">
                <div className="moodState">
                    <button>DARK</button>
                </div>
                <div className="moodImg">
                    <img src={darkImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar