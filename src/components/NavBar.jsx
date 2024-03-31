const NavBar = () => {
    return (
        <div className="nav-bar">
            <ul>
                <li><a href="https://www.openbrewerydb.org/documentation" target="_blank">🍻 OpenBreweryDB API</a></li>
                <li><a href="#search">🔎 Search</a></li>
                <li><a href="#filter">🏠 Dashboard</a></li>
            </ul>
        </div>
    );
};

export default NavBar;