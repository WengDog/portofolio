import "./navbar.scss"

function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className="navbar">
            <div className={"menuIcon " + (menuOpen && "active")} onClick={() => setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
    )
}

export default Navbar
