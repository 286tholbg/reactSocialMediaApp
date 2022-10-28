import "./rightBar.scss"

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions for you</span>
                    <div className="user">
                        <div className="userInfo">
                            <img className="" src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>John Doe</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img className="" src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>Duke Etherington</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activies</span>
                    <div className="user">
                        <div className="userInfo">
                            <img className="" src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <p>
                            <span>Duke Etherington</span> changed their cover profile
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img className="" src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <p>
                            <span>Sara Mac</span> changed their cover profile
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img className="" src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <p>
                            <span>Dukedom</span> changed their cover profile
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img className="" src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <div className="online"></div>
                            <span>Dukedom</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img className="" src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <div className="online"></div>
                            <span>Dukedom</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img className="" src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <div className="online"></div>
                            <span>Dukedom</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img className="" src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <div className="online"></div>
                            <span>Dukedom</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar