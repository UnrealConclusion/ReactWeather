import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar({onLocate, setZipcodeInput, setError}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#123">React Weather</a>
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="text" placeholder="Zipcode" aria-label="Search" onChange={(event) => setZipcodeInput(event.target.value)} onClick={() => setError("")}/>
                    <button className="btn btn-outline-success" type="submit" onClick={(event) => onLocate(event)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-crosshair" viewBox="0 0 16 16">
                            <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                        </svg>
                    </button>
                </form>
            </div>
        </nav>
    );
}