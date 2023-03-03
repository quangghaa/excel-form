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

    const confirmDelete = (tipe: any, rowId: any, rowName: any) => {
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
                var newArr = currentConfigRow.filter((c: Config) => {
                    return c.id != rowId
                })
                setCurrentConfigRow(newArr)
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
                            return <tr>
                                <td>{i + 1}</td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-1"} key={c.ipAddress} defaultValue={c.ipAddress} type="text" className="table-input big" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-2"} key={c.cpu} defaultValue={c.cpu} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-3"} key={c.ram} defaultValue={c.ram} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-4"} key={c.hdd1} defaultValue={c.hdd1} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-5"} key={c.hdd2} defaultValue={c.hdd2} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-6"} key={c.hdd3} defaultValue={c.hdd3} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-7"} key={c.totalGb} defaultValue={c.totalGb} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-8"} key={c.os} defaultValue={c.os} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-9"} key={c.env} defaultValue={c.env} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-10"} key={c.version} defaultValue={c.version} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-11"} key={c.supervisor} defaultValue={c.supervisor} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-12"} key={c.purpose} defaultValue={c.purpose} type="text" className="table-input big" />
                                </td>
                                <td>
                                    <Popconfirm
                                        placement="leftBottom"
                                        title={text}
                                        description={c.ipAddress}
                                        onConfirm={() => confirmDelete(0, c.id, c.ipAddress)}
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
                                    <input id={newPrefixId(c.id) + "col-1"} key={c.ipAddress} defaultValue={c.ipAddress} type="text" className="table-input big" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-2"} key={c.cpu} defaultValue={c.cpu} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-3"} key={c.ram} defaultValue={c.ram} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-4"} key={c.hdd1} defaultValue={c.hdd1} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-5"} key={c.hdd2} defaultValue={c.hdd2} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-6"} key={c.hdd3} defaultValue={c.hdd3} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-7"} key={c.totalGb} defaultValue={c.totalGb} type="text" className="table-input small" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-8"} key={c.os} defaultValue={c.os} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-9"} key={c.env} defaultValue={c.env} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-10"} key={c.version} defaultValue={c.version} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-11"} key={c.supervisor} defaultValue={c.supervisor} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-12"} key={c.purpose} defaultValue={c.purpose} type="text" className="table-input big" />
                                </td>
                                <td>
                                    <Popconfirm
                                        placement="leftBottom"
                                        title={text}
                                        description={c.ipAddress}
                                        onConfirm={() => confirmDelete(1, c.id, c.ipAddress)}
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