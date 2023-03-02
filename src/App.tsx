import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import "@fontsource/roboto";
import { Checkbox, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import ConfigTable from './component/config-table';

interface CheckboxI {
  label: string,
  value: string
}

function App() {
  const checkText = ["☐","☒"]

  const siteList = [
    {
      label: "VNPAY",
      value: "vnpay",
    },
    {
      label: "GDS",
      value: "gds",
    },
    {
      label: "CAMBOPAY",
      value: "cambopay",
    },
    {
      label: "CLOUD",
      value: "cloud",
    },
  ] as CheckboxI[]

  const rangeOfChange = [
    {
      label:"Lớn",
      value: "Lớn",
    }, 
    {
      label:"Trung bình",
      value: "Trung bình",
    }, 
    {
      label:"Nhỏ",
      value: "Nhỏ",
    }
  ] as CheckboxI[]

  const rangeOfAffect = [
    {
      label:"Lớn",
      value: "Lớn",
    }, 
    {
      label:"Trung bình",
      value: "Trung bình",
    }, 
    {
      label:"Nhỏ",
      value: "Nhỏ",
    }
  ] as CheckboxI[]

  const requestContent = [
    {
      label: "Thay đổi (Trường hợp thay đổi cấu hình máy chủ hiện có, cần điền thông tin mục 1 và 2)",
      value: "1",
    },
    {
      label: "Cấp mới (Trường hợp cấp máy chủ mới, chỉ điền thông tin mục 2)",
      value: "2"
    }
  ] as CheckboxI[]

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
    <div className="App">
      <div className='content-wrapper'>
        <div className='content'>
          <div className='header'>
            <h1>
              PHIẾU YÊU CẦU CẤP MỚI TÀI NGUYÊN
            </h1>
            <p>
              (Sử dụng trong các trường hợp yêu cầu cấp mới máy chủ, thay đổi thông tin cấu hình máy chủ)
            </p>
          </div>

          <div className='c-body-pd'>
            <div className='c-body'>

              <div className='c-body-a'>
                <div className='section-title'>
                  Phần thông tin dành cho bộ phận yêu cầu
                </div>

                <div className='input-row'>
                  <div className='ir-label'>
                    Người yêu cầu
                    &nbsp;
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <Input className='ir-input' size="large" placeholder="Nhập người yêu cầu" prefix={<UserOutlined />} />
                </div>

                <div className='input-row'>
                  <div className='ir-label'>
                    Bộ phận / Phòng
                    &nbsp;
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <Input className='ir-input' size="large" placeholder="Nhập phòng ban" />
                </div>

                <div className='input-row'>
                  <div className='ir-label'>
                    Dự án / Dịch vụ
                    &nbsp;
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <Input className='ir-input' size="large" placeholder="Nhập dự án" />
                </div>

                <div className='checkbox-list'>
                  <div className='cl-title'>
                    Site cần truy cập
                  </div>
                  <div className='cl-check'>
                    {
                      siteList.map((s: CheckboxI) => {
                        return <Checkbox value={s.value} onChange={(e: any) => siteCheck(e)}>
                          {s.label}
                        </Checkbox>
                      })
                    }

                  </div>
                </div>

                <div className='input-row'>
                  <div className='ir-label'>
                    Chữ ký người yêu cầu
                    &nbsp;
                  </div>
                  <Input className='ir-input' value={userSign} size="large" placeholder="" prefix={<UserOutlined />} disabled={true} />
                </div>

                <div className='input-row'>
                  <div className='ir-label'>
                    Chữ ký người phụ trách
                    &nbsp;
                  </div>
                  <Input className='ir-input' value={bossSign} size="large" placeholder="" prefix={<UserOutlined />} disabled={true} />
                </div>
              </div>

              <div className='c-body-a'>
                  <div className='section-title'>
                    Phần thông tin dành cho phòng QTHT
                  </div>

                  <div className='checkbox-list'>
                    <div className='cl-title'>
                      Mức độ thay đổi
                    </div>
                    <div className='cl-check'>
                      {
                        rangeOfChange.map((s: CheckboxI) => {
                          return <Checkbox disabled={true} value={s.value} onChange={(e: any) => siteCheck(e)}>
                            {s.label}
                          </Checkbox>
                        })
                      }
                    </div>
                  </div>
                  <div className='textarea-row'>
                      <div className='tr-label'>
                          Ghi chú
                      </div>
                      <TextArea  rows={2} placeholder="Ghi chú" maxLength={6} disabled={true} />
                  </div>
                  <hr className='hr'/>
                  <div className='checkbox-list'>
                    <div className='cl-title'>
                      Mức độ thay đổi
                    </div>
                    <div className='cl-check'>
                      {
                        rangeOfChange.map((s: CheckboxI) => {
                          return <Checkbox disabled={true} value={s.value} onChange={(e: any) => siteCheck(e)}>
                            {s.label}
                          </Checkbox>
                        })
                      }
                    </div>
                  </div>
                  <div className='textarea-row'>
                      <div className='tr-label'>
                          Ghi chú
                      </div>
                      <TextArea  rows={2} placeholder="Ghi chú" maxLength={6} disabled={true} />
                  </div>

                  <hr className='hr'/>

                  <div className='checkbox-list align-start'>
                    <div className='cl-title'>
                      Nội dung yêu cầu
                    </div>
                    <div className='vertical-checklist'>
                      {
                        requestContent.map((s: CheckboxI) => {
                          return <div className='cl-check'>
                            <Checkbox disabled={true} value={s.value} onChange={(e: any) => siteCheck(e)}>
                            {s.label}
                          </Checkbox>
                          </div>
                        })
                      }
                    </div>
                  </div>

                  <hr className='hr'/>
              </div>

              <div className='c-body-a'>
                <div className='section-title'>
                  Bảng cấu hình
                </div>
                {/* <div className='table-wrapper'> */}
                    <ConfigTable />
                {/* </div> */}
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
