import React from 'react';
import AdminNavbar from './components/AdminNavbar';
import AdminFooter from './components/AdminFooter';
import { Container } from "reactstrap";
import Header from './components/Header'

function Layout({ children }) {
    return (
        <>
            <div className="main-content">
                <AdminNavbar
                    brandText="Analytics"
                />
                <Header />
                {children}
                <Container fluid>
                    <AdminFooter />
                </Container>
            </div>
        </>
    )
}

export default Layout;