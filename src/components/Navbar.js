import React from 'react'
import PropTypes from 'prop-types'
import logo from '../components/img/favicon.png'
import { Link    } from 'react-router-dom'

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid d-flex ">
                <div className="navbar-brand p-2 ">
                    <Link className="navbar-brand p-2 " to="/"><img className='img-responsive2' src={logo} alt="logo" />{props.title}</Link>
                    <Link type="button" class="btn btn-outline-primary ml-auto mx-2" to="/">Home</Link>
                    <Link type="button" class="btn btn-outline-primary ml-auto mx-2" to="/about">About</Link>
                </div>

                <div className={`form-check form-switch ml-auto p-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired, };

// Navbar.defaultProps = {
//     title: "Set title here",
// };
