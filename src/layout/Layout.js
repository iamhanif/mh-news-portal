import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav'
import Header from '../Pages/Shared/Header/Header'


const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Layout;