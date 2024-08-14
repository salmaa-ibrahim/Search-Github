import './content.css'
import userImg from "/images/Bitmap.jpg"
import locationIcon from '/images/003-pin.svg'
import urlIcon from '/images/002-url.svg'
import twitterIcon from '/images/004-twitter.svg'
import buldingIcon from '/images/001-office-building.svg'

import { useContext } from "react";
import { ThemeContext } from '../../App'
function Content(){
    const passevedValues = useContext(ThemeContext)
    return(
        <div className={passevedValues.theme +"Content"}>
            <div className="user">
                <div className="userTop">
                    <img src={userImg} alt="" />
                    <div className="infoTop">
                            <div className='header'>
                                <p className={passevedValues.theme +"Name"}>The Octocat </p>
                                <a href="#" className='userName'>@octocat</a>
                            </div>
                            <p className={passevedValues.theme +"DateOfJoin"}>Joined 25 Jan 2011</p>
                    </div>
                </div>

                <div className='Bio'>
                    <p className={passevedValues.theme +"Bio"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                </div>
            </div>



            <div className="userInfo">
                <div className="infoBotom">
                    <div className={passevedValues.theme +"Interaction"}>
                        <div className="interaction-1">
                            <label className={passevedValues.theme +"Lable"}>Repos</label>
                            <p className={passevedValues.theme +"P"}>8</p>
                        </div>
                        <div className="interaction-1">
                            <label  className={passevedValues.theme +"Lable"}>Followers</label>
                            <p className={passevedValues.theme +"P"}>3938</p>
                        </div>
                        <div className="interaction-1">
                            <label  className={passevedValues.theme +"Lable"}>Following</label>
                            <p  className={passevedValues.theme +"P"}>9</p>
                        </div>
                    </div>

                    <div className="contactInfo">
                        <div className="contactInfo-1">
                            <img src={locationIcon} alt="" />
                            <p className={passevedValues.theme +"Info"}>San Francisco</p>
                        </div>
                        <div className="contactInfo-1">
                            <img src={twitterIcon} alt="" />
                            <p className={passevedValues.theme +"Info"}>Not Available</p>
                        </div>
                        <div className="contactInfo-1">
                            <img src={urlIcon} alt="" />
                            <p className={passevedValues.theme +"Info"}>https://github.blog</p>
                        </div>
                        <div className="contactInfo-1">
                            <img src={buldingIcon} alt="" />
                            <p className={passevedValues.theme +"Info"}>@github</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Content