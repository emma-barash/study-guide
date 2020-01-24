import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link className="link" to="/">    home</Link>
            <Link className="link" to="/biol">BIOL</Link>
            <Link className="link" to="/cosi">COSI</Link>
            <Link className="link" to="/econ">ECON</Link>
            <Link className="link" to="/npsy">NPSY</Link>
        </div>
    );
};

export default Nav;