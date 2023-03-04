import { DeleteOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { message, Popconfirm } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import "./style.css"
import { Product } from "./types";

// interface Config {
//     id: number,
//     ipAddress: string,
//     cpu: number,
//     ram: number,
//     hdd1: number,
//     hdd2: number,
//     hdd3: number,
//     totalGb: number,
//     os: string,
//     env: string,
//     version: string,
//     supervisor: string,
//     purpose: string
// }

function Table(props: any) {
    const confirmDelTitle = 'Xác nhận xóa';
    function desMessConfirm(row: number) {
        return `Hàng thứ ${row}`
    }

    const confirmDelete = (tipe: any, rowId: any, rowName: any) => {
        deleteRow(tipe, rowId)
    };

    const [currentIdIndex, setCurrentIdIndex] = useState(0)
    const [newIdIndex, setNewIdIndex] = useState(0)
    const [currentConfigRow, setCurrentConfigRow] = useState([] as Product[])
    const [newConfigRow, setNewConfigRow] = useState([] as Product[])

    function currentPrefixId(configId: any) {
        return "current-row-" + configId
    }

    function newPrefixId(configId: any) {
        return "new-row-" + configId
    }

    useEffect(() => {
        console.log("Final current: ", currentConfigRow)
        console.log("Final new: ", newConfigRow)

    }, [currentConfigRow, newConfigRow])

    function addConfig(tipe: any) {
        switch (tipe) {
            case 0:
                var o = {
                    id: currentIdIndex + 1
                } as Product
                currentConfigRow.push(o)
                setCurrentIdIndex(currentIdIndex + 1)
                setCurrentConfigRow(Object.assign([], currentConfigRow))
                break
            case 1:
                var o = {
                    id: newIdIndex + 1
                } as Product
                newConfigRow.push(o)
                setNewIdIndex(newIdIndex + 1)
                setNewConfigRow(Object.assign([], newConfigRow))
                break
            default:
                console.log("Something wrong")
        }
    }

    function deleteRow(tipe: any, rowId: any) {
        var target = fill(tipe)
        if (target == undefined) {
            console.log("target undefined")
            return
        }
        var deleted = target.filter((c: Product) => {
            return c.id == rowId
        })
        var newArr = target.filter((c: Product) => {
            return c.id != rowId
        })
        switch (tipe) {
            case 0:
                setCurrentConfigRow(newArr)
                message.info(`Xóa hàng: ${deleted[0].name}`);
                break
            case 1:
                setNewConfigRow(newArr)
                message.info(`Xóa hàng: ${deleted[0].name}`);
                break
            default:
                console.log("delete error")
        }

    }

    function fill(tipe: any) {
        switch (tipe) {
            case 0:
                var resultArr = [] as Product[]
                currentConfigRow.forEach((c: Product, i: number) => {
                    var valueArray = [] as string[]
                    for (let j = 1; j <= 14; j++) {
                        var inputId = currentPrefixId(c.id) + "col-" + j
                        var value = (document.getElementById(inputId) as HTMLInputElement).value
                        if (value != undefined && value != null) {
                            valueArray.push(value)
                        } else {
                            valueArray.push("")
                        }
                    }

                    var o = {} as Product
                    o.id = c.id
                    o.name = valueArray[0]
                    o.code = valueArray[1]
                    o.format = valueArray[2]
                    o.capacity = valueArray[3]
                    o.unit = valueArray[4]
                    o.classify = valueArray[5]
                    o.var7 = Number(valueArray[6])
                    o.var8 = Number(valueArray[7])
                    o.var9 = Number(valueArray[8])
                    o.var10 = Number(valueArray[9])
                    o.var11 = Number(valueArray[10])
                    o.var12 = Number(valueArray[11])
                    o.var13 = Number(valueArray[12])
                    o.var14 = Number(valueArray[13])

                    resultArr.push(o)
                })
                return resultArr
                // setCurrentConfigRow(resultArr)
                break
            case 1:
                var resultArr = [] as Product[]
                newConfigRow.forEach((c: Product, i: number) => {
                    var valueArray = [] as string[]
                    for (let j = 1; j <= 14; j++) {
                        var inputId = newPrefixId(c.id) + "col-" + j
                        var value = (document.getElementById(inputId) as HTMLInputElement).value
                        if (value != undefined && value != null) {
                            valueArray.push(value)
                        } else {
                            valueArray.push("")
                        }
                    }

                    var o = {} as Product
                    o.id = c.id
                    o.name = valueArray[0]
                    o.code = valueArray[1]
                    o.format = valueArray[2]
                    o.capacity = valueArray[3]
                    o.unit = valueArray[4]
                    o.classify = valueArray[5]
                    o.var7 = Number(valueArray[6])
                    o.var8 = Number(valueArray[7])
                    o.var9 = Number(valueArray[8])
                    o.var10 = Number(valueArray[9])
                    o.var11 = Number(valueArray[10])
                    o.var12 = Number(valueArray[11])
                    o.var13 = Number(valueArray[12])
                    o.var14 = Number(valueArray[13])

                    resultArr.push(o)
                })
                // setNewConfigRow(resultArr)
                return resultArr
                break
            default:
                console.log("something wrong??")
        }
    }

    function fillData(tipe: any) {
        switch (tipe) {
            case 0:
                var resultArr = [] as Product[]
                currentConfigRow.forEach((c: Product, i: number) => {
                    var valueArray = [] as string[]
                    for (let j = 1; j <= 14; j++) {
                        var inputId = currentPrefixId(c.id) + "col-" + j
                        var value = (document.getElementById(inputId) as HTMLInputElement).value
                        if (value != undefined && value != null) {
                            valueArray.push(value)
                        } else {
                            valueArray.push("")
                        }
                    }

                    var o = {} as Product
                    o.id = c.id
                    o.name = valueArray[0]
                    o.code = valueArray[1]
                    o.format = valueArray[2]
                    o.capacity = valueArray[3]
                    o.unit = valueArray[4]
                    o.classify = valueArray[5]
                    o.var7 = Number(valueArray[6])
                    o.var8 = Number(valueArray[7])
                    o.var9 = Number(valueArray[8])
                    o.var10 = Number(valueArray[9])
                    o.var11 = Number(valueArray[10])
                    o.var12 = Number(valueArray[11])
                    o.var13 = Number(valueArray[12])
                    o.var14 = Number(valueArray[13])

                    resultArr.push(o)
                })
                setCurrentConfigRow(resultArr)
                break
            case 1:
                var resultArr = [] as Product[]
                newConfigRow.forEach((c: Product, i: number) => {
                    var valueArray = [] as string[]
                    for (let j = 1; j <= 14; j++) {
                        var inputId = newPrefixId(c.id) + "col-" + j
                        var value = (document.getElementById(inputId) as HTMLInputElement).value
                        if (value != undefined && value != null) {
                            valueArray.push(value)
                        } else {
                            valueArray.push("")
                        }
                    }

                    var o = {} as Product
                    o.id = c.id
                    o.name = valueArray[0]
                    o.code = valueArray[1]
                    o.format = valueArray[2]
                    o.capacity = valueArray[3]
                    o.unit = valueArray[4]
                    o.classify = valueArray[5]
                    o.var7 = Number(valueArray[6])
                    o.var8 = Number(valueArray[7])
                    o.var9 = Number(valueArray[8])
                    o.var10 = Number(valueArray[9])
                    o.var11 = Number(valueArray[10])
                    o.var12 = Number(valueArray[11])
                    o.var13 = Number(valueArray[12])
                    o.var14 = Number(valueArray[13])

                    resultArr.push(o)
                })
                setNewConfigRow(resultArr)
                break
            default:
                console.log("something wrong??")
        }
    }

    function onSubmit() {
        fillData(0)
        fillData(1)
    }

    return (
        <>
            <div className="buttons">
                <button className="add-btn" onClick={() => addConfig(0)}>Thêm sản phẩm xuất</button>
                <button className="add-btn" onClick={() => addConfig(1)}>Thêm sản phẩm nhập</button>
                <button className="add-btn" onClick={() => onSubmit()}>SUBMIT</button>
            </div>
            <table className="table">
                <thead className="t-head">
                    <tr className="t-head-tr">
                        <th>TT</th>
                        <th>Danh mục sản phẩm</th>
                        <th>Mã sản phẩm</th>
                        <th>Định dạng</th>
                        <th>Dung tích</th>
                        <th>Đơn vị tính</th>
                        <th>Phân loại</th>
                        <th colSpan={3}>Số tiền đóng góp tài chính năm N</th>
                        <th colSpan={4}>Số tiền chênh lệch giữa thực tế và kê khai của năm N-1</th>
                        <th>Tổng số tiền phải đóng góp</th>
                        <th>Lựa chọn</th>
                    </tr>
                </thead>
                <thead className="t-head">
                    <tr className="t-head-tr2">
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Số lượng thực tế năm N-1</th>
                        <th>Mức đóng góp năm N</th>
                        <th>Số tiền</th>
                        <th>Số lượng kê khai năm N-1</th>
                        <th>Chênh lệch số lượng thực tế và kê khai năm N-1</th>
                        <th>Mức đóng góp năm N-1</th>
                        <th>Số tiền</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <thead className="t-head">
                    <tr className="t-head-tr2">
                        <th>(1)</th>
                        <th>(2)</th>
                        <th>(3)</th>
                        <th>(4)</th>
                        <th>(5)</th>
                        <th>(6)</th>
                        <th></th>
                        <th>(7)</th>
                        <th>(8)</th>
                        <th>(9)=(7)x(8)</th>
                        <th>(10)</th>
                        <th>(11)=(7)-(10)</th>
                        <th>(12)</th>
                        <th>(13)=(11)x(12)</th>
                        <th>(14)=(9)+(13)</th>
                        <th></th>
                    </tr>
                </thead>

                <thead className="t-head">
                    <tr className="t-head-tr3">
                        <th>I</th>
                        <th colSpan={14}>Sản phẩm, hàng hóa sản xuất và đưa ra thị trường trong nước</th>
                        <th>
                            <button className="addrow-btn" onClick={() => addConfig(0)}>
                                Thêm hàng
                            </button>
                        </th>
                    </tr>
                </thead>

                <tbody className="t-body">
                    {
                        currentConfigRow.map((c: Product, i: number) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td className="d">
                                <TextArea id={currentPrefixId(c.id) + "col-1"} key={c.name} defaultValue={c.name} className="table-input big" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-2"} key={c.code} defaultValue={c.code} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-3"} key={c.format} defaultValue={c.format} type="text" className="table-input medium medium-max" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-4"} key={c.capacity} defaultValue={c.capacity} type="text" className="table-input medium medium-max" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-5"} key={c.unit} defaultValue={c.unit} type="text" className="table-input medium medium-max" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-6"} key={c.classify} defaultValue={c.classify} type="text" className="table-input medium medium-max" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-7"} key={c.var7} defaultValue={c.var7} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-8"} key={c.var8} defaultValue={c.var8} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-9"} key={c.var9} defaultValue={c.var9} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-10"} key={c.var10} defaultValue={c.var10} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-11"} key={c.var11} defaultValue={c.var11} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-12"} key={c.var12} defaultValue={c.var12} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-13"} key={c.var13} defaultValue={c.var13} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(c.id) + "col-14"} key={c.var14} defaultValue={c.var14} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <Popconfirm
                                        placement="leftBottom"
                                        title={confirmDelTitle}
                                        description={desMessConfirm(i + 1)}
                                        onConfirm={() => confirmDelete(0, c.id, c.name)}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <button className="delrow-btn">
                                            Xóa hàng
                                        </button>
                                    </Popconfirm>

                                </td>
                            </tr>
                        })
                    }

                </tbody>

                <thead className="t-head">
                    <tr className="t-head-tr3">
                        <th>II</th>
                        <th colSpan={14}>Sản phẩm, hàng hóa nhập khẩu</th>
                        <th>
                            <button className="addrow-btn" onClick={() => addConfig(1)}>
                                Thêm hàng
                            </button>
                        </th>
                    </tr>
                </thead>

                <tbody className="t-body">
                    {
                        newConfigRow.map((c: Product, i: number) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td className="d">
                                <TextArea id={newPrefixId(c.id) + "col-1"} key={c.name} defaultValue={c.name} className="table-input big" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-2"} key={c.code} defaultValue={c.code} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-3"} key={c.format} defaultValue={c.format} type="text" className="table-input medium medium-max" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-4"} key={c.capacity} defaultValue={c.capacity} type="text" className="table-input medium medium-max" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-5"} key={c.unit} defaultValue={c.unit} type="text" className="table-input medium medium-max" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-6"} key={c.classify} defaultValue={c.classify} type="text" className="table-input medium medium-max" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-7"} key={c.var7} defaultValue={c.var7} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-8"} key={c.var8} defaultValue={c.var8} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-9"} key={c.var9} defaultValue={c.var9} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-10"} key={c.var10} defaultValue={c.var10} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-11"} key={c.var11} defaultValue={c.var11} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-12"} key={c.var12} defaultValue={c.var12} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-13"} key={c.var13} defaultValue={c.var13} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-14"} key={c.var14} defaultValue={c.var14} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <Popconfirm
                                        placement="leftBottom"
                                        title={confirmDelTitle}
                                        description={desMessConfirm(i + 1)}
                                        onConfirm={() => confirmDelete(1, c.id, c.name)}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <button className="delrow-btn">
                                            Xóa hàng
                                        </button>
                                    </Popconfirm>

                                </td>
                            </tr>
                        })
                    }
                </tbody>

                <thead className="t-head">
                    <tr className="t-head-tr-last">
                        <th colSpan={15}>Tổng cộng (I)+(II)</th>
                        <th>
                            vnd
                        </th>
                    </tr>
                </thead>

            </table>
        </>
    )
}

export default Table