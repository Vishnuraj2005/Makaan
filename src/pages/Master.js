import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Master = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="" style={{ color: 'green', fontWeight: 'bold' }}>Makaan</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/Property" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Property
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#p-type">
                                            Property types
                                        </a>
                                    </li>
                                    <li><a className="dropdown-item" href="#p-list">Property listing</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/Pages" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    pages
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#p-agent" >Agents</a></li>
                                    <li><a className="dropdown-item" href="#test">Testimonial</a></li>
                                    <li><Link className="dropdown-item" to="">Something else here</Link></li>
                                </ul>
                            </li>

                            <button type="button" class="btn btn-success">Add Property</button>

                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Master;