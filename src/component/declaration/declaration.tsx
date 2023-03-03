import { UserOutlined } from "@ant-design/icons";
import { Checkbox, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import "./style.css";
import Table from "./table";

function Declaration(props: any) {
    const test = false
    const checkText = ["☐", "☒"]

    const [userSign, setUserSign] = useState("Phạm Khắc Hoài Nam")
    const [bossSign, setBossSign] = useState("Nguyễn Thanh Bình")

    function siteCheck(e: any) {
        console.log("site chekc: ", e.target.checked)
    }

    function rangeOfChangeCheck(e: any) {
        console.log("range of change check: ", e.target.checked)
    }

    function rangeOfAffectCheck(e: any) {
        console.log("range of affect check: ", e.target.checked)
    }

    return (
        <div className='content-wrapper'>
            <div className='content'>
                <div className='header'>
                    <h1 className="uppercase">
                        Bản kê khai
                    </h1>
                    <h2>
                        Số tiền đóng góp hỗ trợ xử lý chất thải năm
                    </h2>
                    <p>
                        (Sử dụng trong các trường hợp yêu cầu cấp mới máy chủ, thay đổi thông tin cấu hình máy chủ)
                    </p>
                    <p>
                        Kính gửi: Quỹ Bảo vệ môi trường Việt Nam
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

export default Declaration;