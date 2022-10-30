import "./profile.scss"
import React from "react"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LanguageIcon from '@mui/icons-material/Language';
import { Language } from "@mui/icons-material";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import Posts from "../../components/posts/Posts"

const Profile = () => {

    return (
        <div className="profile">
            <div className="images">
                <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="cover"/>
                <img src="https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="profilePic"/>
            </div>
            <div className="profileContainer">
                <div className="userInfo">
                    <div className="left">
                        <a href="#">
                            <FacebookTwoToneIcon fontSize="large"/>
                        </a>
                        <a href="#">
                            <InstagramIcon fontSize="large"/>
                        </a>
                        <a href="#">
                            <TwitterIcon fontSize="large"/>
                        </a>
                        <a href="#">
                            <LinkedInIcon fontSize="large"/>
                        </a>
                        <a href="#">
                            <PinterestIcon fontSize="large"/>
                        </a>
                    </div>
                    <div className="center">
                        <span>Jane Doe</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>USA</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>Lama.dev</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlined/>
                        <MoreVertIcon/>
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    )
}

export default Profile