import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

const AppNavbar = () => {
    return(
        <div>
        <Navbar color="dark" dark expand="sm">
            <Container>
                <NavbarBrand href="/">Google Books</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Search</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/saved">Saved</NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default AppNavbar;