import { DeleteOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { message, Popconfirm } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import "./style.css"
import { ProductImport } from "./types";

function Table(props: any) {
    const confirmDelTitle = 'Xác nhận xóa';
    function desMessConfirm(row: number) {
        return `Hàng thứ ${row}`
    }

    const confirmDelete = (tipe: any, rowId: any, rowName: any) => {
        deleteRow(tipe, rowId)
    };

    const [currentIdIndex1, setCurrentIdIndex1] = useState(0)
    const [currentIdIndex2, setCurrentIdIndex2] = useState(0)
    const [newIdIndex, setNewIdIndex] = useState(0)
    const [currentConfigRow1, setCurrentConfigRow1] = useState([] as ProductImport[])
    const [currentConfigRow2, setCurrentConfigRow2] = useState([] as ProductImport[])
    const [newConfigRow, setNewConfigRow] = useState([] as ProductImport[])

    function currentPrefixId(tipe: any, configId: any) {
        switch (tipe) {
            case 0:
                return "current-1-row-" + configId
            case 1:
                return "current-2-row-" + configId
            default:
                return ""
        }
    }

    function newPrefixId(configId: any) {
        return "new-row-" + configId
    }

    useEffect(() => {
        console.log("Final current 1: ", currentConfigRow1)
        console.log("Final current 2: ", currentConfigRow2)
        console.log("Final new: ", newConfigRow)

    }, [currentConfigRow1, currentConfigRow2, newConfigRow])

    function addConfig(tipe: any) {
        switch (tipe) {
            case "01":
                var o = {
                    id: currentIdIndex1 + 1
                } as ProductImport
                currentConfigRow1.push(o)
                setCurrentIdIndex1(currentIdIndex1 + 1)
                setCurrentConfigRow1(Object.assign([], currentConfigRow1))
                break
            case "02":
                var o = {
                    id: currentIdIndex2 + 1
                } as ProductImport
                currentConfigRow2.push(o)
                setCurrentIdIndex2(currentIdIndex2 + 1)
                setCurrentConfigRow2(Object.assign([], currentConfigRow2))
                break
            case "1":
                var o = {
                    id: newIdIndex + 1
                } as ProductImport
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
        var deleted = target.filter((c: ProductImport) => {
            return c.id == rowId
        })
        var newArr = target.filter((c: ProductImport) => {
            return c.id != rowId
        })
        switch (tipe) {
            case "01":
                setCurrentConfigRow1(newArr)
                message.info(`Xóa hàng: ${deleted[0].name}`);
                break
            case "02":
                setCurrentConfigRow2(newArr)
                message.info(`Xóa hàng: ${deleted[0].name}`);
                break
            case "1":
                setNewConfigRow(newArr)
                message.info(`Xóa hàng: ${deleted[0].name}`);
                break
            default:
                console.log("delete error")
        }

    }

    function fill(tipe: any) {
        switch (tipe) {
            case "01":
                var resultArr = [] as ProductImport[]
                currentConfigRow1.forEach((c: ProductImport, i: number) => {
                    var valueArray = [] as string[]
                    for (let j = 1; j <= 9; j++) {
                        var inputId = currentPrefixId(0, c.id) + "col-" + j
                        var value = (document.getElementById(inputId) as HTMLInputElement).value
                        if (value != undefined && value != null) {
                            valueArray.push(value)
                        } else {
                            valueArray.push("")
                        }
                    }

                    var o = {} as ProductImport
                    o.id = c.id
                    o.name = valueArray[0]
                    o.code = valueArray[1]
                    o.unit = valueArray[2]
                    o.amount = Number(valueArray[3])
                    o.unitPrice = Number(valueArray[4])
                    o.totalPrice = Number(valueArray[5])
                    o.declarationNumber = Number(valueArray[6])
                    o.date = valueArray[7]
                    o.note = valueArray[8]

                    resultArr.push(o)
                })
                return resultArr
            case "02":
                var resultArr = [] as ProductImport[]
                currentConfigRow2.forEach((c: ProductImport, i: number) => {
                    var valueArray = [] as string[]
                    for (let j = 1; j <= 9; j++) {
                        var inputId = currentPrefixId(1, c.id) + "col-" + j
                        var value = (document.getElementById(inputId) as HTMLInputElement).value
                        if (value != undefined && value != null) {
                            valueArray.push(value)
                        } else {
                            valueArray.push("")
                        }
                    }

                    var o = {} as ProductImport
                    o.id = c.id
                    o.name = valueArray[0]
                    o.code = valueArray[1]
                    o.unit = valueArray[2]
                    o.amount = Number(valueArray[3])
                    o.unitPrice = Number(valueArray[4])
                    o.totalPrice = Number(valueArray[5])
                    o.declarationNumber = Number(valueArray[6])
                    o.date = valueArray[7]
                    o.note = valueArray[8]

                    resultArr.push(o)
                })
                return resultArr
            case "1":
                var resultArr = [] as ProductImport[]
                newConfigRow.forEach((c: ProductImport, i: number) => {
                    var valueArray = [] as string[]
                    for (let j = 1; j <= 9; j++) {
                        var inputId = newPrefixId(c.id) + "col-" + j
                        var value = (document.getElementById(inputId) as HTMLInputElement).value
                        if (value != undefined && value != null) {
                            valueArray.push(value)
                        } else {
                            valueArray.push("")
                        }
                    }

                    var o = {} as ProductImport
                    o.id = c.id
                    o.name = valueArray[0]
                    o.code = valueArray[1]
                    o.unit = valueArray[2]
                    o.amount = Number(valueArray[3])
                    o.unitPrice = Number(valueArray[4])
                    o.totalPrice = Number(valueArray[5])
                    o.declarationNumber = Number(valueArray[6])
                    o.date = valueArray[7]
                    o.note = valueArray[8]

                    resultArr.push(o)
                })
                return resultArr
            default:
                console.log("something wrong??")
        }
    }

    function fillData(tipe: any) {
        switch (tipe) {
            case "01":
                var resultArr = [] as ProductImport[]
                currentConfigRow1.forEach((c: ProductImport, i: number) => {
                    var valueArray = [] as string[]
                    for (let j = 1; j <= 9; j++) {
                        var inputId = currentPrefixId(0, c.id) + "col-" + j
                        var value = (document.getElementById(inputId) as HTMLInputElement).value
                        if (value != undefined && value != null) {
                            valueArray.push(value)
                        } else {
                            valueArray.push("")
                        }
                    }

                    var o = {} as ProductImport
                    o.id = c.id
                    o.name = valueArray[0]
                    o.code = valueArray[1]
                    o.unit = valueArray[2]
                    o.amount = Number(valueArray[3])
                    o.unitPrice = Number(valueArray[4])
                    o.totalPrice = Number(valueArray[5])
                    o.declarationNumber = Number(valueArray[6])
                    o.date = valueArray[7]
                    o.note = valueArray[8]

                    resultArr.push(o)
                })
                setCurrentConfigRow1(resultArr)
                break
            case "02":
                var resultArr = [] as ProductImport[]
                currentConfigRow1.forEach((c: ProductImport, i: number) => {
                    var valueArray = [] as string[]
                    for (let j = 1; j <= 9; j++) {
                        var inputId = currentPrefixId(0, c.id) + "col-" + j
                        var value = (document.getElementById(inputId) as HTMLInputElement).value
                        if (value != undefined && value != null) {
                            valueArray.push(value)
                        } else {
                            valueArray.push("")
                        }
                    }

                    var o = {} as ProductImport
                    o.id = c.id
                    o.name = valueArray[0]
                    o.code = valueArray[1]
                    o.unit = valueArray[2]
                    o.amount = Number(valueArray[3])
                    o.unitPrice = Number(valueArray[4])
                    o.totalPrice = Number(valueArray[5])
                    o.declarationNumber = Number(valueArray[6])
                    o.date = valueArray[7]
                    o.note = valueArray[8]

                    resultArr.push(o)
                })
                setCurrentConfigRow2(resultArr)
                break
            case "1":
                var resultArr = [] as ProductImport[]
                newConfigRow.forEach((c: ProductImport, i: number) => {
                    var valueArray = [] as string[]
                    for (let j = 1; j <= 9; j++) {
                        var inputId = newPrefixId(c.id) + "col-" + j
                        var value = (document.getElementById(inputId) as HTMLInputElement).value
                        if (value != undefined && value != null) {
                            valueArray.push(value)
                        } else {
                            valueArray.push("")
                        }
                    }

                    var o = {} as ProductImport
                    o.id = c.id
                    o.name = valueArray[0]
                    o.code = valueArray[1]
                    o.unit = valueArray[2]
                    o.amount = Number(valueArray[3])
                    o.unitPrice = Number(valueArray[4])
                    o.totalPrice = Number(valueArray[5])
                    o.declarationNumber = Number(valueArray[6])
                    o.date = valueArray[7]
                    o.note = valueArray[8]

                    resultArr.push(o)
                })
                setNewConfigRow(resultArr)
                break
            default:
                console.log("something wrong??")
        }
    }

    function onSubmit() {
        fillData("01")
        fillData("02")
        fillData("1")
    }

    return (
        <>
            <div className="buttons">
                <button className="add-btn" onClick={() => addConfig("01")}>Thêm sản phẩm tái chế</button>
                <button className="add-btn" onClick={() => addConfig("02")}>Thêm sản phẩm xử lý</button>
                <button className="add-btn" onClick={() => addConfig("1")}>Thêm sản phẩm hàng hóa khác</button>
                <button className="add-btn" onClick={() => onSubmit()}>SUBMIT</button>
            </div>
            <table className="table">
                <thead className="t-head">
                    <tr className="t-head-tr">
                        <th>TT</th>
                        <th>Danh mục sản phẩm</th>
                        <th>Mã sản phẩm</th>
                        <th>Đơn vị tính</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Giá trị nhập</th>
                        <th>Tờ khai số</th>
                        <th>Ngày đăng ký</th>
                        <th>Ghi chú</th>
                        <th>Lựa chọn</th>
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
                        <th>(7)=(5)x(6)</th>
                        <th>(8)</th>
                        <th>(9)</th>
                        <th>(10)</th>
                        <th></th>
                    </tr>
                </thead>

                <thead className="t-head">
                    <tr className="t-head-tr3">
                        <th>I</th>
                        <th colSpan={10}>Danh mục sản phẩm hàng hóa</th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <thead className="t-head">
                    <tr className="t-head-tr3-1">
                        <th>1</th>
                        <th colSpan={9}>Sản phẩm, bao bì phải được tái chế</th>
                        <th>
                            <button className="addrow-btn" onClick={() => addConfig("01")}>
                                Thêm hàng
                            </button>
                        </th>
                    </tr>
                </thead>

                <tbody className="t-body">
                    {
                        currentConfigRow1.map((c: ProductImport, i: number) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td className="d">
                                    <TextArea id={currentPrefixId(0, c.id) + "col-1"} key={c.name} defaultValue={c.name} className="table-input big" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(0, c.id) + "col-2"} key={c.code} defaultValue={c.code} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(0, c.id) + "col-3"} key={c.unit} defaultValue={c.unit} type="text" className="table-input medium medium-max" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(0, c.id) + "col-4"} key={c.amount} defaultValue={c.amount} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(0, c.id) + "col-5"} key={c.unitPrice} defaultValue={c.unitPrice} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(0, c.id) + "col-6"} key={c.totalPrice} defaultValue={c.totalPrice} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(0, c.id) + "col-7"} key={c.declarationNumber} defaultValue={c.declarationNumber} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(0, c.id) + "col-8"} key={c.date} defaultValue={c.date} type="text" className="table-input medium" />
                                </td>
                                <td className="d">
                                    <TextArea id={currentPrefixId(0, c.id) + "col-9"} key={c.note} defaultValue={c.note} className="table-input big" />
                                </td>
                                <td>
                                    <Popconfirm
                                        placement="leftBottom"
                                        title={confirmDelTitle}
                                        description={desMessConfirm(i + 1)}
                                        onConfirm={() => confirmDelete("01", c.id, c.name)}
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
                    <tr className="t-head-tr3-2">
                        <th>2</th>
                        <th colSpan={9}>Sản phẩm, bao bì phải được xử lý</th>
                        <th>
                            <button className="addrow-btn" onClick={() => addConfig("02")}>
                                Thêm hàng
                            </button>
                        </th>
                    </tr>
                </thead>

                <tbody className="t-body">
                    {
                        currentConfigRow2.map((c: ProductImport, i: number) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td className="d">
                                    <TextArea id={currentPrefixId(1, c.id) + "col-1"} key={c.name} defaultValue={c.name} className="table-input big" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(1, c.id) + "col-2"} key={c.code} defaultValue={c.code} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(1, c.id) + "col-3"} key={c.unit} defaultValue={c.unit} type="text" className="table-input medium medium-max" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(1, c.id) + "col-4"} key={c.amount} defaultValue={c.amount} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(1, c.id) + "col-5"} key={c.unitPrice} defaultValue={c.unitPrice} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(1, c.id) + "col-6"} key={c.totalPrice} defaultValue={c.totalPrice} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(1, c.id) + "col-7"} key={c.declarationNumber} defaultValue={c.declarationNumber} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={currentPrefixId(1, c.id) + "col-8"} key={c.date} defaultValue={c.date} type="text" className="table-input medium" />
                                </td>
                                <td className="d">
                                    <TextArea id={currentPrefixId(1, c.id) + "col-9"} key={c.note} defaultValue={c.note} className="table-input big" />
                                </td>
                                <td>
                                    <Popconfirm
                                        placement="leftBottom"
                                        title={confirmDelTitle}
                                        description={desMessConfirm(i + 1)}
                                        onConfirm={() => confirmDelete("02", c.id, c.name)}
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
                        <th colSpan={9}>Sản phẩm, hàng hóa khác của nhà sản xuất</th>
                        <th>
                            <button className="addrow-btn" onClick={() => addConfig("1")}>
                                Thêm hàng
                            </button>
                        </th>
                    </tr>
                </thead>

                <tbody className="t-body">
                    {
                        newConfigRow.map((c: ProductImport, i: number) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td className="d">
                                    <TextArea id={newPrefixId(c.id) + "col-1"} key={c.name} defaultValue={c.name} className="table-input big" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-2"} key={c.code} defaultValue={c.code} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-3"} key={c.unit} defaultValue={c.unit} type="text" className="table-input medium medium-max" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-4"} key={c.amount} defaultValue={c.amount} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-5"} key={c.unitPrice} defaultValue={c.unitPrice} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-6"} key={c.totalPrice} defaultValue={c.totalPrice} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-7"} key={c.declarationNumber} defaultValue={c.declarationNumber} type="text" className="table-input medium" />
                                </td>
                                <td>
                                    <input id={newPrefixId(c.id) + "col-8"} key={c.date} defaultValue={c.date} type="text" className="table-input medium" />
                                </td>
                                <td className="d">
                                    <TextArea id={newPrefixId(c.id) + "col-9"} key={c.note} defaultValue={c.note} className="table-input big" />
                                </td>
                                <td>
                                    <Popconfirm
                                        placement="leftBottom"
                                        title={confirmDelTitle}
                                        description={desMessConfirm(i + 1)}
                                        onConfirm={() => confirmDelete("1", c.id, c.name)}
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
                        <th colSpan={11}>Tổng cộng</th>
                    </tr>
                </thead>

            </table>
        </>
    )
}

export default Table