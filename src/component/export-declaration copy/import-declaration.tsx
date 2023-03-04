import { UserOutlined } from "@ant-design/icons";
import { Checkbox, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import "./style.css";
import Table from "./table";

function ImportDeclaration(props: any) {
    const test = false
    const checkText = ["☐", "☒"]

    return (
        <div className='content-wrapper'>
            <div className='content'>
                <div className='header'>
                    <h1 className="uppercase">
                    KÊ KHAI DANH MỤC SẢN PHẨM, HÀNG HÓA NHẬP KHẨU TRONG NĂM N-1 
                    </h1>
                    <p>
                    (Từ 01/01/N-1 đến 31/12/N-1)							
                    </p>
                </div>

                <div className='c-body-pd'>
                    <div className='c-body'>

                        <div className='c-body-a overflow-hidden'>
                            <div className='section-title'>
                                Phần thông tin kê khai
                            </div>

                            <div className='input-row'>
                                <div className='ir-label'>
                                    Tên nhà sản xuất, nhập khẩu:
                                    &nbsp;
                                    <span style={{ color: "red" }}>*</span>
                                </div>
                                <Input className='ir-input' size="large" placeholder="Tên nhà sản xuất" prefix={<UserOutlined />} required/>
                            </div>

                            <div className='input-row'>
                                <div className='ir-label'>
                                    Người đại diện pháp luật
                                    &nbsp;
                                    <span style={{ color: "red" }}>*</span>
                                </div>
                                <Input className='ir-input' size="large" placeholder="Người đại diện theo pháp luật" prefix={<UserOutlined />} required/>
                            </div>

                            <div className='input-row align-start'>
                                <div className='ir-label'>
                                    Địa chỉ
                                    &nbsp;
                                    <span style={{ color: "red" }}>*</span>
                                </div>
                                <TextArea className='ir-input' size="large" placeholder="Địa chỉ" required/>
                            </div>

                            <div className="container">
                                <div className='input-row'>
                                    <div className='ir-label'>
                                        Email
                                        &nbsp;
                                        <span style={{ color: "red" }}>*</span>
                                    </div>
                                    <Input className='ir-input' size="large" placeholder="Email" required/>
                                </div>
                                <div className='input-row'>
                                    <div className='ir-label'>
                                        Mã số thuế
                                        &nbsp;
                                        <span style={{ color: "red" }}>*</span>
                                    </div>
                                    <Input className='ir-input' size="large" type="number" placeholder="Mã số thuế" required/>
                                </div>
                            </div>

                            <div className="container">
                                <div className='input-row'>
                                    <div className='ir-label'>
                                        Điện thoại
                                        &nbsp;
                                        <span style={{ color: "red" }}>*</span>
                                    </div>
                                    <Input className='ir-input' size="large" type="text" placeholder="Số điện thoại" required/>
                                </div>

                                <div className='input-row'>
                                    <div className='ir-label'>
                                        Chức vụ
                                        &nbsp;
                                        <span style={{ color: "red" }}>*</span>
                                    </div>
                                    <Input className='ir-input' size="large" placeholder="Chức vụ" required/>
                                </div>
                            </div>
                        </div>

                        <div className='c-body-a'>
                            <div className='section-title'>
                                Bảng kê khai
                            </div>
                            <Table />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ImportDeclaration;