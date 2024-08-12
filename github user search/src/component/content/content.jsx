import './content.css'
import userImg from "/images/Bitmap.jpg"
import locationIcon from '/images/003-pin.svg'
import urlIcon from '/images/002-url.svg'
import twitterIcon from '/images/004-twitter.svg'
import buldingIcon from '/images/001-office-building.svg'

function Content(){
    return(
        <div id="content">
            <div className="user">
                <div className="userTop">
                    <img src={userImg} alt="" />
                    <div className="infoTop">
                            <div className='header'>
                                <p className='name'>The Octocat </p>
                                <a href="#" className='userName'>@octocat</a>
                            </div>
                            <p className='dateOfJoin'>Joined 25 Jan 2011</p>
                    </div>
                </div>

                <div className='Bio'>
                    <p className='bio'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                </div>
            </div>



            <div className="userInfo">
                <div className="infoBotom">
                    <div className="interaction">
                        <div className="interaction-1">
                            <label>Repos</label>
                            <p>8</p>
                        </div>
                        <div className="interaction-1">
                            <label>Followers</label>
                            <p>3938</p>
                        </div>
                        <div className="interaction-1">
                            <label>Following</label>
                            <p>9</p>
                        </div>
                    </div>

                    <div className="contactInfo">
                        <div className="contactInfo-1">
                            <img src={locationIcon} alt="" />
                            <p>San Francisco</p>
                        </div>
                        <div className="contactInfo-1">
                            <img src={twitterIcon} alt="" />
                            <p>Not Available</p>
                        </div>
                        <div className="contactInfo-1">
                            <img src={urlIcon} alt="" />
                            <p>https://github.blog</p>
                        </div>
                        <div className="contactInfo-1">
                            <img src={buldingIcon} alt="" />
                            <p>@github</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Content