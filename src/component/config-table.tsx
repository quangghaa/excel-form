import { DeleteOutlined } from "@ant-design/icons";
import { message, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import "./style.css"

interface Config {
    id: number,
    ipAddress: string,
    cpu: number,
    ram: number,
    hdd1: number,
    hdd2: number,
    hdd3: number,
    totalGb: number,
    os: string,
    env: string,
    version: string,
    supervisor: string,
    purpose: string
}

function ConfigTable(props: any) {
    const text = 'Bạn có muốn xóa hàng?';
    const description = 'Delete the task';

    const confirmDelete = (tipe: any, rowId: any, rowName: any, e: any) => {
        console.log("E: ", e)
        deleteRow(tipe, rowId)
        message.info(`Xóa hàng: ${rowName}`);
    };

    const [currentIdIndex, setCurrentIdIndex] = useState(0)
    const [newIdIndex, setNewIdIndex] = useState(0)
    const [currentConfigRow, setCurrentConfigRow] = useState([] as Config[])
    const [newConfigRow, setNewConfigRow] = useState([] as Config[])

    function currentPrefixId(configId: any) {
        // console.log("Check prefix id: ", "current-row-" + configId)
        return "current-row-" + configId
    }

    function newPrefixId(configId: any) {
        return "new-row-" + configId
    }

    useEffect(() => {
        console.log("Final: " , currentConfigRow)
        console.log("Final new: ", newConfigRow)

    }, [currentConfigRow, newConfigRow])

    function addConfig(tipe: any) {
        switch (tipe) {
            case 0:
                var o = {
                    id: currentIdIndex + 1
                } as Config
                currentConfigRow.push(o)
                setCurrentIdIndex(currentIdIndex + 1)
                setCurrentConfigRow(Object.assign([], currentConfigRow))
                break
            case 1:
                var o = {
                    id: newIdIndex + 1
                } as Config
                newConfigRow.push(o)
                setNewIdIndex(newIdIndex + 1)
                setNewConfigRow(Object.assign([], newConfigRow))
                break
            default:
                console.log("Something wrong")
        }
    }

    function deleteRow(tipe: any, rowId: any) {
        console.log("Check row id and tipe: ", rowId, tipe)
        switch (tipe) {
            case 0:
                // CLear input value first
                // var valueArray = [] as string[]
                //     for (let j = 1; j <= 12; j++) {
                //         console.log("Count ", j, currentPrefixId(rowId) + "col-" + j)
                //         var inputId = currentPrefixId(rowId) + "col-" + j
                //         // var value = (document.getElementById(inputId) as HTMLInputElement).value
                //         var id = (document.getElementById(inputId) as HTMLInputElement)
                //         id.value = ""
                //     }
                var res = currentConfigRow.slice()

                res.splice(rowId, 1);
                // currentConfigRow.forEach((c: Config) => {
                //     if(c.id != rowId) {
                //         res.push(c)
                //     }   
                // })
                console.log("DEBUG res: ", res)
                setCurrentConfigRow(res)
                // console.log("LOG: ", currentConfigRow)
                // setTimeout(() => {
                //     setCurrentConfigRow(res)
                //     console.log("LOG: ", currentConfigRow)
                    
                // }, 1000);
                // var newArr = currentConfigRow.filter((c: Config) => {
                //     return c.id != rowId
                // })
                // console.log("DEBUG delete: ", newArr)
                // setCurrentConfigRow(newArr)
                break
            case 1:
                var newArr = newConfigRow.filter((c: Config) => {
                    return c.id != rowId
                })
                setNewConfigRow(newArr)
                break
            default:
                console.log("delete error")
        }

    }

    function fillData(tipe: any) {
        switch(tipe) {
            case 0: 
                var resultArr = [] as Config[]
                currentConfigRow.forEach((c: Config, i: number) => {
                    // var inputId1 = currentPrefixId(c.id) + "col-1"
                    // var inputId2 = currentPrefixId(c.id) + "col-2"
                    // var inputId3 = currentPrefixId(c.id) + "col-3"
                    // var inputId4 = currentPrefixId(c.id) + "col-4"
                    // var inputId5 = currentPrefixId(c.id) + "col-5"
                    // var inputId6 = currentPrefixId(c.id) + "col-6"
                    // var inputId7 = currentPrefixId(c.id) + "col-7"
                    // var inputId8 = currentPrefixId(c.id) + "col-8"
                    // var inputId9 = currentPrefixId(c.id) + "col-9"
                    // var inputId10 = currentPrefixId(c.id) + "col-10"
                    // var inputId11 = currentPrefixId(c.id) + "col-11"
                    // var inputId12 = currentPrefixId(c.id) + "col-12"

                    // var value1 = (document.getElementById(inputId1) as HTMLInputElement).value
                    // var value2 = (document.getElementById(inputId2) as HTMLInputElement).value
                    // var value3 = (document.getElementById(inputId3) as HTMLInputElement).value
                    // var value4 = (document.getElementById(inputId4) as HTMLInputElement).value
                    // var value5 = (document.getElementById(inputId5) as HTMLInputElement).value
                    // var value6 = (document.getElementById(inputId6) as HTMLInputElement).value
                    // var value7 = (document.getElementById(inputId7) as HTMLInputElement).value
                    // var value8 = (document.getElementById(inputId8) as HTMLInputElement).value
                    // var value9 = (document.getElementById(inputId9) as HTMLInputElement).value
                    // var value10 = (document.getElementById(inputId10) as HTMLInputElement).value
                    // var value11 = (document.getElementById(inputId11) as HTMLInputElement).value
                    // var value12 = (document.getElementById(inputId12) as HTMLInputElement).value
                    
                    var valueArray = [] as string[]
                    for (let j = 1; j <= 12; j++) {
                        var inputId = currentPrefixId(c.id) + "col-" + j
                        var value = (document.getElementById(inputId) as HTMLInputElement).value
                        if(value != undefined && value != null) {
                            valueArray.push(value)
                        } else {
                            valueArray.push("")
                        }
                    }

                    var o = {} as Config
                    o.id = c.id
                    o.ipAddress = valueArray[0]
                    o.cpu = Number(valueArray[1])
                    o.ram = Number(valueArray[2])
                    o.hdd1 = Number(valueArray[3])
                    o.hdd2 = Number(valueArray[4])
                    o.hdd3 = Number(valueArray[5])
                    o.totalGb = Number(valueArray[6])
                    o.os = valueArray[7]
                    o.env = valueArray[8]
                    o.version = valueArray[9]
                    o.supervisor = valueArray[10]
                    o.purpose = valueArray[11]

                    resultArr.push(o)
                })
                console.log("DEBUG result: ", resultArr)
                setCurrentConfigRow(resultArr)
                break
            case 1: 
                var resultArr = [] as Config[]
                newConfigRow.forEach((c: Config, i: number) => {
                    var valueArray = [] as string[]
                    for (let j = 1; j <= 12; j++) {
                        var inputId = newPrefixId(c.id) + "col-" + j
                        var value = (document.getElementById(inputId) as HTMLInputElement).value
                        if(value != undefined && value != null) {
                            valueArray.push(value)
                        } else {
                            valueArray.push("")
                        }
                    }

                    var o = {} as Config
                    o.id = c.id
                    o.ipAddress = valueArray[0]
                    o.cpu = Number(valueArray[1])
                    o.ram = Number(valueArray[2])
                    o.hdd1 = Number(valueArray[3])
                    o.hdd2 = Number(valueArray[4])
                    o.hdd3 = Number(valueArray[5])
                    o.totalGb = Number(valueArray[6])
                    o.os = valueArray[7]
                    o.env = valueArray[8]
                    o.version = valueArray[9]
                    o.supervisor = valueArray[10]
                    o.purpose = valueArray[11]

                    resultArr.push(o)
                })
                setNewConfigRow(resultArr)
                break
            default: 
                console.log("something wrong??")
        }
    }

    function getData(tipe: any) {
        fillData(tipe)
        switch(tipe) {
            case 0: 
                console.log("Get current data: ", currentConfigRow)
                break
            case 1: 
                console.log("Get new data: ", newConfigRow)
                break
            default: 
                console.log("get data error")
        }
    }

    function onSubmit() {
        fillData(0)
        fillData(1)
    }

    return (
        <>
            <div className="buttons">
                <button className="add-btn" onClick={() => addConfig(0)}>Thêm cấu hình hiện tại</button>
                <button className="add-btn" onClick={() => addConfig(1)}>Thêm cấu hình mới</button>
                <button className="add-btn" onClick={() => onSubmit()}>SUBMIT</button>
            </div>
            <table className="table">
                <thead className="t-head">
                    <tr className="t-head-tr">
                        <th>TT</th>
                        <th>IP Address</th>
                        <th>CPU</th>
                        <th>RAM</th>
                        <th colSpan={3}>HDD (Gb)</th>
                        <th>Tổng cộng (Gb)</th>
                        <th>OS</th>
                        <th>Trên môi trường trung gian</th>
                        <th>Phiên bản</th>
                        <th>Người phụ trách</th>
                        <th>Mục đích sử dụng</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <thead className="t-head">
                    <tr className="t-head-tr2">
                        <th></th>
                        <th></th>
                        <th>(CPUs)</th>
                        <th>(GB)</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <thead className="t-head">
                    <tr className="t-head-tr2">
                        <th></th>
                        <th>(1)</th>
                        <th>(2)</th>
                        <th>(3)</th>
                        <th>(4)</th>
                        <th>(5)</th>
                        <th>(6)</th>
                        <th>(7)</th>
                        <th>(8)</th>
                        <th>(9)</th>
                        <th>(10)</th>
                        <th>(11)</th>
                        <th>(12)</th>
                        <th></th>
                    </tr>
                </thead>

                <thead className="t-head">
                    <tr className="t-head-tr3">
                        <th>I</th>
                        <th colSpan={13}>Cấu hình hiện tại</th>
                    </tr>
                </thead>

                <tbody className="t-body">
                    {
                        currentConfigRow.map((c: Config, i: number) => {
                            console.log("check: ", c)
                            return <tr>
                                <td>{i + 1}</td>
                                <td>
                                    <input id={currentPrefixId(i+1) + "col-1"} defaultValue={c.ipAddress} type="text" className="table-input big" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(i+1) + "col-2"} defaultValue={c.cpu} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(i+1) + "col-3"} defaultValue={c.ram} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(i+1) + "col-4"} defaultValue={c.hdd1} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(i+1) + "col-5"} defaultValue={c.hdd2} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(i+1) + "col-6"} defaultValue={c.hdd3} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(i+1) + "col-7"} defaultValue={c.totalGb} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(i+1) + "col-8"} defaultValue={c.os} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(i+1) + "col-9"} defaultValue={c.env} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(i+1) + "col-10"} defaultValue={c.version} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(i+1) + "col-11"} defaultValue={c.supervisor} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(i+1) + "col-12"} defaultValue={c.purpose} type="text" className="table-input big" />
                                </td>
                                <td>
                                    <Popconfirm
                                        placement="leftBottom"
                                        title={text}
                                        description={c.ipAddress}
                                        onConfirm={(e: any) => confirmDelete(0, i, c.ipAddress,e)}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <button className="del-row-btn">
                                            <DeleteOutlined style={{ color: "red" }} />
                                        </button>
                                    </Popconfirm>

                                </td>
                            </tr>
                        })
                    }

                </tbody>

                <thead className="t-head">
                    <tr className="t-head-tr3">
                        <th>I</th>
                        <th colSpan={13}>Cấu hình mới</th>
                    </tr>
                </thead>

                <tbody className="t-body">
                    {
                        newConfigRow.map((c: Config, i: number) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-1"} type="text" className="table-input big"/>
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-2"} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-3"} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-4"} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-5"} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-6"} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-7"} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-8"} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-9"} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-10"} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-11"} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-12"} type="text" className="table-input big" />
                                </td>
                                <td>
                                    <Popconfirm
                                        placement="leftBottom"
                                        title={text}
                                        description={c.ipAddress}
                                        // onConfirm={() => confirmDelete(1, c.id, c.ipAddress)}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <button className="del-row-btn">
                                            <DeleteOutlined style={{ color: "red" }} />
                                        </button>
                                    </Popconfirm>

                                </td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </>
    )
}

export default ConfigTable