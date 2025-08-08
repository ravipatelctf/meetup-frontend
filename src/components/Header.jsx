import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="container nav d-flex justify-content-between align-items-center py-2">
                <div>
                    <Link to="/" className="navbar-brand fs-1">Meetup</Link>
                </div>
                <div>
                    <input 
                        type="search" 
                        name="searchBar" 
                        id="searchBar" 
                        placeholder="Search by title and t..."
                        className="p-2"
                    />
                </div>
            </nav>
            <hr />
        </header>
    );
};

export default Header;