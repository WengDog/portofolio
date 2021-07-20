import "./home.scss"
import profile from "assets/profile.png"

function Home() {
    return (
        <div className="home" id="home">
            <div className="left">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1 className="name">Raihan Asyraf</h1>
                </div>
            </div>
            <div className="right">
                <div className="zoomWrapper">
                    <div className="imgContainer">
                        <img src={profile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
