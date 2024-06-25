import React from 'react'

import Nav from '@/components/shared/nav/NavBar'

const Header = () => {
    return (
        <header className="navbar bg-base-100 absolute top-5 opacity-95">

            <Nav.Bar>

                <Nav.Start>
                    <Nav.Dropdown>
                    <Nav.Menu>
                        <Nav.MenuItem text="Item 1" href='#' />
                        <Nav.Submenu title="Parent">
                            <Nav.MenuItem text="Submenu 1" href='#' />
                            <Nav.MenuItem text="Submenu 2" href='#' />
                        </Nav.Submenu>
                        <Nav.MenuItem text="Item 3" href='#' />
                    </Nav.Menu>
                    </Nav.Dropdown>
                    <a className="btn btn-ghost text-xl rounded-none">ACME Hair Salon</a>
                </Nav.Start>

                <Nav.Center>
                    <Nav.Menu>
                        <Nav.MenuItem text="OUR STYLISTS" href='#' />
                        <Nav.MenuItem text="BOOK NOW" href='#' />
                        <Nav.MenuItem text="CONTACT US" href='#' />
                        <Nav.Submenu title="SERVICES">
                            <Nav.MenuItem text="CONSULTATIONS" href='#' />
                            <Nav.MenuItem text="COLOR" href='#' />
                            <Nav.MenuItem text="PERM" href='#' />
                            <Nav.MenuItem text="TREATMENTS" href='#' />
                        </Nav.Submenu>
                    </Nav.Menu>
                </Nav.Center>

                <Nav.End>

                </Nav.End>

            </Nav.Bar>

            {/* <section className="navbar-start">

                <div className="dropdown">

                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>

                </div>

                <a className="btn btn-ghost text-xl">ACME Solution</a>

            </section>

            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>

            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </header>
    )
}

export default Header