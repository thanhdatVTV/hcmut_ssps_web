import React from 'react';
import './Category.scss'
import { Col, Divider, Row } from 'antd';
const style = {
    background: '#0092ff',
    padding: '8px 0',
};
const Category = () => (
    <>

        <Divider orientation="left">Quản lý thông tin người dùng</Divider>
        <Row
            gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}
        >
            <Col className="gutter-row" span={6}>
                <div style={style}>Quản lý User</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>Quản lý quyền</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>Quản lý phân quyền</div>
            </Col>
            {/* <Col className="gutter-row" span={6}>
                <div style={style}></div>
            </Col> */}
        </Row>
        <Divider orientation="left">Quản lý danh mục</Divider>
        <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={6}>
                <div style={style}>Quản lý loại file</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>Quản lý loại giấy in</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>Quản lý loại file</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>Quản lý loại file</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>Quản lý loại file</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>Quản lý loại file</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>Quản lý loại file</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>Quản lý loại file</div>
            </Col>
        </Row>
        <Divider orientation="left">Báo cáo</Divider>
        <Row gutter={16}>
            <Col className="gutter-row" span={6}>
                <div style={style}>Báo cáo người dùng</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>Báo cáo máy in</div>
            </Col>
            {/* <Col className="gutter-row" span={6}>
                <div style={style}></div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col> */}
        </Row>
    </>
);
export default Category;