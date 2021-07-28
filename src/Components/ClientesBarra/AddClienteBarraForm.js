import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Form, Input, notification, Select, TimePicker, InputNumber } from "antd";
import { addClienteBarraAPi } from "../../Api/clientesBarra";
import { UserOutlined, DollarOutlined } from '@ant-design/icons';
import moment from "moment";


export default function EditClieBarraForm(props) {
    const { clieBarra, setIsVisibleModal } = props;
    const [ClieBarraData, setClieBarraData] = useState({})

    const [inputs, setInputs] = useState({

        codigo: "",
        nombreCliente: "",
        nombreMesa: "",
        montoPago: 0,
        restaurante: "",
        horaEntrada: "",
        horaSalida: "",
        duracionBarra: "",
        pedido: "",
        precio: 0,
        numeroSilla: "",
        pedidosPrevios: "",
        estadoCuenta: ""

    });

    const changeForm = e => {

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };



    const show = (e) => {

        e.preventDefault();

        const result = addClienteBarraAPi(inputs);
        setIsVisibleModal(false);

    }

    useEffect(() => {
        if (clieBarra) {
            setClieBarraData(clieBarra)
        } else {
            setClieBarraData({});
        }
    }, [clieBarra])

    const processData = e => {
        e.preventDefault();
        const { codigo, nombreCliente, nombreMesa, montoPagto, restaurante, horaEntrada, horaSalida, duracionBarra, pedido, precio, numeroSilla, estadoCuenta } = ClieBarraData;

        // if (!codigo || !nombreCliente || !nombreMesa || !montoPagto || !restaurante || !horaEntrada || !horaSalida || !duracionBarra || !pedido || !precio || !numeroSilla || !estadoCuenta) {
        //     openNotification('bottomRight', "Por favor rellene todos los espacios", "error");
        //     return;
        // } else {
        //     addCliente()
        // }

        addCliente();

    }

    const addCliente = () => {
        addClienteBarraAPi(ClieBarraData).then(response => {
            openNotification('bottomRight', response.message, "success")

            setIsVisibleModal(false);
            setClieBarraData({});
        }).catch(() => {
            openNotification('bottomRight', "Error del servidor", "error")
        })

    }

    const openNotification = (placement, message, type) => {
        notification[type]({
            message: message,
            placement,
        });
    };

    return (
        <div>
            <AddForm
                inputs={inputs}
                setClieBarraData={setClieBarraData}
                clieBarra={clieBarra}
                processData={processData}
                changeForm={changeForm}
                show={show}
            />
        </div>
    )
}




function AddForm(props) {
    const { inputs, setClieBarraData, clieBarra, processData, changeForm, show } = props;

    return (
        <>
            <Form className="form-edit" onChange={changeForm}>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <input
                                placeholder="Código"
                                className="form-control"
                                name="codigo"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <input
                                placeholder="Nombre de Cliente"
                                className="form-control"
                                name="nombreCliente"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <input
                                placeholder="Nombre de Mesa"
                                className="form-control"
                                name="nombreMesa"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Monto de Pago"
                                style={{ width: "100%" }}
                                name="montoPago"
                            />

                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            {/* <TimePicker
                                format="h:mm A"
                                placeholder="Seleccione Hora de Entrada"
                                use12Hours
                                minuteStep={10}
                                style={{ width: "100%" }}
                                name="horaEntrada"
                                onChange={(e, value) =>
                                    setClieBarraData({
                                        ...inputs,
                                        horaEntrada: moment(value, "h:mm A").toISOString()
                                    })}
                            /> */}
                            <input type="time" style={{ width: "100%" }}
                                // onChange={(e, value) =>
                                //     setClieBarraData({
                                //         ...inputs,
                                //         horaEntrada: moment(value, "h:mm A").toISOString()
                                //     })}
                                name="horaEntrada"

                            />

                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <input type="time" style={{ width: "100%" }}
                                // onChange={(e, value) =>
                                //     setClieBarraData({
                                //         ...inputs,
                                //         horaSalida: moment(value, "h:mm A").toISOString()
                                //     })}
                                name="horaSalida"

                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <input
                                placeholder="Duracion Barra"
                                className="form-control"
                                name="duracionBarra"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <input
                                placeholder="Pedido"
                                className="form-control"
                                name="pedido"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <input
                                type="number"
                                placeholder="Precio"
                                className="form-control"
                                name="precio"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <input
                                placeholder="Número de Silla"
                                className="form-control"
                                name="numeroSilla"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="btn-submit" onClick={show} style={{ width: "100%" }}>
                                Agregar Cliente en Barra
                            </Button>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <input
                                placeholder="Estado Cuenta"
                                className="form-control"
                                name="estadoCuenta"
                            />
                        </Form.Item>
                    </Col>
                </Row>


            </Form>
        </>
    )
}