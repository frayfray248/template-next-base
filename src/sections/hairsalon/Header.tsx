// react
import React from 'react'

// components
import Nav from '@/components/shared/nav/NavBar'

const Header = () => {
    return (
        <header className="navbar bg-base-100 text-base-content absolute top-5 opacity-95">
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
        </header>
    )
}

export default Header