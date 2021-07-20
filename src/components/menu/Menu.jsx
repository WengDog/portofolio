import "./menu.scss"

function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                </li>
                <li>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About me</a>
                </li>
                <li>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
