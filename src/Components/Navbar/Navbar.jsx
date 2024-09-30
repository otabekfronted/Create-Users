import "./Navbar.css";

function Navbar({ usersLength, isDarkMode, setIsDarkMode }) {
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div
            className={`navbar ${isDarkMode ? "navbar-dark" : "navbar-light"}`}
        >
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <h1>CUser</h1>
                </div>
                <div className="navbar-counter">
                    {usersLength > 0 ? (
                        <h3>You have: {usersLength} Users</h3>
                    ) : (
                        <h3>No User :(</h3>
                    )}
                </div>
                <div className="navbar-toggle">
                    <button className="mode-toggle" onClick={toggleDarkMode}>
                        {isDarkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
